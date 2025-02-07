import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import ProtectedRoute from "@/context/ProtectedRoute";

export default function Dashboard() {
  return (
    <ProtectedRoute>
      <DashboardLayout />
    </ProtectedRoute>
  );
}
