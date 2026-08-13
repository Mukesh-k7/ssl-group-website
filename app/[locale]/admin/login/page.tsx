import AdminLoginShell from "@/components/admin/admin-login-shell";

export const metadata = {
  title: "Admin Login",
  description: "Sign in to the admin dashboard.",
};

interface AdminLoginPageProps {
  params: {
    locale: string;
  };
}

export default function AdminLoginPage({ params }: AdminLoginPageProps) {
  return <AdminLoginShell locale={params.locale} />;
}
