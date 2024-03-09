export function getUserData(req, res) {
	res.send({ message: "done", user: { email: req.user.email } });
}
