import React, {useEffect} from 'react';
import img from "../../assets/img/img.png";
import room from "../../assets/img/img_1.png";
import {useDispatch, useSelector} from "react-redux";
import {fetchUserData} from "../../actions/userActions";
import {BsDot} from "react-icons/bs";



const CoverSection = () => {
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.user.userData);
    const dateOfBirth = useSelector((state) => state.user.userData.dateOfBirth);
    const age = new Date().getFullYear() - new Date(dateOfBirth).getFullYear();


    useEffect(() => {
        dispatch(fetchUserData());
    }, [dispatch]);

    return (
        <>
            <div className="relative h-40 md:h-60 lg:h-72 xl:h-80">
                <img
                    className="object-cover w-full h-full"
                    src={room}
                    loading="lazy"
                    alt="Profile Cover"
                />
                <img
                    className="rounded-full absolute bottom-0 left-0 transform translate-x-3
                    translate-y-20 w-36 h-36 object-cover bg-center border-4 border-aqua-500"
                    src={img}
                    loading="lazy"
                    alt="Profile Image"
                />
            </div>
            <div className="moon relative z-10 flex flex-row rounded-l items-center rounded-r px-4 py-2 bg-primary-900">
                {userData && (
                    <>
                        <h1 className="text-2xl font-bold text-white px-4">
                            {userData && userData.firstName} {userData && userData.lastName}
                        </h1>
                        <BsDot className="text-white font-bold text-2xl" />
                        <p className="text-white px-2">{userData && userData.occupation}</p>
                        <BsDot className="text-white font-bold text-2xl" />
                        <p className="text-white px-2">{`${age} years old`}</p>
                        <BsDot className="text-white font-bold text-2xl" />
                        <p className="text-white px-2">Almaty</p>
                    </>
                )}
            </div></>
    );
};

export default CoverSection;