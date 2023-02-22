import React from 'react';
import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string } from 'yup';

const SignUpSchema = object().shape({
    name: string().required('Name is required'),
    email: string().email('Invalid email').required('Email is required'),
    password: string()
        .required('Password is required')
        .min(8, 'Password must be at least 8 characters')
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            'Password must contain at least one uppercase letter, one lowercase letter, one number and one special character'
        ),
});

const SignUp = () => {
    const [success, setSuccess] = useState(false);

    const handleSubmit = (values, { setSubmitting }) => {
        console.log(values);
        setSubmitting(false);
        setSuccess(true);
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="w-full max-w-xs bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <h1 className="text-3xl text-center font-bold mb-4">Sign Up</h1>
                {success ? (
                    <p className="text-green-600 mb-4">Sign up successful!</p>
                ) : null}
                <Formik
                    initialValues={{ name: '', email: '', password: '' }}
                    validationSchema={SignUpSchema}
                    onSubmit={handleSubmit}
                >
                    {({ errors, touched, isSubmitting }) => (
                        <Form>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                                    Name
                                </label>
                                <Field
                                    className={`${
                                        errors.name ? 'border-red-500' : 'border-gray-300'
                                    } appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                                    id="name"
                                    type="text"
                                    placeholder="Your name"
                                    name="name"
                                />
                                <ErrorMessage name="name">
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
                                />
                                <ErrorMessage name="password">
                                    {msg => <p className="text-red-500 text-xs italic">{msg}</p>}
                                </ErrorMessage>
                            </div>
                            <div className="flex items-center justify-between">
                                <p className="text-gray-700 text-sm">
                                    Already have an account ?{' '}
                                    <a
                                        className="text-aqua-500 hover:text-aqua-700 font-bold"
                                        href="/login"
                                    >
                                        Login
                                    </a>
                                </p>
                            </div>
                            <div className="flex items-center justify-between mt-4">
                                <button
                                    className="bg-aqua-500 hover:bg-aqua-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    type="submit"
                                    disabled={isSubmitting}
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
