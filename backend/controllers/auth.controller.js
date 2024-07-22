import User from "../models/user.model.js";

//CREATING AN ACCOUNT FROM HERE
export const signup = async (req, res) => {
  try {
    const { userName, email, phoneNumber, location, type } = req.body;

    //Function to check if all the details are inputted correctly
    const result = await signupChecks({
      userName,
      email,
      location,
      type,
    });

    //If details are not correct then sends a error response
    if (result !== true) {
      return res.status(400).json({ message: result.message });
    }

    //If it is able to pass every check create a new user
    const newUser = new User({
      userName,
      email,
      phoneNumber,
      location,
      type,
    });

    //Saving it to the database
    await newUser.save();

    req.session.userId = newUser._id;

    //Account has been created response
    res.status(200).json({ email: newUser.email, userName: newUser.userName });
  } catch (err) {
    //Incase there is an error
    console.log(err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

//Function to check the details if they are correct or not
async function signupChecks({ userName, email, phoneNumber, location, type }) {
  const emailCheck = await User.findOne({ email });

  if (emailCheck) {
    return { message: "Email is already in use" };
  }

  if (!userName || !email || !location || !type) {
    return { message: "Please fill all fields" };
  }

  if (userName.length < 5) {
    return { message: "Names should be greater than 4 letters" };
  }

  if (!isValidEmail(email)) {
    return { message: "Invalid email format" };
  }

  if (parseInt(phoneNumber) < 1000000000) {
    return { message: "Enter a valid phone number" };
  }

  return true;
}

//Check if its a valid email
function isValidEmail(email) {
  const emailRegex = /\S+@\S+\.\S+/;
  return emailRegex.test(email);
}

//LOGING IN ACCOUNT
export const login = async (req, res) => {
  //Check if already logged in
  if (req.session.userId) {
    return res.status(200).json({ message: "You are already logged in." });
  }

  //Request payload
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Please fill all the fields" });
  }

  //Search for the user and gets the details
  const user = await User.findOne({ email });

  if (!user) {
    return res.status(400).json({ err: "User does not exist" });
  }

  //Create a session
  req.session.userId = user._id;

  //If success return 200 okk
  res.status(200).json({ result: "Success" });
};

//Logout of account
export const logout = async (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ message: "Failed to logout" });
    }
    res.clearCookie("AuthCookie");
    res.json({ message: "Logout successful" });
  });
};
