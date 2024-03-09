import jwt from "jsonwebtoken";

function isValidUser(email, pw) {
	return email == "user@gmail.com" && pw == "1234";
}

export function signIn(req, res) {
	const { email, pw } = req.body;
	if (isValidUser(email, pw)) {
		const token = jwt.sign(
			{
				email,
			},
			process.env.JWT_SECRET,
			{
				expiresIn: "1h",
			}
		);
		res.json({ message: "done", token });
	} else {
		res.json({ message: "fail" });
	}
}
