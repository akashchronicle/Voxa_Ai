"use client"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { Separator } from "@radix-ui/react-separator";
import { BotIcon, StarIcon, VideoIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link"; // ✅ correct
import { usePathname } from "next/navigation";
import { DashboardUserButton } from "./dashboardUserButton";


const firstSection=[
    {
        icons:VideoIcon,
        label:"Meetings",
        href:"/meetings",
    },
    {
        icons:BotIcon,
        label:"Agents",
        href:"/agents",
    },
];

const secondSection=[
    {
        icons:StarIcon,
        label:"Upgrade",
        href:"/upgrade",
    },
   
];

export const DashboardSidebar=()=>{
    // const pathname="/meetings";
    const pathname=usePathname();
    
    return (
        <Sidebar>
        <SidebarHeader className="text-sidebar-accent-foreground">
        <Link href="/" className="flex items-center gap-2 px-2 pt-2">
        <Image src="/logoVox.png"  height ={66} width={66} alt="Voxa AI"  />
        <p className="text-2xl font-bold text-black">Voxa AI</p>        </Link>
        </SidebarHeader>
        <div className="px-4 py-0.5 ">
        <Separator className="bg-gray-300 h-px w-full my-1" />  
              </div>
        <SidebarContent>
            <SidebarGroup>
                <SidebarGroupContent>
                    <SidebarMenu>
                        {firstSection.map((item)=>( 
                            <SidebarMenuItem key={item.label}>
                                <SidebarMenuButton 
                                asChild
                                className={cn(
                                    "h-10 hover:bg-linear-to-r/oklch border border-transparent hover:border-[#5D6B68] from-sidebar-accent from-5% via-30% via-sidebar/50 to-sidebar/50",
                                    pathname===item.href && "bg-linear-to-r/oklch border-[#5D6B68]/10 "
                                    )}
                                    
                                    isActive={pathname===item.href}>
                                <Link href={item.href}>
                                <item.icons className="size-5"/>
                                    <span className="text-sm font-medium tracking-tight">
                                    {item.label}
                                    </span>
                                    
                                   
                                </Link>
                                </SidebarMenuButton>
                                
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarGroupContent>
            </SidebarGroup>

            <div className="px-4 py-0.5 ">
        <Separator className="bg-gray-300 h-px w-full " />  
              </div>
            <SidebarGroup>
                <SidebarGroupContent>
                    <SidebarMenu>
                        {secondSection.map((item)=>( 
                            <SidebarMenuItem key={item.label}>
                                <SidebarMenuButton 
                                asChild
                                className={cn(
                                    "h-10 hover:bg-linear-to-r/oklch border border-transparent hover:border-[#5D6B68] from-sidebar-accent from-5% via-30% via-sidebar/50 to-sidebar/50",
                                    pathname===item.href && "bg-linear-to-r/oklch border-[#5D6B68]/10 "
                                    )}
                                    
                                    isActive={pathname===item.href}>
                                <Link href={item.href}>
                                <item.icons className="size-5"/>
                                    <span className="text-sm font-medium tracking-tight">
                                    {item.label}
                                    </span>
                                    
                                   
                                </Link>
                                </SidebarMenuButton>
                                
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarGroupContent>
            </SidebarGroup>
        </SidebarContent>
        <SidebarFooter className="text-white">
            <DashboardUserButton/>
        </SidebarFooter>
        
        </Sidebar>
    )
}