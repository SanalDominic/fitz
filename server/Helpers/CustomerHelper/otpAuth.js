const client = require("twilio")(
  process.env.ACCOUNT_SID,
  process.env.AUTH_TOKEN
);

const bcrypt = require("bcrypt");
const Customer = require("../../Dbmodels/CustomerModel");

module.exports = {
  sendOtp: async (req, res) => {
    const { email, mobile } = req.body.data;
    try {
      const isUserExist = await Customer.findOne({
        $and: [{ email: email }, { mobile: mobile }],
      });

      if (!isUserExist) {
        // client.verify
        //   .services(process.env.SERVICE_SID)
        //   .verifications.create({
        //     to: `+91${mobile}`,
        //     channel: "sms",
        //   })
        //   .then((response) => {
        //     console.log(response);
        //     res.status(200).json({ otp: true });
        //   })
        //   .catch((error) => {
        //     console.log(error.message);
        //   });
        res.status(200).json({ otp: true });
      } else {
        res.status(409).json({ error: true });
      }
    } catch (error) {
      console.log(error.message);
    }
  },
  verifyOtp: async (req, res) => {
    const { otp, confirmPassword, ...signupData } = req.body;
    try {
      // const isVerified = await client.verify
      //   .services(process.env.SERVICE_SID)
      //   .verificationChecks.create({
      //     to: `+91${signupData.mobile}`,
      //     code: otp,
      //   });
      // console.log(isVerified.valid, isVerified.status);
      // if (isVerified.valid === true && isVerified.status === "approved") {
      //   signupData.password = await bcrypt.hash(signupData.password, 10);
      //   const customerData = new Customer({ ...signupData });
      //   customerData.save((err, result) => {
      //     if (err) {
      //       console.log(err);
      //     } else {
      //       console.log(result);
      //       res.status(200).json({ verified: true });
      //     }
      //   });
      // } else {
      //   res.status(409).json({ verified: false });
      // }

      signupData.password = await bcrypt.hash(signupData.password, 10);
      const customerData = new Customer({ ...signupData });
      customerData.save((err, result) => {
        if (err) {
          console.log(err);
        } else {
          console.log(result);
          res.status(200).json({ verified: true });
        }
      });
      res.status(200).json({ verified: true });
    } catch (error) {
      console.log(error.message);
    }
  },
};
