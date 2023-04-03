import React, { useState, useEffect } from 'react';
import { Field } from 'formik';
import { TextField, ThemeProvider, createTheme } from '@mui/material';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import './google.scss';
import {useDispatch, useSelector} from "react-redux";
import {setLocationData} from "../../actions/ownerFormActions";
import { useFormikContext } from 'formik';

const libraries = ['places'];

const mapContainerStyle = {
    width: '100%',
    height: '400px',
};

const center = {
    lat: 40.712776,
    lng: -74.005974,
};

const Step2 = () => {
    const [mapCenter, setMapCenter] = useState(center);
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
        libraries,
    });

    const dispatch = useDispatch();
    const locationData = useSelector(state => state.owner.locationData) || {
        country: '',
        city: '',
    };
    const propertyType = useSelector(state => state.owner.propertyType);
    const { values, setFieldValue } = useFormikContext();

    useEffect(() => {
        if (locationData.city && locationData.country) {
            const geocoder = new window.google.maps.Geocoder();
            geocoder.geocode(
                { address: `${locationData.city}, ${locationData.country}` },
                (results, status) => {
                    if (status === 'OK') {
                        setMapCenter({
                            lat: results[0].geometry.location.lat(),
                            lng: results[0].geometry.location.lng(),
                        });
                    } else {
                        console.log(`Geocode was not successful for the following reason: ${status}`);
                    }
                }
            );
        }
    }, [locationData.city, locationData.country]);

    const theme = createTheme({
        palette: {
            primary: {
                main: '#05ce9f',
            },
        },
    });

    const handleCityChange = (selected) => {
        dispatch(setLocationData({ ...locationData, city: selected.label }));
        setFieldValue('propertyAddress.city', selected.label);
    };

    const handleCountryChange = (selected) => {
        dispatch(setLocationData({ ...locationData, country: selected.label }));
        setFieldValue('propertyAddress.country', selected.label);
    };

    if (loadError) return 'Error loading maps';
    if (!isLoaded) return 'Loading maps';


    return (
        <div>
            <h1 className="text-3xl font-bold mt-4 text-aqua-500">Property Address</h1>
            <h6>
                Tell us about the address of the{' '}
                <span className="text-aqua-500">{propertyType}</span>
            </h6>
            <div className="grid grid-cols-2 gap-8 mt-4">
                <div className="flex items-center">
                    <ThemeProvider theme={theme}>
                        <div className="ml-4">
                            <h6 className="text-xl font-bold mt-2">
                                Which country is the property located in?
                            </h6>
                            <div className="my-4">
                                <GooglePlacesAutocomplete
                                    apiKey={process.env.REACT_APP_GOOGLE_API_KEY}
                                    autocompletionRequest={{
                                        types: ['(regions)'],
                                    }}
                                    selectProps={{
                                        name: 'country',
                                        onChange: handleCountryChange,
                                    }}
                                    inputClassName="mb-4 w-full"
                                    placeholder="Country"
                                />
                            </div>
                            <h6 className="text-xl font-bold mt-2">
                                Which city is the property located in?
                            </h6>
                            <div className="my-4">
                                <GooglePlacesAutocomplete
                                    apiKey={process.env.REACT_APP_GOOGLE_API_KEY}
                                    autocompletionRequest={{
                                        types: ['(cities)'],
                                    }}
                                    selectProps={{
                                        name: 'city',
                                        onChange: handleCityChange,
                                    }}
                                    inputClassName="mb-4 w-full"
                                    placeholder="City"
                                />
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
                                    value={values.propertyAddress.street}
                                    fullWidth
                                    onChange={(e) => {
                                        setFieldValue('propertyAddress.street', e.target.value);
                                    }}
                                />
                            </div>

                            <h6 className="text-xl font-bold mt-2">
                                What is the the {propertyType} number or floor?
                            </h6>
                            <div className="my-4">
                                <Field
                                    as={TextField}
                                    name="propertyAddress.floor"
                                    label="Floor"
                                    type="number"
                                    variant="outlined"
                                    value={values.propertyAddress.floor}
                                    fullWidth
                                    className="mt-4"
                                    onChange={(e) => {
                                        setFieldValue('propertyAddress.floor', e.target.value);
                                    }}
                                />
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
                                    value={values.propertyAddress.apartmentNumber}
                                    fullWidth
                                    onChange={(e) => {
                                        setFieldValue('propertyAddress.apartmentNumber', e.target.value);
                                    }}
                                />
                            </div>
                        </div>
                    </ThemeProvider>
                </div>
                <div>
                    <GoogleMap
                        mapContainerStyle={mapContainerStyle}
                        zoom={12}
                        center={mapCenter}
                    >
                        <Marker position={mapCenter} />
                    </GoogleMap>
                </div>
            </div>
        </div>
    );
};

export default Step2;

