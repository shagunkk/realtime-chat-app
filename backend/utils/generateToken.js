import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
	const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
		expiresIn: "60d",
	});
	res.cookie("jwt", token, {
		// converting 60 days to milliseconds here due to required type
		maxAge: 60 * 24 * 60 * 60 * 1000,
		// this is to prevent XSS attacks cross-site-scripting attacks
		httpOnly: true,
		sameSite: "strict",
		secure: process.env.NODE_ENV !== "development",
	});
};

export default generateTokenAndSetCookie;
