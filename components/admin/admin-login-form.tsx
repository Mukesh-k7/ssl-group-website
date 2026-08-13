"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface AdminLoginFormProps {
  locale: string;
}

export default function AdminLoginForm({ locale }: AdminLoginFormProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    const validUser = username.trim() === "admin";
    const validPass = password === "admin123";

    await new Promise((resolve) => setTimeout(resolve, 250));

    if (validUser && validPass) {
      window.localStorage.setItem("ssl-admin-auth", "true");
      router.push(`/${locale}/admin`);
      return;
    }

    setError("Invalid credentials. Use admin / admin123 for demo access.");
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 rounded-[1.5rem] border border-white/10 bg-gunmetal/80 p-8 shadow-[0_15px_40px_rgba(0,0,0,0.18)]">
      <div>
        <label className="mb-2 block text-sm font-medium text-white">Username</label>
        <Input
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          placeholder="admin"
          autoComplete="username"
        />
      </div>
      <div>
        <label className="mb-2 block text-sm font-medium text-white">Password</label>
        <Input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="admin123"
          autoComplete="current-password"
        />
      </div>
      {error ? <p className="text-sm text-rose-300">{error}</p> : null}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" disabled={loading}>
          {loading ? "Signing in..." : "Sign in"}
        </Button>
        <p className="text-xs text-metallic/70">
          Demo credentials: admin / admin123
        </p>
      </div>
    </form>
  );
}
