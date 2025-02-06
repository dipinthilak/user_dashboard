// export default function Home() {
//   return (
// <div className="flex items-center justify-center h-screen">
//   <p>this is home page</p>
// </div>
//   );
// }


'use client';

import { LoginForm } from "@/components/auth/LoginForm";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <LoginForm />
    </div>
  );
}