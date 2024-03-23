"use client"
import React, { useState } from 'react';
import Select from "react-select"
import { useForm, SubmitHandler, Controller } from "react-hook-form"
import { PostTypes } from '@prisma/client';
import Code from '@/components/Contents/Code';
import Text from '@/components/Contents/Text';
import Markdown from '@/components/Contents/Markdown';

type IFormInput = {
    title: string
    postType: any
    isPrivate: boolean
    content: string
}

type selectedType = {
    value: any,
    label: string,
}

const page = () => {
    const [selectedType, setSelectedtype] = useState<selectedType>();
    const { register, handleSubmit, getValues, control, getFieldState, setValue } = useForm<IFormInput>({

    })

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        console.log("form data: ", data)
    }


    const getContentField = () => {
        if (selectedType?.value === PostTypes.CODE) {
            return <Code register={register} control={control} />
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


            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
};

export default page;