import * as Yup from 'yup';


export const locationValidationSchema = Yup.object().shape({
    propertyAddress: Yup.object().shape({
        country: Yup.string().required('Country is required'),
        city: Yup.string().required('City is required'),
        street: Yup.string().required('Street is required'),
        floor: Yup.number().required('Floor is required'),
        apartmentNumber: Yup.number().required('Apartment number is required'),
    }),
});
export const propertyValidationSchema = Yup.object().shape({
    studio: Yup.boolean()
        .nullable()
        .notRequired(),
    size: Yup.number()
        .min(10, 'Size must be greater than 10')
        .required('Size is required'),
    bedrooms: Yup.number()
        .min(1, 'Number of bedrooms must be greater than 0')
        .required('Number of bedrooms is required'),
    bathrooms: Yup.number()
        .min(1, 'Number of bathrooms must be greater than 0')
        .required('Number of bathrooms is required'),
    roommates: Yup.number()
        .min(1, 'Maximum number of roommates must be greater than 0')
        .required('Maximum number of roommates is required'),
    lifts: Yup.boolean()
        .nullable()
        .required('Lifts selection is required'),
    furnished: Yup.boolean()
        .nullable()
        .required('Furnished selection is required'),
    bedType: Yup.array()
        .of(Yup.string().oneOf(['single'], 'Invalid bed type'))
        .min(1, 'At least one bed type should be selected')
        .required('Bed type is required'),
    propertyAmenities: Yup.object().shape({
        homeType: Yup.boolean().required(),
        bedroom: Yup.boolean().required(),
        bathroom: Yup.boolean().required(),
        roommates: Yup.boolean().required(),
        livingRoom: Yup.boolean().required(),
        kitchen: Yup.boolean().required(),
        wifi: Yup.boolean().required(),
        tv: Yup.boolean().required(),
        airConditioning: Yup.boolean().required(),
        smokeFree: Yup.boolean().required(),
        laundry: Yup.boolean().required(),
        elevator: Yup.boolean().required(),
        parking: Yup.boolean().required(),
        balcony: Yup.boolean().required(),
        privateBathroom: Yup.boolean().required(),
        privateKitchen: Yup.boolean().required(),
        desktop: Yup.boolean().required(),
        closet: Yup.boolean().required(),
    }),
    houseRules: Yup.object().shape({
        noSmoking: Yup.boolean().required(),
        pets: Yup.boolean().required(),
        children: Yup.boolean().required(),
        smoking: Yup.boolean().required(),
        events: Yup.boolean().required(),
        noDrinking: Yup.boolean().required(),
    }),
});

export const availabilityValidationSchema = Yup.object().shape({
    startDate: Yup.date().required('Start date is required'),
    endDate: Yup.date()
        .notRequired()
        .min(Yup.ref('startDate'), 'End date cannot be before start date'),
    minStay: Yup.number()
        .min(1, 'Minimum stay must be greater than 0')
        .required('Minimum stay is required'),
    maxStay: Yup.number()
        .min(Yup.ref('minStay'), 'Maximum stay cannot be less than minimum stay')
        .notRequired(),
    price: Yup.number()
        .min(1, 'Price must be greater than 0')
        .required('Price is required'),
});

export const picturesValidationSchema = Yup.object().shape({
    files: Yup.array()
        .of(
            Yup.object().shape({
                path: Yup.string().required(),
                size: Yup.number().required(),
            })
        )
        .min(1, 'At least one image is required')
        .required('Please upload at least one image'),
    title: Yup.string()
        .min(2, 'Title must be at least 2 characters')
        .max(100, 'Title cannot exceed 100 characters')
        .required('Title is required'),
    description: Yup.string()
        .min(200, 'Description must be at least 200 words')
        .required('Description is required'),
});

export const preferencesValidationSchema = Yup.object().shape({
    male: Yup.boolean(),
    female: Yup.boolean(),
    other: Yup.boolean(),
    ageRange: Yup.array()
        .of(Yup.number())
        .min(2, 'Age range must have a minimum and a maximum value')
        .required('Age range is required'),
    occupation: Yup.array()
        .of(Yup.string())
        .min(1, 'At least one occupation is required')
        .required('Occupation is required'),
    smokingStatus: Yup.array()
        .of(Yup.string())
        .min(1, 'At least one smoking status is required')
        .required('Smoking status is required'),
    drinkingStatus: Yup.array()
        .of(Yup.string())
        .min(1, 'At least one drinking status is required')
        .required('Drinking status is required'),
});

export const phoneVerificationValidationSchema = Yup.object().shape({
    country: Yup.string()
        .required('Country is required'),
    phoneNumber: Yup.number()
        .typeError('Phone number must be a number')
        .min(1, 'Phone number must be greater than 0')
        .required('Phone number is required'),
    verificationCode: Yup.string()
        .when('hasVerificationCode', {
            is: true,
            then: Yup.string().required('Verification code is required'),
        }),
});

export const combinedValidationSchema = locationValidationSchema
    .concat(propertyValidationSchema)
    .concat(availabilityValidationSchema)
    .concat(picturesValidationSchema)
    .concat(preferencesValidationSchema)
    .concat(phoneVerificationValidationSchema);
