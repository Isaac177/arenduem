// Step5.js
import React from 'react';
import { Field } from 'formik';
import { useDropzone } from 'react-dropzone';
import {Grid, ThemeProvider, FormControl, TextField, Button} from "@mui/material";
import formImg from "../../assets/img/formImg.jpg";
import theme from "../utils/theme";

const Step5 = () => {
    const { getRootProps, getInputProps, open, acceptedFiles } = useDropzone({
        accept: 'image/jpeg, image/png',
        noClick: true,
        noKeyboard: true,
    });

    const files = acceptedFiles.map((file) => (
        <li key={file.path}>
            {file.path} - {file.size} bytes
        </li>
    ));

    return (
        <ThemeProvider theme={theme}>
            <h6 className="text-xl font-bold mt-4 text-aqua-500">Pictures</h6>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <div
                        {...getRootProps()}
                        className="border-2 border-dashed border-gray-400 h-60 w-full flex flex-col justify-center items-center"
                    >
                        <input {...getInputProps()} />
                        <p className="text-sm font-medium">
                            Drag and drop your images here
                        </p>
                        <Button
                            variant="contained"
                            color="primary"
                            className="mt-2"
                            onClick={open}
                        >
                            Browse Images
                        </Button>
                    </div>
                    <aside>
                        <h6 className="text-md font-bold mt-4">Selected Files</h6>
                        <ul>{files}</ul>
                    </aside>
                    <div className="my-2 flex flex-col gap-4">
                        <p className="text-sm font-medium">Title</p>
                        <FormControl fullWidth className="mt-4">
                            <Field
                                name="title"
                                as={TextField}
                                variant="outlined"
                                placeholder="Enter a title"
                                sx={{ my: 2, p: 2 }}
                            />
                        </FormControl>
                    </div>
                    <div className="my-2 flex flex-col gap-4">
                        <p className="text-sm font-medium">Description</p>
                        <FormControl fullWidth className="mt-4">
                            <Field
                                name="description"
                                as={TextField}
                                multiline
                                minRows={4}
                                maxLength={200}
                                variant="outlined"
                                placeholder="Enter a description (minimum 200 words)"
                                sx={{ my: 2, p: 2 }}
                            />
                        </FormControl>
                    </div>
                </Grid>
                <Grid sx={{ margin: '0 auto' }}>
                    <div className="my-2 flex justify-center text-center items-center">
                        <img
                            src={formImg}
                            alt="formImg"
                            className="cover mt-30 h-96 w-full object-cover object-center"
                            style={{position: 'sticky', top: '0'}}
                        />
                    </div>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
};

export default Step5;
