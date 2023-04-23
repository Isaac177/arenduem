
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
    Preference,
    PhoneVerification,
} = require('../models');

exports.createProperty = async (req, res) => {
    try {
        const propertyData = req.body;
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

        const address = await Address.create({ ...propertyAddress, propertyId: property.id }, {
            returning: ['id', 'country', 'city', 'street', 'floor', 'apartmentNumber', 'propertyId', 'createdAt', 'updatedAt']
        });

        const amenity = await Amenity.create({ ...propertyAmenities, propertyId: property.id }, {
            returning: ['id', 'propertyId', 'homeType', 'bedroom', 'bathroom', 'roommates', 'livingRoom', 'kitchen', 'wifi', 'tv', 'airConditioning', 'smokeFree', 'laundry', 'elevator', 'parking', 'balcony', 'privateBathroom', 'privateKitchen', 'desktop', 'closet', 'createdAt', 'updatedAt']
        });


        const houseRule = await HouseRule.create({ ...houseRules, propertyId: property.id }, {
            returning: true
        });

        const availability = await Availability.create({ ...propertyAvailability, propertyId: property.id }, {
            returning: true
        });

        const price = await Price.create({ ...prices, propertyId: property.id }, {
            returning: true
        });

        const service = await Service.create({ ...otherServices, propertyId: property.id }, {
            returning: true
        });

        const newPropertyDetails = {
            ...propertyDetails,
            pictures: propertyDetails.pictures,
            propertyId: property.id,
        };

        const propertyDetail = await PropertyDetail.create(newPropertyDetails, {
            returning: true,
        });

        const preference = await Preference.create({ ...preferences, propertyId: property.id }, {
            returning: true
        });

        const phoneVerificationRecord = await PhoneVerification.create({ ...phoneVerification, propertyId: property.id, userId }, {
            returning: true
        });

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
            preference,
            phoneVerification: phoneVerificationRecord,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.getProperties = async (req, res) => {
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
                { model: PropertyDetail },
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

        // Add the snippet here to delete related records before deleting the property
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
