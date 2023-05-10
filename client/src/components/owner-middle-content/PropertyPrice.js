import React from 'react';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';

const PropertyPrice = ({ property }) => {
    const price = property.Price;

    return (
        <div className="py-2">
            <h6 className="my-4 text-xl font-bold text-aqua-500">Property price</h6>
            <div className="text-sm font-semibold flex flex-row gap-4">
                <div className="flex items-center flex-col gap-2">
                    <div className='border-2 border-green-500 rounded-full p-2'>
                    <AttachMoneyIcon className="text-green-500 font-bold text-5xl" />
                    </div>
                    <p className='text-gray-500'>Price per month: {price.pricePerMonth} {price.pricePerMonth > 0 ? 'USD' : 'Not specified'}</p>
                </div>
                <div className="flex items-center flex-col gap-2">
                    <div className='border-2 border-green-500 rounded-full p-2'>
                        {price.billsIncluded ?
                        <CheckIcon className="text-green-500 font-bold text-5xl" /> : <CloseIcon className="text-green-500 font-bold text-5xl" />
                        }
                    </div>
                    <p className='text-gray-500'>Bills included: {price.billsIncluded ? 'Yes' : 'No'}</p>
                </div>
                <div className="flex items-center flex-col gap-2">
                    <div className='border-2 border-green-500 rounded-full p-2'>
                    <AttachMoneyIcon className="text-green-500 font-bold text-5xl" />
                    </div>
                    <p className='text-gray-500'>Deposit: {price.deposit} {price.deposit > 0 ? 'KZT' : 'Not specified'}</p>
                </div>
            </div>
        </div>
    );
};

export default PropertyPrice;
