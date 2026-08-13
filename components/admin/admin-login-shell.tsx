"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AdminLoginForm from "@/components/admin/admin-login-form";

interface AdminLoginShellProps {
  locale: string;
}

export default function AdminLoginShell({ locale }: AdminLoginShellProps) {
  const [checking, setChecking] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (window.localStorage.getItem("ssl-admin-auth") === "true") {
      router.replace(`/${locale}/admin`);
      return;
    }

    setChecking(false);
  }, [locale, router]);

  if (checking) {
    return (
      <div className="min-h-[calc(100vh-220px)] bg-charcoal px-4 py-8 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-[2rem] border border-white/10 bg-gunmetal/80 p-8 text-center shadow-[0_25px_50px_rgba(0,0,0,0.25)] backdrop-blur-xl">
          <p className="text-lg text-metallic/70">Checking admin session…</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-220px)] bg-charcoal px-4 py-8 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="rounded-[2rem] border border-white/10 bg-gunmetal/80 p-8 shadow-[0_25px_50px_rgba(0,0,0,0.25)] backdrop-blur-xl">
          <div className="mb-8">
            <p className="text-sm uppercase tracking-[0.35em] text-metallic/60">Admin login</p>
            <h1 className="mt-4 text-4xl font-semibold text-white">Sign in to admin</h1>
            <p className="mt-3 text-sm leading-7 text-metallic/80">
              Enter the demo credentials to access the admin dashboard.
            </p>
          </div>
          <AdminLoginForm locale={locale} />
        </div>
      </div>
    </div>
  );
}
