"use client";

import { Sidebar } from "./sidebar";
import { MetallurgyDashboard } from "./dashboard";
import { SidebarProvider } from "./sidebar-context";

interface MetallurgyLayoutProps {
  locale: string;
}

export function MetallurgyLayout({ locale }: MetallurgyLayoutProps) {
  return (
    <SidebarProvider>
      <div className="relative">
        <Sidebar />
        <MetallurgyDashboard locale={locale} />
      </div>
    </SidebarProvider>
  );
}
