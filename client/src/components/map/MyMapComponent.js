import React, {useState} from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
    width: '100%',
    height: '100%',
};

const MyMapComponent = ({ google }) => {
    const [mapCenter, setMapCenter] = useState({ lat: 40.712776, lng: -74.005974 });

    const handlePlaceChange = (place) => {
        setMapCenter({ lat: place.geometry.location.lat(), lng: place.geometry.location.lng() });
    };

    return (
        <div style={{ position: 'relative', width: '100%', height: '400px' }}>
            <Map
                google={google}
                zoom={14}
                initialCenter={mapCenter}
                center={mapCenter}
            >
            </Map>
        </div>
    );
};

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
})(MyMapComponent);

