import axios from 'axios';

export const SET_PROPERTY_TYPE = 'SET_PROPERTY_TYPE';
export const SET_LOCATION_DATA = 'SET_LOCATION_DATA';

export const setStepPropertyType = (fieldName, value) => ({
    type: SET_PROPERTY_TYPE,
    payload: { fieldName, value },
});

export const setLocationData = (locationData) => ({
    type: SET_LOCATION_DATA,
    payload: locationData,
});
