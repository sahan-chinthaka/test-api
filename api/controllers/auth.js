import jwt from "jsonwebtoken";
import { UserLoginSchema } from "../../schemas/user.js";

function isValidUser(email, pw) {
	return email == "user@gmail.com" && pw == "1234";
}

export function signIn(req, res) {
	try {
		const { email, pw } = UserLoginSchema.parse(req.body);

		if (!isValidUser(email, pw)) throw new Error("Not a valid user");
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
	} catch (er) {
		res.json({ message: "fail", error: er.message });
	}
}
