import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HomePage() {
	const [user, setUser] = useState();

	useEffect(() => {
		fetch("http://localhost:5000/user", {
			headers: {
				"x-access-token": localStorage.getItem("token"),
			},
		})
			.then((res) => res.json())
			.then((res) => {
				console.log("Response:", res);
				if (res["message"] == "done") {
					setUser(res["user"]);
				} else {
					setUser(null);
				}
			});
	}, []);

	function signOut() {
		localStorage.removeItem("token");
		setUser(null);
	}

	if (user === undefined) return "Loading...";
	if (user === null)
		return (
			<div>
				<h1>Home page</h1>
				<p>
					Not logged in <Link to={"/sign-in"}>sign in</Link>
				</p>
			</div>
		);

	return (
		<div>
			<h1>Home page</h1>
			<p>email: {user.email}</p>
			<p>
				<button onClick={signOut}>Sign Out</button>
			</p>
		</div>
	);
}

export default HomePage;
