import React from 'react';
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";


const HeroForm = () => {
    const [owner] = React.useState(false);

    const validationSchema = Yup.object().shape({
        owner: Yup.boolean().required(),
        gender: Yup.string().required(),
        minAge: Yup.number().required(),
        maxAge: Yup.number().required(),
    });

    return (
        <div className="backdrop-blur-lg text-white bg-primary-700 bg-opacity-50 p-12 rounded-3xl w-2/3">
            <h2 className="text-2xl font-bold mb-4">Find a Roommate</h2>
            <Formik
                initialValues={{
                    owner: false,
                    gender: "",
                    minAge: "",
                    maxAge: "",
                }}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting }) => {
                    console.log(values);
                    setSubmitting(false);
                }}
            >
                {({ errors, touched }) => (
                    <Form className="flex flex-col">
                        <div className="mb-4">
                            <label htmlFor="owner" className="block text-xl mb-2">
                                Are you a room owner?
                            </label>
                            <div className="flex items-center">
                                <Field
                                    type="checkbox"
                                    id="owner"
                                    name="owner"
                                    className="mr-2 h-5 w-5 text-aqua-500 focus:ring-aqua-500 border-gray-300 rounded cursor-pointer focus:outline-none"
                                />
                                <label htmlFor="owner" className="text-xl">
                                    Yes, I'm a room owner
                                </label>
                            </div>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="gender" className="block font-medium mb-2 text-xl">
                                I am <span className="font-bold text-red-500 text-xl">{owner ? "looking for" : "seeking"}</span> a roommate who is...
                            </label>
                            <div>
                                <label className="mr-4 text-xl">
                                    <Field
                                        type="radio"
                                        name="gender"
                                        value="male"
                                        className="mr-2 cursor-pointer focus:ring-aqua-500 border-gray-300 rounded focus:outline-none text-aqua-500"
                                    />
                                    Male
                                </label>
                                <label className="mr-4 text-xl">
                                    <Field
                                        type="radio"
                                        name="gender"
                                        value="female"
                                        className="mr-2 cursor-pointer focus:ring-aqua-500 border-gray-300 rounded focus:outline-none text-aqua-500"
                                    />
                                    Female
                                </label>
                                <label className="mr-4 text-xl">
                                    <Field
                                        type="radio"
                                        name="gender"
                                        value="other"
                                        className="mr-2 cursor-pointer focus:ring-aqua-500 border-gray-300 rounded focus:outline-none text-aqua-500"
                                    />
                                    Other
                                </label>
                            </div>
                            {errors.gender && touched.gender && (
                                <div className="text-red-500">{errors.gender}</div>
                            )}
                        </div>

                        <div className="mb-4">
                            <label htmlFor="minAge" className="block font-medium mb-2">
                                Age range
                            </label>
                            <div className="flex items-center">
                                <Field
                                    type="number"
                                    id="minAge"
                                    name="minAge"
                                    placeholder="Min"
                                    value={18}
                                    className="border-gray-400 rounded-l-lg p-2 mr-4"
                                />
                                <Field
                                    type="number"
                                    id="maxAge"
                                    name="maxAge"
                                    placeholder="Max"
                                    value={99}
                                    className="border-gray-400 rounded-r-lg p-2"
                                />
                            </div>
                            {(errors.minAge || errors.maxAge) && (touched.minAge || touched.maxAge) && (
                                <div className="text-red-500">{errors.minAge || errors.maxAge}</div>
                            )}
                        </div>
                    </Form>
                    )}
            </Formik>
            <div className="flex mt-4">
                <button className="bg-aqua-500 hover:bg-aqua-600 text-white font-bold py-2 px-4 rounded">
                    Search
                </button>
                <button className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded ml-4">
                    Reset
                </button>
            </div>
        </div>
    );
}

export default HeroForm;
