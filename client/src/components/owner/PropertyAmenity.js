import React from 'react';
import { FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import amenities from '../../assets/data/amenities';

const PropertyAmenities = ({ firstProperty }) => {
    const iconStyles = (isChecked) => {
        return isChecked
            ? 'flex flex-col items-center text-green-600 bg-green-50 border p-2 m-2 border-green-600 rounded-2xl cursor-pointer'
            : 'flex flex-col items-center p-2 border m-2 border-gray-300 rounded-2xl cursor-pointer bg-gray-200';
    };

    return (
        <div>
            <h6 className="my-2 text-xl font-bold">Property amenities</h6>
            <FormGroup row>
                {amenities.map((amenity) => (
                    <div
                        key={amenity.name}
                        className={iconStyles(firstProperty[amenity.name])}
                    >
                        <FormControlLabel
                            control={
                                <Checkbox
                                    icon={amenity.icon}
                                    checkedIcon={amenity.icon}
                                    checked={firstProperty[amenity.name] || false}
                                    disabled
                                />
                            }
                            label={amenity.label}
                        />
                    </div>
                ))}
            </FormGroup>
        </div>
    );
};

export default PropertyAmenities;
