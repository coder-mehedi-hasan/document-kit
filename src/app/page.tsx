"use client"
import Preview from "@/components/Contents/Preview";
import Header from "@/components/Header";
import { get } from "@/lib/api";
import prisma from "@/lib/prisma";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useState } from "react";

type post = {
  id: string
  title: string
  content: string
}

export default function Home() {
  const [selectedPost, setSelectedPost] = useState<post>();
  const { isLoading, isError, data: posts, isSuccess } = useQuery({
    queryKey: ['all-posts'],
    queryFn: () => get('/api/posts'),
    select(data) {
      return data?.data?.data
    },
  })

  return (
    <main>
      <div className="row mt-3">
        <div className="col-lg-3">
          <div className="list-group">
            {
              posts?.map((post: post) => <button type="button" onClick={()=> setSelectedPost(post)} className={`list-group-item list-group-item-action ${post?.id === selectedPost?.id ? "active" : ""}`}>{post?.title}</button>)
            }
            {/* <button type="button" className="list-group-item list-group-item-action active" aria-current="true">
              The current button
            </button>
            <button type="button" className="list-group-item list-group-item-action">A second item</button>
            <button type="button" className="list-group-item list-group-item-action">A third button item</button>
            <button type="button" className="list-group-item list-group-item-action">A fourth button item</button>
            <button type="button" className="list-group-item list-group-item-action">A disabled button item</button> */}
          </div>
        </div>
        <div className="col-lg-9 border rounded">
          {
            selectedPost ?
              <Preview post={selectedPost} />
              : "loading...."
          }
        </div>
      </div>
    </main>
  );
}
