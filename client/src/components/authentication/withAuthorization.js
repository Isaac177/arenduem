import React from 'react';
import { useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {fetchUserData} from "../../actions/userActions";

const withAuthorization = (allowedRoles, WrappedComponent) => {
    return (props) => {
        const navigate = useNavigate();
        const userRole = useSelector((state) => state.auth.role);
        const dispatch = useDispatch();

        React.useEffect(() => {
            const fetchUser = async () => {
                await dispatch(fetchUserData());
            };

            if (!userRole) {
                fetchUser().then(r => navigate('/login'));
            } else if (!allowedRoles.includes(userRole)) {
                navigate('/unauthorized');
            }
        }, [dispatch, navigate, allowedRoles, userRole]);

        return <WrappedComponent {...props} />;
    };
};


export default withAuthorization;
