'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Github, Mail } from "lucide-react";
import { useToast } from '@/hooks/use-toast';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // TODO: Implement actual auth logic
      console.log('Login attempt:', { email, password });
      toast({
        title: "Success",
        description: "Logged in successfully",
      });
      router.push('/dashboard');
    } catch (error) {
      toast({
        title: "Error",
        description: `Invalid credentials ${error}`,
        variant: "destructive",
      });
    }
  };

  const handleOAuthLogin = async (provider: 'google' | 'github') => {
    try {
      console.log(`OAuth login attempt with ${provider}`);
      // TODO: Implement actual OAuth logic
      toast({
        title: "Success",
        description: `Logged in with ${provider} successfully`,
      });
      router.push('/dashboard');
    } catch (error) {
      toast({
        title: "Error",
        description: `Failed to login with ${provider},${error}`,
        variant: "destructive",
      });
    }
  };

  return (
    <Card className="w-[350px]">
      <CardHeader className="text-2xl font-bold text-center">Login</CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <Button
            variant="outline"
            onClick={() => handleOAuthLogin('google')}
            className="w-full"
          >
            <Mail className="mr-2 h-4 w-4" />
            Google
          </Button>
          <Button
            variant="outline"
            onClick={() => handleOAuthLogin('github')}
            className="w-full"
          >
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </Button>
        </div>
        
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <Separator className="w-full" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email">Email</label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="password">Password</label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Login with Email
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};