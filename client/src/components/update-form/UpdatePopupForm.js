import React, {useEffect, useState} from 'react';
import { Formik, Form } from 'formik';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import CloseIcon from '@mui/icons-material/Close';
import {useDispatch, useSelector} from "react-redux";
import Apartment from "../../assets/img/Apartment.jpg";
import {Grid} from "@mui/material";
import available from "../../assets/img/available.jpg";
import formImg from "../../assets/img/formImg.jpg";
import peopleImg from "../../assets/img/peopleImg.jpg";
import location from "../../assets/img/location.jpg";
import phone from "../../assets/img/phone.jpg";
import {createProperty, fetchPropertyById} from "../../actions/propertyActions";
import MessagePopup from "../utils/MessagePopup";
import UpdateStep1 from "./UpdateStep1";
import UpdateStep2 from "./UpdateStep2";
import UpdateStep3 from "./UpdateStep3";
import UpdateStep5 from "./UpdateStep5";
import UpdateStep4 from "./UpdateStep4";
import UpdateStep6 from "./UpdateStep6";
import UpdateStep7 from "./UpdateStep7";
import {useParams} from "react-router-dom";


const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  animation: ${fadeIn} 0.5s ease;
`;

const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 3rem 6rem;
  border-radius: 10px;
  min-width: 80%;
  min-height: 90vh;
  overflow-y: auto;
  animation: ${fadeIn} 0.5s ease;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 1rem;
`;

const ProgressBar = styled.div`
  height: 4px;
  background-color: #ccc;
  border-radius: 2px;
  position: relative;
  margin-bottom: 2rem;
  &:before {
    content: '';
    position: absolute;
    height: 100%;
    width: ${(props) => (props.step / (props.totalSteps - 1)) * 100}%;
    background-color: #4caf50;
    border-radius: 2px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5rem;
`;



