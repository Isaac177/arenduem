import React from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import {FormControlLabel, Radio, RadioGroup} from "@mui/material";
import propertyTypes from "../../assets/data/propertyTypes";
import {Field, useFormikContext} from "formik";


const Step1 = ({ fieldName, step, setStep }) => {

    const {setFieldValue} = useFormikContext();

    return (
    <AnimatePresence>
        <div className="mx-auto mt-10 flex flex-col items-center justify-center text-primary-700">
            <motion.h1
                initial={{ opacity: 0}}
                animate={{ opacity: 1}}
                exit={{ opacity: 0}}
                className="mb-4 text-center text-3xl font-bold">
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
                                <div className="m-4 flex cursor-pointer flex-col items-center justify-center rounded-lg border border-gray-300 p-4 hover:bg-gray-200">
                                    <IconComponent className="mb-4 text-4xl" />
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
