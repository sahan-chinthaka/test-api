import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserLoginSchema } from "../../schemas/user";

function SignInPage() {
	const navigate = useNavigate();
	const form = useForm({
		resolver: zodResolver(UserLoginSchema),
	});

	async function submit(e) {
		const http = await fetch("http://localhost:5000/auth/sign-in", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(e),
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
			<form onSubmit={form.handleSubmit(submit)}>
				<div>
					<label htmlFor="email">Email</label>
					<input autoComplete="off" type="text" id="email" {...form.register("email")} />
					{form.formState?.errors?.email?.message && <p>{form.formState?.errors?.email?.message}</p>}
				</div>
				<div>
					<label htmlFor="pw">Password</label>
					<input autoComplete="off" type="password" id="pw" {...form.register("pw")} />
					{form.formState?.errors?.pw?.message && <p>{form.formState?.errors?.pw?.message}</p>}
				</div>
				<div>
					<button type="submit">Sign In</button>
				</div>
			</form>
		</div>
	);
}

export default SignInPage;
