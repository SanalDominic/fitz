require("dotenv").config();

 function tokenAuth(req, res, next) {
  const { authorization } = req.headers;
  jwt.verify(
    authorization,
    process.env.ACCESS_TOKEN_SECRET,
    async function (err, decoded) {
      if (err) {
        return res.json(false);
      }
      req.body.decoded = decoded;
      next();
    }
  );
}

module.exports = {tokenAuth}