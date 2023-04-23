import React from 'react';
import { Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

const MessagePopup = ({ successMessage, errorMessage, handleClose }) => {
    const isOpen = successMessage || errorMessage;

    return (
        <Dialog open={isOpen} onClose={handleClose}>
            <DialogTitle>
                <IconButton
                    edge="end"
                    color="inherit"
                    onClick={handleClose}
                    aria-label="close"
                >
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent>
                {successMessage && (
                    <div className="text-white bg-green-500 p-4 rounded-md flex items-center">
                        <CheckCircleIcon className="mr-2" style={{ color: '#19BA99' }} />
                        {successMessage}
                    </div>
                )}
                {errorMessage && (
                    <div className="text-white bg-red-500 p-4 rounded-md flex items-center">
                        <CancelIcon className="mr-2" style={{ color: 'red' }} />
                        {errorMessage}
                    </div>
                )}
            </DialogContent>
        </Dialog>
    );
};

export default MessagePopup;
