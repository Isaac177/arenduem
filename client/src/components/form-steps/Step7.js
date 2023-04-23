import React, { useState } from 'react';
import { Field, useFormikContext } from 'formik';
import {
    FormControl,
    TextField,
    ThemeProvider,
    Snackbar,
    Alert,
} from '@mui/material';
import theme from '../utils/theme';
import { parsePhoneNumberFromString, AsYouType } from 'libphonenumber-js';
import { getNames } from 'country-list';
import Autocomplete from 'react-autocomplete';


const Step7 = () => {
    const [showVerificationCodeField, setShowVerificationCodeField] = useState(
        false,
    );
    const [countryInput, setCountryInput] = useState('');

    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(false);
    const [buttonText, setButtonText] = useState('Send Code');

    const {values, setFieldValue} = useFormikContext();
    const countryNames = getNames();

    const handlePhoneInputChange = (e) => {
        const rawValue = e.target.value;
        const phoneNumber = parsePhoneNumberFromString(rawValue);

        if (phoneNumber) {
            const formattedValue = phoneNumber.formatInternational();
            setFieldValue('phoneVerification.phoneNumber', formattedValue);
            setIsValidPhoneNumber(phoneNumber.isValid());
        } else {
            const asYouType = new AsYouType();
            const partiallyFormattedValue = asYouType.input(rawValue);
            setFieldValue('phoneVerification.phoneNumber', partiallyFormattedValue);
            setIsValidPhoneNumber(false);
        }
    };

    const handleSendCodeClick = () => {
        if (!showVerificationCodeField && isValidPhoneNumber) {
            setShowVerificationCodeField(true);
            setButtonText('I have a code');
        } else if (showVerificationCodeField) {
            // Call the function to send the verification code
            // and handle the verification process
        }
    };

    function handleCloseSnackbar() {
        setSnackbarOpen(false);
    }

    return (
        <div>
            <h1 className="mt-4 text-3xl font-bold text-aqua-500">
                Phone Verification
            </h1>
            <ThemeProvider theme={theme}>
                <h6 className="my-4 text-xl font-bold">Country</h6>
                <FormControl fullWidth>
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
                            //handleCountryChange(val);
                            setFieldValue('phoneVerification.country', val);
                        }}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                placeholder="Country"
                                variant="outlined"
                                label="Country"
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
                </FormControl>

                <div className="my-2 flex flex-col gap-4">
                    <p className="text-xl font-bold">Phone Number</p>
                    <FormControl fullWidth>
                        <Field
                            name="phoneVerification.phoneNumber"
                            as={TextField}
                            variant="outlined"
                            type="tel"
                            placeholder="Enter your phone number"
                            sx={{my: 2, p: 2, width: '40%'}}
                            value={values.phoneVerification?.phoneNumber}
                            onChange={handlePhoneInputChange}
                            onBlur={handlePhoneInputChange}
                           />
                    </FormControl>
                </div>

                {isValidPhoneNumber && showVerificationCodeField && (
                    <FormControl fullWidth>
                        <Field
                            name="phoneVerification.verificationCode"
                            as={TextField}
                            variant="outlined"
                            type="text"
                            placeholder="Enter your verification code"
                            sx={{my: 2, p: 2, width: '40%'}}
                            value={values.phoneVerification?.verificationCode}
                            onChange={(e) => setFieldValue('phoneVerification.verificationCode', e.target.value)}
                        />
                    </FormControl>
                )}

                <button
                    type="button"
                    className="rounded-md px-4 py-2 text-sm font-medium text-white bg-aqua-500 hover:bg-aqua-600"
                    onClick={handleSendCodeClick}
                >
                    {buttonText}
                </button>

                <Snackbar
                    open={snackbarOpen}
                    autoHideDuration={3000}
                    onClose={handleCloseSnackbar}
                    anchorOrigin={{vertical: 'bottom', horizontal: 'left'}}
                >
                    <Alert onClose={handleCloseSnackbar} severity="info" sx={{width: '100%'}}>
                        Sending the code. Please wait...
                    </Alert>
                </Snackbar>
            </ThemeProvider>
        </div>
    );
};
export default Step7;
