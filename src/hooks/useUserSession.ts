import { useState, useEffect } from "react";

interface UserInfo {
    email: string,
    image: string | undefined,
    name: string,
}

interface Session {
    user: UserInfo,
}

export function useUserSession() {
    const [session, setSession] = useState<Session | null>(null);

    useEffect(() => {
        const fetchSession = async () => {
            try {
                const response = await fetch("/api/auth/session");
                if (response.ok) {
                    const data = await response.json();
                    setSession(data);
                    console.log(data)
                }
            } catch (error) {
                console.error("Error fetching session:", error);
            }
        };

        fetchSession();
    }, []);

    return session;
}
