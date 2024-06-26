"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import useAuthStore from "../lib/authUser";

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

        console.log(result);

        if (result.id) {
            setAuthenticated(true);
            setUser(result.email);
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
        console.log(result);

        if (result.id) {
            setAuthenticated(true);
            setUser(result.name);
        }
    };

    useEffect(() => {
        if (!loader) {
            if (isAuthenticated && user) {
                console.log("Redirigiendo a la página principal...");
                router.push("/");
            } else {
                console.log("Redirigiendo a la página de registro...");
                router.push("/signup");
            }
        }
    }, [isAuthenticated, user, loader, router]);

    return (
        <div>
            {loader && <div>Cargando...</div>}
        </div>
    );
};

export default Auth;
