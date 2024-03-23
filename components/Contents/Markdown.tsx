import React from 'react';
import MarkdownEditor from '@uiw/react-markdown-editor';
import { useForm, SubmitHandler, Controller } from "react-hook-form"

const Markdown = ({ control }) => {
    return (
        <>
            <Controller
                name="content"
                control={control}
                render={({ field }) => (
                    <MarkdownEditor
                        // value={mdStr}
                        {...field}
                        height="500px"
                        onChange={(value, viewUpdate) => {
                            field.onChange(value);
                        }}
                    />
                )}
            />
        </>
    );
};

export default Markdown;