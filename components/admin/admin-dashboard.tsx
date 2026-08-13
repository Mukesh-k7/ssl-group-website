"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { MetallurgyLayout } from "./metallurgy/layout";

interface AdminDashboardProps {
  locale: string;
}

export default function AdminDashboard({ locale }: AdminDashboardProps) {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const isAdmin = window.localStorage.getItem("ssl-admin-auth") === "true";
    setAuthenticated(isAdmin);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-center">
          <p className="text-lg text-slate-400">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-950 flex items-center justify-center px-4">
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
