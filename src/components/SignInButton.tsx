'use client';
import { signIn } from "next-auth/react";
import { Button } from "./ui/button";

const SignInButton = () => {
    return (
        <Button
            onClick={() => signIn('google')}
            className="px-4 py-2 bg-blue-500 hover:bg-blue-300 text-white flex items-center justify-center"
        >
            Sign in with Google
        </Button>
    )
}

export default SignInButton