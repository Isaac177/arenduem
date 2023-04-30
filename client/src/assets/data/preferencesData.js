import React from 'react';
import { People, Work, SmokeFree, LocalDrink } from '@mui/icons-material';

const preferencesData = [
    { name: 'tenantGender', label: 'Gender', icon: <People /> },
    { name: 'tenantMinimumAge', label: 'Min Age', icon: null },
    { name: 'tenantMaximumAge', label: 'Max Age', icon: null },
    { name: 'tenantOccupation', label: 'Occupation', icon: <Work /> },
    { name: 'tenantDrinkingStatus', label: 'Drinking', icon: <LocalDrink /> },
    { name: 'tenantSmokingStatus', label: 'Smoking', icon: <SmokeFree /> },
];

export default preferencesData;
