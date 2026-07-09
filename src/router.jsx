import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import NotFount from "./pages/NotFount";
import Layout from "./components/layout/layout";

const myRouter = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				index: true,
				element: <Home />
			},
			{
				path: "*",
				element: <NotFount />
			},
		]
	}
])

export default myRouter