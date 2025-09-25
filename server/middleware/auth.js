import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
  try {
    let token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ success: false, message: "No token provided" });
    }

    // remove 'Bearer ' if present
    if (token.startsWith("Bearer ")) {
      token = token.slice(7, token.length).trim();
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // optional
    next();
  } catch (error) {
    return res.status(401).json({ success: false, message: "Invalid Token!!" });
  }
};

export default auth;
