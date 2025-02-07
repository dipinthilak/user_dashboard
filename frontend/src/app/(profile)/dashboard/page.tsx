import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import AuthGuard from "@/context/AuthGuard";


export default function Dashboard() {
  return (
    <AuthGuard>
      <DashboardLayout />
    </AuthGuard>
  );
}
