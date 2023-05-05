import React from 'react';
import styles from './ServerError.module.css';
import errorImage from '../../assets/img/500img.png';

const ServerError = ({ errorMessage }) => {
    return (
        <div className={styles['server-error']}>
            <img
                src={errorImage}
                alt="Error"
                className={`${styles['error-image']}}`}
            />
            <p>{errorMessage}</p>
        </div>
    );
};

export default ServerError;
