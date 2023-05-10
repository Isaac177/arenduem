import React from 'react';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ApartmentIcon from '@material-ui/icons/Apartment';
import BusinessIcon from '@material-ui/icons/Business';

const PropertyAddress = ({ property }) => {
    const address = property.Address;

    return (
        <div className="py-2">
            <h6 className="my-4 text-xl font-bold text-aqua-500">Property address</h6>
            <div className="text-sm font-semibold flex flex-row gap-6">
                <div className="flex items-center">
                    <LocationOnIcon className="mr-2" />
                    <p className='text-gray-500'>
                        {address.country}, {address.city}
                    </p>
                </div>
                <div className="flex items-center">
                    <ApartmentIcon className="mr-2" />
                    <p className='text-gray-500'>{address.street}</p>
                </div>
                {address.floor !== 0 && (
                    <div className="flex items-center">
                        <BusinessIcon className="mr-2" />
                        <p className='text-gray-500'>Floor: {address.floor}</p>
                    </div>
                )}
                {address.apartmentNumber !== 0 && (
                    <div className="flex items-center">
                        <BusinessIcon className="mr-2" />
                        <p className='text-gray-500'>Apartment Number: {address.apartmentNumber}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PropertyAddress;
