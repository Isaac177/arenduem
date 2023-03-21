import React, { useState, useEffect } from 'react';
import { Field } from 'formik';
import { TextField, ThemeProvider, createTheme } from '@mui/material';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import './google.scss';

const libraries = ['places'];

const mapContainerStyle = {
    width: '100%',
    height: '400px',
};

const center = {
    lat: 40.712776,
    lng: -74.005974,
};

const Step2 = ({ propertyType }) => {
    const [mapCenter, setMapCenter] = useState(center);
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
        libraries,
    });

    useEffect(() => {
        if (city && country) {
            const geocoder = new window.google.maps.Geocoder();
            geocoder.geocode(
                { address: `${city}, ${country}` },
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
    }, [city, country]);

    const theme = createTheme({
        palette: {
            primary: {
                main: '#078d51',
            },
        },
    });

    const handleCityChange = (selected) => {
        setCity(selected.label);
    };

    const handleCountryChange = (selected) => {
        setCountry(selected.label);
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
                                    onChange={(e) => console.log(e.target.value)}
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
                                    variant="outlined"
                                    fullWidth
                                    className="mt-4"
                                    onChange={(e) => console.log(e.target.value)}
                                />
                            </div>
                            <h6 className="text-sm font-medium">
                                What is the apartment number of the property?
                            </h6>
                            <div className="my-2">
                                <Field
                                    as={TextField}
                                    name="apartmentNumber"
                                    label="Apartment number or door"
                                    variant="outlined"
                                    fullWidth
                                    onChange={(e) => console.log(e.target.value)}
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

