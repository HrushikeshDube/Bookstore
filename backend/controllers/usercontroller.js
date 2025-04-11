// controllers/usercontroller.js
import User from "../models/user.model.js";
import bcryptjs from "bcrypt";
export const addUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "Email already exists" });
    }
    const hashpass = await bcryptjs.hash(password, 10);
    const createUser = new User({
      name: name,
      email: email,
      password: hashpass,
    });
    await createUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.log("Error", error);
    res.status(500).json(error);
  }
};
export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res
        .status(400)
        .json({ message: "Invalid credentials (user not found)" });
    }

    const ismatch = await bcryptjs.compare(password, user.password);
    if (!ismatch) {
      return res
        .status(400)
        .json({ message: "Invalid credentials (password mismatch)" });
    }

    res.status(200).json({
      message: "Login Successful",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.log("Error in login:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
