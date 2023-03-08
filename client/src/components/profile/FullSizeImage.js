import { BsChevronLeft, BsChevronRight, BsX } from 'react-icons/bs';
import { useRef, useEffect } from 'react';

const FullSizeImage = ({ src, alt, onClose, onPrev, onNext, isPrevDisabled, isNextDisabled }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [containerRef, onClose]);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-black opacity-75" onClick={onClose}></div>
            <div ref={containerRef} className="relative h-3/4 w-3/4 max-h-full max-w-full">
                <button
                    className="absolute top-0 right-0 bg-aqua-500 text-white p-2 rounded-full hover:bg-aqua-700"
                    onClick={onClose}
                >
                    <BsX />
                </button>
                <div className="h-full flex items-center justify-between">
                    <button
                        className="bg-aqua-500 text-white p-2 rounded-full hover:bg-aqua-700"
                        onClick={onPrev}
                        disabled={isPrevDisabled}
                    >
                        <BsChevronLeft />
                    </button>
                    <img src={src} alt={alt} className="max-h-full max-w-full" />
                    <button
                        className="bg-aqua-500 text-white p-2 rounded-full hover:bg-aqua-700"
                        onClick={onNext}
                        disabled={isNextDisabled}
                    >
                        <BsChevronRight />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FullSizeImage;
