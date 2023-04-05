import React from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import {FormControlLabel, Radio, RadioGroup} from "@mui/material";
import propertyTypes from "../../assets/data/propertyTypes";
import {Field, useFormikContext} from "formik";


const Step1 = ({ fieldName, step, setStep }) => {

    const {setFieldValue} = useFormikContext();

    return (
    <AnimatePresence>
        <div className="flex flex-col items-center justify-center mx-auto text-primary-700 mt-10">
            <motion.h1
                initial={{ opacity: 0}}
                animate={{ opacity: 1}}
                exit={{ opacity: 0}}
                className="text-3xl font-bold mb-4 text-center">
                What type of property are you listing?
            </motion.h1>
            <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9, transition: { duration: 0.5 }}}
                animate={{ opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 }}}
                exit={{ opacity: 0, y: 20, scale: 0.9, transition: { duration: 0.5 }}}
                className="flex flex-wrap justify-center">
                <RadioGroup style={{ display: 'flex', flexDirection: 'row', gap: '16px' }}>
                    {propertyTypes.map(({ value, label, IconComponent }) => (
                        <FormControlLabel
                            key={value}
                            control={
                                <Field
                                    name="propertyType"
                                    type="radio"
                                    value={value}
                                    checked={value === fieldName}
                                    onChange={(e) => {
                                        setFieldValue('propertyType', e.target.value);
                                        setStep(step + 1);
                                    }}
                                    as={Radio}
                                    style={{ display: 'none' }}
                                />
                            }
                            label={
                                <div className="flex flex-col items-center justify-center m-4 p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-200">
                                    <IconComponent className="text-4xl mb-4" />
                                    <p className="text-lg font-medium">{label}</p>
                                </div>
                            }
                        />
                    ))}
                </RadioGroup>
            </motion.div>
        </div>
    </AnimatePresence>
    );
};

export default Step1;
