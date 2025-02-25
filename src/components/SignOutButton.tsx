'use client';
import { signOut } from "next-auth/react"
import { Button } from "./ui/button"

const SignOutButton = () => {
    return (
        <Button
            onClick={() => signOut()}
            className="px-4 py-2 bg-red-500 hover:bg-red-300 text-white flex items-center justify-center"
        >
            Sign Out
        </Button>
    )
}

export default SignOutButton