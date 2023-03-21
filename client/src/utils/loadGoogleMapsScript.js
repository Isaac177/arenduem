
const loadGoogleMapsScript = (callback) => {
    const existingScript = document.getElementById('gMapsScript');
    if (!existingScript) {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_API_KEY}&libraries=places`;
        script.id = 'gMapsScript';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
        script.onload = () => {
            if (callback) callback();
        };
    } else if (callback) callback();
};

export default loadGoogleMapsScript;
