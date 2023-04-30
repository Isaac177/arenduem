import React from 'react';
import { FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import preferencesData from '../../assets/data/preferencesData';

const TenantPreferences = ({ firstProperty }) => {
    const renderPreferenceValue = (preference) => {
        const preferenceValue = firstProperty.Preference[preference.name];
        if (preference.name === 'tenantGender') {
            return preferenceValue.charAt(0).toUpperCase() + preferenceValue.slice(1);
        } else if (preference.name === 'tenantMinimumAge' || preference.name === 'tenantMaximumAge') {
            return `${preferenceValue} years`;
        } else {
            return preferenceValue.charAt(0).toUpperCase() + preferenceValue.slice(1);
        }
    };

    return (
        <div>
            <h6 className="my-4 text-xl font-bold">Tenant preferences</h6>
            <FormGroup row>
                {preferencesData.map((preference) => (
                    <div key={preference.name} className="flex flex-row gap-2 items-center p-2 m-2">
                        <p className="text-sm text-gray-500">{preference.label}: </p>
                        <p className="font-bold">{renderPreferenceValue(preference)}</p>
                    </div>
                ))}
            </FormGroup>
        </div>
    );
};

export default TenantPreferences;