const UpdatePopupForm = ({ isOpen, onClose }) => {
    const [fetchedData, setFetchedData] = useState(null);

    const [step, setStep] = useState(0);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [showMessage, setShowMessage] = useState(false);

    const dispatch = useDispatch();
    const successMessage = useSelector((state) => state.property.successMessage);
    const errorMessage = useSelector((state) => state.property.errorMessage);
    const {propertyId} = useParams();

    const fetchedProperty = useSelector((state) => state.property.property);

    console.log('Fetched property:', fetchedProperty);

    useEffect(() => {
        if (propertyId) {
            dispatch(fetchPropertyById(propertyId));
        }
    }, [dispatch, propertyId]);

    const mapFetchedDataToInitialValues = (data) => {
        return {
            ...data,
            propertyAddress: data.address,
            propertyAmenities: data.amenity,
            houseRules: data.houseRule,
            propertyAvailability: data.availability,
            prices: data.price,
            otherServices: data.service,
            propertyDetails: {
                ...data.propertyDetail,
                pictures: data.propertyPictures.map((picture) => picture.fileUrl),
            },
            preferences: data.preference,
            phoneVerification: data.phoneVerification,
        };
    };

    useEffect(() => {
        if (fetchedProperty) {
            setFetchedData(mapFetchedDataToInitialValues(fetchedProperty));
        }
    }, [fetchedProperty]);



    const handleClose = () => {
        dispatch({ type: 'CLEAR_MESSAGES' });
    };

    const handleNextStep = (e, submitForm, setFieldValue, values) => {
        Object.keys(values).forEach((key) => {
            setFieldValue(key, values[key]);
        });

        if (step < totalSteps - 1) {
            setStep(step + 1);
        } else {
            submitForm();
        }
    };

    if (!isOpen) {
        return null;
    }
    const totalSteps = 7;

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
        }
    };

    return (
        <ModalOverlay>
            <Modal onClick={(e) => e.stopPropagation()}>
                    <Formik
                        initialValues={fetchedData || {
                            propertyType: '',
                            propertyAddress: {
                                country: '',
                                city: '',
                                street: '',
                                floor: 0,
                                apartmentNumber: 0
                            },
                            propertyAmenities: {
                                homeType: false,
                                bedroom: false,
                                bathroom: false,
                                roommates: false,
                                livingRoom: false,
                                kitchen: false,
                                wifi: false,
                                tv: false,
                                airConditioning: false,
                                smokeFree: false,
                                laundry: false,
                                elevator: false,
                                parking: false,
                                balcony: false,
                                privateBathroom: false,
                                privateKitchen: false,
                                desktop: false,
                                closet: false,
                            },
                            houseRules: {
                                noSmoking: false,
                                pets: false,
                                children: false,
                                smoking: false,
                                events: false,
                                noDrinking: false,
                            },
                            propertyAvailability: {
                                startDate: null,
                                endDate: null,
                                minStay: 0,
                                maxStay: 0
                            },
                            prices: {
                                pricePerMonth: 0,
                                billsIncluded: false,
                                deposit: 0
                            },
                            otherServices: {
                                rentalContract: false,
                                cleaningService: false,
                                maintenance: false
                            },
                            propertyDetails: {
                                pictures: [],
                                title: '',
                                description: '',
                                size: 0,
                                bedrooms: 0,
                                bathrooms: 0,
                                roommates: 0,
                                furnished: false,
                                bedType: '',
                            },
                            preferences: {
                                tenantGender: '',
                                tenantMinimumAge: 1,
                                tenantMaximumAge: 100,
                                tenantOccupation: '',
                                tenantDrinkingStatus: '',
                                tenantSmokingStatus: '',
                            },
                            phoneVerification: {
                                country: '',
                                phoneNumber: '',
                                verificationCode: ''
                            },
                        }}

                        //validationSchema={getValidationSchemaForStep(step)}
                    onSubmit={(values, { setSubmitting }) => {
                        dispatch(createProperty(values));
                        setSubmitting(false);
                        console.log(JSON.stringify(values, null, 2));
                        onClose();
                    }}
                >
                    {({ isSubmitting, errors, isValid, submitForm, values, setFieldValue }) => (
                        <Form onKeyDown={handleKeyDown}>
                            <CloseButton onClick={onClose}>
                                <CloseIcon size={100}/>
                            </CloseButton>
                            {step === 0 ? ''  : <h1 className="mb-4 text-center text-2xl font-bold">Property Type: {values.propertyType}</h1>}
                            <Title>Step {step + 1} of {totalSteps}</Title>
                            <ProgressBar step={step} totalSteps={totalSteps} />
                            {step === 0 && <UpdateStep1 fieldName="propertyType" step={step} setStep={setStep} />}
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <div className="mx-auto overflow-y-scroll" style={{height: '600px'}}>
                                        {step === 1 && <UpdateStep2 errors={errors} values={values} setFieldValue={setFieldValue}/>}
                                        {step === 2 && <UpdateStep3 errors={errors} values={values} setFieldValue={setFieldValue}/>}
                                        {step === 3 && <UpdateStep4 errors={errors}
                                                              startDate={startDate}
                                                              setStartDate={setStartDate}
                                                              endDate={endDate}
                                                              setEndDate={setEndDate}
                                                                values={values}/>}
                                        {step === 4 && <UpdateStep5 values={values}/>}
                                        {step === 5 && <UpdateStep6 values={values}/>}
                                        {step === 6 && <UpdateStep7 values={values}/>}
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    {step === 1 && <img src={location} alt="location" className="mx-auto w-96 animate-pulse object-cover object-center cover" loading="lazy"/>}
                                    {step === 2 && <img src={Apartment} alt="Apartment" className="mx-auto w-96 animate-pulse object-cover object-center cover" loading="lazy"/>}
                                    {step === 3 && <img src={available} alt="available" className="mx-auto w-96 animate-pulse object-cover object-center cover" loading="lazy"/>}
                                    {step === 4 && <img src={formImg} alt="formImg" className="mx-auto h-96 animate-pulse object-cover object-center cover" loading="lazy"/>}
                                    {step === 5 && <img src={peopleImg} alt="gender" className="mx-auto h-96 animate-pulse object-cover object-center cover" loading="lazy"/>}
                                    {step === 6 && <img src={phone} alt="phone" className="mx-auto h-96 animate-pulse object-cover object-center cover" loading="lazy"/>}
                                </Grid>
                            </Grid>

                            <div className="mt-4 px-4">
                                {step > 0 && (
                                    <button
                                        type="button"
                                        onClick={() => setStep(step - 1)}
                                        className="mr-2 w-80 rounded-lg bg-gray-500 px-4 py-4 font-bold text-white hover:bg-gray-700">
                                        Back
                                    </button>
                                )}
                                {step > 0 && (
                                    <button
                                        className={`bg-green-500 hover:bg-green-700 text-white font-bold py-4 px-4 w-80 rounded-lg 
                                        ${isSubmitting || !isValid ? 'opacity-50 cursor-not-allowed' : ''}`}
                                        disabled={isSubmitting || !isValid}
                                        onClick={(e) => {
                                            handleNextStep(e, submitForm, setFieldValue, values);
                                            setShowMessage(!showMessage);
                                        }}
                                        type={step === 7 ? 'submit' : 'button'}
                                    >
                                        {step === 7 ? 'Submit' : 'Next Step'}
                                    </button>
                                )}
                            </div>
                        </Form>
                    )}
                </Formik>
                {showMessage && (
                    <MessagePopup
                    errorMessage={errorMessage}
                    successMessage={successMessage}
                    handleClose={handleClose}
                    />
                    )}
            </Modal>
        </ModalOverlay>
    );
};

export default UpdatePopupForm;