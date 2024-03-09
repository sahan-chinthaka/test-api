import jwt from "jsonwebtoken";

export function isAuthenticated(req, res, next) {
	const token = req.headers["x-access-token"];
	try {
		if (!token) throw new Error("Token is required");
		req.user = jwt.verify(token, process.env.JWT_SECRET);
	} catch (er) {
		return res.json({ message: "fail", error: er.message });
	}
	next();
}
