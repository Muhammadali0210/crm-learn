import { ModeToggle } from '@/components/mode-toggle'
import { SidebarTrigger } from '@/components/ui/sidebar'
import React from 'react'

const Header = () => {
  return (
    <div className='w-full flex items-center justify-between h-[10vh] border-b border-border bg-sidebar px-5'>
        <SidebarTrigger />
        <ModeToggle />
    </div>
  )
}

export default Header