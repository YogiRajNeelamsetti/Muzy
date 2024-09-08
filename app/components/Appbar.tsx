"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Music } from "lucide-react"
export function Appbar() {
    const session = useSession()
    
    return <div className="flex justify-between px-20 pt-5">
        <div>
            <Link className="flex items-center justify-center" href="#">
            <Music className="h-6 w-6 text-purple-400" />
            <span className="ml-2 font-bold text-xl text-purple-400">MUZY</span>
            </Link>
        </div>
        <div>
            {session.data?.user && <Button className="bg-purple-600 text-white hover:bg-purple-700" onClick= {() => signOut()}>Log Out</Button>}
            {!session.data?.user && <Button className="bg-purple-600 text-white hover:bg-purple-700" onClick= {() => signIn()}>Sign in</Button>}
        </div>
    </div>
}