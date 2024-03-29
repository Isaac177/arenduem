import React from 'react';
import MapsHomeWorkOutlinedIcon from '@mui/icons-material/MapsHomeWorkOutlined';
import SupervisedUserCircleOutlinedIcon from '@mui/icons-material/SupervisedUserCircleOutlined';
import MarkUnreadChatAltOutlinedIcon from '@mui/icons-material/MarkUnreadChatAltOutlined';
import PopupForm from "./PopupForm";
import {Element} from "react-scroll";
import ScrollAnimation from "react-animate-on-scroll";

const features = [
    {
        IconComponent: MapsHomeWorkOutlinedIcon,
        title: 'List your room',
        description:
            'Create a listing for your room or apartment, providing details such as location, price, and amenities. Make your space more attractive to potential roommates.',
    },
    {
        IconComponent: SupervisedUserCircleOutlinedIcon,
        title: 'Roommate matching',
        description:
            'Our advanced algorithm matches you with compatible roommates based on your preferences and lifestyle. You can easily find the perfect person to share your living space with.',
    },
    {
        IconComponent: MarkUnreadChatAltOutlinedIcon,
        title: 'Chat with your roommate',
        description:
            'Connect with potential roommates through our secure messaging system. Discuss details, ask questions, and make sure you\'re making the best choice for your living situation.',
    },
];

const OwnerContent = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <Element className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-primary-700 flex flex-col items-center justify-center">
            <div className="flex flex-wrap items-center w-full lg:w-[1080px]">
                <div className="w-full px-4">
                    <ScrollAnimation
                        animateIn="animate__fadeInUp"
                        duration={1}
                        delay={100}
                        animateOnce={false}
                        className="text-3xl font-bold">
                        Why ArendyEm?
                    </ScrollAnimation>
                    <ScrollAnimation
                        animateIn="animate__fadeInUp"
                        duration={1}
                        delay={200}
                        className="mt-4 mb-4 text-sm leading-relaxed">
                        ArendyEm is designed to make finding your perfect roommate a breeze. Our platform helps you easily list your room, find compatible roommates, and chat with potential matches.
                    </ScrollAnimation>
                    <div className="flex flex-wrap items-center">
                        <div className="lg:mt-4 flex w-full lg:flex-row flex-col items-center justify-center">
                            {features.map(({ IconComponent, title, description, index }) => (
                                <ScrollAnimation
                                    animateIn="animate__fadeInUp"
                                    duration={1}
                                    animateOnce={false}
                                    key={index} className="px-6"
                                    delay={300 * index}>
                                    <IconComponent style={{ fontSize: '60px' }} />
                                    <h6 className="mt-5 text-xl font-semibold text-gray-800">{title}</h6>
                                    <p className="mt-2 mb-4 text-sm text-gray-600">{description}</p>
                                </ScrollAnimation>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <ScrollAnimation
                animateIn="animate__fadeInUp"
                duration={1}
                delay={100}
                animateOnce={false}
                className="mt-10 flex flex-wrap items-center">
                <div className="mt-10 w-full rounded-lg bg-gray-200 p-8">
                    <h2 className="mb-4 text-2xl font-bold">Start your roommate search now</h2>
                    <p className="mb-6 text-sm text-gray-600">
                        Find your perfect roommate match with ArendyEm. Sign up and create a listing to begin your journey today.
                    </p>
                    <button
                        onClick={() => setIsOpen(true)}
                        className="rounded px-4 py-2 font-bold text-white bg-aqua-500 hover:bg-aqua-700"
                    >
                        Create your listing
                    </button>
                </div>
                <div className="relative mt-20 mb-20 h-96 w-full">
                    <img
                        className="h-full w-full object-cover"
                        src="https://images.unsplash.com/photo-1592194996308-7b43878e84a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDkxNzN8MHwxfGFsbHwxfHx8fHx8fHx8fHwxNjI1MzIyNzE&ixlib=rb-1.2.1&q=80&w=400"
                        alt="Testimonial"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50" />
                    <div className="absolute bottom-0 left-0 p-8">
                        <h3 className="mb-4 text-2xl font-bold text-white">"ArendyEm helped me find my perfect roommate!"</h3>
                        <p className="text-sm text-white">- Jane, New York City</p>
                    </div>
                </div>
            </ScrollAnimation>
            {isOpen && (
                <PopupForm
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                />
            )}
        </Element>
    );
};


export default OwnerContent;
