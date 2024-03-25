"use client"
import PostForm from "@/components/PostForm";
import dynamic from "next/dynamic";

const page = () => {

    const Scroll = dynamic(
        () => {
            return import("@/components/PostForm");
        },
        { ssr: false }
    );


    return (
        <Scroll />
    );
};
export default page;