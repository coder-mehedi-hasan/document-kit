"use client"
import React, { useState } from 'react';
import { Controller } from "react-hook-form";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState } from 'draft-js';

const Text = ({ control }) => {
    const [editorState, setEditorState] = useState(() => EditorState.createEmpty());

    const handleEditorChange = (newState) => {
        setEditorState(newState);
    };

    console.log(editorState)

    return (
        <>
            <Editor
                editorState={editorState}
                onEditorStateChange={handleEditorChange}
            />
        </>
    );
};

export default Text;