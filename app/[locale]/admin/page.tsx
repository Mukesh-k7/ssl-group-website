import AdminDashboard from "@/components/admin/admin-dashboard";

export const metadata = {
  title: "Admin Dashboard",
  description: "Simple admin dashboard for SSL Group website.",
};

interface AdminPageProps {
  params: {
    locale: string;
  };
}

export default function AdminPage({ params }: AdminPageProps) {
  return <AdminDashboard locale={params.locale} />;
}
