import React from "react";
import "./style.css";

import assets from "../../utils/AssetsLoader";

const { skin, face } = assets.modularcharacters;

export default function Head() {
	return (
		<div className="head-container">
			<img src={skin.tint1.head} alt="Head Skin" />
			<img src={face.completes.face1} alt="Face" />
		</div>
	)
}
