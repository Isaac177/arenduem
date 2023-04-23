import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {getProperties} from "../../actions/propertyActions";
import MiddlePicture from "../owner-middle-content/MiddlePicture";



const OwnerMiddleContent = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProperties());
    }, [dispatch]);


     return (
        <div className="col-span-8 bg-white rounded-lg h-screen">
            <MiddlePicture />
        </div>
    );
};


export default OwnerMiddleContent;