import React from 'react';
import { useFormikContext, Field } from 'formik';
import { useDropzone } from 'react-dropzone';
import {ThemeProvider, FormControl, TextField} from "@mui/material";
import theme from "../utils/theme";

const Step5 = () => {
    const { getRootProps, getInputProps, open, acceptedFiles } = useDropzone({
        accept: 'image/jpeg, image/png',
        noClick: true,
        noKeyboard: true,
        onDrop: (acceptedFiles) => {
            setFieldValue(
                'propertyDetails.pictures',
                acceptedFiles.map((file) =>
                    Object.assign(file, {
                        preview: URL.createObjectURL(file),
                    })
                )
            );
        },
    });

    const {values, setFieldValue, errors} = useFormikContext();

    const files = values.propertyDetails?.pictures?.map((file) => (
        <li key={file.path}>
            {file.path} - {file.size} bytes
        </li>
    ));

    return (
        <ThemeProvider theme={theme}>
            <h6 className="text-xl font-bold mt-4 text-aqua-500">Pictures</h6>
            <div
                {...getRootProps()}
                className="border-2 border-dashed border-gray-400 h-60 w-full flex flex-col justify-center items-center rounded-lg"
            >
                <input {...getInputProps()} />
                <p className="text-sm font-medium">
                    Drag and drop your images here
                </p>
                <button
                    type="button"
                    className="text-sm font-medium bg-aqua-600 text-white px-4 py-2 rounded-md mt-4 hover:bg-aqua-700"
                    onClick={open}
                >
                    Browse Images
                </button>
            </div>
            <aside>
                <h6 className="text-md font-bold mt-4">Selected Files</h6>
                <ul>{files}</ul>
            </aside>
{/*
            {errors && errors.length > 0 && <p className="text-red-500">{errors[0].message}</p>}
*/}
            <div className="my-2 flex flex-col gap-4">
                <p className="text-sm font-medium">Title</p>
                <FormControl fullWidth className="mt-4">
                    <Field
                        name="propertyDetails.title"
                        as={TextField}
                        variant="outlined"
                        placeholder="Enter a title"
                        value={values.propertyDetails?.title || ''}
                        onChange={(e) => setFieldValue('propertyDetails.title', e.target.value)}
                        sx={{ my: 2, p: 2 }}
                        validate={(value) => {
                            if (value.length < 15) {
                                return 'Title must be at least 15 characters long';
                            }
                        }}
                    />

                    {errors.propertyDetails?.title && <p className="text-red-500">{errors.propertyDetails?.title}</p>}

                </FormControl>
            </div>
            <div className="my-2 flex flex-col gap-4">
                <p className="text-sm font-medium">Description</p>
                <FormControl fullWidth className="mt-4">
                    <Field
                        name="propertyDetails.description"
                        as={TextField}
                        multiline
                        minRows={4}
                        maxLength={200}
                        variant="outlined"
                        placeholder="Enter a description (minimum 200 words)"
                        value={values.propertyDetails?.description || ''}
                        onChange={(e) => setFieldValue('propertyDetails.description', e.target.value)}
                        sx={{ my: 2, p: 2 }}
                        validate={(value) => {
                            if (value.length < 200) {
                                return 'Description must be at least 200 characters long';
                            }
                        }}
                    />
                    {errors.propertyDetails?.description && <p className="text-red-500">{errors.propertyDetails?.description}</p>}
                </FormControl>
            </div>
        </ThemeProvider>
    );
};

export default Step5;
