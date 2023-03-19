import React from 'react';
import { FormControlLabel, Radio, RadioGroup, Slider } from '@material-ui/core';
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { makeStyles } from '@material-ui/core/styles';



/*const useStyles = makeStyles({
    sliderThumb: {
        '&:focus': {
            boxShadow: 'none',
        },
    },
});*/
const useStyles = makeStyles({
    sliderThumb: {
        color: '#19BA99',
        '&:focus': {
            boxShadow: 'none',
        },
    },
    radioRoot: {
        color: '#19BA99',
        '&$checked': {
            color: '#19BA99',
        },
    },
    checked: {},

    checkboxRoot: {
        color: '#19BA99',
        '&$checked': {
            color: '#19BA99',
        },
    },
    checkboxChecked: {},
});

const HeroForm = ({history}) => {
    const classes = useStyles();
    const [owner] = React.useState(false);



    const [values, setValues] = React.useState({
        isOwner: false,
        gender: "",
        minAge: 0,
        maxAge: 0,
    });

    const radioOptions = [
        { value: "Male", label: "Male" },
        { value: "Female", label: "Female" },
        { value: "Other", label: "Other" },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values);
        axios.post("http://localhost:5000/api/roommate", values)
            .then(res => {
                console.log(res);
                history.push("/roommates");
            })
            .catch(err => console.log(err));
    }

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
                onSubmit={(values, {setSubmitting}) => {
                    setSubmitting(true);
                    setValues(values);
                    console.log(values);
                    axios.post("http://localhost:5000/api/roommate", values)
                        .then(res => {
                            console.log(res);
                            history.push("/roommates");
                        })
                        .catch(err => console.log(err));
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
                                    checked={values.isOwner}
                                    className="mr-2 h-5 w-5 rounded cursor-pointer"
                                    onChange={(e) => setValues({ ...values, isOwner: e.target.checked })}
                                    classes={{
                                        root: classes.checkboxRoot,
                                        checked: classes.checkboxChecked,
                                    }}
                                />
                                <label htmlFor="owner" className="text-xl">
                                    Yes, I'm a room owner
                                </label>
                            </div>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="gender" className="block font-medium mb-2 text-xl">
                                I am{' '}
                                <span className="font-bold text-red-500 text-xl">
                                    {owner ? 'looking for' : 'seeking'}
                                  </span>{' '}
                                a roommate who is...
                            </label>
                            <RadioGroup
                                name="gender"
                                className="flex flex-row"
                                row={true}
                            >
                                {radioOptions.map((option) => (
                                    <FormControlLabel
                                        key={option.value}
                                        value={option.value}
                                        control={
                                            <Radio
                                                color="primary"
                                                checked={values.gender === option.value}
                                                onChange={(e) => setValues({ ...values, gender: e.target.value })}
                                                value={option.value}
                                                classes={{
                                                    root: classes.radioRoot,
                                                    checked: classes.checked,
                                                }}
                                            />
                                        }
                                        label={option.label}
                                    />
                                ))}
                            </RadioGroup>
                            {errors.gender && touched.gender && (
                                <div className="text-red-500">{errors.gender}</div>
                            )}
                        </div>

                        <div className="mb-4">
                            <label htmlFor="ageRange" className="block text-xl font-medium mb-2">
                                Age range
                            </label>
                            <div className="flex items-center">
                                <Slider
                                    id="ageRange"
                                    name="ageRange"
                                    value={[values.minAge, values.maxAge]}
                                    min={18}
                                    max={100}
                                    step={1}
                                    onChange={(event, value) => {
                                        const [minAge, maxAge] = value.map(val => Number(val));
                                        setValues({ ...values, minAge, maxAge });
                                    }}
                                    valueLabelDisplay="auto"
                                    color="primary"
                                    className="flex-grow"
                                    classes={{
                                        thumb: classes.sliderThumb,
                                    }}
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
                <button className="bg-aqua-500 hover:bg-aqua-600 text-white font-bold py-2 px-4 rounded"
                        type="submit"
                        onClick={handleSubmit}
                >
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
