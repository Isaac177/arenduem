import React from 'react';

const withAuthorization = (allowedRoles, WrappedComponent) => {
    return class WithAuthorization extends React.Component {
        checkAuthorization() {
            const userRole = localStorage.getItem('role');
            if (!userRole || !allowedRoles.includes(userRole)) {
                window.location.href = '/unauthorized';
            }
        }
        componentDidMount() {
            this.checkAuthorization();
        }
        componentDidUpdate() {
            this.checkAuthorization();
        }
        render() {
            const userRole = localStorage.getItem('role');
            if (!userRole) {
                window.location.href = '/login';
                return null;
            } else if (!allowedRoles.includes(userRole)) {
                window.location.href = '/unauthorized';
                return null;
            } else {
                return <WrappedComponent {...this.props} />;
            }
        }
    };
};

export default withAuthorization;
