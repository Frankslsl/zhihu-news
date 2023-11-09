import React, { Suspense, useState } from "react";
import routes from "./routes";
import {
	Routes,
	Route,
	useNavigate,
	useLocation,
	useParams,
	useSearchParams,
} from "react-router-dom";
import { Mask, DotLoading } from "antd-mobile";

//!统一路由配置
const Element = function Element(props) {
	const { element: Component, meta } = props;
	//如果meta不存在,就结构赋值一个空对象,然后title赋值一个默认值,保证title一定有值
	const { title = "ZhiHu-News" } = meta || {};
	//?等露态的校验

	//统一获取路由信息,通过属性传给每个组件,这样就不需要每个组件调用hook函数了
	const navigate = useNavigate();
	const location = useLocation();
	const params = useParams();
	const [searchParams] = useSearchParams();

	//将这些hook函数统一传给组件,就不需要每个组件调用了,直接从props中获取就好了
	return (
		<Component
			navigate={navigate}
			location={location}
			params={params}
			searchParams={searchParams}
			title={title}
		/>
	);
};

function RouterView() {
	return (
		<Suspense
			fallback={
				<Mask visible={true} opacity={"thick"}>
					<DotLoading color="white" />
				</Mask>
			}
		>
			<Routes>
				{routes.map((route, index) => {
					return (
						<Route
							path={route.path}
							key={index}
							element={<Element {...route}></Element>}
						/>
					);
				})}
			</Routes>
		</Suspense>
	);
}

export default RouterView;
