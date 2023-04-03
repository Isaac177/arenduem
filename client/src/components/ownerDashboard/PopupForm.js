import React, { useState, useRef, useEffect } from 'react';
import { Formik, Form } from 'formik';
import styled from '@emotion/styled';
import Step1 from '../form-steps/Step1';
import { keyframes } from '@emotion/react';
import CloseIcon from '@mui/icons-material/Close';
import useClickOutside from "../../hooks/userClickOutside";
import Step2 from "../form-steps/Step2";
import loadGoogleMapsScript from "../../utils/loadGoogleMapsScript";
import Step3 from "../form-steps/Step3";
import Step4 from "../form-steps/Step4";
import Step5 from "../form-steps/Step5";
import Step6 from "../form-steps/Step6";
import Step7 from "../form-steps/Step7";
import {useDispatch, useSelector} from "react-redux";
import {setStepPropertyType} from "../../actions/ownerFormActions";
import {
    availabilityValidationSchema,
    combinedValidationSchema,
    locationValidationSchema, phoneVerificationValidationSchema, picturesValidationSchema, preferencesValidationSchema,
    propertyValidationSchema
} from "../../utils/ownerValidationSchemas";
import * as Yup from 'yup';
import Apartment from "../../assets/img/appart.jpg";
import {Grid} from "@mui/material";
import available from "../../assets/img/available.jpg";
import formImg from "../../assets/img/formImg.jpg";
import peopleImg from "../../assets/img/peopleImg.jpg";


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
  padding: 6rem;
  border-radius: 10px;
  min-width: 90%;
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

const PopupForm = ({ isOpen, onClose }) => {
    const [step, setStep] = useState(0);
    const [gMapsLoaded, setGMapsLoaded] = useState(false);

    const dispatch = useDispatch();
    const propertyType = useSelector((state) => state.owner.propertyType);

    useEffect(() => {
        loadGoogleMapsScript(() => {
            setGMapsLoaded(true);
        });
    }, []);

    const handleSelectPropertyType = (fieldName, value) => {
        dispatch(setStepPropertyType(fieldName, value));
        setStep(step + 1);
    };

    const handleNextStep = (e) => {
        e.preventDefault();
        if (step < totalSteps - 1) {
            setStep(step + 1);
        } else {
            onClose();
        }
    };

    const modalRef = useRef();
    useClickOutside(modalRef, onClose);

    if (!isOpen) {
        return null;
    }

    const totalSteps = 7;

    const getValidationSchemaForStep = (step) => {
        let schema = Yup.object();

        if (step >= 1) {
            schema = schema.concat(locationValidationSchema);
        }
        if (step >= 2) {
            schema = schema.concat(propertyValidationSchema);
        }
        if (step >= 3) {
            schema = schema.concat(availabilityValidationSchema);
        }
        if (step >= 4) {
            schema = schema.concat(picturesValidationSchema);
        }
        if (step >= 5) {
            schema = schema.concat(preferencesValidationSchema);
        }
        if (step >= 6) {
            schema = schema.concat(phoneVerificationValidationSchema);
        }

        return schema;
    };


    return (
        <ModalOverlay onClick={onClose}>
            <Modal ref={modalRef} onClick={(e) => e.stopPropagation()}>
                <Formik
                    initialValues={{
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
                        },
                        preferences: {
                            tenantGender: '',
                            tenantMinimumAge: 0,
                            tenantMaximumAge: 0,
                            tenantOccupation: '',
                            tenantDrinkingStatus: '',
                            tenantSmokingStatus: '',
                        },
                        phoneVerification: {
                            country: '',
                            phoneNumber: '',
                            verificationCode: ''
                        }
                    }}

                    //validationSchema={getValidationSchemaForStep(step)}
                    onSubmit={(values, e) => {
                        console.log('Form submitted:', values);
                        onClose();
                    }}
                >
                    {({ isSubmitting, errors }) => (
                        <Form>
                            <CloseButton onClick={onClose}>
                                <CloseIcon />
                            </CloseButton>
                            {step === 0 ? ''  : <h1 className="text-2xl font-bold text-center mb-4">Property Type: {propertyType}</h1>}
                            <Title>Step {step + 1} of {totalSteps}</Title>
                            <ProgressBar step={step} totalSteps={totalSteps} />
                            {step === 0 && <Step1 fieldName="propertyType" handleSelectPropertyType={handleSelectPropertyType} />}
                            {step === 1 && <Step2 />}
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <div className="overflow-y-scroll" style={{height: '500px'}}>
                                        {step === 2 && <Step3 />}
                                        {step === 3 && <Step4 />}
                                        {step === 4 && <Step5 />}
                                        {step === 5 && <Step6 />}
                                        {step === 6 && <Step7 />}
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    {step === 2 && <img src={Apartment} alt="Apartment" className="mx-auto cover w-96 object-center object-cover"/>}
                                    {step === 3 && <img src={available} alt="available" className="mx-auto cover w-96 object-cover object-center"/>}
                                    {step === 4 && <img src={formImg} alt="formImg" className="mx-auto cover h-96 object-cover object-center"/>}
                                    {step === 5 && <img src={peopleImg} alt="gender" className="mx-auto cover h-96 object-cover object-center"/>}
                                </Grid>
                            </Grid>

                            <div className="mt-4 px-4">
                                {step > 0 && (
                                    <button
                                        type="button"
                                        onClick={() => setStep(step - 1)}
                                        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-4 px-4 w-80 rounded-lg mr-2">
                                        Back
                                    </button>
                                )}
                                {step > 0 && (
                                    <button
                                        className={`bg-green-500 hover:bg-green-700 text-white font-bold py-4 px-4 w-80 rounded-lg 
                                        ${isSubmitting ?'opacity-50 cursor-not-allowed' : ''}`}
                                        //disabled={isSubmitting || !isValid}
                                        onClick={(e) => handleNextStep(e)}
                                    >
                                        {step === 6 ? 'Submit' : 'Next Step'}
                                    </button>
                                )}

                                {errors && <pre>{JSON.stringify(errors, null, 2)}</pre>}

                            </div>
                        </Form>
                    )}
                </Formik>
            </Modal>
        </ModalOverlay>
    );
};

export default PopupForm;