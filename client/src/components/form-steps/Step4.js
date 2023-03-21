import React, {useState} from 'react';
import { Field } from 'formik';
import {
    FormControl,
    TextField,
    Checkbox,
    FormGroup,
    FormControlLabel,
    InputLabel,
} from '@material-ui/core';
import DatePicker from 'react-datepicker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

import 'react-datepicker/dist/react-datepicker.css';
import {Grid} from "@mui/material";
import available from "../../assets/img/available.jpg";



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
                <FormControl fullWidth className="mt-4">
                    <InputLabel htmlFor="minStay">Minimum stay (months)</InputLabel>
                    <Field
                        name="minStay"
                        as={TextField}
                        type="number"
                        inputProps={{ min: 1 }}
                    />
                </FormControl>

                <FormControl fullWidth className="mt-4">
                    <InputLabel htmlFor="maxStay">Maximum stay (months or long stay)</InputLabel>
                    <Field
                        name="maxStay"
                        as={TextField}
                        type="number"
                        inputProps={{ min: 1 }}
                    />
                </FormControl>

                <FormControl fullWidth className="mt-4">
                    <InputLabel htmlFor="monthlyPayment">Monthly payment</InputLabel>
                    <Field name="monthlyPayment" as={TextField} type="number" />
                </FormControl>

                <FormControl fullWidth className="mt-4">
                    <FormGroup>
                        <FormControlLabel
                            control={<Field name="billsIncluded" as={Checkbox} />}
                            label="Bills included"
                        />
                    </FormGroup>
                </FormControl>

                <FormControl fullWidth className="mt-4">
                    <InputLabel htmlFor="deposit">Deposit</InputLabel>
                    <Field name="deposit" as={TextField} type="number" />
                </FormControl>

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
                <Grid>
                    <img src={available}
                    alt="available"
                    className="cover h-96 w-full object-cover"/>
                </Grid>
            </Grid>
        </div>
    );
}

export default Step4;
