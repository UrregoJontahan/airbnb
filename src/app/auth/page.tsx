"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; 
import useAuthStore from "../../lib/authUser"; 

const Auth: React.FC = () => {
    const [loader, setLoader] = useState(true);
    const router = useRouter();
    const setAuthenticated = useAuthStore((state) => state.setAuthenticated);
    const setUser = useAuthStore((state) => state.setUser);
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
    const user = useAuthStore((state) => state.user);

    useEffect(() => {
        const authenticate = async () => {
            const params = new URLSearchParams(window.location.search);
            const type = params.get("type");

            if (type === "facebook") {
                await fetchPostBackendFacebook();
            } else if (type === "google") {
                await fetchPostBackendGoogle();
            }

            setLoader(false);
        };

        authenticate();
    }, []);

    const fetchPostBackendGoogle = async () => {
        const params = new URLSearchParams(window.location.search);
        const code = params.get('code');

        const fetchLogin = await fetch("http://localhost:2000/google/callback", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ code: code, type: "google" }),
        });

        const result = await fetchLogin.json();

        if (result.success) {
            setAuthenticated(true);
            setUser(result.user);
        }
    };

    const fetchPostBackendFacebook = async () => {
        const params = new URLSearchParams(window.location.search);
        const code = params.get('code');

        const fetchLogin = await fetch("http://localhost:2000/facebook/callback", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ code: code, type: "facebook" }),
        });

        const result = await fetchLogin.json();

        if (result.success) {
            setAuthenticated(true);
            setUser(result.user);
        }
    };

    useEffect(() => {
        if (isAuthenticated && user) {
            router.push("/");
        }
    }, [isAuthenticated, user, router]);

    return (
        <div>
            {loader && <div>Cargando...</div>}
        </div>
    );
};

export default Auth;