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
                <h1 className="text-2xl font-bold px-4 flex items-start">Quick Search</h1>
                <hr className="border-aqua-500 border w-1/2 ml-4" />
            </div>
            <div className="flex flex-col gap-4 p-4 mt-4 border-gray-500 border rounded-md" style={{width:'676px'}}>
                <div className="flex flex-row gap-8">
                    <div className='flex flex-col gap-2'>
                        <p className="text-gray-500 flex items-start">Location</p>
                        <div className="flex items-center bg-white rounded-md p-2">
                            <FaMapMarkerAlt className="text-aqua-500 mr-2" />
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
                        <p className="text-gray-500 flex items-start">Rent Budget</p>
                        <div className="flex items-center bg-white rounded-md p-2">
                            <FaDollarSign className="text-aqua-500 mr-2" />
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
                        <p className="text-gray-500 flex items-start">To:</p>
                        <div className="flex items-center bg-white rounded-md p-2">
                            <FaDollarSign className="text-aqua-500 mr-2" />
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
                        <p className="text-gray-500 flex items-start">Gender Preference</p>
                        <div className="flex items-center bg-white rounded-md p-2">
                            <FaVenusMars className="text-aqua-500 mr-2" />
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
                        <p className="text-gray-500 flex items-start">Age</p>
                        <div className="flex items-center bg-white rounded-md p-2">
                            <FaUser className="text-aqua-500 mr-2" />
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
                                    className="appearance-none h-3 bg-gray-300 rounded w-full outline-none overflow-hidden"
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
                        <p className="text-gray-500 flex items-start">To:</p>
                        <div className="flex items-center bg-white rounded-md p-2">
                            <FaUser className="text-aqua-500 mr-2" />
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
                                    className="appearance-none h-3 bg-gray-300 rounded w-full outline-none overflow-hidden"
                                    style={{ WebkitAppearance: 'none' }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p className="text-gray-500 flex items-start">Student Status</p>
                        <div className="flex items-center bg-white rounded-md p-2">
                            <HiAcademicCap className="text-aqua-500 mr-2" />
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
                        <p className="text-gray-500 flex items-start">Smoking Status</p>
                        <div className="flex items-center bg-white rounded-md p-2">
                            <FaSmokingBan className="text-aqua-500 mr-2" />
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
                        <p className="text-gray-500 flex items-start">Drinking Status</p>
                        <div className="flex items-center bg-white rounded-md p-2">
                            <FaGlassMartiniAlt className="text-aqua-500 mr-2" />
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
                        <p className="text-gray-500 flex items-start">Pet Preferences</p>
                        <div className="flex items-center bg-white rounded-md p-2">
                            <FaPaw className="text-aqua-500 mr-2" />
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
                        <p className="text-gray-500 flex items-start">Length of Stay</p>
                        <div className="flex items-center bg-white rounded-md p-2">
                            <FaClock className="text-aqua-500 mr-2" />
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
                    <p className="text-gray-500 flex items-start">Interests</p>
                    <div className="flex items-center bg-white rounded-md p-2">
                        <FaHeart className="text-aqua-500 mr-2" />
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
                className="bg-aqua-500 text-white rounded-md py-2 px-4 mt-4 focus:outline-none hover:bg-aqua-400"
            >
                Search
            </button>
        </form>
        </Separator>
    );
};

export default QuickSearch;
