const bcrypt = require("bcrypt");
const Customer = require("../../Dbmodels/CustomerModel");
const jwt = require("jsonwebtoken");
module.exports = {
  login: async (req, res) => {
    const { email, password } = req.body;
    const isExist = await Customer.findOne({
      email: email,
    });
   
    if (!isExist) {
      return res.status(406).json({ user: false });
    }

    const isPassword = await bcrypt.compare(password, isExist.password);
    if (!isPassword) {
      return res.status(406).json({ msg: "Invalid Credentials" });
    }
    //jwt token

    const accessToken = jwt.sign(
      {
        username: isExist.fullName,
        email: isExist.email,
      },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "10m",
      }
    );

    const refreshToken = jwt.sign(
      {
        username: isExist.fullName,
        email: isExist.email,
      },
      process.env.REFRESH_TOKEN_SECRET,
      {
        expiresIn: "1d",
      }
    );

    // Assigning access token in http-only cookie

    res.cookie("jwt", accessToken, {
      httpOnly: true,
      sameSite: "None",
      secure: true,
      maxAge: 24 * 60 * 60 * 1000,
    });
   
     return res.status(200).json({ msg:"SignedIn Successfully !" });
  },
};
