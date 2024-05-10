const QandA = require("./../../models/QandAModel")

exports.createQandA = async (req, res) => {
  try {
    const questionAndAnswer = await QandA.create(req.body);
    res.status(201).json(questionAndAnswer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAllQandA = async (req, res) => {
  try {
    const allQandA = await QandA.find();
    res.status(200).json(allQandA);
  } catch (error) {
    res.status(500).json({message:error.message});
  }
};
