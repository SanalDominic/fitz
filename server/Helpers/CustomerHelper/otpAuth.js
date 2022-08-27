const client = require("twilio")(
  process.env.ACCOUNT_SID,
  process.env.AUTH_TOKEN
);

const Customer = require("../../Dbmodels/CustomerModel");

module.exports = {
  sendOtp: async (req, res) => {
    const { email, mobile } = req.body.data;
    console.log(email, mobile);
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
  verifyOtp: (req, res) => {
    console.log("verify otp", req.body);
  },
};
