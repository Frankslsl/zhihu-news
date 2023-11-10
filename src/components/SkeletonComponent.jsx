import React from "react";
import { Skeleton } from "antd-mobile";

function SkeletonComponent() {
	return (
		<div className="skeleton-box">
			<Skeleton.Title animated />
			<Skeleton.Paragraph lineCount={5} animated />
		</div>
	);
}

export default SkeletonComponent;
