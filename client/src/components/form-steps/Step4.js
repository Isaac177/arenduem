import React, {useEffect, useState} from 'react';
import {
    FormControl,
    TextField,
    Checkbox,
    FormGroup,
    FormControlLabel, Grid, ThemeProvider,
} from '@mui/material';
import DatePicker from 'react-datepicker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import 'react-datepicker/dist/react-datepicker.css';
import './custom-datepicker.css';
import theme from "../utils/theme";
import { useFormikContext, Field } from 'formik';



const CustomInput = ({ value, onClick }) => (
    <TextField
        variant="outlined"
        label="Date"
        onClick={onClick}
        value={value}
        InputProps={{
            endAdornment: (
                <FontAwesomeIcon icon={faCalendarAlt} />
            ),
            style: {
                '&:focus': {
                    color: '#078d51',
                },
            },
        }}
        InputLabelProps={{
            style: {
                '&:focus': {
                    color: '#078d51',
            },
        },
        }}
    />
);

const Step4 = ({startDate, setStartDate, endDate, setEndDate, errors}) => {

    const {values, setFieldValue} = useFormikContext();

    useEffect(() => {
        if (values.propertyAvailability) {
            setFieldValue('propertyAvailability.startDate', startDate);
            setFieldValue('propertyAvailability.endDate', endDate);
        }
    }, [startDate, endDate, setFieldValue, values.propertyAvailability]);


    return (
        <div>
            <h6 className="mt-4 text-xl font-bold">Availability</h6>
            <ThemeProvider theme={theme}>
                <FormGroup row>
                    <div className="my-2 flex flex-col gap-4">
                        <p className="text-sm font-medium">Available from</p>
                        <DatePicker
                            selected={startDate}
                            onChange={(date) => {
                                setStartDate(date);
                                setFieldValue('propertyAvailability.startDate', date);
                            }}
                            dateFormat="MM/dd/yyyy"
                            value={values.propertyAvailability?.startDate}
                            customInput={<CustomInput />}
                            label="Start date"
                        />
                        {errors.propertyAvailability?.startDate && <p className="text-sm text-red-500">{errors.propertyAvailability?.startDate}</p>}
                        <p className="text-sm font-medium">to</p>
                        <DatePicker
                            selected={endDate}
                            onChange={(date) => {
                                setEndDate(date);
                                setFieldValue('propertyAvailability.endDate', date);
                            }}
                            dateFormat="MM/dd/yyyy"
                            value={values.propertyAvailability?.endDate}
                            customInput={<CustomInput />}
                            style={{ my: 2 }}
                            label="End date (optional)"
                        />

                    </div>
                </FormGroup>
                <div className="my-2 flex flex-col gap-4">
                        <p className="text-sm font-medium"> Minimum stay (in months)</p>
                        <FormControl className="mt-4">
                            <Field
                                as={TextField}
                                name="propertyAvailability.minStay"
                                type="number"
                                label="Minimum stay"
                                variant="outlined"
                                value={values.propertyAvailability?.minStay}
                                onChange={(e) => {
                                    const inputValue = parseInt(e.target.value, 10);
                                    const sanitizedValue = inputValue < 0 ? 0 : inputValue;
                                    setFieldValue('propertyAvailability.minStay', sanitizedValue);
                                }}
                                sx={{ mb: 2, width: '30%' }}
                            />
                            {errors.propertyAvailability?.minStay && <p className="text-sm text-red-500">{errors.propertyAvailability?.minStay}</p>}
                        </FormControl>
                    </div>

                    <div className="my-2 flex flex-col gap-4">
                        <p className="text-sm font-medium"> Maximum stay (optional)</p>
                        <FormControl className="mt-4">
                            <Field
                                as={TextField}
                                name="propertyAvailability.maxStay"
                                type="number"
                                label="Maximum stay"
                                variant="outlined"
                                value={values.propertyAvailability?.maxStay}
                                onChange={(e) => {
                                    const inputValue = parseInt(e.target.value, 10);
                                    const sanitizedValue = inputValue < 0 ? 0 : inputValue;
                                    setFieldValue('propertyAvailability.maxStay', sanitizedValue);
                                }}
                                sx={{ mb: 2, width: '30%' }}
                            />
                        </FormControl>
                    </div>

                    <div className="my-2 flex flex-col gap-4">
                        <p className="text-sm font-medium"> Price per month (in tg)</p>
                        <FormControl className="mt-4">
                            <Field
                                as={TextField}
                                name="prices.pricePerMonth"
                                type="number"
                                label="Price per month"
                                variant="outlined"
                                value={values.prices?.pricePerMonth}
                                onChange={(e) => {
                                    const inputValue = parseInt(e.target.value, 10);
                                    const sanitizedValue = inputValue < 0 ? 0 : inputValue;
                                    setFieldValue('prices.pricePerMonth', sanitizedValue);
                                }}
                                sx={{ mb: 2, width: '30%' }}
                            />
                            {errors.prices?.pricePerMonth && <p className="text-sm text-red-500">{errors.prices?.pricePerMonth}</p>}
                        </FormControl>
                    </div>

                <FormControl className="mt-4">
                    <FormGroup>
                        <FormControlLabel
                            control={
                                <Field
                                    name="prices.billsIncluded"
                                    as={Checkbox}
                                    checked={values.prices?.billsIncluded || false}
                                    onChange={() =>
                                        setFieldValue(
                                            'prices.billsIncluded',
                                            !values.prices.billsIncluded
                                        )
                                    }
                                />
                            }
                            label="Bills included"
                        />
                    </FormGroup>
                </FormControl>
                    <div className="my-2 flex flex-col gap-4">
                        <p className="text-sm font-medium"> Deposit (optional)</p>
                            <FormControl className="mt-4">
                                <Field
                                    as={TextField}
                                    name="prices.deposit"
                                    type="number"
                                    label="Deposit (in tg)"
                                    variant="outlined"
                                    value={values.prices?.deposit}
                                    onChange={(e) => {
                                        const inputValue = parseInt(e.target.value, 10);
                                        const sanitizedValue = inputValue < 0 ? 0 : inputValue;
                                        setFieldValue('prices.deposit', sanitizedValue);
                                    }}
                                    sx={{ mb: 2, width: '30%' }}
                                />
                            </FormControl>
                    </div>

                <h6 className="mt-4 text-xl font-bold">Other Services (optional)</h6>
                <FormGroup>
                    <FormControlLabel
                        control={
                            <Field
                                name="otherServices.rentalContract"
                                as={Checkbox}
                                checked={values.otherServices?.rentalContract || false}
                                onChange={() =>
                                    setFieldValue(
                                        'otherServices.rentalContract',
                                        !values.otherServices.rentalContract
                                    )
                                }
                            />
                        }
                        label="Rental contract"
                    />
                    <FormControlLabel
                        control={
                            <Field
                                name="otherServices.cleaningService"
                                as={Checkbox}
                                checked={values.otherServices?.cleaningService || false}
                                onChange={() =>
                                    setFieldValue(
                                        'otherServices.cleaningService',
                                        !values.otherServices.cleaningService
                                    )
                                }
                            />
                        }
                        label="Cleaning service"
                    />
                    <FormControlLabel
                        control={
                            <Field
                                name="otherServices.maintenance"
                                as={Checkbox}
                                checked={values.otherServices?.maintenance || false}
                                onChange={() =>
                                    setFieldValue(
                                        'otherServices.maintenance',
                                        !values.otherServices.maintenance
                                    )
                                }
                            />
                        }
                        label="Maintenance"
                    />
                </FormGroup>
            </ThemeProvider>
        </div>
    );
}

export default Step4;
