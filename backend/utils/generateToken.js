import jwt from "jsonwebtoken";
let keytoken="Ashish";
const generateTokenAndSetCookie = (userId, res) => {
	const token = jwt.sign({ userId },keytoken , {
		expiresIn: "15d",
	});

	res.cookie("jwt", token, {
		maxAge: 15 * 24 * 60 * 60 * 1000, // MS
		httpOnly: true, // prevent XSS attacks cross-site scripting attacks
		sameSite: "strict", // CSRF attacks cross-site request forgery attacks
		secure: "development" !== "development",
	});
};

export default generateTokenAndSetCookie;
