import React, {useState} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import api from "../utils/api";
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
                navigate('/user/roles');
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


    return (
        <div className="flex h-screen items-center justify-center backdrop:opacity-25 backdrop-blur-sm loginBack">
            <div className="mb-4 w-full max-w-xs rounded bg-white px-8 pt-6 pb-8 shadow-md">
                <h1 className="mb-4 text-center text-3xl font-bold">SignIn</h1>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    validationSchema={SigninSchema}
                    onSubmit={handleSubmit}
                >
                    {({ errors, isSubmitting, values, setFieldValue }) => (
                        <Form>
                            {success ? (
                                <p className="mb-4 text-green-600">Sign in successful!</p>
                            ) : null}
                            {error ? <p className="mb-4 text-red-600">{error}</p> : null}
                            <div className="mb-4">
                                <label className="mb-2 block font-bold text-gray-700" htmlFor="email">
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
                                    {msg => <p className="text-xs italic text-red-500">{msg}</p>}
                                </ErrorMessage>
                            </div>
                            <div className="mb-4">
                                <label
                                    className="mb-2 block font-bold text-gray-700"
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
                                    {msg => <p className="text-xs italic text-red-500">{msg}</p>}
                                </ErrorMessage>
                            </div>
                            <div className="flex items-center justify-between">
                                <p className="text-xs text-gray-700">
                                    <a
                                        className="no-underline text-aqua-500 hover:text-aqua-700"
                                        href="/forgot-password"
                                    >
                                        Forgot Password?
                                    </a>
                                </p>
                            </div>

                            <div className="flex items-center justify-between">
                                <p className="mr-2 text-xs text-gray-700">
                                    Don't have an account ?
                                    <a
                                        className="no-underline text-aqua-500 hover:text-aqua-700"
                                        href="/signup"
                                    >
                                        Sign Up
                                    </a>
                                </p>
                            </div>
                            <div className="mt-4 flex items-center justify-between">
                                <button
                                    className="rounded px-4 py-2 font-bold text-white bg-aqua-500 hover:bg-aqua-700 focus:shadow-outline focus:outline-none"
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
