"use client"
import { Controller } from "react-hook-form";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Text = ({ control }) => {
    return (
        <>
            <Controller
                name="content"
                control={control}
                render={({ field }) => (
                    <ReactQuill
                        {...field}
                        theme="snow"
                        style={{height:"500px"}}
                    />
                )}
            />

        </>
    );
};

export default Text;