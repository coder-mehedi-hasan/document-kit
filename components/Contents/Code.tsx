import React, { useState } from 'react';
import { Controller } from "react-hook-form"
import Editor from '@monaco-editor/react';
import Select from 'react-select';
import { programmingLanguages } from '@/lib/constant';

type selectedType = {
    value: any,
    label: string,
}

const Code = ({ control }) => {
    const [language, setLanguage] = useState<selectedType>();

    return (
        <>
            <div className='mb-3 w-100 d-flex justify-content-end'>
                <div style={{ width: "20%" }}>
                    <Controller
                        name="language"
                        control={control}
                        render={({ field }) => (
                            <Select
                                {...field}
                                onChange={(value) => {
                                    field.onChange(value);
                                    setLanguage(value);
                                }}
                                options={programmingLanguages}
                            />
                        )}
                    />
                </div>
            </div>
            <div className='border'>
                <Controller
                    name="content"
                    control={control}
                    render={({ field }) => (
                        <Editor
                            {...field}
                            height="500px"
                            defaultLanguage="javascript"
                            defaultValue="// some code"
                            language={language?.value}
                            onChange={(value, event) => {
                                field.onChange(value);
                            }}
                            theme='vs-dark'
                        />
                    )}
                />

            </div>
        </>
    );
};

export default Code;