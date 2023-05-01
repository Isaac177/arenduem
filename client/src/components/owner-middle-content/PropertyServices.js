import React from 'react';

const PropertyServices = ({ firstProperty }) => {
    return (
        <div>
            <h6 className="my-4 text-xl font-bold text-aqua-500">Property services</h6>
            <div className="flex flex-col gap-2">
                <div className="text-sm">
                    {firstProperty.Service.rentalContract ? '✓' : '✗'}  Rental Contract
                </div>
                <div className="text-sm">
                    {firstProperty.Service.cleaningService ? '✓' : '✗'}  Cleaning Service
                </div>
                <div className="text-sm">
                    {firstProperty.Service.maintenance ? '✓' : '✗'}  Maintenance
                </div>
            </div>
        </div>
    );
};

export default PropertyServices;
