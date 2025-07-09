import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/app/admin/components/Sidebar"
import Header from "./components/Header"
import { Card } from "@/components/ui/card"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="bg-slate-200 dark:bg-zinc-800 w-full relative">
        <Header />
        <div className="h-[90vh] p-2 overflow-y-auto">
          <Card className="p-3">
            {children}
          </Card>
        </div>
      </main>
    </SidebarProvider>
  )
}