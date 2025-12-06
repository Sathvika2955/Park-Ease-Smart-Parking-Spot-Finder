const jwt = require("jsonwebtoken");
 
module.exports = function(req, res, next) {
    const token = req.header("x-auth-token");
    if (!token) {
        return res.status(401).json({ message: "Access denied. No token provided." });
    }
 
    try {
        const verified = jwt.verify(token, "secret123");
        req.user = verified;
        next();
    } catch (err) {
        res.status(400).json({ message: "Invalid Token" });
    }
};