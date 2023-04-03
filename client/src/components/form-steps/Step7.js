import React, { useState } from 'react';
import { Field, useFormikContext } from 'formik';
import {
    FormControl,
    TextField,
    ThemeProvider,
    Snackbar,
    Alert,
} from '@mui/material';
import Autocomplete from 'react-google-autocomplete';
import { useLoadScript } from '@react-google-maps/api';
import theme from '../utils/theme';

const Step7 = () => {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    });

    const [showVerificationCodeField, setShowVerificationCodeField] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);

    const { values, setFieldValue } = useFormikContext();

    const handleCodeButtonClick = () => {
        setShowVerificationCodeField(true);
    };

    const handleSendCodeClick = () => {
        setSnackbarOpen(true);
        setTimeout(() => {
            setSnackbarOpen(false);
        }, 3000);
    };

    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setSnackbarOpen(false);
    };

    return (
        <div>
            <h1 className="text-3xl font-bold mt-4 text-aqua-500">Phone Verification</h1>
            <ThemeProvider theme={theme}>
                <h6 className="text-xl font-bold my-4">Country</h6>
                <FormControl fullWidth>
                    <FormControl fullWidth>
                        <Autocomplete
                            apiKey={process.env.REACT_APP_GOOGLE_API_KEY}
                            onPlaceSelected={(place) => {
                                setFieldValue("phoneVerification.country", place.formatted_address);
                            }}
                            types={['(regions)']}
                            componentRestrictions={{ country: 'country' }}
                            className="m-2 w-96 rounded-sm border border-primaryGrey-500 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-aqua-500 focus:border-transparent"
                        />
                        <Field name="phoneVerification.country" type="hidden" />
                    </FormControl>
                </FormControl>


                <div className="my-2 flex flex-col gap-4">
                    <p className="text-xl font-bold">Phone Number</p>
                    <FormControl fullWidth>
                        <Field
                            name="phoneVerification.phoneNumber"
                            as={TextField}
                            variant="outlined"
                            type="number"
                            inputProps={{ min: 1 }}
                            placeholder="Enter your phone number"
                            sx={{ my: 2, p: 2, whidth: '40%'}}
                            value={values.phoneVerification?.phoneNumber}
                            onChange={(e) => setFieldValue('phoneVerification.phoneNumber', e.target.value)}
                        />
                    </FormControl>
                </div>

                {showVerificationCodeField && (
                    <FormControl fullWidth>
                        <Field
                            name="phoneVerification.verificationCode"
                            as={TextField}
                            variant="outlined"
                            type="text"
                            placeholder="Enter your verification code"
                            sx={{ my: 2, p: 2, width: '40%' }}
                            value={values.phoneVerification?.verificationCode}
                            onChange={(e) => setFieldValue('phoneVerification.verificationCode', e.target.value)}
                        />
                    </FormControl>
                )}

                <div className="my-4 flex flex-row gap-4">
                    <button className="bg-aqua-500 text-white px-4 py-2 rounded-md font-medium text-sm hover:bg-aqua-600"
                        onClick={handleSendCodeClick}
                    >
                        Send Code
                    </button>
                    <button className="bg-aqua-500 text-white px-4 py-2 rounded-md font-medium text-sm hover:bg-aqua-600"
                        onClick={handleCodeButtonClick}
                    >
                        I have a code
                    </button>
                </div>

                <Snackbar
                    open={snackbarOpen}
                    autoHideDuration={3000}
                    onClose={handleCloseSnackbar}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                >
                    <Alert onClose={handleCloseSnackbar} severity="info" sx={{ width: '100%' }}>
                        Sending the code. Please wait...
                    </Alert>
                </Snackbar>
            </ThemeProvider>
        </div>
    );
};

export default Step7;