const jwt = require("jsonwebtoken");

const secret = "mysecretsshhhhh";
const expiration = "2h";

module.exports = {
  authMiddleware: function async({req }) {
  
     let token = req.query.token || req.headers.authorization;

    if (req.headers.authorization) {
      token = token.split(" ").pop().trim();
    }

    if (!token) {
      return console.log('invalid token');
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      return data
    } catch {
      console.log("Invalid token");
    }
     },
     signToken: function ({ username, email, _id }) {
     const payload = { username, email, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
   },
};
