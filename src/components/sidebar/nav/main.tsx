import { AtSign, BicepsFlexed, Bot, Tag, Settings } from "lucide-react";

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

const staticNavMain = [
  {
    title: "Topics",
    icon: Tag,
    url: "/dashboard/topics",
  },
  {
    title: "Rankings",
    icon: Bot,
    url: "/dashboard/rankings",
  },
  {
    title: "Mentions",
    icon: AtSign,
    url: "/dashboard/mentions",
  },
  {
    title: "Account",
    icon: Settings,
    url: "/dashboard/account",
  },
  {
    title: "Competitors",
    icon: BicepsFlexed,
    disabled: true,
    url: "/dashboard/competitors",
  },
];

export function NavMain() {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Platform</SidebarGroupLabel>
      <SidebarMenu>
        {staticNavMain.map((item) => (
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton asChild>
              <Link href={item.disabled ? "#" : item.url}>
                <item.icon />
                <span>
                  {item.title}
                  {item.disabled && (
                    <Badge
                      variant="secondary"
                      className="text-xs ml-2 text-muted-foreground"
                    >
                      Soon
                    </Badge>
                  )}
                </span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
