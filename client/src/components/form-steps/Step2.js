import React, { useState} from 'react';
import { Field, useFormikContext } from 'formik';
import { TextField, ThemeProvider, createTheme } from '@mui/material';
import Autocomplete from 'react-autocomplete';
import { getNames } from 'country-list';


const Step2 = ({ errors }) => {
    const [countryInput, setCountryInput] = useState('');

    const { values, setFieldValue } = useFormikContext();
    const countryNames = getNames();

    const handleCountryChange = (selectedCountry) => {
        setFieldValue('propertyAddress.country', selectedCountry);
    };

    const theme = createTheme({
        palette: {
            primary: {
                main: '#05ce9f',
            },
        },
    });


    return (
        <div>
            <h1 className="text-3xl font-bold mt-4 text-aqua-500">Property Address</h1>
            <h6>
                Tell us about the address of the{' '}
                <span className="text-aqua-500 mt-2">{values.propertyType}</span>
            </h6>
            <div className="grid grid-cols-2 gap-8 mt-4">
                <div className="flex items-center">
                    <ThemeProvider theme={theme}>
                        <div className="ml-4">
                            <div className="my-4">
                                <h6 className="text-xl font-bold my-4">
                                    Which country is the property located in?
                                </h6>
                                <Autocomplete
                                    getItemValue={(item) => item}
                                    items={countryNames}
                                    renderItem={(item, isHighlighted) => (
                                        <div
                                            key={item}
                                            style={{
                                                background: isHighlighted ? 'lightgray' : 'white',
                                                padding: '5px',
                                                zIndex: '1000',
                                                position: 'relative',
                                            }}
                                        >
                                            {item}
                                        </div>
                                    )}
                                    value={countryInput}
                                    onChange={(e) => setCountryInput(e.target.value)}
                                    onSelect={(val) => {
                                        setCountryInput(val);
                                        handleCountryChange(val);
                                        setFieldValue('propertyAddress.country', val);
                                    }}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            placeholder="Country"
                                            variant="outlined"
                                            label="Country"
                                            value={values.propertyAddress?.country}
                                            InputProps={{
                                                ...params.InputProps,
                                                style: {
                                                    width: '100%',
                                                    borderColor: 'green',
                                                },
                                            }}
                                            fullWidth
                                        />
                                    )}
                                    wrapperStyle={{ width: '100%', zIndex: '1000', position: 'relative' }}
                                />
                                {errors.propertyAddress?.country && (
                                    <div className="text-red-500 text-sm">
                                        {errors.propertyAddress?.country}
                                    </div>
                                        )}
                            </div>

                            <h6 className="text-xl font-bold mt-2">
                                Which city is the property located in?
                            </h6>
                            <div className="my-4">
                                 <Field
                                    as={TextField}
                                    name="propertyAddress.city"
                                    label="City"
                                    variant="outlined"
                                    value={values.propertyAddress?.city}
                                    fullWidth
                                    onChange={(e) => {
                                        setFieldValue('propertyAddress.city', e.target.value);
                                    }}
                                    errors={errors}
                                    sx={{zIndex: '0' }}
                                />
                                {errors.propertyAddress?.city && (
                                    <div className="text-red-500 text-sm">
                                        {errors.propertyAddress?.city}
                                    </div>
                                )}
                            </div>
                            <h6 className="text-xl font-bold mt-2">
                                Which street is the property located in?
                            </h6>
                            <div className="my-4">
                                <Field
                                    as={TextField}
                                    name="propertyAddress.street"
                                    label="Street and number"
                                    variant="outlined"
                                    value={values.propertyAddress?.street}
                                    fullWidth
                                    onChange={(e) => {
                                        setFieldValue('propertyAddress.street', e.target.value);
                                    }}
                                    errors={errors}
                                />
                                {errors.propertyAddress?.street && (
                                    <div className="text-red-500 text-sm">
                                        {errors.propertyAddress?.street}
                                    </div>
                                )}
                            </div>

                            <h6 className="text-xl font-bold mt-2">
                                What is the the {values.propertyType} number or floor?
                            </h6>
                            <div className="my-4">
                                <Field
                                    as={TextField}
                                    name="propertyAddress.floor"
                                    label="Floor"
                                    type="number"
                                    variant="outlined"
                                    value={values.propertyAddress?.floor}
                                    fullWidth
                                    className="mt-4"
                                    min={0}
                                    onChange={(e) => {
                                        const inputValue = parseInt(e.target.value, 10);
                                        const sanitizedValue = inputValue < 0 ? 0 : inputValue;
                                        setFieldValue('propertyAddress.floor', sanitizedValue);
                                    }}
                                    errors={errors}
                                />
                                {errors.propertyAddress?.floor && <div className="text-red-500 text-sm">{errors.propertyAddress?.floor}</div>}
                            </div>
                            <h6 className="text-xl font-bold mt-2">
                                What is the apartment number of the property?
                            </h6>
                            <div className="my-4">
                                <Field
                                    as={TextField}
                                    name="propertyAddress.apartmentNumber"
                                    type="number"
                                    label="Apartment number or door"
                                    variant="outlined"
                                    value={values.propertyAddress?.apartmentNumber}
                                    fullWidth
                                    min={0}
                                    onChange={(e) => {
                                        const inputValue = parseInt(e.target.value, 10);
                                        const sanitizedValue = inputValue < 0 ? 0 : inputValue;
                                        setFieldValue('propertyAddress.apartmentNumber', sanitizedValue);
                                    }}
                                    errors={errors}
                                />
                                {errors.propertyAddress?.apartmentNumber && <div className="text-red-500 text-sm">{errors.propertyAddress?.apartmentNumber}</div>}
                            </div>
                        </div>
                    </ThemeProvider>
                </div>
            </div>
        </div>
    );
};

export default Step2;

