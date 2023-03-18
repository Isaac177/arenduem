const { Interest } = require('../models');


exports.addInterest = async (req, res) => {
    try {
        const userId = req.params.userId;
        const { interest, id } = req.body;

        const newInterest = await Interest.create({
            userId,
            interest,
            id,
        });

        return res.status(201).json(newInterest);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Server error" });
    }
};

exports.removeInterest = async (req, res) => {
    try {
        const userId = req.params.userId;
        const interest = await Interest.findOne({ where: { userId, id: req.params.id } });

        console.log('userId:', userId);
        console.log('req.params.id:', req.params.id);
        console.log('interest:', interest);

        if (!interest) {
            return res.status(404).json({ error: 'Interest not found' });
        }

        await interest.destroy();

        return res.status(200).json({ success: true });

    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Server error' });
    }
};


