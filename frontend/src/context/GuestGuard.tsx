'use client'
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux"; 

const GuestGuard = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const user = useSelector((state:any) => state.user.email); 

    useEffect(() => {
        if (user) {
            router.push("/dashboard"); 
        }
    }, [user, router]);

    if (user) return null; 

    return <>{children}</>;
};

export default GuestGuard;
