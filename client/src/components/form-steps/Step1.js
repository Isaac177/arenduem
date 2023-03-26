import React from 'react';
import RoomIcon from '@mui/icons-material/Room';
import ApartmentIcon from '@mui/icons-material/Apartment';
import HouseIcon from '@mui/icons-material/House';
import {AnimatePresence, motion} from 'framer-motion';

const propertyTypes = [
    {
        type: 'Room in a shared apartment',
        IconComponent: RoomIcon,
    },
    {
        type: 'Private apartment',
        IconComponent: ApartmentIcon,
    },
    {
        type: 'House',
        IconComponent: HouseIcon,
    },
];

const Step1 = ({ fieldName, handleSelectPropertyType }) => {
    return (
    <AnimatePresence>
        <div className="flex flex-col items-center justify-center mx-auto text-primary-700 mt-10">
            <motion.h1
                initial={{ opacity: 0}}
                animate={{ opacity: 1}}
                exit={{ opacity: 0}}
                className="text-3xl font-bold mb-4 text-center">
                What type of property are you listing?
            </motion.h1>
            <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9, transition: { duration: 0.5 }}}
                animate={{ opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 }}}
                exit={{ opacity: 0, y: 20, scale: 0.9, transition: { duration: 0.5 }}}
                className="flex flex-wrap justify-center">
                {propertyTypes.map(({ type, IconComponent }) => (
                    <div
                        key={type}
                        className="flex flex-col items-center justify-center m-4 p-4
                        border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-200"
                        onClick={() => handleSelectPropertyType(fieldName, type)}
                    >
                        <IconComponent className="text-4xl mb-4" />
                        <p className="text-lg font-medium">{type}</p>
                    </div>
                ))}
            </motion.div>
        </div>
    </AnimatePresence>
    );
};

export default Step1;
