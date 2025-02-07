'use client'
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux"; 

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const user = useSelector((state: any) => state.user.email);
    console.log(user,"user from selector");
    

    useEffect(() => {
        if (!user) {
            router.push("/"); 
        }
    }, [user, router]);

    if (!user) return null; 

    return <>{children}</>;
};

export default AuthGuard;
