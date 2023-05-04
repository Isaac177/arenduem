import React, { useState } from 'react';
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
import {createProperty} from "../../actions/propertyActions";
import MessagePopup from "../utils/MessagePopup";
import UpdateStep1 from "./UpdateStep1";
import UpdateStep2 from "./UpdateStep2";
import UpdateStep3 from "./UpdateStep3";
import UpdateStep5 from "./UpdateStep5";
import UpdateStep4 from "./UpdateStep4";
import UpdateStep6 from "./UpdateStep6";
import UpdateStep7 from "./UpdateStep7";


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

const UpdatePopupForm = ({ initialValues, property, isOpen, onClose }) => {
    console.log('update popup form');
    const [step, setStep] = useState(0);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [showMessage, setShowMessage] = useState(false);

    const dispatch = useDispatch();
    const successMessage = useSelector((state) => state.property.successMessage);
    const errorMessage = useSelector((state) => state.property.errorMessage);

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
                    initialValues={{
                        ...initialValues,
                        ...property
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
                                <CloseIcon
                                    size={80}
                                />
                            </CloseButton>
                            {step === 0 ? ''  : <h1 className="mb-4 text-center text-2xl font-bold">Property Type: {values.propertyType}</h1>}
                            <Title>Step {step + 1} of {totalSteps}</Title>
                            <ProgressBar step={step} totalSteps={totalSteps} />
                            {step === 0 && <UpdateStep1 fieldName="propertyType" step={step} setStep={setStep} />}
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <div className="mx-auto overflow-y-scroll" style={{height: '600px'}}>
                                        {step === 1 && <UpdateStep2 errors={errors} />}
                                        {step === 2 && <UpdateStep3 errors={errors} />}
                                        {step === 3 && <UpdateStep4 errors={errors}
                                                              startDate={startDate}
                                                              setStartDate={setStartDate}
                                                              endDate={endDate}
                                                              setEndDate={setEndDate}/>}
                                        {step === 4 && <UpdateStep5 />}
                                        {step === 5 && <UpdateStep6 />}
                                        {step === 6 && <UpdateStep7 />}
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
                {showMessage && <MessagePopup
                    errorMessage={errorMessage}
                    successMessage={successMessage}
                    handleClose={handleClose}
                />}
            </Modal>
        </ModalOverlay>
    );
};

export default UpdatePopupForm;