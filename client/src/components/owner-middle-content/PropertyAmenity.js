import React from 'react';
import { FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import amenities from '../../assets/data/amenities';

const PropertyAmenities = ({ property }) => {
    const iconStyles = (isChecked) => {
        return isChecked
            ? 'flex flex-col items-center text-green-600 bg-green-50 border p-2 m-2 border-green-600 rounded-2xl cursor-pointer'
            : 'flex flex-col items-center p-2 border m-2 border-green-600 rounded-2xl cursor-pointer bg-transparent';
    };

    return (
        <div className='p-4 lg:p-0  lg:w-full'>
            <h6 className="my-2 text-xl font-bold text-aqua-500">Property amenities</h6>
            <FormGroup row className="flex flex-wrap">
                {amenities.map((amenity) => (
                    <div
                        key={amenity.name}
                        className={iconStyles(property?.[amenity?.name])}
                    >
                        <FormControlLabel
                            control={
                                <Checkbox
                                    icon={amenity?.icon}
                                    checkedIcon={amenity?.icon}
                                    checked={property[amenity?.name] || false}
                                    disabled
                                />
                            }
                            label={amenity?.label}
                        />
                    </div>
                ))}
            </FormGroup>
        </div>
    );
};

export default PropertyAmenities;
