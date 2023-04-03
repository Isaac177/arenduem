import React, {useState} from 'react';
import {Field, useFormikContext} from 'formik';
import {
    TextField,
    Radio,
    FormControlLabel,
    FormGroup,
    Checkbox,
    FormControl,
    ThemeProvider,
    createTheme,
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
import {useDispatch, useSelector} from "react-redux";

const Step3 = () => {
    const [checked, setChecked] = useState(false);
    const dispatch = useDispatch();
    const { values, setFieldValue } = useFormikContext();
    const propertyType = useSelector((state) => state.owner.propertyType);


    const theme = createTheme({
        palette: {
            primary: {
                main: '#078d51',
            },
        },
    });

    const iconStyles = (isChecked) => {
        return isChecked
            ? 'flex flex-col items-center text-green-600 bg-green-50 border p-2 m-2 border-green-600 rounded-2xl cursor-pointer'
            : 'text-gray-500 flex flex-col items-center p-2 border m-2 border-gray-300 rounded-2xl cursor-pointer hover:bg-gray-200';
    };

    console.log(propertyType)
    return (
        <div className="overflow-y-auto">
            <h1 className='text-2xl font-bold'>Property Details</h1>
            <ThemeProvider theme={theme}>
                {propertyType === 'Private apartment' && (
                    <>
                    <h6 className="text-xl font-bold mt-2">Is your apartment a studio</h6>
                    <FormControl component="fieldset">
                        <FormGroup row>
                            <FormControlLabel
                                control={<Field
                                    name="propertyDetails.studio"
                                    as={Radio}
                                    value={true}
                                    onChange={(e) => setFieldValue('propertyDetails.studio', e.target.value === 'true')}
                                />}
                                label="Yes"
                            />
                            <FormControlLabel
                                control={<Field
                                    name="propertyDetails.studio"
                                    as={Radio}
                                    value={false}
                                    onChange={(e) => setFieldValue('propertyDetails.studio', e.target.value === 'false')}
                                />}
                                label="No"
                            />
                        </FormGroup>
                    </FormControl>
                    </>
                    )}
                <div>
                    <h6 className="text-xl font-bold mt-4 my-2">Size (m²):</h6>
                    <Field
                        as={TextField}
                        name="propertyDetails.size"
                        type="number"
                        label="Size (m²)"
                        variant="outlined"
                        value={values.propertyDetails.size}
                        onChange={(e) => setFieldValue('propertyDetails.size', e.target.value)}
                        sx={{ mb: 2, width: '25%' }}
                    />
                </div>
                <div>
                    <h6 className="text-xl font-bold mt-4">Number of Bedrooms:</h6>
                    <Field
                        as={TextField}
                        name="propertyDetails.bedrooms"
                        type="number"
                        label="Number of Bedrooms"
                        variant="outlined"
                        fullWidth
                        onChange={(e) => setFieldValue('propertyDetails.bedrooms', e.target.value)}
                        sx={{ my: 2,  width: '25%' }}
                    />
                </div>
                <div>
                    <h6 className="text-xl font-bold mt-4">Number of Bathrooms:</h6>
                    <Field
                        as={TextField}
                        name="propertyDetails.bathrooms"
                        type="number"
                        label="Number of Bathrooms"
                        variant="outlined"
                        fullWidth
                        onChange={(e) => setFieldValue('propertyDetails.bathrooms', e.target.value)}
                        sx={{ my: 2,  width: '25%'}}
                    />
                </div>
                <div>
                    <h6 className="text-xl font-bold mt-4">Maximum number of roommates:</h6>
                    <Field
                        as={TextField}
                        name="propertyDetails.roommates"
                        type="number"
                        label="Maximum number of roommates"
                        variant="outlined"
                        fullWidth
                        onChange={(e) => setFieldValue('propertyDetails.roommates', e.target.value)}
                        sx={{ my: 2,  width: '25%' }}
                    />
                </div>

                <div>
                    <h6 className="text-xl font-bold mt-4">Is the property furnished?</h6>
                    <FormGroup>
                        <FormControlLabel
                            control={<Radio
                                name="propertyDetails.furnished"
                                onChange={(e) => setFieldValue('propertyDetails.furnished', e.target.value === 'true')} />}
                            label="Yes"
                            value="yes"
                        />
                        <FormControlLabel
                            control={<Radio
                                name="propertyDetails.furnished"
                                onChange={(e) => setFieldValue('propertyDetails.furnished', e.target.value === 'false')} />}
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
                                control={
                                    <Field
                                        name="propertyDetails.bedType"
                                        as={Radio}
                                        value="single"
                                        onChange={(e) => setFieldValue('propertyDetails.bedType', e.target.value)}
                                    />
                                }
                                label="Single"
                            />
                            <FormControlLabel
                                control={
                                    <Field
                                        name="propertyDetails.bedType"
                                        as={Radio}
                                        value="double"
                                        onChange={(e) => setFieldValue('propertyDetails.bedType', e.target.value)}
                                    />
                                }
                                label="Double"
                            />
                            <FormControlLabel
                                control={
                                    <Field
                                        name="propertyDetails.bedType"
                                        as={Radio}
                                        value="queen"
                                        onChange={(e) => setFieldValue('propertyDetails.bedType', e.target.value)}
                                    />
                                }
                                label="Queen"
                            />
                            <FormControlLabel
                                control={
                                    <Field
                                        name="propertyDetails.bedType"
                                        as={Radio}
                                        value="king"
                                        onChange={(e) => setFieldValue('propertyDetails.bedType', e.target.value)}
                                    />
                                }
                                label="King"
                            />
                            <FormControlLabel
                                control={
                                    <Field
                                        name="propertyDetails.bedType"
                                        as={Radio}
                                        value="bunk"
                                        onChange={(e) => setFieldValue('propertyDetails.bedType', e.target.value)}
                                    />
                                }
                                label="Bunk"
                            />
                            <FormControlLabel
                                control={
                                    <Field
                                        name="propertyDetails.bedType"
                                        as={Radio}
                                        value="sofa"
                                        onChange={(e) => setFieldValue('propertyDetails.bedType', e.target.value)}
                                    />
                                }
                                label="Sofa"
                            />
                        </FormGroup>
                    </FormControl>
                </div>
                <div>
                    <h6 className="text-xl font-bold my-2">Property amenities</h6>
                    <FormGroup row>
                        <div className={iconStyles(values.propertyAmenities.homeType)}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        icon={<Home />}
                                        checkedIcon={<Home />}
                                        checked={values.propertyAmenities.homeType || false}
                                        value="homeType"
                                        name="propertyAmenities.homeType"
                                        onChange={(e) =>
                                            setFieldValue('propertyAmenities.homeType', e.target.checked)
                                        }
                                    />
                                }
                                label="Home"
                            />
                        </div>

                        <div className={iconStyles(values.propertyAmenities.bedroom)}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        icon={<SingleBed />}
                                        checkedIcon={<SingleBed />}
                                        checked={values.propertyAmenities.bedroom || false}
                                        name="propertyAmenities.bedroom"
                                        value="bedroom"
                                        onChange={(e) =>
                                            setFieldValue('propertyAmenities.bedroom', e.target.checked)
                                        }
                                    />
                                }
                                label="Bedroom"
                            />
                        </div>
                        <div className={iconStyles(values.propertyAmenities.bathroom)}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        icon={<Bathtub />}
                                        checkedIcon={<Bathtub />}
                                        checked={values.propertyAmenities.bathroom || false}
                                        name="propertyAmenities.bathroom"
                                        value="bathroom"
                                        onChange={(e) =>
                                            setFieldValue('propertyAmenities.bathroom', e.target.checked)
                                        }
                                    />
                                }
                                label="Bathroom"
                            />
                        </div>
                        <div className={iconStyles(values.propertyAmenities.roommates)}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        icon={<PeopleAlt />}
                                        checkedIcon={<PeopleAlt />}
                                        checked={values.propertyAmenities.roommates || false}
                                        name="propertyAmenities.roommates"
                                        value="roommates"
                                        onChange={(e) =>
                                            setFieldValue('propertyAmenities.roommates', e.target.checked)
                                        }
                                    />
                                }
                                label="Roommates"
                            />
                        </div>
                        <div className={iconStyles(values.propertyAmenities.livingRoom)}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        icon={<MeetingRoom />}
                                        checkedIcon={<MeetingRoom />}
                                        checked={values.propertyAmenities.livingRoom || false}
                                        name="propertyAmenities.livingRoom"
                                        value="livingRoom"
                                        onChange={(e) =>
                                            setFieldValue('propertyAmenities.livingRoom', e.target.checked)
                                        }
                                    />
                                }
                                label="Living Room"
                            />
                        </div>
                        <div className={iconStyles(values.propertyAmenities.kitchen)}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        icon={<Kitchen />}
                                        checkedIcon={<Kitchen />}
                                        checked={values.propertyAmenities.kitchen || false}
                                        name="propertyAmenities.kitchen"
                                        value="kitchen"
                                        onChange={(e) =>
                                            setFieldValue('propertyAmenities.kitchen', e.target.checked)
                                        }
                                    />
                                }
                                label="Kitchen"
                            />
                        </div>
                        <div className={iconStyles(values.propertyAmenities.wifi)}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        icon={<Wifi />}
                                        checkedIcon={<Wifi />}
                                        checked={values.propertyAmenities.wifi || false}
                                        name="propertyAmenities.wifi"
                                        value="wifi"
                                        onChange={(e) =>
                                            setFieldValue('propertyAmenities.wifi', e.target.checked)
                                        }
                                    />
                                }
                                label="Wifi"
                            />
                        </div>
                        <div className={iconStyles(values.propertyAmenities.tv)}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        icon={<Tv />}
                                        checkedIcon={<Tv />}
                                        checked={values.propertyAmenities.tv || false}
                                        name="propertyAmenities.tv"
                                        value="tv"
                                        onChange={(e) =>
                                            setFieldValue('propertyAmenities.tv', e.target.checked)
                                        }
                                    />
                                }
                                label="TV"
                            />
                        </div>
                        <div className={iconStyles(values.propertyAmenities.airConditioning)}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        icon={<AcUnit />}
                                        checkedIcon={<AcUnit />}
                                        checked={values.propertyAmenities.airConditioning || false}
                                        value='airConditioning'
                                        name='propertyAmenities.airConditioning'
                                        onChange={(e) =>
                                            setFieldValue('propertyAmenities.airConditioning', e.target.checked)
                                        }
                                    />
                                }
                                label='Air conditioning'
                            />
                        </div>
                        <div className={iconStyles(values.propertyAmenities.smokeFree)}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        icon={<SmokeFree />}
                                        checkedIcon={<SmokeFree />}
                                        checked={values.propertyAmenities.smokeFree || false}
                                        value='smokeFree'
                                        name='propertyAmenities.smokeFree'
                                        onChange={(e) =>
                                            setFieldValue('propertyAmenities.smokeFree', e.target.checked)
                                        }
                                    />
                                }
                                label='Smoke free'
                            />
                        </div>
                        <div className={iconStyles(values.propertyAmenities.laundry)}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        icon={<LocalLaundryService />}
                                        checkedIcon={<LocalLaundryService />}
                                        checked={values.propertyAmenities.laundry || false}
                                        value='laundry'
                                        name='propertyAmenities.laundry'
                                        onChange={(e) =>
                                            setFieldValue('propertyAmenities.laundry', e.target.checked)
                                        }
                                    />
                                }
                                label='Laundry'
                            />
                        </div>
                        <div className={iconStyles(values.propertyAmenities.elevator)}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        icon={<Elevator />}
                                        checkedIcon={<Elevator />}
                                        checked={values.propertyAmenities.elevator || false}
                                        value='elevator'
                                        name='propertyAmenities.elevator'
                                        onChange={(e) =>
                                            setFieldValue('propertyAmenities.elevator', e.target.checked)
                                        }
                                    />
                                }
                                label='Elevator'
                            />
                        </div>
                        <div className={iconStyles(values.propertyAmenities.parking)}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        icon={<LocalParking />}
                                        checkedIcon={<LocalParking />}
                                        checked={values.propertyAmenities.parking || false}
                                        value='parking'
                                        name='propertyAmenities.parking'
                                        onChange={(e) =>
                                            setFieldValue('propertyAmenities.parking', e.target.checked)
                                        }
                                    />
                                }
                                label='Parking'
                            />
                        </div>
                        <div className={iconStyles(values.propertyAmenities.balcony)}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        icon={<Balcony />}
                                        checkedIcon={<Balcony />}
                                        checked={values.propertyAmenities.balcony || false}
                                        value='balcony'
                                        name='propertyAmenities.balcony'
                                        onChange={(e) =>
                                            setFieldValue('propertyAmenities.balcony', e.target.checked)
                                        }
                                    />
                                }
                                label='Balcony'
                            />
                        </div>
                        <div className={iconStyles(values.propertyAmenities.privateBathroom)}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        icon={<Bathtub />}
                                        checkedIcon={<Bathtub />}
                                        checked={values.propertyAmenities.privateBathroom || false}
                                        value='privateBathroom'
                                        name='propertyAmenities.privateBathroom'
                                        onChange={(e) =>
                                            setFieldValue('propertyAmenities.privateBathroom', e.target.checked)
                                        }
                                    />
                                }
                                label='Private bathroom'
                            />
                        </div>
                        <div className={iconStyles(values.propertyAmenities.privateKitchen)}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        icon={<Kitchen />}
                                        checkedIcon={<Kitchen />}
                                        checked={values.propertyAmenities.privateKitchen || false}
                                        value='privateKitchen'
                                        name='propertyAmenities.privateKitchen'
                                        onChange={(e) =>
                                            setFieldValue('propertyAmenities.privateKitchen', e.target.checked)
                                        }
                                    />
                                }
                                label='Private kitchen'
                            />
                        </div>
                        <div className={iconStyles(values.propertyAmenities.desktop)}>
                            <FormControlLabel
                                control={<Checkbox
                                    icon={<DesktopMac />}
                                    checkedIcon={<DesktopMac />}
                                    checked={values.propertyAmenities.desktop || false}
                                    name='propertyAmenities.desktop'
                                    value='desk'
                                    onChange={(e) => setFieldValue('propertyAmenities.desktop', e.target.checked)}
                                />}
                                label="Desk"
                            />
                        </div>
                        <div className={iconStyles(values.propertyAmenities.closet)}>
                            <FormControlLabel
                                control={<Checkbox
                                    icon={<CheckroomIcon />}
                                    checkedIcon={<CheckroomIcon />}
                                    checked={values.propertyAmenities.closet || false}
                                    name='propertyAmenities.closet'
                                    value='closet'
                                    onChange={(e) => setFieldValue('propertyAmenities.closet', e.target.checked)}
                                />}
                                label="Closet"
                            />
                        </div>
                    </FormGroup>
                </div>
                <div>
                    <h6 className="text-xl font-bold my-4">House rules</h6>
                    <FormGroup row>
                        <div className={iconStyles(values.houseRules.noSmoking)}>
                            <FormControlLabel
                                control={<Checkbox
                                    icon={<NoSmokingIcon />}
                                    checkedIcon={<NoSmokingIcon />}
                                    checked={values.houseRules.noSmoking || false}
                                    value='noSmoking'
                                    name='houseRules.noSmoking'
                                    onChange={(e) => setFieldValue('houseRules.noSmoking', e.target.checked)}
                                />}
                                label="No smoking"
                            />
                        </div>
                        <div className={iconStyles(values.houseRules.pets)}>
                            <FormControlLabel
                                control={<Checkbox
                                    icon={<PetsIcon />}
                                    checkedIcon={<PetsIcon />}
                                    checked={values.houseRules.pets || false}
                                    value='pets'
                                    name='houseRules.pets'
                                    onChange={(e) => setFieldValue('houseRules.pets', e.target.checked)}
                                />}
                                label="Pets allowed"
                            />
                        </div>
                        <div className={iconStyles(values.houseRules.children)}>
                            <FormControlLabel
                                control={<Checkbox
                                    icon={<ChildFriendlyIcon />}
                                    checkedIcon={<ChildFriendlyIcon />}
                                    checked={values.houseRules.children || false}
                                    value='children'
                                    name='houseRules.children'
                                    onChange={(e) => setFieldValue('houseRules.children', e.target.checked)}
                                />}
                                label="Children allowed"
                            />
                        </div>
                        <div className={iconStyles(values.houseRules.smoking)}>
                            <FormControlLabel
                                control={<Checkbox
                                    icon={<SmokingRoomsIcon />}
                                    checkedIcon={<SmokingRoomsIcon />}
                                    checked={values.houseRules.smoking || false}
                                    value='smoking'
                                    name='houseRules.smoking'
                                    onChange={(e) => setFieldValue('houseRules.smoking', e.target.checked)}
                                />}
                                label="Smoking allowed"
                            />
                        </div>
                        <div className={iconStyles(values.houseRules.events)}>
                            <FormControlLabel
                                control={<Checkbox
                                    icon={<EventAvailableIcon />}
                                    checkedIcon={<EventAvailableIcon />}
                                    checked={values.houseRules.events || false}
                                    value='events'
                                    name='houseRules.events'
                                    onChange={(e) => setFieldValue('houseRules.events', e.target.checked)}
                                />}
                                label="Events allowed"
                            />
                        </div>
                        <div className={iconStyles(values.houseRules.noDrinking)}>
                            <FormControlLabel
                                control={<Checkbox
                                    icon={<NoDrinksIcon />}
                                    checkedIcon={<NoDrinksIcon />}
                                    checked={values.houseRules.noDrinking || false}
                                    value='noDrinking'
                                    name='houseRules.noDrinking'
                                    onChange={(e) => setFieldValue('houseRules.noDrinking', e.target.checked)}
                                />}
                                label="No drinking"
                            />
                        </div>
                    </FormGroup>
                </div>
            </ThemeProvider>
        </div>
    );
};

export default Step3;
