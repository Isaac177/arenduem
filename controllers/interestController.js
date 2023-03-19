const { Interest } = require('../models');


exports.addInterest = async (req, res) => {
    try {
        const userId = req.params.userId;
        const { name } = req.body;

        console.log("req.body:", req.body)

        const newInterest = await Interest.create({
            userId,
            name,
        });

        await newInterest.save();

        return res.status(201).json(newInterest);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Server error" });
    }
};

exports.getInterests = async (req, res) => {
    try {
        const userId = req.params.userId;

        const interests = await Interest.findAll({
            where: {
                userId,
            },
        });

        return res.status(200).json(interests);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Server error" });
    }
}

exports.removeInterest = async (req, res) => {
    try {
        const userId = req.params.userId;
        const { interest, id } = req.query;
        console.log("req.body:", req.query)

        if (!interest || !id) {
            return res.status(400).json({ error: "Interest and id are required in the request body" });
        }

        const interestToRemove = await Interest.findOne({
            where: {
                userId,
                name: interest, // Change this line from "interest" to "name"
                id,
            }
        });

        if (!interestToRemove) {
            return res.status(404).json({ error: "Interest not found" });
        }

        await interestToRemove.destroy();

        return res.status(200).json({ message: "Interest removed" });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Server error" });
    }
};






