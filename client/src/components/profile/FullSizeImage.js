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
            <div ref={containerRef} className="relative sm:h-full md:h-3/4 max-h-full sm:w-full md:w-3/4 max-w-full">
                <button
                    className="absolute top-0 right-0 rounded-full p-2 text-white bg-aqua-500 hover:bg-aqua-700"
                    onClick={onClose}
                >
                    <BsX />
                </button>
                <div className="flex h-full items-center justify-between">
                    <button
                        className="rounded-full p-2 text-white bg-aqua-500 hover:bg-aqua-700"
                        onClick={onPrev}
                        disabled={isPrevDisabled}
                    >
                        <BsChevronLeft />
                    </button>
                    <img src={`http://localhost:8000/${src}`}
                         alt={alt} className="h-full w-full object-cover" />
                    <button
                        className="rounded-full p-2 text-white bg-aqua-500 hover:bg-aqua-700"
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
