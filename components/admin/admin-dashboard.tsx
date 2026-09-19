"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import { Button } from "@/components/ui/button";
import { MetallurgyLayout } from "./metallurgy/layout";

interface AdminDashboardProps {
  locale: string;
}

export default function AdminDashboard({ locale }: AdminDashboardProps) {
  const authenticated = useSyncExternalStore(
    (onStoreChange) => {
      window.addEventListener("storage", onStoreChange);
      return () => window.removeEventListener("storage", onStoreChange);
    },
    () => window.localStorage.getItem("ssl-admin-auth") === "true",
    () => false,
  );

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-linear-to-br from-slate-900 to-slate-950 flex items-center justify-center px-4">
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-12 text-center max-w-md w-full">
          <p className="text-sm uppercase tracking-widest text-slate-500 mb-4">Admin Access Required</p>
          <h1 className="text-3xl font-bold text-white mb-4">Sign in required</h1>
          <p className="text-slate-400 mb-8">Please log in to access the metallurgy trading dashboard.</p>
          <Link href={`/${locale}/admin/login`}>
            <Button className="w-full">Go to login</Button>
          </Link>
        </div>
      </div>
    );
  }

  return <MetallurgyLayout locale={locale} />;
}
