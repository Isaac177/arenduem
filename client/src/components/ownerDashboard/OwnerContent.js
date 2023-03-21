import React from 'react';
import MapsHomeWorkOutlinedIcon from '@mui/icons-material/MapsHomeWorkOutlined';
import SupervisedUserCircleOutlinedIcon from '@mui/icons-material/SupervisedUserCircleOutlined';
import MarkUnreadChatAltOutlinedIcon from '@mui/icons-material/MarkUnreadChatAltOutlined';

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
    const redirectToListingForm = () => {
        window.location.href = '/list-your-room';
    }

    return (
        <div className="container flex flex-col justify-center items-center pt-20 text-primary-700" style={{ width: '1080px', margin: '0 auto' }}>
            <div className="flex flex-wrap items-center">
                <div className="w-full px-4">
                    <h1 className="text-3xl font-bold">Why ArendyEm?</h1>
                    <p className="text-sm leading-relaxed mt-4 mb-4">
                        ArendyEm is designed to make finding your perfect roommate a breeze. Our platform helps you easily list your room, find compatible roommates, and chat with potential matches.
                    </p>
                    <div className="flex flex-wrap items-center">
                        <div className="w-full flex flex-row mt-4">
                            {features.map(({ IconComponent, title, description }) => (
                                <div key={title} className="px-6">
                                    <IconComponent style={{ fontSize: '60px' }} />
                                    <h6 className="text-xl mt-5 font-semibold text-gray-800">{title}</h6>
                                    <p className="mt-2 mb-4 text-gray-600 text-sm">{description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap items-center mt-10">
                <div className="bg-gray-200 p-8 w-full mt-10 rounded-lg">
                    <h2 className="text-2xl font-bold mb-4">Start your roommate search now</h2>
                    <p className="text-gray-600 text-sm mb-6">
                        Find your perfect roommate match with ArendyEm. Sign up and create a listing to begin your journey today.
                    </p>
                    <button
                        onClick={redirectToListingForm}
                        className="bg-aqua-500 hover:bg-aqua-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Create your listing
                    </button>
                </div>
                <div className="relative mt-20 mb-20 w-full h-96">
                    <img
                        className="w-full h-full object-cover"
                        src="https://images.unsplash.com/photo-1592194996308-7b43878e84a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDkxNzN8MHwxfGFsbHwxfHx8fHx8fHx8fHwxNjI1MzIyNzE&ixlib=rb-1.2.1&q=80&w=400"
                        alt="Testimonial"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50" />
                    <div className="absolute left-0 bottom-0 p-8">
                        <h3 className="text-2xl font-bold text-white mb-4">"ArendyEm helped me find my perfect roommate!"</h3>
                        <p className="text-white text-sm">- Jane, New York City</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OwnerContent;
