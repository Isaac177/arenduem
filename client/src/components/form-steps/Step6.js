import React from 'react';
import { Field } from 'formik';
import {Grid, ThemeProvider, FormControl,
    FormControlLabel,
    Checkbox,
    FormGroup,
    Slider,} from "@mui/material";
import peopleImg from "../../assets/img/peopleImg.jpg";
import theme from "../utils/theme";

const Step6 = () => {
    const occupations = ['Student', 'Work'];
    const smokingStatuses = ['Never', 'Socially', 'Regularly', 'Very often'];
    const drinkingStatuses = ['Never', 'Socially', 'Regularly', 'Very often'];

    return (
        <div>
            <h1 className="text-3xl font-bold mt-4 text-aqua-500">Preferences</h1>
            <ThemeProvider theme={theme}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <h6 className="text-xl font-bold mt-2">What is your preferred gender?</h6>
                    <FormControl component="fieldset">
                        <FormGroup row>
                            <FormControlLabel
                                control={<Field name="male" as={Checkbox} />}
                                label="Male"
                            />
                            <FormControlLabel
                                control={<Field name="female" as={Checkbox} />}
                                label="Female"
                            />
                            <FormControlLabel
                                control={<Field name="other" as={Checkbox} />}
                                label="Other"
                            />
                        </FormGroup>
                    </FormControl>

                    <h6 className="text-xl font-bold my-4">What is your preferred age range?</h6>
                    <Field name="ageRange">
                        {({ field, form }) => (
                            <>
                                <Slider
                                    value={field.value || [1, 100]}
                                    onChange={(event, newValue) => {
                                        form.setFieldValue(field.name, newValue);
                                    }}
                                    valueLabelDisplay="auto"
                                    min={1}
                                    max={100}
                                    marks
                                />
                                <div className="flex justify-between mb-4">
                                <p className="text-sm text-gray-500">Minimum age: {field.value?.[0]}</p>
                                <p className="text-sm text-gray-500">Maximum age: {field.value?.[1]}</p>
                                </div>
                            </>
                        )}
                    </Field>

                    <h6 className="text-xl font-bold mt-4">Tenant occupation</h6>
                    <FormControl component="fieldset">
                        <FormGroup row>
                            {occupations.map((occupation) => (
                                <FormControlLabel
                                    key={occupation}
                                    control={
                                        <Field name="occupation" as={Checkbox} value={occupation} />
                                    }
                                    label={occupation}
                                />
                            ))}
                        </FormGroup>
                    </FormControl>

                    <h6 className="text-xl font-bold mt-4">Smoking Status</h6>
                    <FormControl component="fieldset">
                        <FormGroup row>
                            {smokingStatuses.map((status) => (
                                <FormControlLabel
                                    key={status}
                                    control={
                                        <Field name="smokingStatus" as={Checkbox} value={status} />
                                    }
                                    label={status}
                                />
                            ))}
                        </FormGroup>
                    </FormControl>

                    <h6 className="text-xl font-bold mt-4">Drinking Status</h6>
                    <FormControl component="fieldset">
                        <FormGroup row>
                            {drinkingStatuses.map((status) => (
                                <FormControlLabel
                                    key={status}
                                    control={
                                        <Field name="drinkingStatus" as={Checkbox} value={status} />
                                    }
                                    label={status}
                                />
                            ))}
                        </FormGroup>
                    </FormControl>
                </Grid>
                <Grid sx={{ margin: '0 auto' }}>
                    <div className="my-2 flex justify-center text-center items-center">
                        <img
                            src={peopleImg}
                            alt="gender"
                            className="cover h-96 w-full object-cover object-center"
                            style={{position: 'sticky', top: '0'}}
                        />
                    </div>
                </Grid>
            </Grid>
            </ThemeProvider>
        </div>
    );
};

export default Step6;
