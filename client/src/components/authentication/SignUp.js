import React, {useState} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {boolean, object, string} from 'yup';
import * as yup from "yup";
import api from "../../utils/api";
import {useDispatch} from "react-redux";
import {setUserId} from "../../actions/userActions";

const SignUpSchema = object().shape({
    firstName: string().required('First name is required'),
    lastName: string().required('Last name is required'),
    email: string().email('Invalid email').required('Email is required'),
    password: string()
        .required('Password is required')
        .min(8, 'Password must be at least 8 characters')
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            'Password must contain at least one uppercase letter, one lowercase letter, one number and one special character'
        ),
    confirmPassword: string()
        .required('Confirm password is required')
        .oneOf([yup.ref('password'), null], 'Passwords must match'),
    isOwner: boolean()
});

const SignUp = () => {
    const [success, setSuccess] = useState(false);

    const dispatch = useDispatch();

    const handleSubmit = async (values, { setSubmitting }) => {
        try {
            console.log('values', values);
            const response = await api.post('/auth/signup', values);
            if (response.status === 201) {
                setSuccess(true);
                setSubmitting(false);
                const user = response.data.user;
                dispatch(setUserId(user.id));
                console.log(user);
            }
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="w-full max-w-xs bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <h1 className="text-3xl text-center font-bold mb-4">Sign Up</h1>
                {success ? (
                    <p className="text-green-600 mb-4">Sign up successful!</p>
                ) : null}
                <Formik
                    initialValues={{ firstName: '', lastName: '', email: '', password: '', confirmPassword: '', isOwner: false }}
                    validationSchema={SignUpSchema}
                    onSubmit={handleSubmit}
                >
                    {({ errors, touched, isSubmitting, values, setFieldValue }) => (
                        <Form>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                                    First Name
                                </label>
                                <Field
                                    className={`${
                                        errors.firstName ? 'border-red-500' : 'border-gray-300'
                                    } appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                                    id="firstName"
                                    type="text"
                                    placeholder="Your first name"
                                    name="firstName"
                                    value={values.firstName}
                                    onChange={(e) => setFieldValue('firstName', e.target.value)}
                                />
                                <ErrorMessage name="firstName">
                                    {msg => <p className="text-red-500 text-xs italic">{msg}</p>}
                                </ErrorMessage>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                                   Last Name
                                </label>
                                <Field
                                    className={`${
                                        errors.lastName ? 'border-red-500' : 'border-gray-300'
                                    } appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                                    id="lastName"
                                    type="text"
                                    placeholder="Your last name"
                                    name="lastName"
                                    value={values.lastName}
                                    onChange={(e) => setFieldValue('lastName', e.target.value)}
                                />
                                <ErrorMessage name="lastName">
                                    {msg => <p className="text-red-500 text-xs italic">{msg}</p>}
                                </ErrorMessage>
                            </div>
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
                                    values={values.email}
                                    onChange={(e) => setFieldValue('email', e.target.value)}
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
                                    value={values.password}
                                    onChange={(e) => setFieldValue('password', e.target.value)}
                                />
                                <ErrorMessage name="password">
                                    {msg => <p className="text-red-500 text-xs italic">{msg}</p>}
                                </ErrorMessage>
                            </div>
                            <div className="mb-4">
                                <label
                                    className="block text-gray-700 font-bold mb-2"
                                    htmlFor="confirmPassword"
                                >
                                    Confirm Password
                                </label>
                                <Field
                                    className={`${
                                        errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
                                    } appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                                    id="confirmPassword"
                                    type="password"
                                    placeholder="Confirm your password"
                                    name="confirmPassword"
                                    value={values.confirmPassword}
                                    onChange={(e) => setFieldValue('confirmPassword', e.target.value)}
                                />
                                <ErrorMessage name="confirmPassword">
                                    {msg => <p className="text-red-500 text-xs italic">{msg}</p>}
                                </ErrorMessage>
                            </div>
                            <div className="mb-4 flex items-center">
                                <input
                                    className={`${errors.isOwner ? 'border-red-500' : 'border-gray-300'}`}
                                    id="isOwner"
                                    type="checkbox"
                                    name="isOwner"
                                    checked={values.isOwner}
                                    onChange={(e) => setFieldValue('isOwner', e.target.checked)}
                                />
                                <label
                                    className="block text-gray-700 font-bold mb-2"
                                    htmlFor="isOwner"
                                >
                                    Are you a room owner?
                                </label>
                                <ErrorMessage name="isOwner">
                                    {msg => <p className="text-red-500 text-xs italic">{msg}</p>}
                                </ErrorMessage>
                            </div>
                            <div className="flex items-center justify-between">
                                <p className="text-gray-700 text-sm">
                                    Already have an account ?{' '}
                                    <a
                                        className="text-aqua-500 hover:text-aqua-700 font-bold"
                                        href="/signin"
                                    >
                                        Login
                                    </a>
                                </p>
                            </div>
                            <div className="flex items-center justify-between mt-4">
                                <button
                                    className="bg-aqua-500 hover:bg-aqua-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    type="submit"
                                >
                                    Sign Up
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>

            </div>
        </div>
    );
};

export default SignUp;
