import { useSelector, useDispatch } from 'react-redux';
import { setImages, setModalOpen, setFile, setIsMain, setIsCover } from '../actions/galleryActions';
import axios from "axios";


function useImageUploader() {
    const dispatch = useDispatch();
    const images = useSelector(state => state.gallery.images);
    const file = useSelector(state => state.gallery.file);
    const isMain = useSelector(state => state.gallery.isMain);
    const isCover = useSelector(state => state.gallery.isCover);

    const handleUploadImage = (userId) => {
        console.log('handleUploadImage() called');
        const formData = new FormData();
        formData.append('file', file);
        formData.append('isMain', isMain);
        formData.append('isCover', isCover);
        formData.append('userId', userId);

        axios.post('/api/pictures', formData).then((response) => {
            const picture = response.data;
            const newImages = [
                ...images,
                { original: picture.fileUrl,
                    thumbnail: picture.fileUrl,
                    alt: 'New Image',
                    originalAlt: 'New Image',
                    thumbnailAlt: 'New Image',
                    isMain: picture.isMain,
                    isCover: picture.isCover,
                },
            ];
            dispatch(setImages(newImages));
            dispatch(setFile(null));
            dispatch(setIsMain(false));
            dispatch(setIsCover(false));
            dispatch(setModalOpen(false));
        }).catch((error) => {
            console.error(error);
        });
    };

    return { handleUploadImage };
}

export default useImageUploader;
