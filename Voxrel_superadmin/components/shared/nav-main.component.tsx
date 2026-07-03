"use client"

import { type LucideIcon } from "lucide-react"
import Link from "next/link"

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar.ui"

export function NavMain({
  groups,
}: {
  groups: {
    title: string
    items: {
      title: string
      url: string
      icon?: LucideIcon
      isActive?: boolean
    }[]
  }[]
}) {
  return (
    <>
      {groups.map((group) => (
        <SidebarGroup key={group.title}>
          <SidebarGroupLabel>{group.title}</SidebarGroupLabel>
          <SidebarMenu>
            {group.items.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <Link href={item.url}>
                    {item.icon && (
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-primary/40 bg-primary/15">
                        <item.icon className="h-4 w-4 !text-primary" style={{ color: "#D4AF37" }} />
                      </span>
                    )}
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      ))}
    </>
  )
}
