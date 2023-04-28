import React from 'react';
import { Field, useFormikContext } from 'formik';
import {ThemeProvider, FormControl,
    FormControlLabel,
    Radio,
    FormGroup,
    Slider,} from "@mui/material";
 import theme from "../utils/theme";
import genders from "../../assets/data/genders";
import occupations from "../../assets/data/occupations";
import {drinkingStatus, smokingStatus} from "../../assets/data/statuses";

const Step6 = () => {

    const {values, setFieldValue} = useFormikContext();

    return (
        <div>
            <h1 className="mt-4 text-3xl font-bold text-aqua-500">Preferences</h1>
            <ThemeProvider theme={theme}>
                <h6 className="mt-4 text-xl font-bold">What is your preferred gender?</h6>
                <FormControl component="fieldset">
                    <FormGroup row>
                        {genders.map((gender) => (
                            <FormControlLabel
                                key={gender.value}
                                control={
                                <Field name="preferences.tenantGender"
                                       as={Radio}
                                       value={gender.value}
                                       checked={values.preferences?.tenantGender === gender.value}
                                       onChange={(e) => setFieldValue('preferences.tenantGender', e.target.value)}
                                />}
                                label={gender.label}
                            />
                        ))}
                    </FormGroup>
                </FormControl>
                <h6 className="my-4 text-xl font-bold">What is your preferred age range?</h6>
                    <div>
                        <Slider
                            value={[
                                values.preferences.tenantMinimumAge || 1,
                                values.preferences.tenantMaximumAge || 100,
                            ]}
                            onChange={(event, newValue) => {
                                setFieldValue("preferences.tenantMinimumAge", newValue[0]);
                                setFieldValue("preferences.tenantMaximumAge", newValue[1]);
                            }}
                            valueLabelDisplay="auto"
                            min={1}
                            max={100}
                            marks
                            sx={{ m: 2, width: "80%" }}
                        />
                        <div className="mx-auto mb-4 flex gap-20">
                            <p className="text-sm text-gray-500">
                                Minimum age: {values.preferences.tenantMinimumAge}
                            </p>
                            <p className="text-sm text-gray-500">
                                Maximum age: {values.preferences.tenantMaximumAge}
                            </p>
                        </div>
                    </div>
                <h6 className="mt-6 text-xl font-bold">Tenant occupation</h6>
                <FormControl component="fieldset">
                    <FormGroup row>
                        {occupations.map((occupation) => (
                            <FormControlLabel
                                key={occupation.value}
                                control={
                                    <Field
                                        name="preferences.tenantOccupation"
                                        as={Radio}
                                        value={occupation.value}
                                        checked={values.preferences?.tenantOccupation === occupation.value}
                                        onChange={(e) => setFieldValue('preferences.tenantOccupation', e.target.value)} />
                                }
                                label={occupation.label}
                            />
                        ))}
                    </FormGroup>
                </FormControl>

                <h6 className="mt-6 text-xl font-bold">Smoking Status</h6>
                <FormControl component="fieldset">
                    <FormGroup row>
                        {smokingStatus.map((status) => (
                            <FormControlLabel
                                key={status.value}
                                control={
                                    <Field
                                        name="preferences.tenantSmokingStatus"
                                        as={Radio}
                                        value={status.value}
                                        checked={values.preferences?.tenantSmokingStatus === status.value}
                                        onChange={(e) => setFieldValue('preferences.tenantSmokingStatus', e.target.value)}
                                    />
                                }
                                label={status.label}
                            />
                        ))}
                    </FormGroup>
                </FormControl>

                <h6 className="mt-6 text-xl font-bold">Drinking Status</h6>
                <FormControl component="fieldset">
                    <FormGroup row>
                        {drinkingStatus.map((status) => (
                            <FormControlLabel
                                key={status.value}
                                control={
                                    <Field
                                        name="preferences.tenantDrinkingStatus"
                                        as={Radio}
                                        value={status.value}
                                        checked={values.preferences?.tenantDrinkingStatus === status.value}
                                        onChange={(e) => setFieldValue('preferences.tenantDrinkingStatus', e.target.value)} />
                                }
                                label={status.label}
                            />
                        ))}
                    </FormGroup>
                </FormControl>
            </ThemeProvider>
        </div>
    );
};

export default Step6;
