import Book from "../models/book.model.js";

const getbooks = async (req, res) => {
  try {
    const book = await Book.find();
    res.status(200).json(book);
  } catch (error) {
    console.loh("Error", error);
    res.status(500).jspn(error);
  }
};
export default getbooks;
