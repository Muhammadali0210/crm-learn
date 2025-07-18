'use client'

import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Sidebar, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem } from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"
import { BookOpen, Bot, ChevronRight, CodeIcon, DroneIcon, Home, LucideIcon, Settings2, SquareTerminal, User2 } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function AppSidebar() {
  interface IItems {
    title: string
    url: string
    icon?: LucideIcon
    isActive?: boolean
    items?: {
      title: string
      url: string
    }[]
  };

  const navMain: IItems[] =  [
      {
        title: "Playground",
        url: "#",
        icon: SquareTerminal,
        isActive: true,
        items: [
          {
            title: "History",
            url: "#",
          },
          {
            title: "Starred",
            url: "#",
          },
          {
            title: "Settings",
            url: "#",
          },
        ],
      },
      {
        title: "Models",
        url: "#",
        icon: Bot,
        items: [
          {
            title: "Genesis",
            url: "#",
          },
          {
            title: "Explorer",
            url: "#",
          },
          {
            title: "Quantum",
            url: "#",
          },
        ],
      },
      {
        title: "Documentation",
        url: "#",
        icon: BookOpen,
        items: [
          {
            title: "Introduction",
            url: "#",
          },
          {
            title: "Get Started",
            url: "#",
          },
          {
            title: "Tutorials",
            url: "#",
          },
          {
            title: "Changelog",
            url: "#",
          },
        ],
      },
      {
        title: "Settings",
        url: "#",
        icon: Settings2,
        items: [
          {
            title: "General",
            url: "#",
          },
          {
            title: "Team",
            url: "#",
          },
          {
            title: "Billing",
            url: "#",
          },
          {
            title: "Limits",
            url: "#",
          },
        ],
      },
  ]
  const pathName = usePathname()
  return (
    <Sidebar className="h-[100vh]">
      <SidebarMenu className="p-2">
        <div className="flex items-center gap-2 mb-3 p-4">
          <CodeIcon />
          <h2 className="font-bold text-2xl">Logo</h2>
        </div>
        <div className="flex flex-col gap-2">
          <Link href={'/admin'}>
            <Button className={cn('w-full justify-start  cursor-pointer dark:text-white', pathName === '/admin' ? 'bg-primary' : 'bg-gray-500 dark:bg-gray-700')}>
              <Home />
              Dashboard
            </Button>
          </Link>
          <Link href={'/admin/users'}>
            <Button className={cn('w-full justify-start cursor-pointer dark:text-white', pathName === '/admin/users' ? 'bg-primary' : 'bg-gray-500 dark:bg-gray-700')}>
              <User2 />
              Users
            </Button>
          </Link>
          <Link href={'/admin/table'}>
            <Button className={cn('w-full justify-start cursor-pointer dark:text-white', pathName === '/admin/table' ? 'bg-primary' : 'bg-gray-500 dark:bg-gray-700')}>
              <User2 />
              Users table
            </Button>
          </Link>
          <Link href={'/admin/ai'}>
            <Button className={cn('w-full justify-start cursor-pointer dark:text-white', pathName === '/admin/ai' ? 'bg-primary' : 'bg-gray-500 dark:bg-gray-700')}>
              <DroneIcon />
              Mentor
            </Button>
          </Link>
        </div>

        {/* {navMain.map((item) => (
          <Collapsible
            key={item.title}
            asChild
            defaultOpen={item.isActive}
            className="group/collapsible"
          >
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton tooltip={item.title}>
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                  <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub>
                  {item.items?.map((subItem) => (
                    <SidebarMenuSubItem key={subItem.title}>
                      <SidebarMenuSubButton asChild>
                        <a href={subItem.url}>
                          <span>{subItem.title}</span>
                        </a>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        ))} */}
      </SidebarMenu>
    </Sidebar>
  )
}