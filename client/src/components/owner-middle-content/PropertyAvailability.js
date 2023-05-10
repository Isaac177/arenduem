import React from 'react';
import EventIcon from '@material-ui/icons/Event';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import TimerIcon from '@material-ui/icons/Timer';

const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString();
};

const PropertyAvailability = ({ property }) => {
    const availability = property.Availability;

    return (
        <div className="py-2">
            <h6 className="my-4 text-xl font-bold text-aqua-500">Property availability</h6>
            <div className="text-sm font-semibold text-gray-500">
                <div className="flex items-center">
                    <EventIcon className="mr-2" />
                    <p>From {formatDate(availability.startDate)}</p>
                </div>
                {availability.endDate && (
                    <div className="flex items-center">
                        <EventIcon className="mr-2" />
                        <p>To {formatDate(availability.endDate)}</p>
                    </div>
                )}
                {availability.minStay > 0 && (
                    <div className="flex items-center">
                        <AccessTimeIcon className="mr-2" />
                        <p>Minimum stay: {availability.minStay} days</p>
                    </div>
                )}
                {availability.maxStay > 0 && (
                    <div className="flex items-center">
                        <TimerIcon className="mr-2" />
                        <p>Maximum stay: {availability.maxStay} days</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PropertyAvailability;
