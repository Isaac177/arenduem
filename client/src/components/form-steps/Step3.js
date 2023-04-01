import React, {useState} from 'react';
import {Field, useFormikContext} from 'formik';
import {
    TextField,
    Checkbox,
    FormControlLabel,
    FormGroup,
    FormControl,
    Grid,
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
    Balcony, DesktopMac
} from '@mui/icons-material';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import NoSmokingIcon from '@material-ui/icons/SmokeFree';
import PetsIcon from '@material-ui/icons/Pets';
import ChildFriendlyIcon from '@material-ui/icons/ChildCare';
import SmokingRoomsIcon from '@material-ui/icons/SmokingRooms';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import NoDrinksIcon from '@material-ui/icons/LocalDrink';
import Apartment from '../../assets/img/appart.jpg';
import {useDispatch, useSelector} from "react-redux";

const Step3 = () => {
    const [checked, setChecked] = useState(false);
    const dispatch = useDispatch();
    const { setFieldValue } = useFormikContext();
    const propertyType = useSelector((state) => state.owner.propertyType);


    const theme = createTheme({
        palette: {
            primary: {
                main: '#078d51',
            },
        },
    });

    const iconStyles = `${checked ? 'flex flex-col items-center bg-gray-300 p-2 border m-2 border-gray-300 rounded-2xl cursor-pointer' 
        : 'text-gray-500 flex flex-col items-center p-2 border m-2 border-gray-300 rounded-2xl cursor-pointer hover:bg-gray-200'}`;

    console.log(propertyType)
    return (
        <div className="overflow-y-auto">
            <h1 className='text-2xl font-bold'>Property Details</h1>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <ThemeProvider theme={theme}>
                        {propertyType === 'Private apartment' && (
                            <>
                            <h6 className="text-xl font-bold mt-2">Is your apartment a studio</h6>
                            <FormControl component="fieldset">
                                <FormGroup row>
                                    <FormControlLabel
                                        control={<Field
                                            name="studio"
                                            as={Checkbox}
                                            onChange={(e) => setFieldValue('studio', e.target.checked)}
                                        />}
                                        label="Yes"
                                    />
                                    <FormControlLabel
                                        control={<Field name="studio" as={Checkbox} onChange={(e) => setFieldValue('studio', !e.target.checked)}/>}
                                        label="No"
                                    />
                                </FormGroup>
                            </FormControl>
                            </>
                            )}
                        <div>
                            <h6 className="text-sm font-medium mt-2">Size (m²):</h6>
                            <Field
                                as={TextField}
                                name="size"
                                type="number"
                                label="Size (m²)"
                                variant="outlined"
                                value={propertyType === 'Private apartment' ? 'Studio' : ''}
                                onChange={(e) => setFieldValue('size', e.target.value)}
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
                                value={propertyType === 'Private apartment' ? 'Studio' : ''}
                                fullWidth
                                onChange={(e) => setFieldValue('bedrooms', e.target.value)}
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
                                value={propertyType === 'Private apartment' ? 'Studio' : ''}
                                fullWidth
                                onChange={(e) => setFieldValue('bathrooms', e.target.value)}
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
                                onChange={(e) => setFieldValue('roommates', e.target.value)}
                                sx={{ my: 2 }}
                            />
                        </div>
                        <FormControl component="fieldset">
                            <h6 className="text-xl font-bold">Are there any lifts in the building?</h6>
                            <FormGroup>
                                <FormControlLabel
                                    control={<Checkbox onChange={(e) => setFieldValue('lift', e.target.checked)} />}
                                    label="Yes"
                                    value="yes"
                                />
                                <FormControlLabel
                                    control={<Checkbox onChange={(e) => setFieldValue('lift', !e.target.checked)} />}
                                    label="No"
                                    value="no"
                                />
                            </FormGroup>
                        </FormControl>
                        <div>
                            <h6 className="text-xl font-bold mt-4">Is the property furnished?</h6>
                            <FormGroup>
                                <FormControlLabel
                                    control={<Checkbox onChange={(e) => setFieldValue('furnished', e.target.checked)} />}
                                    label="Yes"
                                    value="yes"
                                />
                                <FormControlLabel
                                    control={<Checkbox onChange={(e) => setFieldValue('furnished', !e.target.checked)} />}
                                    label="No"
                                    value="no"
                                />
                            </FormGroup>
                        </div>
                        <div>
                            <h6 className="text-xl font-bold mt-4">Bed type</h6>
                            <FormControl fullWidth>
                                <FormGroup row>
                                    <FormControlLabel
                                        control={<Field name="bedType" as={Checkbox} value="single" onChange={(e) => setFieldValue('bedType', e.target.value)} />}
                                        label="Single"
                                    />
                                    <FormControlLabel
                                        control={<Field name="bedType" as={Checkbox} value="double" onChange={(e) => setFieldValue('bedType', e.target.value)} />}
                                        label="Double"
                                    />
                                    <FormControlLabel
                                        control={<Field name="bedType" as={Checkbox} value="queen" onChange={(e) => setFieldValue('bedType', e.target.value)}/>}
                                        label="Queen"
                                    />
                                    <FormControlLabel
                                        control={<Field name="bedType" as={Checkbox} value="king" onChange={(e) => setFieldValue('bedType', e.target.value)}/>}
                                        label="King"
                                    />
                                    <FormControlLabel
                                        control={<Field name="bedType" as={Checkbox} value="bunk" onChange={(e) => setFieldValue('bedType', e.target.value)} />}
                                        label="Bunk"
                                    />
                                    <FormControlLabel
                                        control={<Field name="bedType" as={Checkbox} value="sofa" onChange={(e) => setFieldValue('bedType', e.target.value)}/>}
                                        label="Sofa"
                                    />
                                </FormGroup>
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
                                            value="home"
                                            onChange={(e) => setFieldValue('amenities', e.target.checked)}
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
                                            value="bedroom"
                                            onChange={(e) => setFieldValue('amenities', e.target.checked)}
                                        label="Bedroom"
                                    />} />
                                </div>
                                <div className={iconStyles}>
                                    <FormControlLabel
                                        control={<Checkbox
                                            icon={<Bathtub />}
                                            checkedIcon={<Bathtub />}
                                            checked={checked}
                                            value="bathroom"
                                            onChange={(e) => setFieldValue('amenities', e.target.checked)}
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
                                            value="roommates"
                                            onChange={(e) => setFieldValue('amenities', e.target.checked)}
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
                                            value='livingRoom'
                                            onChange={(e) => setFieldValue('amenities', e.target.checked)}
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
                                            value='kitchen'
                                            onChange={(e) => setFieldValue('amenities', e.target.checked)}
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
                                            value='wifi'
                                            onChange={(e) => setFieldValue('amenities', e.target.checked)}
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
                                            value='tv'
                                            onChange={(e) => setFieldValue('amenities', e.target.checked)}
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
                                            value='airConditioning'
                                            onChange={(e) => setFieldValue('amenities', e.target.checked)}
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
                                            value='smokeFree'
                                            onChange={(e) => setFieldValue('amenities', e.target.checked)}
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
                                            value='laundry'
                                            onChange={(e) => setFieldValue('amenities', e.target.checked)}
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
                                            value='elevator'
                                            onChange={(e) => setFieldValue('amenities', e.target.checked)}
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
                                            value='parking'
                                            onChange={(e) => setFieldValue('amenities', e.target.checked)}
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
                                            value='balcony'
                                            onChange={(e) => setFieldValue('amenities', e.target.checked)}
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
                                            value='privateBathroom'
                                            onChange={(e) => setFieldValue('amenities', e.target.checked)}
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
                                            value='privateKitchen'
                                            onChange={(e) => setFieldValue('amenities', e.target.checked)}
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
                                            value='desk'
                                            onChange={(e) => setFieldValue('amenities', e.target.checked)}
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
                                            value='closet'
                                            onChange={(e) => setFieldValue('amenities', e.target.checked)}
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
                                            value='noSmoking'
                                            onChange={(e) => setFieldValue('amenities', e.target.checked)}
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
                                            values='pets'
                                            onChange={(e) => setFieldValue('amenities', e.target.checked)}
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
                                            value='children'
                                            onChange={(e) => setFieldValue('amenities', e.target.checked)}
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
                                            value='smoking'
                                            onChange={(e) => setFieldValue('amenities', e.target.checked)}
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
                                            value='events'
                                            onChange={(e) => setFieldValue('amenities', e.target.checked)}
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
                                            value='noDrinking'
                                            onChange={(e) => setFieldValue('amenities', e.target.checked)}
                                        />}
                                        label="No drinking"
                                    />
                                </div>
                            </FormGroup>
                        </div>
                    </ThemeProvider>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <img src={Apartment}
                        alt="Apartment"
                        className="cover mt-80 h-96 w-full object-center object-cover"
                    />
                </Grid>
            </Grid>
        </div>
    );
};

export default Step3;
