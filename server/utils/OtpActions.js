const client = require("twilio")(
     process.env.ACCOUNT_SID,
     process.env.AUTH_TOKEN
);

module.exports = {
     sendOtp: async (mobile) => {
          client.verify
               .services(process.env.SERVICE_SID)
               .verifications.create({
                    to: `+91${mobile}`,
                    channel: "sms",
               })
               .then(() => {
                    return;
               })
               .catch((error) => {
                    throw error.message;
               });
     },

     verifyOtp: async (mobile, otp) => {
          const isVerified = await client.verify
               .services(process.env.SERVICE_SID)
               .verificationChecks.create({
                    to: `+91${mobile}`,
                    code: otp,
               });
          return isVerified;
     },
};
