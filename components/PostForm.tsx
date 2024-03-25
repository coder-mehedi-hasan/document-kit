"use client"
import Code from '@/components/Contents/Code';
import Markdown from '@/components/Contents/Markdown';
import Text from '@/components/Contents/Text';
import { post } from '@/lib/api';
import { PostTypes } from '@prisma/client';
import { useMutation } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import Select from "react-select";

type IFormInput = {
    title: string
    postType: any
    isPrivate: boolean
    content: string,
    authorId?: any,
    language?: any
}

type selectedType = {
    value: any,
    label: string,
}


const PostForm = () => {
    const session :any= useSession();
    const [selectedType, setSelectedtype] = useState<selectedType>();
    const { register, handleSubmit, getValues, control, getFieldState, setValue, reset } = useForm<IFormInput>({

    })

    const createMutation :any = useMutation({
        mutationFn: (data :any) => post('/api/posts', data),
        onSuccess(data) {
            // console.log("Success : ", data)
            reset();
        },
        onError(error) {
            console.log("Error: ", error)
        },
    })


    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        if (!session?.data?.user?.id) {
            return;
        }
        data.authorId = session?.data?.user?.id
        if (data?.postType) {
            data.postType = data?.postType?.value
        }
        if (data?.language) {
            data.language = data?.language?.value
        }
        createMutation.mutate(data);
    }


    const getContentField = () => {
        if (selectedType?.value === PostTypes.CODE) {
            return <Code control={control} />
        }
        else if (selectedType?.value === PostTypes.TEXT) {
            return <Text control={control} />
        }
        else {
            return <Markdown control={control} />
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
                <label htmlFor="postTitle" className="form-label">Title</label>
                <input className="form-control" id="postTitle" {...register("title", { required: true })} />
            </div>
            <div className="mb-3">
                <label className="form-label">Post Type</label>
                <Controller
                    name="postType"
                    control={control}
                    render={({ field }) => (
                        <Select
                            {...field}
                            onChange={(value) => {
                                field.onChange(value);
                                setSelectedtype(value);
                                setValue('content', '')

                            }}
                            options={[
                                { value: PostTypes.MARKDOWN, label: "Markdown" },
                                { value: PostTypes.CODE, label: "Code" },
                                { value: PostTypes.TEXT, label: "Text" },
                            ]}
                        />
                    )}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Content</label>
                {getContentField()}
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="isPrivate" {...register("isPrivate")} />
                <label className="form-check-label" htmlFor="isPrivate"  >Is Private</label>
            </div>
            <button type="submit" className="btn btn-primary">
                {
                    createMutation.isPending ?
                        "loading...."
                        :
                        "Submit"
                }
            </button>
        </form>
    );
};

export default PostForm;