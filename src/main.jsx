import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/home";
import SignInPage from "./pages/sign-in";

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomePage />,
	},
	{
		path: "/sign-in",
		element: <SignInPage />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(<RouterProvider router={router} />);
