
const Flower = require("../models/flowerModel");

const getFlowers = async (req, res) => {
    try {
        const flowers = await Flower.find();
        res.status(200).json(flowers);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const addFlower = async (req, res) => {
    const { name, description, price, category } = req.body;
    const image = req.file ? `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}` : null;

    try {
        const flower = new Flower({ name, description, price, category, image });
        await flower.save();
        res.status(201).json(flower);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const deleteFlower = async (req, res) => {
    try {
        const flower = await Flower.findByIdAndDelete(req.params.id);
        if (!flower) return res.status(404).json({ message: "Flower not found" });
        res.status(200).json({ message: "Flower deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = { getFlowers, addFlower, deleteFlower };
