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
    width: ${(props) => (props.step / props.totalSteps) * 100}%;
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
    const [propertyType, setPropertyType] = useState('');
    const [gMapsLoaded, setGMapsLoaded] = useState(false);

    useEffect(() => {
        loadGoogleMapsScript(() => {
            setGMapsLoaded(true);
        });
    }, []);

    const handleSelectPropertyType = (type) => {
        setPropertyType(type);
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
    console.log(propertyType)

    const modalRef = useRef();
    useClickOutside(modalRef, onClose);

    if (!isOpen) {
        return null;
    }

    const totalSteps = 7;

    return (
        <ModalOverlay onClick={onClose}>
            <Modal ref={modalRef} onClick={(e) => e.stopPropagation()}>
                <Formik
                    initialValues={{ propertyType }}
                    onSubmit={(values) => {
                        console.log('Form submitted:', values);
                        onClose();
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <CloseButton onClick={onClose}>
                                <CloseIcon />
                            </CloseButton>
                            <Title>Step {step + 1} of {totalSteps}</Title>
                            <ProgressBar step={step} totalSteps={totalSteps} />
                            {step === 0 && <Step1 handleSelectPropertyType={handleSelectPropertyType} />}
                            {step === 1 && gMapsLoaded && <Step2 propertyType={propertyType} />}
                            {step === 2 && <Step3 />}
                            {step === 3 && <Step4 />}
                            {step === 4 && <Step5 />}
                            {step === 5 && <Step6 />}
                            {step === 6 && <Step7 />}
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
                                    <button className="bg-aqua-500 hover:bg-aqua-700 text-white font-bold w-80 py-4 px-4 rounded-lg"
                                            disabled={isSubmitting}
                                            onClick={(e) => handleNextStep(e)}
                                    >
                                        {step === 6 ? 'Submit' : 'Next Step'}
                                    </button>
                                )}
                            </div>
                        </Form>
                    )}
                </Formik>
            </Modal>
        </ModalOverlay>
    );
};

export default PopupForm;