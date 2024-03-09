import { useNavigate } from "react-router-dom";

function SignInPage() {
	const navigate = useNavigate();

	async function submit(e) {
		e.preventDefault();
		const form_data = new FormData(e.target);

		const http = await fetch("http://localhost:5000/auth/sign-in", {
			method: "POST",
			body: form_data,
		});
		const res = await http.json();
		
		if (res["message"] == "done") {
			localStorage.setItem("token", res["token"]);
			navigate("/");
		}
	}

	return (
		<div>
			<h1>Sign in here</h1>
			<form onSubmit={submit}>
				<div>
					<label htmlFor="email">Email</label>
					<input autoComplete="off" type="email" name="email" id="email" />
				</div>
				<div>
					<label htmlFor="pw">Password</label>
					<input autoComplete="off" type="password" name="pw" id="pw" />
				</div>
				<div>
					<button type="submit">Sign In</button>
				</div>
			</form>
		</div>
	);
}

export default SignInPage;
