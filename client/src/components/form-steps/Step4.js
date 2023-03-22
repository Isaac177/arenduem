import React, {useState} from 'react';
import { Field } from 'formik';
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
            <ThemeProvider theme={theme}>
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
                        <FormControl className="mt-4">
                            <Field
                                as={TextField}
                                name="minStay"
                                type="number"
                                label="Minimum stay (in months)"
                                variant="outlined"
                                onChange={(e) => console.log(e.target.value)}
                                sx={{ mb: 2 }}
                            />
                        </FormControl>
                    </div>

                    <div className="my-2 flex flex-col gap-4">
                        <p className="text-sm font-medium"> Maximum stay</p>
                        <FormControl className="mt-4">
                            <Field
                                as={TextField}
                                name="maxStay"
                                type="number"
                                label="Maximum stay (optional)"
                                variant="outlined"
                                onChange={(e) => console.log(e.target.value)}
                                sx={{ mb: 2 }}
                            />
                        </FormControl>
                    </div>

                    <div className="my-2 flex flex-col gap-4">
                        <p className="text-sm font-medium"> Price per month</p>
                        <FormControl fullWidth className="mt-4">
                            <Field
                                as={TextField}
                                name="price"
                                type="number"
                                label="Price per month (in tg)"
                                variant="outlined"
                                onChange={(e) => console.log(e.target.value)}
                                sx={{ mb: 2 }}
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
                                    as={TextField}
                                    name="deposit"
                                    type="number"
                                    label="Deposit (in tg)"
                                    variant="outlined"
                                    onChange={(e) => console.log(e.target.value)}
                                    sx={{ mb: 2 }}
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
                        className="cover h-96 w-full object-cover object-center"
                        style={{position: 'sticky', top: '0'}} />
                    </div>
                </Grid>
            </Grid>
            </ThemeProvider>
        </div>
    );
}

export default Step4;
