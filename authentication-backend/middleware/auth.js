const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  try {
    const token = req.header("Authorization");

    if (!token) {
      return res.status(401).json({ message: "No token, access denied" });
    }

    const actualToken = token.split(" ")[1];

    const decoded = jwt.verify(actualToken, "secretkey");

    req.user = decoded;

    next();
  } catch (err) {
    res.status(401).json({ message: "The token is invalid" });
  }
};