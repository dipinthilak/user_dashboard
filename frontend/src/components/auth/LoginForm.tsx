"use client";

import { useState } from "react";
import AuthForm from "@/components/auth/AuthForm";
import HeroContent from "@/components/auth/HeroContent";

const LoginForm = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const toggleForm = () => setIsSignIn((prev) => !prev);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50 p-4">
      <div className="w-full max-w-6xl rounded-2xl border border-gray-200/50 shadow-2xl backdrop-blur-sm bg-white/30 overflow-hidden">
        <div className="flex min-h-[600px]">
          <div className={`flex-1 flex items-center justify-center transition-all duration-500 ${isSignIn ? "order-first" : "order-last"}`}>
            {isSignIn ? <AuthForm isSignIn={isSignIn} toggleForm={toggleForm} /> : <HeroContent isSignIn={isSignIn} />}
          </div>
          <div className={`flex-1 flex items-center justify-center transition-all duration-500 bg-gradient-to-br from-purple-100/50 to-blue-100/50 ${isSignIn ? "order-first" : "order-last"}`}>
            {isSignIn ? <HeroContent isSignIn={isSignIn} /> : <AuthForm isSignIn={isSignIn} toggleForm={toggleForm} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
