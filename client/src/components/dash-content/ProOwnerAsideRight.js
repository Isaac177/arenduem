import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useMemo} from "react";
import {fetchUserInfoById} from "../../actions/userActions";
import interestsArray from "../../assets/data/insterestsArray";
import {Wc} from "@material-ui/icons";
import {WorkOutlined} from "@mui/icons-material";


const ProOwnerAsideRight = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.user.allUsers.users) || [];
    const currentPropertyOwnerId = useSelector((state) => state.user.currentPropertyOwnerId);
    const owner = useMemo(() => users.find((user) => user.id === currentPropertyOwnerId), [users, currentPropertyOwnerId]);

    useEffect(() => {
        if (owner) {
            dispatch(fetchUserInfoById(owner.id));
        }
    }, [owner, dispatch]);

    // Select userInfo from state here
    const userInfo = useSelector((state) => state.user.userInfo) || {};

    const mainPicture = userInfo.pictures && userInfo.pictures.find((picture) => picture.isMain);

    const calculateAge = (dateOfBirth) => {
        const birthDate = new Date(dateOfBirth);
        const currentDate = new Date();
        let age = currentDate.getFullYear() - birthDate.getFullYear();
        const monthDifference = currentDate.getMonth() - birthDate.getMonth();
        if (monthDifference < 0 || (monthDifference === 0 && currentDate.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.toLocaleString('default', { month: 'long' });
        const year = date.getFullYear();
        return `${day} ${month}, ${year}`;
    };

    const getInterestIcon = (interestName) => {
        const interest = interestsArray.find((i) => i.name === interestName);
        return interest ? interest.icon : null;
    };

    console.log('owner', owner);
    console.log('userInfo', userInfo);

    return (
        <div className="col-span-2 mt-10">
            <div className="grid grid-cols-1 gap-4">
                <div className="bg-white rounded-l-lg border">
                    {mainPicture && (
                        <img
                            className="object-cover w-full rounded-tl-lg"
                            src={`http://localhost:8000/${mainPicture.fileUrl}`}
                            alt="profile"
                            style={{ height: '280px', width: '100%' }}
                        />
                    )}
                    <div className='p-4'>
                        <div className='flex flex-row my-6'>
                            {userInfo.gender && (
                                <div className="flex items-center gap-2">
                                    <Wc className="text-aqua-500" fontSize="small" />
                                    <span>{userInfo.gender}</span>
                                </div>
                            )}
                            {userInfo.occupation && (
                                <div className="flex items-center gap-2">
                                    <WorkOutlined className="text-gray-800" fontSize="small" />
                                    <span className='text-sm text-gray-500'>{userInfo.occupation}</span>
                                </div>
                            )}
                        </div>
                        <div className='my-6'>
                            {userInfo.firstName && userInfo.dateOfBirth && (
                                <h1 className='text-2xl font-bold text-primary-700'>{userInfo.firstName}, {calculateAge(userInfo.dateOfBirth)}
                                </h1>
                            )}
                        </div>
                        <div className='my-6 flex flex-row'>
                            {userInfo.createdAt && (
                                <div className='flex flex-col border-l-primary-700 gap-2'>
                                    <p className='font-bold text-primary-700'>Member since</p>
                                    <p className='text-sm text-gray-500'>{formatDate(userInfo.createdAt)}</p>
                                </div>
                            )}
                        </div>

                        <div className='my-6'>
                            {userInfo.aboutMe && (
                                <div className='flex flex-col gap-2'>
                                    <p className='font-bold text-primary-700'>About me</p>
                                    <p className='text-sm text-gray-500'>{userInfo.aboutMe}</p>
                                </div>
                            )}
                        </div>
                        <div className="my-6">
                            <div className="flex flex-col gap-2">
                                <p className="font-bold text-primary-700">Interests</p>
                                <div className="flex flex-wrap gap-2">
                                    {userInfo.interests && userInfo.interests.map((interest) => (
                                        <div key={interest.id} className="flex items-center gap-2 border border-primary-600 rounded-2xl p-4">
                                            {getInterestIcon(interest.name)}
                                            <span className="text-sm text-gray-500">{interest.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProOwnerAsideRight;
