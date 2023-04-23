import React, { useState } from 'react';
import { useFormik } from 'formik';
import {
    FaMapMarkerAlt,
    FaDollarSign,
    FaCalendarAlt,
    FaVenusMars,
    FaUser,
    FaBriefcase,
    FaSmokingBan,
    FaDog,
    FaHeart,
    FaClock,
    FaChevronDown, FaGlassMartiniAlt, FaPaw
} from 'react-icons/fa';
import { HiAcademicCap } from 'react-icons/hi';
import { BiBed } from 'react-icons/bi';
import Select from 'react-select';
import Separator from "../utils/Separator";




const genderOptions = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'other', label: 'Other' },
];

const studentOptions = [
    { value: 'yes', label: 'Yes' },
    { value: 'no', label: 'No' },
];

const smokingOptions = [
    { value: 'never', label: 'Never' },
    { value: 'socially', label: 'Socially' },
    { value: 'regularly', label: 'Regularly' },
    { value: 'very often', label: 'Very often' },
];

const drinkingOptions = [
    { value: 'never', label: 'Never' },
    { value: 'socially', label: 'Socially' },
    { value: 'regularly', label: 'Regularly' },
    { value: 'very often', label: 'Very often' },
];

const petOptions = [
    { value: 'yes', label: 'Yes' },
    { value: 'no', label: 'No' },
];

const interestOptions = [
    { value: 'sports', label: 'Sports' },
    { value: 'music', label: 'Music' },
    { value: 'movies', label: 'Movies' },
    { value: 'gaming', label: 'Gaming' },
    { value: 'reading', label: 'Reading' },
    { value: 'cooking', label: 'Cooking' },
    { value: 'travel', label: 'Travel' },
    { value: 'outdoors', label: 'Outdoors' },
    { value: 'arts', label: 'Arts' },
    { value: 'tech', label: 'Tech' },
    { value: 'food', label: 'Food' },
    { value: 'animals', label: 'Animals' },
    { value: 'other', label: 'Other' },
];

const lengthOptions = [
    { value:'long term', label: 'Long term' },
    { value:'short term', label: 'Short term' },
    ];

