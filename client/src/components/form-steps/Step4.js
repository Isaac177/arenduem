import React, {useState} from 'react';
import { Field } from 'formik';
import {
    FormControl,
    TextField,
    Checkbox,
    FormGroup,
    FormControlLabel,
} from '@material-ui/core';
import DatePicker from 'react-datepicker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

import 'react-datepicker/dist/react-datepicker.css';
import {Grid} from "@mui/material";
import available from "../../assets/img/available.jpg";
import './custom-datepicker.css';


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


    return (
        <div>
            <h6 className="text-xl font-bold mt-4 text-aqua-500">Availability</h6>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                <FormGroup row>
                    <div className="my-2 flex flex-row gap-4">
                    <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        dateFormat="MM/dd/yyyy"
                        customInput={<CustomInput />}
                    />
                    <DatePicker
                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                        dateFormat="MM/dd/yyyy"
                        customInput={<CustomInput />}
                        style={{my: 2}}
                    />
                    </div>
                </FormGroup>
                    <div className="my-2 flex flex-col gap-4">
                        <p className="text-sm font-medium"> Minimum stay</p>
                        <FormControl fullWidth className="mt-4">
                            <Field
                                name="minStay"
                                as={TextField}
                                type="number"
                                variant="outlined"
                                inputProps={{ min: 1 }}
                                placeholder="Minimum stay (months)"
                                sx={{my: 2, p: 2, width: 50}}
                            />
                        </FormControl>
                    </div>

                    <div className="my-2 flex flex-col gap-4">
                        <p className="text-sm font-medium"> Maximum stay</p>
                        <FormControl fullWidth className="mt-4">
                            <Field
                                name="maxStay"
                                as={TextField}
                                variant="outlined"
                                type="number"
                                inputProps={{ min: 1 }}
                                placeholder="Maximum stay (months or long stay)"
                                sx={{my: 2, p: 2, width: 50}}
                            />
                        </FormControl>
                    </div>

                    <div className="my-2 flex flex-col gap-4">
                        <p className="text-sm font-medium"> Price per month</p>
                        <FormControl fullWidth className="mt-4">
                            <Field
                                name="monthlyPayment"
                                as={TextField}
                                type="number"
                                variant="outlined"
                                placeholder="Price per month"
                                sx={{my: 2, p: 2, width: 50}}
                            />
                        </FormControl>
                    </div>

                <FormControl fullWidth className="mt-4">
                    <FormGroup>
                        <FormControlLabel
                            control={<Field name="billsIncluded" as={Checkbox} />}
                            label="Bills included"
                        />
                    </FormGroup>
                </FormControl>

                    <div className="my-2 flex flex-col gap-4">
                        <p className="text-sm font-medium"> Deposit</p>
                            <FormControl fullWidth className="mt-4">
                                <Field
                                    name="deposit"
                                    as={TextField}
                                    type="number"
                                    variant="outlined"
                                    placeholder="Deposit (optional)"
                                    sx={{my: 2, p: 2, width: 50}}
                                />
                            </FormControl>
                    </div>

                <h6 className="text-xl font-bold mt-4">Other Services</h6>
                <FormGroup>
                    <FormControlLabel
                        control={<Field name="rentalContract" as={Checkbox} />}
                        label="Rental contract"
                    />
                    <FormControlLabel
                        control={<Field name="cleaningService" as={Checkbox} />}
                        label="Cleaning service"
                    />
                    <FormControlLabel
                        control={<Field name="maintenance" as={Checkbox} />}
                        label="Maintenance"
                    />
                </FormGroup>
            </Grid>
                <Grid sx={{margin: '0 auto'}}>
                    <div className="my-2 flex justify-center text-center items-center">
                        <img src={available}
                        alt="available"
                        className="cover h-96 w-full object-cover object-center"/>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default Step4;
