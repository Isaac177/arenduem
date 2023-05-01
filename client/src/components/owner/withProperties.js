import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserProperties } from '../../actions/propertyActions';

const withProperties = (WrappedComponent) => {
    return (props) => {
        const dispatch = useDispatch();
        const properties = useSelector((state) => state.property.properties);

        useEffect(() => {
            dispatch(getUserProperties());
        }, [dispatch]);

        return <WrappedComponent properties={properties} {...props} />;
    };
};

export default withProperties;
