const jwt = require("jsonwebtoken");
module.exports = {
     CreateJwtToken: (isUserExist) => {
          try {
               const accessToken = jwt.sign(
                    {
                         username: isUserExist.fullName,
                         email: isUserExist.email,
                    },
                    process.env.ACCESS_TOKEN_SECRET,
                    {
                         expiresIn: "10m",
                    }
               );
               const refreshToken = jwt.sign(
                    {
                         username: isUserExist.fullName,
                         email: isUserExist.email,
                    },
                    process.env.REFRESH_TOKEN_SECRET,
                    {
                         expiresIn: "1d",
                    }
               );
               return { accessToken, refreshToken };
          } catch (error) {
               console.log(error.message);
          }
     },
};
