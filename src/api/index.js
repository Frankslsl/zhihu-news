import axios from "axios";
import { Toast } from "antd-mobile";

const handleError = function (error) {
	Toast.show({
		icon: "fail",
		content: "Something went wrong",
	});
	return Promise.reject(error);
};

//获取今日新闻信息和轮播图信息
const queryNewsLatest = async () => {
	try {
		const res = await axios({
			method: "get",
			url: "/api/news_latest",
		});
		return res;
	} catch (error) {
		return handleError(error);
	}
};

//获得往日新闻信息
const queryNewsBefore = async (time) => {
	try {
		const res = await axios({
			method: "get",
			url: "/api/new_before",
			params: {
				time,
			},
		});
	} catch (error) {
		return handleError(error);
	}
};

//获取新闻详细信息
const queryNewsInfo = async (id) => {
	try {
		const res = await axios({
			method: "get",
			url: "/api/new_info",
			params: {
				id,
			},
		});
		return res;
	} catch (error) {
		return handleError(error);
	}
};

//获得新闻点赞信息
const queryStoryExtra = async (id) => {
	try {
		const res = await axios({
			method: "get",
			url: "/api/story_extra",
			params: {
				id,
			},
		});
		return res;
	} catch (error) {
		return handleError(error);
	}
};

//暴露api
const api = {
	queryNewsBefore,
	queryNewsLatest,
	queryNewsInfo,
	queryStoryExtra,
};

export default api;
