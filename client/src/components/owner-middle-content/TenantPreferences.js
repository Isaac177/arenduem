import React from 'react';
import { FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import preferencesData from '../../assets/data/preferencesData';

const TenantPreferences = ({ property }) => {
    const renderPreferenceValue = (preference) => {
        const preferenceValue = property?.Preference?.[preference.name];
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
            <h6 className="my-4 text-xl font-bold text-aqua-500">Tenant preferences</h6>
            <FormGroup row>
                {preferencesData.map((preference) => (
                    <div key={preference.name} className="flex flex-col gap-2 items-center p-2 m-2">
                        <p className="font-bold">{preference.label}</p>
                        <p className="text-gray-700 text-sm">{renderPreferenceValue(preference)}</p>
                    </div>
                ))}
            </FormGroup>
        </div>
    );
};

export default TenantPreferences;
