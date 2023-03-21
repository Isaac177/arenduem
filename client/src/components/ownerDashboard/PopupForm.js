import React, { useState, useRef, useEffect } from 'react';
import { Formik, Form } from 'formik';
import styled from '@emotion/styled';
import Step0 from '../form-steps/Step0';
import { keyframes } from '@emotion/react';
import CloseIcon from '@mui/icons-material/Close';
import useClickOutside from "../../hooks/userClickOutside";

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
  padding: 2rem;
  border-radius: 10px;
  width: 1080px;
  height: 600px;
  max-height: 80%;
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

    const handleSelectPropertyType = (type) => {
        setPropertyType(type);
        setStep(step + 1);
    };

    const modalRef = useRef();
    useClickOutside(modalRef, onClose);

    if (!isOpen) {
        return null;
    }

    const totalSteps = 1; // Update this when adding more steps

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

                            {step === 0 && <Step0 handleSelectPropertyType={handleSelectPropertyType} />}
                            <div className="mt-4">
                                {step > 0 && (
                                    <button type="button" onClick={() => setStep(step - 1)} className="mr-4">
                                        Back
                                    </button>
                                )}
                                {step > 0 && (
                                    <button type="submit" disabled={isSubmitting}>
                                        Submit
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