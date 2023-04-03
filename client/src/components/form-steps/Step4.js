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
import available from "../../assets/img/available.jpg";
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

const Step4 = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const {values, setFieldValue} = useFormikContext();

    useEffect(() => {
        if (values.propertyAvailability) {
            setFieldValue('propertyAvailability.startDate', startDate);
            setFieldValue('propertyAvailability.endDate', endDate);
        }
    }, [startDate, endDate, setFieldValue, values.propertyAvailability]);


    return (
        <div>
            <h6 className="text-xl font-bold mt-4 text-aqua-500">Availability</h6>
            <ThemeProvider theme={theme}>
                <FormGroup row>
                    <div className="my-2 flex flex-row gap-4">
                    <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        dateFormat="MM/dd/yyyy"
                        value={values.propertyAvailability.startDate}
                        customInput={<CustomInput />}
                    />
                    <DatePicker
                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                        dateFormat="MM/dd/yyyy"
                        value={values.propertyAvailability.endDate}
                        customInput={<CustomInput />}
                        style={{my: 2}}
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
                                value={values.propertyAvailability.minStay}
                                onChange={(e) => setFieldValue('propertyAvailability.minStay', e.target.value)}
                                sx={{ mb: 2, width: '30%' }}
                            />
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
                                value={values.propertyAvailability.maxStay}
                                onChange={(e) => setFieldValue('propertyAvailability.maxStay', e.target.value)}
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
                                value={values.prices.pricePerMonth}
                                onChange={(e) => setFieldValue('prices.pricePerMonth', e.target.value)}
                                sx={{ mb: 2, width: '30%' }}
                            />
                        </FormControl>
                    </div>

                <FormControl className="mt-4">
                    <FormGroup>
                        <FormControlLabel
                            control={<Field
                                name="prices.billsIncluded"
                                as={Checkbox}
                                value={values.prices.billsIncluded}
                                onChange={(e) => setFieldValue('prices.billsIncluded', e.target.checked)}
                            />}
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
                                    value={values.prices.deposit}
                                    onChange={(e) => setFieldValue('prices.deposit', e.target.value)}
                                    sx={{ mb: 2, width: '30%' }}
                                />
                            </FormControl>
                    </div>

                <h6 className="text-xl font-bold mt-4">Other Services (optional)</h6>
                <FormGroup>
                    <FormControlLabel
                        control={<Field
                            name="otherServices.rentalContract"
                            as={Checkbox}
                            value={values.otherServices.rentalContract}
                            onChange={(e) => setFieldValue('otherServices.rentalContract', e.target.checked)}
                        />}
                        label="Rental contract"
                    />
                    <FormControlLabel
                        control={<Field
                            name="otherServices.cleaningService"
                            as={Checkbox}
                            value={values.otherServices.cleaningService}
                            onChange={(e) => setFieldValue('otherServices.cleaningService', e.target.checked)}
                        />
                        }
                        label="Cleaning service"
                    />
                            <FormControlLabel
                        control={<Field
                            name="otherServices.maintenance"
                            as={Checkbox}
                            value={values.otherServices.maintenance}
                            onChange={(e) => setFieldValue('otherServices.maintenance', e.target.checked)}
                        />}
                        label="Maintenance"
                    />
                </FormGroup>
            </ThemeProvider>
        </div>
    );
}

export default Step4;
