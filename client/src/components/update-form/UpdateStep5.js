import React, {useEffect} from 'react';
import { useFormikContext, Field } from 'formik';
import { useDropzone } from 'react-dropzone';
import {ThemeProvider, FormControl, TextField} from "@mui/material";
import theme from "../utils/theme";

const UpdateStep5 = () => {
    const { getRootProps, getInputProps, open, acceptedFiles } = useDropzone({
        accept: 'image/jpeg, image/png, image/jpg',
        noClick: true,
        noKeyboard: true,
        name: 'pictures',
        onDrop: (acceptedFiles) => {
            setFieldValue('propertyDetails.pictures', acceptedFiles);
        },
    });

    const {values, setFieldValue, errors} = useFormikContext();

    useEffect(() => {
        return () => {
            values.propertyDetails.pictures.forEach((file) => URL.revokeObjectURL(file.preview));
        };
    }, [values.propertyDetails.pictures]);

    const files = values.propertyDetails?.pictures?.map((file) => (
        <li key={file.name}>
            {file.name} - {file.size} bytes
        </li>
    ));

    return (
        <ThemeProvider theme={theme}>
            <h6 className="mt-4 text-xl font-bold text-aqua-500">Pictures</h6>
            <div
                {...getRootProps()}
                className="flex h-60 w-full flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-400"
            >
                <input {...getInputProps({ name: 'pictures' })} />
                <p className="text-sm font-medium">
                    Drag and drop your images here
                </p>
                <button
                    type="button"
                    className="mt-4 rounded-md px-4 py-2 text-sm font-medium text-white bg-aqua-600 hover:bg-aqua-700"
                    onClick={open}
                >
                    Browse Images
                </button>
            </div>
            <aside>
                <h6 className="mt-4 font-bold text-md">Selected Files</h6>
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

export default UpdateStep5;
