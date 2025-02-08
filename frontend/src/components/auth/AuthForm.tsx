"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { loginSuccess } from "@/store/userSlice";


interface AuthFormProps {
  isSignIn: boolean;
  toggleForm: () => void;
}

const AuthForm: React.FC<AuthFormProps> = ({ isSignIn, toggleForm }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const router = useRouter();
  const dispatch = useDispatch();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isSignIn && password !== confirmPassword) {
      toast.error(" Password not matching!");
      return;
    }

    try {
      const url = isSignIn
        ? `${process.env}auth/signin`
        : `${process.env}auth/signup`;

      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      console.log("data----",data)
      if (!response.ok) {
        toast.error("Unsuccessful!" )
        throw new Error(data.message || "Something went wrong");
      } else {
        dispatch(loginSuccess(email)); 
        toast.success(" successful!", {
          onClose: () => router.push("/dashboard"),
        });
      }
      dispatch(loginSuccess(email)); 
      toast.success(isSignIn ? "Logged in" : "Account created", {});
      if (isSignIn) router.push("/dashboard");


    } catch (error: unknown) {
      if (error instanceof Error)
        toast.error(" Error occured!");
    }
  };

  return (
    <Card className="w-full max-w-md bg-white/50 backdrop-blur-sm">
      <CardHeader className="text-2xl font-bold text-center">
        {isSignIn ? "Welcome Back!" : "Create Account"}
      </CardHeader>
      <CardContent className="space-y-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium">
              Password
            </label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {!isSignIn && (
            <div className="space-y-2">
              <label htmlFor="confirmPassword" className="text-sm font-medium">
                Confirm Password
              </label>
              <Input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
          )}
          <Button type="submit" className="w-full">
            {isSignIn ? "Sign In" : "Sign Up"}
          </Button>
        </form>

        <div className="text-center text-sm">
          <p>
            {isSignIn ? "Don't have an account?" : "Already have an account?"}{" "}
            <Button
              variant="link"
              className="p-0 h-auto font-semibold"
              onClick={toggleForm}
            >
              {isSignIn ? "Sign up" : "Sign in"}
            </Button>
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default AuthForm;
