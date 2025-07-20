import React from 'react'
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Calendar, Home, Inbox, InboxIcon, Layers, Search, Settings, UserCircle, Wallet } from "lucide-react"
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const items = [
    {
        title: "Work Space",
        url: "/dashboard#",
        icon: Layers,
    },
    {
        title: "AI Tools",
        url: "/aitools/aichat#",
        icon: InboxIcon,
    },
    {
        title: "My History",
        url: "/history#",
        icon: Calendar,
    },
    {
        title: "Billing",
        url: "/billing#",
        icon: Wallet,
    },
    {
        title: "Profile",
        url: "/profile#",
        icon:  UserCircle,
    },
]

export function AppSidebar() {
    const path = usePathname();
    return (
        <Sidebar>
            <SidebarHeader>
                <div className='p-4'>
                    <Image src={'/logo.png'} alt='logo' width={100} height={100}
                        className='w-full' />
                    <h2 className='text-sm text-gray-400 text-center mt-4'>Build Awesome Skills</h2>
                </div>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>

                    <SidebarGroupContent>
                        <SidebarMenu className='mt-2'>
                            {items.map((item, index) => (
                                // <SidebarMenuItem key={item.title} className='p-2'>
                                //     <SidebarMenuButton asChild className=''>
                                <a href={item.url} key={index} className={`p-2 text-lg flex gap-2 items-center
                                 hover:bg-gray-100 rounded-lg ${path.includes(item.url) && 'bg-gray-200ß'}`}>
                                    <item.icon className='h-5 w-5' />
                                    <span>{item.title}</span>
                                </a>
                                //     </SidebarMenuButton>
                                // </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <h2 className='p-2 text-gray-400 text-sm'>Copyright @Tubeguruji</h2>
            </SidebarFooter>
        </Sidebar>
    )
}