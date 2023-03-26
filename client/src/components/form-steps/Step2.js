import React, { useState, useEffect } from 'react';
import { Field } from 'formik';
import { TextField, ThemeProvider, createTheme } from '@mui/material';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import './google.scss';
import {useDispatch, useSelector} from "react-redux";
import {setLocationData} from "../../actions/ownerFormActions";
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    country: Yup.string().required('Country is required'),
    city: Yup.string().required('City is required'),
    street: Yup.string().required('Street is required'),
    floor: Yup.number().required('Floor is required'),
    apartmentNumber: Yup.number().required('Apartment number is required'),
});

const libraries = ['places'];

const mapContainerStyle = {
    width: '100%',
    height: '400px',
};

const center = {
    lat: 40.712776,
    lng: -74.005974,
};

const Step2 = ({ validationSchema }) => {
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
        dispatch(setLocationData({...locationData, city: selected.label}));
    };

    const handleCountryChange = (selected) => {
        dispatch(setLocationData({...locationData, country: selected.label}));
    };

    if (loadError) return 'Error loading maps';
    if (!isLoaded) return 'Loading maps';

    return (
        <div>
            <h6>
                Tell us about the address of the{' '}
                <span className="text-aqua-500">{propertyType}</span>
            </h6>
            <div className="grid grid-cols-2 gap-8 mt-4">
                <div className="flex items-center">
                    <ThemeProvider theme={theme}>
                        <div className="ml-4">
                            <h6 className="text-sm font-medium">
                                Which country is the property located in?
                            </h6>
                            <div className="my-2">
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
                            <h6 className="text-sm font-medium">
                                Which city is the property located in?
                            </h6>
                            <div className="my-2">
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
                            <h6 className="text-sm font-medium">
                                Which street is the property located in?
                            </h6>
                            <div className="my-2">
                                <Field
                                    as={TextField}
                                    name="street"
                                    label="Street"
                                    variant="outlined"
                                    fullWidth
                                    onChange={(e) => dispatch(setLocationData({...locationData, street: e.target.value}))}
                                />
                            </div>
                            <h6 className="text-sm font-medium">
                                What is the street number of the property?
                            </h6>
                            <div className="my-2">
                                <Field
                                    as={TextField}
                                    name="floor"
                                    label="Floor"
                                    type="number"
                                    variant="outlined"
                                    fullWidth
                                    className="mt-4"
                                    onChange={(e) => dispatch(setLocationData({...locationData, floor: e.target.value}))}
                                />
                            </div>
                            <h6 className="text-sm font-medium">
                                What is the apartment number of the property?
                            </h6>
                            <div className="my-2">
                                <Field
                                    as={TextField}
                                    name="apartmentNumber"
                                    type="number"
                                    label="Apartment number or door"
                                    variant="outlined"
                                    fullWidth
                                    onChange={(e) => dispatch(setLocationData({...locationData, apartmentNumber: e.target.value}))}
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

