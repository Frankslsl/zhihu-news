import { lazy } from "react";
import Home from "../view/Home";

const routes = [
	{
		path: "/",
		element: Home,
		meta: {
			title: "ZhiHu-News",
		},
	},
	{
		path: "/detail/:id",
		element: lazy(() => import("../view/Detail")),
		meta: {
			title: "ZhiHu-Detail",
		},
	},
	{
		path: "/Personal",
		element: lazy(() => import("../view/Personal")),
		meta: {
			title: "ZhiHu-Personal",
		},
	},
	{
		path: "/store",
		element: lazy(() => import("../view/Store")),
		meta: {
			title: "ZhiHu-Store",
		},
	},
	{
		path: "/Update",
		element: lazy(() => import("../view/Update")),
		meta: {
			title: "ZhiHu-Update",
		},
	},
	{
		path: "/Login",
		element: lazy(() => import("../view/Login")),
		meta: {
			title: "ZhiHu-Login",
		},
	},
	{
		path: "*",
		element: lazy(() => import("../view/Page404")),
		meta: {
			title: "ZhiHu-Page404",
		},
	},
];

export default routes;
