import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        console.log("kelgan body: ", body);

        const prompt = body.prompt;
        if (!prompt) {
            return new NextResponse("Prompt is required", { status: 400 });
        }

        const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                model: "llama3-8b-8192", // eng samarali bepul model
                messages: [
                    {
                        role: "system",
                        content:
                            `
                            Sen tajribali IT mentorsan. Senga dasturlashni o‘rganayotgan o‘quvchi savollar beradi.
                            Javoblar quyidagi formatda bo‘lishi shart:

                            1. O‘quvchining savoliga tushunarli, oddiy tilda **o‘zbekcha** izoh ber.
                            2. Agar kerak bo‘lsa **kod namunasi** bilan tushuntir.
                            3. Har doim **HTML formatda qaytar**, shunda natija sahifada tartibli ko‘rinadi.
                            4. Javob formatini <h2>, <p>, <ul>, <li>, <pre><code> kabi HTML teglarida qaytar. Agar kod namunasi beradigan bo‘lsang, har doim uni <pre><code className="language-js">...</code></pre> shaklida HTML formatda qaytar.

                            Masalan:
                            <h2>Map nima?</h2>
                            <p><code className="language-js">map()</code> bu array ustida ishlovchi metod bo‘lib...</p>

                            Foydalanuvchi hozir savol beradi.
                            ` ,
                    },
                    {
                        role: "user",
                        content: prompt,
                    },
                ],
                temperature: 0.7,
            }),
        });

        if (!res.ok) {
            const err = await res.json();
            console.error("Groq API Error:", err);
            return new NextResponse("Groq API Error", { status: res.status });
        }

        const data = await res.json();
        console.log("Groq javobi:", data.choices[0].message.content);

        return NextResponse.json({
            result: data.choices[0].message.content,
        });
    } catch (error) {
        console.error("[MENTOR_POST]", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}
