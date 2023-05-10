import React from 'react';
import { FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import houseRules from '../../assets/data/houseRules';

const HouseRules = ({ property }) => {
    const iconStyles = (isChecked) => {
        return isChecked
            ? 'flex flex-col items-center text-green-600 bg-green-50 border p-2 m-2 border-green-600 rounded-2xl cursor-pointer'
            : 'text-gray-500 flex flex-col items-center p-2 border m-2 border-green-600 rounded-2xl cursor-pointer';
    };

    return (
        <div>
            <h6 className="my-4 text-xl font-bold text-aqua-500">House rules</h6>
            <FormGroup row>
                {houseRules.map((rule) => (
                    <div key={rule.name} className={iconStyles(property[rule.name])}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    icon={rule.icon}
                                    checkedIcon={rule.icon}
                                    checked={property[rule.name] || false}
                                    disabled
                                />
                            }
                            label={rule.label}
                        />
                    </div>
                ))}
            </FormGroup>
        </div>
    );
};

export default HouseRules;
