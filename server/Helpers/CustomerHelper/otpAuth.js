const bcrypt = require("bcrypt");
const Customer = require("../../Dbmodels/CustomerModel");
const Otp = require("../../utils/OtpActions");

module.exports = {
     sendOtp: async (req, res) => {
          const { email, mobile } = req.body.data;
          try {
               const isUserExist = await Customer.findOne({
                    $and: [{ email: email }, { mobile: mobile }],
               });

               if (isUserExist)
                    return res
                         .status(409)
                         .json({ error: "User Already Exist ?" });
               const otpStatus = Otp.sendOtp(mobile);
               otpStatus
                    .then(() => {
                         return res.status(200).json({
                              otp: "Otp Send Successfully !",
                         });
                    })
                    .catch((error) => {
                         return res.status(400).json({ otp: "Otp failed !" });
                    });
          } catch (error) {
               console.log(error.message);
          }
     },
     verifyOtp: async (req, res) => {
          const { otp, confirmPassword, ...signupData } = req.body;
          try {
               const isVerify = Otp.verifyOtp(signupData.mobile, otp);
               isVerify
                    .then(async (verified) => {
                         if (!verified.status === "approved")
                              return res.status(409).json({ verified: false });
                         signupData.password = await bcrypt.hash(
                              signupData.password,
                              10
                         );
                         const customerData = new Customer({
                              ...signupData,
                         });
                         customerData.save((err, result) => {
                              if (!err)
                                   return res.status(200).json({
                                        verified: true,
                                   });

                              console.log(err);
                         });
                    })
                    .catch((error) => {
                         console.log(error.message);
                    });
          } catch (error) {
               console.log(error.message);
          }
     },
};
