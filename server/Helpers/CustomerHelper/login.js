const bcrypt = require("bcrypt");

const Customer = require("../../Dbmodels/CustomerModel");
const jwt = require("../../utils/JwtToken");
module.exports = {
     login: async (req, res) => {
          try {
               const { email, password } = req.body;
               const isUserExist = await Customer.findOne({
                    email: email,
               });

               if (!isUserExist) return res.status(406).json({ user: false });

               const isPasswordValid = bcrypt.compare(
                    password,
                    isUserExist.password
               );
               if (!isPasswordValid)
                    return res.status(406).json({ msg: "Invalid Credentials" });

               //jwt token creation
               const tokenCreated = jwt.CreateJwtToken(isUserExist);
               // Assigning access token in http-only cookie
               res.cookie(
                    "jwt",
                    tokenCreated.accessToken,
                    tokenCreated.refreshToken,
                    {
                         httpOnly: true,
                         sameSite: "None",
                         secure: true,
                         maxAge: 24 * 60 * 60 * 1000,
                    }
               );

               return res.status(200).json({ msg: "SignedIn Successfully !" });
          } catch (error) {
               console.log(error.message);
          }
     },
};
