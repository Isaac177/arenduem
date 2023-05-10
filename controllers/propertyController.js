
const {
    Property,
    HousingStatus,
    Address,
    Amenity,
    HouseRule,
    Availability,
    Price,
    Service,
    PropertyDetail,
    PropertyPicture,
    Preference,
    PhoneVerification,
} = require('../models');
const path = require("path");
const fs = require("fs");



exports.createProperty = async (req, res) => {
    try {
        const propertyData = req.body;

        console.log('req.body:', req.body);
        console.log('req.files:', req.files);

        const {
            propertyType,
            propertyAddress,
            propertyAmenities,
            houseRules,
            propertyAvailability,
            prices,
            otherServices,
            propertyDetails,
            preferences,
            phoneVerification,
        } = propertyData;

        const userId = req.params.userId;

        const housingStatus = await HousingStatus.findOne({ where: { userId } });

        if (!housingStatus) {
            return res.status(404).json({ message: 'Housing status not found for this user.' });
        }

        if (!housingStatus.isOwner) {
            return res.status(403).json({ message: 'User is not allowed to create a property.' });
        }

        const property = await Property.create({ propertyType, userId });

        const parsedPropertyAddress = JSON.parse(propertyAddress);
        const address = await Address.create({ ...parsedPropertyAddress, propertyId: property.id });

        const parsedPropertyAmenities = JSON.parse(propertyAmenities);
        const amenity = await Amenity.create({ ...parsedPropertyAmenities, propertyId: property.id });

        const parsedHouseRules = JSON.parse(houseRules);
        const houseRule = await HouseRule.create({ ...parsedHouseRules, propertyId: property.id });

        const parsedPropertyAvailability = JSON.parse(propertyAvailability);
        const availability = await Availability.create({ ...parsedPropertyAvailability, propertyId: property.id });

        const parsedPrices = JSON.parse(prices);
        const price = await Price.create({ ...parsedPrices, propertyId: property.id });

        const parsedOtherServices = JSON.parse(otherServices);
        const service = await Service.create({ ...parsedOtherServices, propertyId: property.id });

        const newPropertyDetails = {
            ...(propertyDetails),
            propertyId: property.id,
        };

        for (const key of Object.keys(propertyData)) {
            if (key.startsWith('propertyDetails.')) {
                const detailKey = key.substring('propertyDetails.'.length);
                newPropertyDetails[detailKey] = JSON.parse(propertyData[key]);
            }
        }

        const propertyDetail = await PropertyDetail.create(newPropertyDetails);

        const propertyPictures = await Promise.all(
            req.files
                .filter(file => file.buffer)
                .map(async file => {
                    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
                    const fileExtension = path.extname(file.originalname);
                    const filename = file.fieldname + '-' + uniqueSuffix + fileExtension;
                    const filePath = path.join('uploads', filename);
                    await fs.promises.writeFile(filePath, file.buffer);
                    return {
                        propertyDetailId: propertyDetail.id,
                        propertyId: property.id,
                        fileUrl: filePath,
                    };
                })
        );

        if (propertyPictures.length > 0) {
            await PropertyPicture.bulkCreate(propertyPictures);
        } else {
            console.error('No valid file paths found');
        }

        const parsedPreferences = JSON.parse(preferences);
        const preference = await Preference.create({ ...parsedPreferences, propertyId: property.id });

        const parsedPhoneVerification = JSON.parse(phoneVerification);
        const phoneVerificationRecord = await PhoneVerification.create({ ...parsedPhoneVerification, propertyId: property.id, userId });

        res.status(201).json({
            message: 'Property created successfully',
            property,
            address,
            amenity,
            houseRule,
            availability,
            price,
            service,
            propertyDetail,
            propertyPictures,
            preference,
            phoneVerification: phoneVerificationRecord,
        });

        console.log('propertyData:', propertyData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.getProperties = async (req, res) => {
    try {
        const properties = await Property.findAll({
            include: [
                { model: Address },
                { model: Amenity },
                { model: HouseRule },
                { model: Availability },
                { model: Price },
                { model: Service },
                { model: PropertyDetail, include: [{ model: PropertyPicture }] },
                { model: Preference },
                { model: PhoneVerification },
            ],
        });

        if (!properties) {
            return res.status(404).json({ message: 'No properties found for this user.' });
        }

        res.status(200).json({ properties });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}

exports.getUserProperties = async (req, res) => {
    try {
        const userId = req.params.userId;
        const properties = await Property.findAll({
            where: { userId },
            include: [
                { model: Address },
                { model: Amenity },
                { model: HouseRule },
                { model: Availability },
                { model: Price },
                { model: Service },
                { model: PropertyDetail, include: [{ model: PropertyPicture }] },
                { model: Preference },
                { model: PhoneVerification },
            ],
        });

        if (!properties) {
            return res.status(404).json({ message: 'No properties found for this user.' });
        }

        res.status(200).json({ properties });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}


exports.deleteProperty = async (req, res) => {
    try {
        const userId = req.params.userId;
        const propertyId = req.params.propertyId;

        const property = await Property.findOne({ where: { id: propertyId, userId } });

        if (!property) {
            return res.status(404).json({ message: 'Property not found.' });
        }

        await Address.destroy({ where: { propertyId } });
        await Amenity.destroy({ where: { propertyId } });
        await HouseRule.destroy({ where: { propertyId } });
        await Availability.destroy({ where: { propertyId } });
        await Price.destroy({ where: { propertyId } });
        await Service.destroy({ where: { propertyId } });
        await PropertyDetail.destroy({ where: { propertyId } });
        await Preference.destroy({ where: { propertyId } });

        await property.destroy();

        res.status(200).json({ message: 'Property deleted successfully.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}


exports.updatePropertyDescription = async (req, res) => {
    try {
        const { propertyId } = req.params;
        const { description } = req.body;

        const propertyDetail = await PropertyDetail.findOne({ where: { propertyId } });

        if (!propertyDetail) {
            return res.status(404).json({ message: 'Property detail not found for this property.' });
        }

        await propertyDetail.update({ description });

        res.status(200).json({
            message: 'Property description updated successfully',
            propertyDetail,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

