import React, {useState} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import api from "../../utils/api";
import { useNavigate } from 'react-router-dom';
import {setTokenAndRole, setUserId} from "../../actions/userActions";
import {useDispatch} from "react-redux";
import FacebookLogin from 'react-facebook-login';

const SigninSchema = object().shape({
    email: string().email('Invalid email').required('Email is required'),
    password: string().required('Password is required'),
});

const FACEBOOK_APP_ID = process.env.REACT_APP_FACEBOOK_APP_ID;

const Signin = () => {
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(null);
    let navigate = useNavigate();
    const dispatch = useDispatch();


    const handleSubmit = async (values, { setSubmitting }) => {
        try {
            const response = await api.post('/auth/signin', {
                email: values.email,
                password: values.password,
            });

            const { token, role, userId } = response.data;
            dispatch(setTokenAndRole(token, role));
            dispatch(setUserId(userId));

            if (role === 'admin') {
                navigate('/admin/dashboard');
            } else if (role === 'user') {
                navigate('/user/dashboard');
            }

            setSuccess(true);
            setError(null);
        } catch (error) {
            console.error(error);
            setError('Invalid email or password');
        } finally {
            setSubmitting(false);
        }
    };

    const responseFacebook = async (response) => {
        // Handle Facebook login response
        console.log(response);
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="w-full max-w-xs bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <h1 className="text-3xl text-center font-bold mb-4">SignIn</h1>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    validationSchema={SigninSchema}
                    onSubmit={handleSubmit}
                >
                    {({ errors, isSubmitting, values, setFieldValue }) => (
                        <Form>
                            {success ? (
                                <p className="text-green-600 mb-4">Sign in successful!</p>
                            ) : null}
                            {error ? <p className="text-red-600 mb-4">{error}</p> : null}
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                                    Email
                                </label>
                                <Field
                                    className={`${
                                        errors.email ? 'border-red-500' : 'border-gray-300'
                                    } appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                                    id="email"
                                    type="email"
                                    placeholder="Your email"
                                    name="email"
                                    onChange={e => {
                                        setFieldValue('email', e.target.value);
                                    }}
                                />
                                <ErrorMessage name="email">
                                    {msg => <p className="text-red-500 text-xs italic">{msg}</p>}
                                </ErrorMessage>
                            </div>
                            <div className="mb-4">
                                <label
                                    className="block text-gray-700 font-bold mb-2"
                                    htmlFor="password"
                                >
                                    Password
                                </label>
                                <Field
                                    className={`${
                                        errors.password ? 'border-red-500' : 'border-gray-300'
                                    } appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                                    id="password"
                                    type="password"
                                    placeholder="Your password"
                                    name="password"
                                    onChange={e => {
                                        setFieldValue('password', e.target.value);
                                    }}
                                />
                                <ErrorMessage name="password">
                                    {msg => <p className="text-red-500 text-xs italic">{msg}</p>}
                                </ErrorMessage>
                            </div>
                            <div className="flex items-center justify-between">
                                <p className="text-xs text-gray-700">
                                    <a
                                        className="text-aqua-500 hover:text-aqua-700 no-underline"
                                        href="/forgot-password"
                                    >
                                        Forgot Password?
                                    </a>
                                </p>
                            </div>
                            <div className="flex items-center justify-between mt-4">
                                <FacebookLogin
                                    appId={FACEBOOK_APP_ID}
                                    autoLoad={false}
                                    fields="name,email,picture"
                                    callback={responseFacebook}
                                    className="text-white font-bold rounded focus:outline-none focus:shadow-outline bg-blue-500 hover:bg-blue-700 py-2 px-4"
                                    icon="fa-facebook"
                                    textButton=" Login with Facebook"
                                />
                            </div>

                            <div className="flex items-center justify-between">
                                <p className="text-xs text-gray-700 mr-2">
                                    Don't have an account ?
                                    <a
                                        className="text-aqua-500 hover:text-aqua-700 no-underline"
                                        href="/signup"
                                    >
                                        Sign Up
                                    </a>
                                </p>
                            </div>
                            <div className="flex items-center justify-between mt-4">
                                <button
                                    className="bg-aqua-500 hover:bg-aqua-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    type="submit"
                                    disabled={isSubmitting}
                                >
                                    Sign In
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default Signin;
