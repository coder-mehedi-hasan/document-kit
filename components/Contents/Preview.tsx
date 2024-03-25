import { PostTypes } from '@prisma/client';
import MarkdownEditor from '@uiw/react-markdown-editor';
import React from 'react';

const Preview = ({ post }: any) => {
    const getContent = () => {
        if (post?.postType === PostTypes.MARKDOWN) {
            return <MarkdownEditor.Markdown source={post?.content} style={{ height: "700px" }} />
        }
        else if (post?.postType === PostTypes.CODE) {
            return <code>{post?.content}</code>
        }
        else {
            return <div dangerouslySetInnerHTML={{ __html: post?.content }}></div>
        }
    }

    return (
        <div>
            <div>
                <div className='d-flex justify-content-between'>
                    <h1 className='m-0 p-0'>{post?.title}</h1>
                    <button className='btn btn-sm btn-success'>Edit</button>
                </div>
                <p className='m-0 p-0'>{post?.author?.name}</p>
            </div>
            <div className='mt-5'>
                {getContent()}
            </div>
        </div>
    )
};

export default Preview;