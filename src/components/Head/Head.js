import React, { useEffect, useState } from "react";
import "./style.css";

import assets, { faces, eyebrows, eyes, mouths, noses, hairs } from "../../utils/AssetsLoader";
import { randomNumber } from "../../utils/utils";

const { skin } = assets.modularcharacters;

export default function Head() {
	const [hairImg, setHairImg] = useState(hairs[randomNumber(0, hairs.length - 1)]);
	const [eyebrowImg, setEyebrowImg] = useState(eyebrows[randomNumber(0, eyebrows.length - 1)]);
	const [eyeImg, setEyeImg] = useState(eyes[randomNumber(0, eyes.length - 1)]);
	const [noseImg, setNoseImg] = useState(noses[randomNumber(0, noses.length - 1)]);
	const [mouthImg, setMouthImg] = useState(mouths[randomNumber(0, mouths.length - 1)]);

	function generateRandom() {
		setHairImg(hairs[randomNumber(0, hairs.length - 1)]);
		setEyebrowImg(eyebrows[randomNumber(0, eyebrows.length - 1)]);
		setEyeImg(eyes[randomNumber(0, eyes.length - 1)]);
		setNoseImg(noses[randomNumber(0, noses.length - 1)]);
		setMouthImg(mouths[randomNumber(0, mouths.length - 1)]);
	}

	return (
		<div className="head-container">
			<img src={hairImg} alt="Hair" className="Head-Hair" />
			<img src={skin.tint1.head} alt="Head Skin" className="Head-HeadSkin" />
			<img src={eyebrowImg} alt="Eyebrows" className="Head-Eyebrows Head-Eyebrows-Left" />
			<img src={eyebrowImg} alt="Eyebrows" className="Head-Eyebrows Head-Eyebrows-Right Right" />
			<img src={eyeImg} alt="Eyes" className="Head-Eyes Head-Eyes-Left" />
			<img src={eyeImg} alt="Eyes" className="Head-Eyes Head-Eyes-Right" />
			<img src={noseImg} alt="Nose" className="Head-Nose" />
			<img src={mouthImg} alt="Mouth" className="Head-Mouth" />
			<button onClick={generateRandom}>Randomize</button>
		</div>
	)
}
