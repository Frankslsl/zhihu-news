import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Detail() {
	const location = useLocation();
	useEffect(() => {
		document.title = "ZhiHu-Detail";
	}, [location]);
	return <div className="detail-box">Detail</div>;
}

export default Detail;
