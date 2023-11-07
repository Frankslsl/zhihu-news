// react相关引用
import React from "react";
import ReactDOM from "react-dom/client";
import "lib-flexible";
//样式引用
import "./assets/reset.min.css";
import "./index.css";
// 组件引用
import App from "./App";
//antd-mobile
import { ConfigProvider } from "antd-mobile";
import zhCN from "antd-mobile/es/locales/zh-CN";
/* 处理最大宽度 */
(function () {
	const handleMax = function handleMax() {
		let html = document.documentElement,
			root = document.getElementById("root"),
			deviceW = html.clientWidth;
		root.style.maxWidth = "750px";
		if (deviceW >= 750) {
			html.style.fontSize = "75px";
		}
	};
	handleMax();
})();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<ConfigProvider locale={zhCN}>
		<App />
	</ConfigProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