const QuickSearch = () => {

    const [ageRange, setAgeRange] = useState([18, 30]);

    const initialValues = {
        location: '',
        genderPreference: '',
        studentStatus: '',
        smokingPreference: '',
        petPreference: '',
        interests: '',
        lengthOfStay: '',
        rentBudgetFrom: 0,
        rentBudgetTo: 0,
        ageRangeFrom: ageRange[0],
        ageRangeTo: ageRange[1],
    };

    const handleAgeRangeChange = (event) => {
        const index = Number(event.target.dataset.index);
        const newValue = Number(event.target.value);

        const newAgeRange = [...ageRange];
        newAgeRange[index] = newValue;
        setAgeRange(newAgeRange);

        formik.setFieldValue('ageRangeFrom', newAgeRange[0]);
        formik.setFieldValue('ageRangeTo', newAgeRange[1]);
    };

    const formik = useFormik({
        initialValues,
        onSubmit: (values) => {
            console.log(values);
        },
    });

    return (
        <Separator>
        <form onSubmit={formik.handleSubmit}>
            <div>
                <h1 className="flex items-start px-4 text-2xl font-bold">Quick Search</h1>
                <hr className="ml-4 w-1/2 border border-aqua-500" />
            </div>
            <div className="mt-4 flex flex-col gap-4 rounded-md border border-gray-500 p-4" style={{width:'676px'}}>
                <div className="flex flex-row gap-8">
                    <div className='flex flex-col gap-2'>
                        <p className="flex items-start text-gray-500">Location</p>
                        <div className="flex items-center rounded-md bg-white p-2">
                            <FaMapMarkerAlt className="mr-2 text-aqua-500" />
                            <input
                                type="text"
                                name="location"
                                id="location"
                                placeholder="Location"
                                onChange={formik.handleChange}
                                value={formik.values.location}
                                className="w-full focus:outline-none"
                            />
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p className="flex items-start text-gray-500">Rent Budget</p>
                        <div className="flex items-center rounded-md bg-white p-2">
                            <FaDollarSign className="mr-2 text-aqua-500" />
                            <input
                                type="text"
                                name="rentBudgetFrom"
                                id="rentBudgetFrom"
                                placeholder="From"
                                onChange={formik.handleChange}
                                value={formik.values.rentBudgetFrom}
                                className="w-full focus:outline-none"
                            />
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p className="flex items-start text-gray-500">To:</p>
                        <div className="flex items-center rounded-md bg-white p-2">
                            <FaDollarSign className="mr-2 text-aqua-500" />
                            <input
                                type="text"
                                name="rentBudgetTo"
                                id="rentBudgetTà"
                                placeholder="To"
                                onChange={formik.handleChange}
                                value={formik.values.rentBudgetTo}
                                className="w-full focus:outline-none"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-row gap-8">
                    <div className='flex flex-col gap-2'>
                        <p className="flex items-start text-gray-500">Gender Preference</p>
                        <div className="flex items-center rounded-md bg-white p-2">
                            <FaVenusMars className="mr-2 text-aqua-500" />
                            <Select
                                name="genderPreference"
                                options={genderOptions}
                                value={genderOptions.find(option => option.value === formik.values.genderPreference)}
                                onChange={(option) => formik.setFieldValue('genderPreference', option.value)}
                                className="w-full"
                                styles={{
                                    control: (provided) => ({
                                        ...provided,
                                        border: 'none',
                                        boxShadow: 'none',
                                        '&:hover': {
                                            border: 'none',
                                            boxShadow: 'none'
                                        }
                                    }),
                                    menu: (provided) => ({
                                        ...provided,
                                        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)'
                                    })
                                }}
                                components={{ IndicatorSeparator: null, DropdownIndicator: () => <FaChevronDown className="cursor-pointer" /> }}
                            >
                                {genderOptions.map(option => (
                                    <option key={option.value} value={option.value}>{option.label}</option>
                                ))}
                            </Select>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p className="flex items-start text-gray-500">Age</p>
                        <div className="flex items-center rounded-md bg-white p-2">
                            <FaUser className="mr-2 text-aqua-500" />
                            <div className="w-24">
                                <div className="flex justify-between text-sm">
                                    <div>From:{formik.values.ageRangeFrom}</div>
                                </div>
                                <input
                                    type="range"
                                    name="minAge"
                                    id="minAge"
                                    min="18"
                                    max="100"
                                    value={formik.values.ageRangeFrom}
                                    onChange={handleAgeRangeChange}
                                    data-index="0"
                                    className="h-3 w-full appearance-none overflow-hidden rounded bg-gray-300 outline-none"
                                    style={{ WebkitAppearance: 'none' }}
                                />
                                <style>
                                    {`
                                      input[type=range]::-webkit-slider-thumb {
                                        -webkit-appearance: none;
                                        appearance: none;
                                        width: 16px;
                                        height: 16px;
                                        border-radius: 50%;
                                        background-color: #38B2AC;
                                        cursor: pointer;
                                      }
                                    `}
                                </style>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p className="flex items-start text-gray-500">To:</p>
                        <div className="flex items-center rounded-md bg-white p-2">
                            <FaUser className="mr-2 text-aqua-500" />
                            <div className="w-24">
                                <div className="flex justify-between text-sm">
                                    <div>To:{formik.values.ageRangeTo}</div>
                                </div>
                                <input
                                    type="range"
                                    name="maxAge"
                                    id="maxAge"
                                    min="18"
                                    max="100"
                                    value={formik.values.ageRangeTo}
                                    onChange={handleAgeRangeChange}
                                    data-index="1"
                                    className="h-3 w-full appearance-none overflow-hidden rounded bg-gray-300 outline-none"
                                    style={{ WebkitAppearance: 'none' }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p className="flex items-start text-gray-500">Student Status</p>
                        <div className="flex items-center rounded-md bg-white p-2">
                            <HiAcademicCap className="mr-2 text-aqua-500" />
                            <Select
                                name="studentStatus"
                                options={studentOptions}
                                value={studentOptions.find(option => option.value === formik.values.studentStatus)}
                                onChange={(option) => formik.setFieldValue('studentStatus', option.value)}
                                className="w-full"
                                styles={{
                                    control: (provided) => ({
                                        ...provided,
                                        border: 'none',
                                        boxShadow: 'none',
                                        '&:hover': {
                                            border: 'none',
                                            boxShadow: 'none'
                                        }
                                    }),
                                    menu: (provided) => ({
                                        ...provided,
                                        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)'
                                    })
                                }}
                                components={{ IndicatorSeparator: null, DropdownIndicator: () => <FaChevronDown className="cursor-pointer" /> }}
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-row gap-8">
                    <div className='flex flex-col gap-2'>
                        <p className="flex items-start text-gray-500">Smoking Status</p>
                        <div className="flex items-center rounded-md bg-white p-2">
                            <FaSmokingBan className="mr-2 text-aqua-500" />
                            <Select
                                name="smokingPreference"
                                options={smokingOptions}
                                value={formik.values.smokingPreference}
                                onChange={(option) => formik.setFieldValue('smokingPreference', option)}
                                className="w-full"
                                styles={{
                                    control: (provided) => ({
                                        ...provided,
                                        border: 'none',
                                        boxShadow: 'none',
                                        '&:hover': {
                                            border: 'none',
                                            boxShadow: 'none'
                                        }
                                    }),
                                    menu: (provided) => ({
                                        ...provided,
                                        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)'
                                    })
                                }}
                                components={{ IndicatorSeparator: null, DropdownIndicator: () => <FaChevronDown className="cursor-pointer" /> }}
                            />
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p className="flex items-start text-gray-500">Drinking Status</p>
                        <div className="flex items-center rounded-md bg-white p-2">
                            <FaGlassMartiniAlt className="mr-2 text-aqua-500" />
                            <Select
                                name="drinkingPreference"
                                options={drinkingOptions}
                                value={formik.values.drinkingPreference}
                                onChange={(option) => formik.setFieldValue('drinkingPreference', option)}
                                className="w-full"
                                styles={{
                                    control: (provided) => ({
                                        ...provided,
                                        border: 'none',
                                        boxShadow: 'none',
                                        '&:hover': {
                                            border: 'none',
                                            boxShadow: 'none'
                                        }
                                    }),
                                    menu: (provided) => ({
                                        ...provided,
                                        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)'
                                    })
                                }}
                                components={{ IndicatorSeparator: null, DropdownIndicator: () => <FaChevronDown className="cursor-pointer" /> }}
                            />
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p className="flex items-start text-gray-500">Pet Preferences</p>
                        <div className="flex items-center rounded-md bg-white p-2">
                            <FaPaw className="mr-2 text-aqua-500" />
                            <Select
                                name="petPreference"
                                options={petOptions}
                                value={formik.values.petPreference}
                                onChange={(option) => formik.setFieldValue('petPreference', option)}
                                className="w-full"
                                styles={{
                                    control: (provided) => ({
                                        ...provided,
                                        border: 'none',
                                        boxShadow: 'none',
                                        '&:hover': {
                                            border: 'none',
                                            boxShadow: 'none'
                                        }
                                    }),
                                    menu: (provided) => ({
                                        ...provided,
                                        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)'
                                    })
                                }}
                                components={{ IndicatorSeparator: null, DropdownIndicator: () => <FaChevronDown className="cursor-pointer" /> }}
                            />
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p className="flex items-start text-gray-500">Length of Stay</p>
                        <div className="flex items-center rounded-md bg-white p-2">
                            <FaClock className="mr-2 text-aqua-500" />
                            <Select
                                name="lengthOfStay"
                                options={lengthOptions}
                                value={formik.values.lengthOfStay}
                                onChange={(option) => formik.setFieldValue('lengthOfStay', option)}
                                className="w-full"
                                styles={{
                                    control: (provided) => ({
                                        ...provided,
                                        border: 'none',
                                        boxShadow: 'none',
                                        '&:hover': {
                                            border: 'none',
                                            boxShadow: 'none'
                                        }
                                    }),
                                    menu: (provided) => ({
                                        ...provided,
                                        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)'
                                    })
                                }}
                                components={{ IndicatorSeparator: null, DropdownIndicator: () => <FaChevronDown className="cursor-pointer" /> }}
                            />
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <p className="flex items-start text-gray-500">Interests</p>
                    <div className="flex items-center rounded-md bg-white p-2">
                        <FaHeart className="mr-2 text-aqua-500" />
                        <Select
                            name="interests"
                            options={interestOptions}
                            value={interestOptions.filter(option => formik.values.interests.includes(option.value))}
                            isMulti
                            onChange={(options) => {
                                formik.setFieldValue('interests', options.map(option => option.value));
                            }}
                            className="w-full"
                            styles={{
                                control: (provided) => ({
                                    ...provided,
                                    border: 'none',
                                    boxShadow: 'none',
                                    '&:hover': {
                                        border: 'none',
                                        boxShadow: 'none'
                                    }
                                }),
                                menu: (provided) => ({
                                    ...provided,
                                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)'
                                })
                            }}
                            components={{
                                IndicatorSeparator: null,
                                DropdownIndicator: () => <FaChevronDown className="cursor-pointer" />
                            }}
                        />

                    </div>
                </div>
            </div>
            <button
                type="submit"
                className="mt-4 rounded-md px-4 py-2 text-white bg-aqua-500 hover:bg-aqua-400 focus:outline-none"
            >
                Search
            </button>
        </form>
        </Separator>
    );
};

export default QuickSearch;
