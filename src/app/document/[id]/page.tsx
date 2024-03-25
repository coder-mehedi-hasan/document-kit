"use client"
import PostForm from "@/components/PostForm";


const page = ({ params }:any) => {

    console.log("dynamic id", params?.id)
    return (
        <PostForm />
    );
};

export default page;