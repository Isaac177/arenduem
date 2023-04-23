import React from 'react';
import {Field, useFormikContext} from 'formik';
import {
    TextField,
    Radio,
    FormControlLabel,
    FormGroup,
    Checkbox,
    FormControl,
    ThemeProvider,
    createTheme,
} from '@mui/material';
import amenities from "../../assets/data/amenities.js";
import houseRules from "../../assets/data/houseRules";


const Step3 = ({errors}) => {
    const { values, setFieldValue } = useFormikContext();

    const theme = createTheme({
        palette: {
            primary: {
                main: '#078d51',
            },
        },
    });

    const iconStyles = (isChecked) => {
        return isChecked
            ? 'flex flex-col items-center text-green-600 bg-green-50 border p-2 m-2 border-green-600 rounded-2xl cursor-pointer'
            : 'text-gray-500 flex flex-col items-center p-2 border m-2 border-gray-300 rounded-2xl cursor-pointer hover:bg-gray-200';
    };

    return (
        <div className="overflow-y-auto">
            <h1 className='text-2xl font-bold'>Property Details</h1>
            <ThemeProvider theme={theme}>
                {values.propertyType === 'Private apartment' && (
                    <>
                    <h6 className="mt-2 text-xl font-bold">Is your apartment a studio</h6>
                        <FormControl component="fieldset">
                            <FormGroup row>
                                <FormControlLabel
                                    control={
                                        <Radio
                                            name="propertyDetails.studio"
                                            value={true}
                                            checked={values.propertyDetails?.studio === true}
                                            onChange={(e) =>
                                                setFieldValue('propertyDetails.studio', JSON.parse(e.target.value))
                                            }
                                        />
                                    }
                                    label="Yes"
                                />
                                <FormControlLabel
                                    control={
                                        <Radio
                                            name="propertyDetails.studio"
                                            value={false}
                                            checked={values.propertyDetails?.studio === false}
                                            onChange={(e) =>
                                                setFieldValue('propertyDetails.studio', JSON.parse(e.target.value))
                                            }
                                        />
                                    }
                                    label="No"
                                />
                                {errors.propertyDetails?.studio && <p className="text-sm text-red-500">{errors.propertyDetails?.studio}</p>}
                            </FormGroup>
                        </FormControl>
                    </>
                    )}
                <div>
                    <h6 className="my-2 mt-4 text-xl font-bold">Size (m²):</h6>
                    <Field
                        as={TextField}
                        name="propertyDetails.size"
                        type="number"
                        label="Size (m²)"
                        variant="outlined"
                        min={0}
                        sx={{ mb: 2, width: '25%' }}
                        errors={errors}
                        onBlur={(e) => {
                            const inputValue = parseInt(e.target.value, 10);
                            const sanitizedValue = inputValue < 0 ? 0 : inputValue;
                            setFieldValue('propertyDetails.size', sanitizedValue);
                        }}
                    />
                    {errors.propertyDetails?.size && <p className="text-sm text-red-500">{errors.propertyDetails?.size}</p>}
                </div>
                <div>
                    <h6 className="mt-4 text-xl font-bold">Number of Bedrooms:</h6>
                    <Field
                        as={TextField}
                        name="propertyDetails.bedrooms"
                        type="number"
                        label="Number of Bedrooms"
                        variant="outlined"
                        value={values.propertyDetails?.bedrooms}
                        fullWidth
                        onChange={(e) => {
                            const inputValue = parseInt(e.target.value, 10);
                            const sanitizedValue = inputValue < 0 ? 0 : inputValue;
                            setFieldValue('propertyDetails.bedrooms', sanitizedValue);}
                        }
                        sx={{ my: 2,  width: '25%' }}
                        errors={errors}
                    />
                    {errors.propertyDetails?.bedrooms && <p className="text-sm text-red-500">{errors.propertyDetails?.bedrooms}</p>}
                </div>
                <div>
                    <h6 className="mt-4 text-xl font-bold">Number of Bathrooms:</h6>
                    <Field
                        as={TextField}
                        name="propertyDetails.bathrooms"
                        type="number"
                        label="Number of Bathrooms"
                        variant="outlined"
                        value={values.propertyDetails?.bathrooms}
                        fullWidth
                        onChange={(e) => setFieldValue('propertyDetails.bathrooms', e.target.value)}
                        sx={{ my: 2,  width: '25%'}}
                        errors={errors}
                    />
                    {errors.propertyDetails?.bathrooms && <p className="text-sm text-red-500">{errors.propertyDetails?.bathrooms}</p>}
                </div>
                <div>
                    <h6 className="mt-4 text-xl font-bold">Maximum number of roommates:</h6>
                    <Field
                        as={TextField}
                        name="propertyDetails.roommates"
                        type="number"
                        label="Maximum number of roommates"
                        variant="outlined"
                        value={values.propertyDetails?.roommates}
                        fullWidth
                        onChange={(e) => {
                            const inputValue = parseInt(e.target.value, 10);
                            const sanitizedValue = inputValue < 0 ? 0 : inputValue;
                            setFieldValue('propertyDetails.roommates', sanitizedValue);
                        }
                        }
                        sx={{ my: 2,  width: '25%' }}
                        errors={errors}
                    />
                    {errors.propertyDetails?.roommates && <p className="text-sm text-red-500">{errors.propertyDetails?.roommates}</p>}
                </div>

                <div>
                    <h6 className="mt-4 text-xl font-bold">Is the property furnished?</h6>
                    <FormGroup>
                        <FormControlLabel
                            control={
                                <Radio
                                    name="propertyDetails.furnished"
                                    value={true}
                                    checked={values.propertyDetails?.furnished === true}
                                    onChange={(e) =>
                                        setFieldValue('propertyDetails.furnished', JSON.parse(e.target.value))
                                    }
                                />
                            }
                            label="Yes"
                        />
                        <FormControlLabel
                            control={
                                <Radio
                                    name="propertyDetails.furnished"
                                    value={false}
                                    checked={values.propertyDetails?.furnished === false}
                                    onChange={(e) =>
                                        setFieldValue('propertyDetails.furnished', JSON.parse(e.target.value))
                                    }
                                />
                            }
                            label="No"
                        />
                        {errors.propertyDetails?.furnished && <p className="text-sm text-red-500">{errors.propertyDetails?.furnished}</p>}
                    </FormGroup>
                </div>
                <div>
                    <h6 className="mt-4 text-xl font-bold">Bed type</h6>
                    <FormControl fullWidth>
                        <FormGroup row>
                            {[
                                { value: "single", label: "Single" },
                                { value: "double", label: "Double" },
                                { value: "queen", label: "Queen" },
                                { value: "king", label: "King" },
                                { value: "bunk", label: "Bunk" },
                                { value: "sofa", label: "Sofa" },
                            ].map((option) => (
                                <FormControlLabel
                                    key={option.value}
                                    control={
                                        <Field
                                            name="propertyDetails.bedType"
                                            as={Radio}
                                            value={option.value}
                                            checked={values.propertyDetails?.bedType === option.value}
                                            onChange={(e) => setFieldValue("propertyDetails.bedType", e.target.value)}
                                        />
                                    }
                                    label={option.label}
                                />
                            ))}
                    {errors.propertyDetails?.bedType && <p className="text-sm text-red-500">{errors.propertyDetails?.bedType}</p>}
                        </FormGroup>
                    </FormControl>
                </div>
                <div>
                    <h6 className="my-2 text-xl font-bold">Property amenities</h6>
                    <FormGroup row>
                        {amenities.map((amenity) => (
                            <div
                                key={amenity.name}
                                className={iconStyles(values.propertyAmenities[amenity.name])}
                            >
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            icon={amenity.icon}
                                            checkedIcon={amenity.icon}
                                            checked={values.propertyAmenities[amenity.name] || false}
                                            value={amenity?.name}
                                            name={`propertyAmenities.${amenity.name}`}
                                            onChange={(e) =>
                                                setFieldValue(`propertyAmenities.${amenity?.name}`, e.target.checked)
                                            }
                                        />
                                    }
                                    label={amenity.label}
                                />
                    {errors.propertyAmenities?.[amenity.name] && <p className="text-sm text-red-500">{errors.propertyAmenities?.[amenity.name]}</p>}
                            </div>
                        ))}
                    </FormGroup>
                </div>
                <div>
                    <h6 className="my-4 text-xl font-bold">House rules</h6>
                    <FormGroup row>
                        {houseRules.map((rule) => (
                            <div key={rule.name} className={iconStyles(values.houseRules[rule.name])}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            icon={rule.icon}
                                            checkedIcon={rule.icon}
                                            checked={values.houseRules[rule.name] || false}
                                            value={rule?.name}
                                            name={`houseRules.${rule.name}`}
                                            onChange={(e) => setFieldValue(`houseRules.${rule?.name}`, e.target.checked)}
                                        />
                                    }
                                    label={rule.label}
                                />
                    {errors.houseRules?.[rule.name] && <p className="text-sm text-red-500">{errors.houseRules?.[rule.name]}</p>}
                            </div>
                        ))}
                    </FormGroup>
                </div>
            </ThemeProvider>
        </div>
    );
};

export default Step3;
