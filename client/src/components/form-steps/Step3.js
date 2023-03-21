import React from 'react';
import { Field } from 'formik';
import { TextField, Checkbox, FormControlLabel, FormGroup, FormControl, FormLabel, Grid, Typography, ThemeProvider, createTheme } from '@mui/material';
import { Home, SingleBed, Bathtub, PeopleAlt, MeetingRoom, Kitchen, Wifi, Tv, AcUnit, SmokeFree, LocalLaundryService, Elevator, LocalParking } from '@mui/icons-material';

const Step3 = () => {
    const theme = createTheme({
        palette: {
            primary: {
                main: '#078d51',
            },
        },
    });

    return (
        <div>
            <Typography variant="h6" gutterBottom>
                Property Details
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <ThemeProvider theme={theme}>
                        <div>
                            <h6 className="text-sm font-medium">Size (m²)</h6>
                            <Field
                                as={TextField}
                                name="size"
                                type="number"
                                label="Size (m²)"
                                variant="outlined"
                                fullWidth
                                onChange={(e) => console.log(e.target.value)}
                            />
                        </div>
                        <div>
                            <h6 className="text-sm font-medium">Number of Bedrooms</h6>
                            <Field
                                as={TextField}
                                name="bedrooms"
                                type="number"
                                label="Number of Bedrooms"
                                variant="outlined"
                                fullWidth
                                onChange={(e) => console.log(e.target.value)}
                            />
                        </div>
                        <div>
                            <h6 className="text-sm font-medium">Number of Bathrooms</h6>
                            <Field
                                as={TextField}
                                name="bathrooms"
                                type="number"
                                label="Number of Bathrooms"
                                variant="outlined"
                                fullWidth
                                onChange={(e) => console.log(e.target.value)}
                            />
                        </div>
                        <div>
                            <h6 className="text-sm font-medium">Maximum number of roommates</h6>
                            <Field
                                as={TextField}
                                name="roommates"
                                type="number"
                                label="Maximum number of roommates"
                                variant="outlined"
                                fullWidth
                                onChange={(e) => console.log(e.target.value)}
                            />
                        </div>
                    </ThemeProvider>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <ThemeProvider theme={theme}>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Are there any lifts in the building?</FormLabel>
                            <FormGroup>
                                <FormControlLabel
                                    control={<Checkbox />}
                                    label="Yes"
                                />
                                <FormControlLabel
                                    control={<Checkbox />}
                                    label="No"
                                />
                            </FormGroup>
                        </FormControl>
                        <div>
                            <h6 className="text-sm font-medium">Is the property furnished?</h6>
                            <FormGroup>
                                <FormControlLabel
                                    control={<Checkbox />}
                                    label="Yes"
                                />
                                <FormControlLabel
                                    control={<Checkbox />}
                                    label="No"
                                />
                            </FormGroup>
                        </div>
                        <div>
                            <h6 className="text-sm font-medium">Bed type</h6>
                            <FormControl fullWidth>
                                <Field
                                    name="bedType"
                                    as={TextField}
                                    select
                                    label="Bed type"
                                    variant="outlined"
                                    helperText="Please select a bed type"
                                    margin="normal"
                                    fullWidth
                                    onChange={(e) => console.log(e.target.value)}
                                >
                                    <option value="single">Single</option>
                                    <option value="double">Double</option>
                                    <option value="queen">Queen</option>
                                    <option value="king">King</option>
                                </Field>
                            </FormControl>
                        </div>
                        <div>
                            <h6 className="text-sm font-medium">Property amenities</h6>
                            <FormGroup row>
                                <FormControlLabel
                                    control={<Checkbox icon={<Home />} checkedIcon={<Home />} />}
                                    label="Home"
                                />
                                <FormControlLabel
                                    control={<Checkbox icon={<SingleBed />} checkedIcon={<SingleBed />} />}
                                    label="Bedroom"
                                />
                                <FormControlLabel
                                    control={<Checkbox icon={<Bathtub />} checkedIcon={<Bathtub />} />}
                                    label="Bathroom"
                                />
                                <FormControlLabel
                                    control={<Checkbox icon={<PeopleAlt />} checkedIcon={<PeopleAlt />} />}
                                    label="Roommates"
                                />
                                <FormControlLabel
                                    control={<Checkbox icon={<MeetingRoom />} checkedIcon={<MeetingRoom />} />}
                                    label="Living Room"
                                />
                                <FormControlLabel
                                    control={<Checkbox icon={<Kitchen />} checkedIcon={<Kitchen />} />}
                                    label="Kitchen"
                                />
                                <FormControlLabel
                                    control={<Checkbox icon={<Wifi />} checkedIcon={<Wifi />} />}
                                    label="Wifi"
                                />
                                <FormControlLabel
                                    control={<Checkbox icon={<Tv />} checkedIcon={<Tv />} />}
                                    label="TV"
                                />
                                <FormControlLabel
                                    control={<Checkbox icon={<AcUnit />} checkedIcon={<AcUnit />} />}
                                    label="Air conditioning"
                                />
                                <FormControlLabel
                                    control={<Checkbox icon={<SmokeFree />} checkedIcon={<SmokeFree />} />}
                                    label="Smoke free"
                                />
                                <FormControlLabel
                                    control={<Checkbox icon={<LocalLaundryService />} checkedIcon={<LocalLaundryService />} />}
                                    label="Laundry"
                                />
                                <FormControlLabel
                                    control={<Checkbox icon={<Elevator />} checkedIcon={<Elevator />} />}
                                    label="Elevator"
                                />
                                <FormControlLabel
                                    control={<Checkbox icon={<LocalParking />} checkedIcon={<LocalParking />} />}
                                    label="Parking"
                                />
                            </FormGroup>
                        </div>
                        <div>
                            <h6 className="text-sm font-medium">Room amenities</h6>
                            <FormGroup>
                                <FormControlLabel
                                    control={<Checkbox />}
                                    label="Balcony"
                                />
                                <FormControlLabel
                                    control={<Checkbox />}
                                    label="Private bathroom"
                                />
                                <FormControlLabel
                                    control={<Checkbox />}
                                    label="Private kitchen"
                                />
                                <FormControlLabel
                                    control={<Checkbox />}
                                    label="Desk"
                                />
                                <FormControlLabel
                                    control={<Checkbox />}
                                    label="Closet"
                                />
                            </FormGroup>
                        </div>
                        <div>
                            <h6 className="text-sm font-medium">House rules</h6>
                            <FormGroup>
                                <FormControlLabel
                                    control={<Checkbox />}
                                    label="No smoking"
                                />
                                <FormControlLabel
                                    control={<Checkbox />}
                                    label="No pets"
                                />
                                <FormControlLabel
                                    control={<Checkbox />}
                                    label="No parties"
                                />
                                <FormControlLabel
                                    control={<Checkbox />}
                                    label="Quiet hours"
                                />
                            </FormGroup>
                        </div>
                    </ThemeProvider>
                </Grid>
            </Grid>
        </div>
    );
};

export default Step3;
