import React, { useEffect, useState } from 'react';
import ImageGallery from 'react-image-gallery';
import {
    FiChevronLeft,
    FiChevronRight,
    FiX,
} from 'react-icons/fi';
import 'react-image-gallery/styles/css/image-gallery.css';
import ProfileImgCard from "./ProfileImgCard";

const mockImages = [];

const ContentGallery = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        fetch('https://api.unsplash.com/photos/random?count=6', {
            headers: {
                Authorization: 'Client-ID WBt_g3dIVn2XgPgedho1kRIHguNd0D7Uruwvy3K8Sis',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                const newImages = data.map((image, index) => ({
                    original: image.urls.regular,
                    thumbnail: image.urls.thumb,
                    alt: image.alt_description || 'Unsplash Image',
                    originalAlt: image.alt_description || 'Image ' + (index + 1),
                    thumbnailAlt: image.alt_description || 'Image ' + (index + 1),
                }));

                const uniqueImages = newImages.filter(
                    (newImage) =>
                        !mockImages.some(
                            (mockImage) => mockImage.original === newImage.original
                        )
                );

                setImages([...mockImages, ...uniqueImages]);
            })
            .catch((error) => console.error(error));
    }, []);

    return (
        /*<div className="flex flex-row items-center justify-center">
            <div className="flex flex-col items-center justify-center">
                <InfoSidebar />
            </div>*/
            <div className="flex flex-row items-center gap-4 flex-wrap wrap">
                {images.map((image) => (
                    <ProfileImgCard
                        key={image.id}
                        profileImg={image.original}
                        profileAlt={image.alt}
                    />
                ))}
            </div>
        /*</div>*/
    );
};

export default ContentGallery;
