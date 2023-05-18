import React from 'react';
import studentImg from '../../assets/img/studentImage.jpeg';
import roomOwner from '../../assets/img/roomOwner.jpeg';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import MoveUpOutlinedIcon from '@mui/icons-material/MoveUpOutlined';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Card from './Card';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {updateIsOwner} from "../../actions/userActions";
import ScrollAnimation from "react-animate-on-scroll";
import {Element} from "react-scroll";

const BeforeDash = () => {
    const controls = useAnimation();
    const dispatch = useDispatch();
    const userId = useSelector((state) => state.auth.userId);

    const navigate = useNavigate();
    const [ref, inView] = useInView({
        threshold: 0.1,
    });

    React.useEffect(() => {
        if (inView) {
            controls.start('visible');
        } else {
            controls.start('hidden');
        }
    }, [controls, inView]);

    const roommateActions = [
        {
            icon: <SearchOutlinedIcon className="mt-2 text-aqua-500" />,
            title: 'Search for houses',
            description: 'Use our search filters to find houses that match your preferences',
        },
        {
            icon: <GroupOutlinedIcon className="mt-2 text-aqua-500" />,
            title: 'Find roommates',
            description: 'Find roommates that match your preferences and start chatting with them',
        },
        {
            icon: <ChatOutlinedIcon className="mt-2 text-aqua-500" />,
            title: 'Chat with roommates',
            description: 'Chat with your potential roommates to get to know them better',
        },
        {
            icon: <MoveUpOutlinedIcon className="mt-2 text-aqua-500" />,
            title: 'Move in',
            description: 'Once you find a house and roommates, you can move in and start living together',
        },
    ];

    const houseOwnerActions = [
        {
            icon: <SearchOutlinedIcon className="mt-2 text-aqua-500" />,
            title: 'List your house',
            description: 'Create a listing for your house to attract potential roommates',
        },
        {
            icon: <GroupOutlinedIcon className="mt-2 text-aqua-500" />,
            title: 'Find roommates',
            description: 'Find roommates that match your preferences and start chatting with them',
        },
        {
            icon: <ChatOutlinedIcon className="mt-2 text-aqua-500" />,
            title: 'Chat with roommates',
            description: 'Chat with your potential roommates to get to know them better',
        },
    ];

    const handleClick = (isOwner) => {
        dispatch(updateIsOwner(userId, isOwner));

        if (isOwner) {
            navigate('/user/owner');
        } else {
            navigate('/user/dashboard');
        }
    };
    return (
        <Element
            style={{ width: '1080px', margin: '0 auto' }}
            className="block"
        >
            <h1
                className="mt-10 text-4xl font-bold"
                style={{
                    background: 'linear-gradient(to right, #0F8E6E, black)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                }}
            >Choose your card</h1>
            <div className="flex w-full flex-col gap-10 hover:cursor-pointer">
                <ScrollAnimation
                    animateIn="animate__fadeInLeft"
                    animateOut="animate__fadeOutLeft"
                    animateOnce={false}
                    duration={1.5}
                    delay={100}>
                <Card
                    imageSrc={studentImg}
                    imageAlt="Student looking for a roommate"
                    title="Are you looking for a"
                    subtitle=" roommate?"
                    contentOrder="image-first"
                    actions={roommateActions}
                    handleClick={()=>handleClick(false)}
                />
                </ScrollAnimation>
                <ScrollAnimation
                    animateIn="animate__fadeInRight"
                    animateOut="animate__fadeOutRight"
                    animateOnce={false}
                    duration={1.5}
                    delay={100}>
                <Card
                    imageSrc={roomOwner}
                    imageAlt="House owner seeking roommates"
                    title="Do you have a house and are seeking"
                    subtitle=" roommates?"
                    contentOrder="image-last"
                    actions={houseOwnerActions}
                    handleClick={()=>handleClick(true)}
                />
                </ScrollAnimation>
            </div>
        </Element>
    );
};

export default BeforeDash;