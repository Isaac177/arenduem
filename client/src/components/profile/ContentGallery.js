import React, {useEffect, useState} from 'react';

const mockImages = [
    {
        id: 1,
        url: 'https://images.unsplash.com/photo-1611781928371-8b1b0b1b1b1b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
    },
    {
        id: 2,
        url: 'https://images.unsplash.com/photo-1593642702832-55a5255a1c5a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
    },
    {
        id: 3,
        url: 'https://images.unsplash.com/photo-1558244663-e6e3eda3c002?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
    }
];


const ContentGallery = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        fetch('https://api.unsplash.com/photos/random?count=3', {
            headers: {
                Authorization: 'Client-ID <your_access_key>'
            }
        })
            .then(response => response.json())
            .then(data => {
                // Map the data to the mockImages array format
                const newImages = data.map((image, index) => ({
                    id: index + 1,
                    url: image.urls.regular
                }));
                // Add the new images to the existing images
                setImages([...mockImages, ...newImages]);
            })
            .catch(error => console.error(error));
    }, []);

    return (
        <div>

        </div>
    );
};

export default ContentGallery;