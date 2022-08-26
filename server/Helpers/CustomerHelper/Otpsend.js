const client = require("twilio")(
  process.env.ACCOUNT_SID,
  process.env.AUTH_TOKEN
);

const mongoose = require("mongoose");
const Customer = require("../../Dbmodels/CustomerModel");

module.exports = {
  sendOtp: async (req, res) => {
    console.log(req.body);
    const { email, mobile } = req.body.data;

    try {
      const isUserExist = await Customer.findOne({
        $or: [{ email: email }, { mobile: mobile }],
      });

      if (!isUserExist) {
        // client.verify
        //   .services(process.env.SERVICE_SID)
        //   .verifications.create({
        //     to: `+91${mobile}`,
        //     channel: "sms",
        //   })
        //   .then((response) => {
        //     res.json({ otp: true });
        //   })
        //   .catch((error) => {
        //     console.log(error.message);
        //   });
        res.json({ otp: true });
      } else {
        res.json("userExist");
      }
    } catch (error) {
      console.log(error.message);
    }
  },
};
