import React, { useState } from 'react';
import { Field } from 'formik';
import {
    Grid,
    FormControl,
    TextField,
    Button,
    ThemeProvider,
    Snackbar,
    Alert,
} from '@mui/material';
import Autocomplete from 'react-google-autocomplete';
import peopleImg from '../../assets/img/peopleImg.jpg';
import { useLoadScript } from '@react-google-maps/api';
import theme from '../utils/theme';

const Step7 = () => {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    });

    const [showVerificationCodeField, setShowVerificationCodeField] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);

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
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <h6 className="text-xl font-bold my-4">Country</h6>
                        <FormControl fullWidth>
                            <Autocomplete
                                apiKey={process.env.REACT_APP_GOOGLE_API_KEY}
                                onPlaceSelected={(place) => {
                                    console.log(place);
                                }}
                                types={['(regions)']}
                                componentRestrictions={{ country: 'country' }}
                            />
                        </FormControl>

                        <div className="my-2 flex flex-col gap-4">
                            <p className="text-sm font-medium">Phone Number</p>
                            <FormControl fullWidth>
                                <Field
                                    name="phoneNumber"
                                    as={TextField}
                                    variant="outlined"
                                    type="number"
                                    inputProps={{ min: 1 }}
                                    placeholder="Enter your phone number"
                                    sx={{ my: 2, p: 2 }}
                                />
                            </FormControl>
                        </div>

                        {showVerificationCodeField && (
                            <div className="my-2 flex flex-col gap-4">
                                <p className="text-sm font-medium">Verification Code</p>
                                <FormControl fullWidth>
                                    <Field
                                        name="verificationCode"
                                        as={TextField}
                                        variant="outlined"
                                        type="text"
                                        placeholder="Enter your verification code"
                                        sx={{ my: 2, p: 2 }}
                                    />
                                </FormControl>
                            </div>
                        )}

                        <div className="my-4 flex flex-row gap-4">
                            <Button variant="contained" color="primary" onClick={handleSendCodeClick}>
                                Send Code
                            </Button>
                            <Button variant="contained" color="primary" onClick={handleCodeButtonClick}>
                                I have a code
                            </Button>
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
                    </Grid>
                    <Grid sx={{ margin: '0 auto' }}>
                        <div
                            className="my-2 flex justify-center text-center items-center"
                            style={{
                                position: 'sticky',
                                top: 0,
                            }}
                        >
                            <img
                                src={peopleImg}
                                alt="gender"
                                className="cover h-96 w-full object-cover object-center"
                            />
                        </div>
                    </Grid>
                </Grid>
            </ThemeProvider>
        </div>
    );
};

export default Step7;