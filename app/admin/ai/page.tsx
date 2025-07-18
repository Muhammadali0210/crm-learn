"use client"

import { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@radix-ui/react-separator'
import { Loader2, Send } from 'lucide-react';
import hljs from "highlight.js"
import "highlight.js/styles/github-dark.css"

const Page = () => {
    const [message, setMessage] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [response, setResponse] = useState<string>("");
    const contentRef = useRef<HTMLDivElement>(null);

    const onSubmit = async () => {
        try {
            setLoading(true);
            const res: any = await fetch("/api/mentor", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ prompt: message })
            })
            setMessage("");
            const data = await res.json();
            setResponse(data.result || "Javob kelmadi!");
        } catch (error) {
            console.log("Hatolik yuz berdi", error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
    if (contentRef.current) {
      const codeBlocks = contentRef.current.querySelectorAll("pre code");
      codeBlocks.forEach((block) => {
        hljs.highlightElement(block as HTMLElement);
      });
    }
  }, [response]);

    return (
        <div className='w-full h-[80vh] relative bg-white dark:bg-sidebar p-3 rounded-lg border border-border'>
            <div className='border-b border-border px-3 py-4 absolute top-0 left-0 right-0 bg-white'>
                <h1 className='text-2xl font-bold'>Mentor</h1>
                <Separator className='bg-gray-400' />
            </div>

            <div className='h-full pt-[6vh] pb-[8vh] overflow-y-auto'>
                {loading ? (
                    <div className='w-full h-full flex items-center justify-center'>
                        <Loader2 className='animate-spin w-5 h-5' />
                    </div>
                ) : (
                    <div ref={contentRef} className="prose dark:prose-invert max-w-none prose-pre:bg-gray-100 dark:prose-pre:bg-zinc-800 prose-code:before:content-none prose-code:after:content-none">
                        <div dangerouslySetInnerHTML={{ __html: response }} />
                    </div>
                )}
            </div>

            <div className='h-[8vh] absolute z-40 bottom-0 left-0 right-0 border-t border-border p-3 bg-white'>
                <Input
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                    className='w-full h-full relative pr-12'
                />
                <Button onClick={onSubmit} size={"icon"} type='submit' className='absolute right-5 top-5'>
                    <Send className='w-5 h-5' />
                </Button>
            </div>
        </div>
    )
}

export default Page;
