"use client"
import Header from "@/components/Header";
import prisma from "@/lib/prisma";
import Link from "next/link";

export default function Home() {
  // const posts = await prisma.post.findMany()
  // console.log("Posts", posts)

  return (
    <main>
      <div>
        <li><Link href="/api/auth/signin">Sign In</Link></li>
        <li><Link href="/api/auth/signout">Sign Out</Link></li>
      </div>
    </main>
  );
}
