import React from 'react';
import { Field, useFormikContext } from 'formik';
import {ThemeProvider, FormControl,
    FormControlLabel,
    Radio,
    FormGroup,
    Slider,} from "@mui/material";
 import theme from "../utils/theme";

const Step6 = () => {
    const occupations = ['Student', 'Work', 'Retired', 'Study and Work'];
    const smokingStatuses = ['Never', 'Socially', 'Regularly', 'Very often'];
    const drinkingStatuses = ['Never', 'Socially', 'Regularly', 'Very often'];
    const genders = ['Male', 'Female', 'Other'];

    const {values, setFieldValue} = useFormikContext();

    return (
        <div>
            <h1 className="text-3xl font-bold mt-4 text-aqua-500">Preferences</h1>
            <ThemeProvider theme={theme}>
                <h6 className="text-xl font-bold mt-2">What is your preferred gender?</h6>
                <FormControl component="fieldset">
                    <FormGroup row>
                        {genders.map((gender) => (
                            <FormControlLabel
                                key={gender}
                                control={<Field name="preferences.tenantGender" as={Radio} value={values.preferences?.tenantGender} onChange={(e) => setFieldValue('preferences.tenantGender', e.target.value)} />}
                                label={gender}
                            />
                        ))}
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
                                sx={{m: 2, width: '80%',}}
                            />
                            <div className="flex gap-20 mb-4 mx-auto">
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
                                    <Field name="preferences.tenantOccupation" as={Radio} value={values.preferences?.tenantOccupation} onChange={(e) => setFieldValue('tenantOccupation', e.target.value)} />
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
                                    <Field name="preferences.tenantSmokingStatus" as={Radio} value={values.preferences?.tenantSmokingStatus} onChange={(e) => setFieldValue('tenantSmokingStatus', e.target.value)} />
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
                                    <Field name="preferences.tenantDrinkingStatus" as={Radio} value={values.preferences?.tenantDrinkingStatus} onChange={(e) => setFieldValue('tenantDrinkingStatus', e.target.value)} />
                                }
                                label={status}
                            />
                        ))}
                    </FormGroup>
                </FormControl>
            </ThemeProvider>
        </div>
    );
};

export default Step6;
