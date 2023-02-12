const jwt = require("jsonwebtoken");

const generateJWTToken = (user) => (
    jwt.sign(
        { user_id: user._id, email: user.email, role: user.role },
        process.env.JWT_TOKEN_KEY,
        {
            expiresIn: "24h",
        }
    )
)

module.exports = generateJWTToken;
