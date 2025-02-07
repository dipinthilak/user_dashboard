import LoginForm from "@/components/auth/LoginForm";
import GuestGuard from "@/context/GuestGuard";

export default function LoginPage() {
return (
  <GuestGuard>
  <LoginForm />
 </GuestGuard>
)

}
 