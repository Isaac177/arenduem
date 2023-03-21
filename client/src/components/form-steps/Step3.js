import React, {useState} from 'react';
import { Field } from 'formik';
import {
    TextField,
    Checkbox,
    FormControlLabel,
    FormGroup,
    FormControl,
    FormLabel,
    Grid,
    Typography,
    ThemeProvider,
    createTheme,
    MenuItem
} from '@mui/material';
import {
    Home,
    SingleBed,
    Bathtub,
    PeopleAlt,
    MeetingRoom,
    Kitchen,
    Wifi,
    Tv,
    AcUnit,
    SmokeFree,
    LocalLaundryService,
    Elevator,
    LocalParking,
    Balcony, DesktopMac, LocalOffer, DoNotDisturbAlt,
} from '@mui/icons-material';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import NoSmokingIcon from '@material-ui/icons/SmokeFree';
import PetsIcon from '@material-ui/icons/Pets';
import ChildFriendlyIcon from '@material-ui/icons/ChildCare';
import SmokingRoomsIcon from '@material-ui/icons/SmokingRooms';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import NoDrinksIcon from '@material-ui/icons/LocalDrink';
import PartyIcon from '@material-ui/icons/PartyMode';
import appart from '../../assets/img/appart.jpg';

const Step3 = () => {
    const [checked, setChecked] = useState(false);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    }


    const theme = createTheme({
        palette: {
            primary: {
                main: '#078d51',
            },
        },
    });

    const iconStyles = `${checked ? 'flex flex-col items-center bg-gray-300 p-2 border m-2 border-gray-300 rounded-2xl cursor-pointer' 
        : 'text-gray-500 flex flex-col items-center p-2 border m-2 border-gray-300 rounded-2xl cursor-pointer hover:bg-gray-200'}`;

    return (
        <div className="overflow-y-auto">
            <h1 className='text-2xl font-bold'>Property Details</h1>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <ThemeProvider theme={theme}>
                        <div>
                            <h6 className="text-sm font-medium mt-2">Size (m²):</h6>
                            <Field
                                as={TextField}
                                name="size"
                                type="number"
                                label="Size (m²)"
                                variant="outlined"
                                fullWidth
                                onChange={(e) => console.log(e.target.value)}
                                sx={{ mb: 2 }}
                            />
                        </div>
                        <div>
                            <h6 className="text-sm font-medium">Number of Bedrooms:</h6>
                            <Field
                                as={TextField}
                                name="bedrooms"
                                type="number"
                                label="Number of Bedrooms"
                                variant="outlined"
                                fullWidth
                                onChange={(e) => console.log(e.target.value)}
                                sx={{ my: 2 }}
                            />
                        </div>
                        <div>
                            <h6 className="text-sm font-medium">Number of Bathrooms:</h6>
                            <Field
                                as={TextField}
                                name="bathrooms"
                                type="number"
                                label="Number of Bathrooms"
                                variant="outlined"
                                fullWidth
                                onChange={(e) => console.log(e.target.value)}
                                sx={{ my: 2 }}
                            />
                        </div>
                        <div>
                            <h6 className="text-sm font-medium">Maximum number of roommates:</h6>
                            <Field
                                as={TextField}
                                name="roommates"
                                type="number"
                                label="Maximum number of roommates"
                                variant="outlined"
                                fullWidth
                                onChange={(e) => console.log(e.target.value)}
                                sx={{ my: 2 }}
                            />
                        </div>
                        <FormControl component="fieldset">
                            <h6 className="text-xl font-bold">Are there any lifts in the building?</h6>
                            <FormGroup>
                                <FormControlLabel
                                    control={<Checkbox onChange={(e) => console.log(e.target.value)} />}
                                    label="Yes"
                                />
                                <FormControlLabel
                                    control={<Checkbox onChange={(e) => console.log(e.target.value)} />}
                                    label="No"
                                />
                            </FormGroup>
                        </FormControl>
                        <div>
                            <h6 className="text-xl font-bold mt-4">Is the property furnished?</h6>
                            <FormGroup>
                                <FormControlLabel
                                    control={<Checkbox onChange={(e) => console.log(e.target.value)} />}
                                    label="Yes"
                                />
                                <FormControlLabel
                                    control={<Checkbox onChange={(e) => console.log(e.target.value)} />}
                                    label="No"
                                />
                            </FormGroup>
                        </div>
                        <div>
                            <h6 className="text-xl font-bold mt-4">Bed type</h6>
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
                                    onChange={(e) => e.stopPropagation()}
                                >
                                    <MenuItem value="single">Single</MenuItem>
                                    <MenuItem value="double">Double</MenuItem>
                                    <MenuItem value="queen">Queen</MenuItem>
                                    <MenuItem value="king">King</MenuItem>
                                    <MenuItem value="bunk">Bunk</MenuItem>
                                    <MenuItem value="sofa">Sofa</MenuItem>
                                </Field>
                            </FormControl>
                        </div>
                        <div>
                            <h6 className="text-xl font-bold my-2">Property amenities</h6>
                            <FormGroup row>
                                <div className={iconStyles}>
                                    <FormControlLabel
                                        control={
                                        <Checkbox
                                            icon={<Home />}
                                            checkedIcon={<Home />}
                                            checked={checked}
                                            onChange={handleChange}
                                        />}
                                        label="Home"
                                    />
                                </div>
                                <div className={iconStyles}>
                                    <FormControlLabel
                                        control={<Checkbox
                                            icon={<SingleBed />}
                                            checkedIcon={<SingleBed />}
                                            checked={checked}
                                            onChange={handleChange} />}
                                        label="Bedroom"
                                    />
                                </div>
                                <div className={iconStyles}>
                                    <FormControlLabel
                                        control={<Checkbox
                                            icon={<Bathtub />}
                                            checkedIcon={<Bathtub />}
                                            checked={checked}
                                            onChange={handleChange}
                                        />}
                                        label="Bathroom"
                                    />
                                </div>
                                <div className={iconStyles}>
                                    <FormControlLabel
                                        control={<Checkbox
                                            icon={<PeopleAlt />}
                                            checkedIcon={<PeopleAlt />}
                                            checked={checked}
                                            onChange={handleChange}
                                        />}
                                        label="Roommates"
                                    />
                                </div>
                                <div className={iconStyles}>
                                    <FormControlLabel
                                        control={<Checkbox
                                            icon={<MeetingRoom />}
                                            checkedIcon={<MeetingRoom />}
                                            checked={checked}
                                            onChange={handleChange}
                                        />}
                                        label="Living Room"
                                    />
                                </div>
                                <div className={iconStyles}>
                                    <FormControlLabel
                                        control={<Checkbox
                                            icon={<Kitchen />}
                                            checkedIcon={<Kitchen />}
                                            checked={checked}
                                            onChange={handleChange}
                                        />}
                                        label="Kitchen"
                                    />
                                </div>
                                <div className={iconStyles}>
                                    <FormControlLabel
                                        control={<Checkbox
                                            icon={<Wifi />}
                                            checkedIcon={<Wifi />}
                                            checked={checked}
                                            onChange={handleChange}
                                        />}
                                        label="Wifi"
                                    />
                                </div>
                                <div className={iconStyles}>
                                    <FormControlLabel
                                        control={<Checkbox
                                            icon={<Tv />}
                                            checkedIcon={<Tv />}
                                            checked={checked}
                                            onChange={handleChange}
                                        />}
                                        label="TV"
                                    />
                                </div>
                                <div className={iconStyles}>
                                    <FormControlLabel
                                        control={<Checkbox
                                            icon={<AcUnit />}
                                            checkedIcon={<AcUnit />}
                                            checked={checked}
                                            onChange={handleChange}
                                        />}
                                        label="Air conditioning"
                                    />
                                </div>
                                <div className={iconStyles}>
                                    <FormControlLabel
                                        control={<Checkbox
                                            icon={<SmokeFree />}
                                            checkedIcon={<SmokeFree />}
                                            checked={checked}
                                            onChange={handleChange}
                                        />}
                                        label="Smoke free"
                                    />
                                </div>
                                <div className={iconStyles}>
                                    <FormControlLabel
                                        control={<Checkbox
                                            icon={<LocalLaundryService />}
                                            checkedIcon={<LocalLaundryService />}
                                            checked={checked}
                                            onChange={handleChange}
                                        />}
                                        label="Laundry"
                                    />
                                </div>
                                <div className={iconStyles}>
                                    <FormControlLabel
                                        control={<Checkbox
                                            icon={<Elevator />}
                                            checkedIcon={<Elevator />}
                                            checked={checked}
                                            onChange={handleChange}
                                        />}
                                        label="Elevator"
                                    />
                                </div>
                                <div className={iconStyles}>
                                    <FormControlLabel
                                        control={<Checkbox
                                            icon={<LocalParking />}
                                            checkedIcon={<LocalParking />}
                                            checked={checked}
                                            onChange={handleChange}
                                        />}
                                        label="Parking"
                                    />
                                </div>
                            </FormGroup>
                        </div>
                        <div>
                            <h6 className="text-xl font-bold mt-4">Room amenities</h6>
                            <FormGroup row>
                                <div className={iconStyles}>
                                    <FormControlLabel
                                        control={<Checkbox
                                            icon={<Balcony />}
                                            checkedIcon={<Balcony />}
                                            checked={checked}
                                            onChange={handleChange}
                                        />}
                                        label="Balcony"
                                    />
                                </div>
                                <div className={iconStyles}>
                                    <FormControlLabel
                                        control={<Checkbox
                                            icon={<Bathtub />}
                                            checkedIcon={<Bathtub />}
                                            checked={checked}
                                            onChange={handleChange}
                                        />}
                                        label="Private bathroom"
                                    />
                                </div>
                                <div className={iconStyles}>
                                    <FormControlLabel
                                        control={<Checkbox
                                            icon={<Kitchen />}
                                            checkedIcon={<Kitchen />}
                                            checked={checked}
                                            onChange={handleChange}
                                        />}
                                        label="Private kitchen"
                                    />
                                </div>
                                <div className={iconStyles}>
                                    <FormControlLabel
                                        control={<Checkbox
                                            icon={<DesktopMac />}
                                            checkedIcon={<DesktopMac />}
                                            checked={checked}
                                            onChange={handleChange}
                                        />}
                                        label="Desk"
                                    />
                                </div>
                                <div className={iconStyles}>
                                    <FormControlLabel
                                        control={<Checkbox
                                            icon={<CheckroomIcon />}
                                            checkedIcon={<CheckroomIcon />}
                                            checked={checked}
                                            onChange={handleChange}
                                        />}
                                        label="Closet"
                                    />
                                </div>
                            </FormGroup>
                        </div>
                        <div>
                            <h6 className="text-xl font-bold my-4">House rules</h6>
                            <FormGroup row>
                                <div className={iconStyles}>
                                    <FormControlLabel
                                        control={<Checkbox
                                            icon={<NoSmokingIcon />}
                                            checkedIcon={<NoSmokingIcon />}
                                            checked={checked}
                                            onChange={handleChange}
                                        />}
                                        label="No smoking"
                                    />
                                </div>
                                <div className={iconStyles}>
                                    <FormControlLabel
                                        control={<Checkbox
                                            icon={<PetsIcon />}
                                            checkedIcon={<PetsIcon />}
                                            checked={checked}
                                            onChange={handleChange}
                                        />}
                                        label="Pets allowed"
                                    />
                                </div>
                                <div className={iconStyles}>
                                    <FormControlLabel
                                        control={<Checkbox
                                            icon={<ChildFriendlyIcon />}
                                            checkedIcon={<ChildFriendlyIcon />}
                                            checked={checked}
                                            onChange={handleChange}
                                        />}
                                        label="Children allowed"
                                    />
                                </div>
                                <div className={iconStyles}>
                                    <FormControlLabel
                                        control={<Checkbox
                                            icon={<SmokingRoomsIcon />}
                                            checkedIcon={<SmokingRoomsIcon />}
                                            checked={checked}
                                            onChange={handleChange}
                                        />}
                                        label="Smoking allowed"
                                    />
                                </div>
                                <div className={iconStyles}>
                                    <FormControlLabel
                                        control={<Checkbox
                                            icon={<EventAvailableIcon />}
                                            checkedIcon={<EventAvailableIcon />}
                                            checked={checked}
                                            onChange={handleChange}
                                        />}
                                        label="Events allowed"
                                    />
                                </div>
                                <div className={iconStyles}>
                                    <FormControlLabel
                                        control={<Checkbox
                                            icon={<NoDrinksIcon />}
                                            checkedIcon={<NoDrinksIcon />}
                                            checked={checked}
                                            onChange={handleChange}
                                        />}
                                        label="No drinking"
                                    />
                                </div>
                            </FormGroup>
                        </div>
                    </ThemeProvider>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <img src={appart}
                        alt="appart"
                        className="cover h-96 w-full object-center object-cover"
                         />
                </Grid>
            </Grid>
        </div>
    );
};

export default Step3;
