// model
const BookList = require("../model/booklist_Model");

const getAllbooks = async (req, res) => {
  try {
    const AllBooks = await BookList.find({}).sort({ createdAt: -1 });
    res.status(200).json({ AllBooks });
  } catch (error) {
    res.status(500).json({ msgs: error });
  }
};

const getSinglebook = async (req, res) => {
  try {
    const { id: BookId } = req.params;
    const book = await BookList.findOne({ _id: BookId });
    if (!book) {
      return res
        .status(404)
        .json({ msgs: `No Task with id - ${BookId} found` });
    }
    res.status(200).json({ book });
  } catch (error) {
    res.status(500).json({ msgs: error });
  }
};

const Createbook = async (req, res) => {
  try {
    const book = await BookList.create(req.body);
    res.status(201).json({ book });
  } catch (error) {
    res.status(500).json({ msgs: error });
  }
};

const deletebook = async (req, res) => {
  try {
    const { id: BookId } = req.params;
    const book = await BookList.findOneAndDelete({ _id: BookId });
    if (!book) {
      return res
        .status(404)
        .json({ msgs: `No Task with id - ${BookId} found` });
    }
    res.status(200).json({ book });
  } catch (error) {
    res.status(500).json({ msgs: error });
  }
};

const updatebook = async (req, res) => {
  try {
    const { id: BookId } = req.params;
    const newData = req.body;
    const book = await BookList.findByIdAndUpdate({ _id: BookId }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!book) {
      return res
        .status(404)
        .json({ msgs: `No Task with id - ${BookId} found` });
    }
    res.status(200).json({ id: BookId, data: newData });
  } catch (error) {
    res.status(500).json({ msgs: error });
  }
};

module.exports = {
  getAllbooks,
  getSinglebook,
  Createbook,
  deletebook,
  updatebook,
};
