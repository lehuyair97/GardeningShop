const  GardeningItem  = require("./../../models/gardeningModel");

// Get all gardening items
exports.getAllGardeningItems = async (req, res) => {
  try {
    const gardeningItems = await GardeningItem.find();
    res.status(200).json(gardeningItems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



exports.getGardeningItemById = async (req, res) => {
  try {
    const gardeningItem = await GardeningItem.findById(req.params.id);
    if (!gardeningItem) {
      return res.status(404).json({ message: 'Gardening item not found' });
    }
    res.status(200).json(gardeningItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createGardeningItem = async (req, res) => {
  try {
    const gardeningItem = await GardeningItem.create(req.body);
    res.status(201).json(gardeningItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateGardeningItemById = async (req, res) => {
  try {
    const gardeningItem = await GardeningItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!gardeningItem) {
      return res.status(404).json({ message: 'Gardening item not found' });
    }
    res.status(200).json(gardeningItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteGardeningItemById = async (req, res) => {
  try {
    const gardeningItem = await GardeningItem.findByIdAndDelete(req.params.id);
    if (!gardeningItem) {
      return res.status(404).json({ message: 'Gardening item not found' });
    }
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};