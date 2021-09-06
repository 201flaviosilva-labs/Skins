// Face
import Eyebrows from "./Loaders/Eyebrows";
import Eyes from "./Loaders/Eyes";
import Faces from "./Loaders/Faces";
import Mouths from "./Loaders/Mouths";
import Noses from "./Loaders/Noses";

// Hair
import Hairs from "./Loaders/Hairs";

// ---- Pants
// -- Blue 1
import PantsBlue1Long from "../assets/modularcharacters/PNG/Pants/Blue 1/pantsBlue1_long.png";
import PantsBlue11 from "../assets/modularcharacters/PNG/Pants/Blue 1/pantsBlue11.png";

// ---- Shirts
// -- Blue
import ArmBlueLong from "../assets/modularcharacters/PNG/Shirts/Blue/blueArm_long.png";
import Shirt1Blue from "../assets/modularcharacters/PNG/Shirts/Blue/blueShirt1.png";

// ---- Shoes
// -- Black
import ShoeBlack1 from "../assets/modularcharacters/PNG/Shoes/Black/blackShoe1.png";

// ---- Skin
// -- Tint 1
import SkinTint1Arm from "../assets/modularcharacters/PNG/Skin/Tint 1/tint1_arm.png";
import SkinTint1Hand from "../assets/modularcharacters/PNG/Skin/Tint 1/tint1_hand.png";
import SkinTint1Head from "../assets/modularcharacters/PNG/Skin/Tint 1/tint1_head.png";
import SkinTint1Leg from "../assets/modularcharacters/PNG/Skin/Tint 1/tint1_leg.png";
import SkinTint1Neck from "../assets/modularcharacters/PNG/Skin/Tint 1/tint1_neck.png";


const assets = {
	modularcharacters: {
		pants: {
			blue1: {
				long: PantsBlue1Long,
				short: PantsBlue11,
			},
		},
		shirts: {
			blue: {
				arm: ArmBlueLong,
				shirt1: Shirt1Blue,
			},
		},
		shoes: {
			black: {
				shoe1: ShoeBlack1,
			},
		},
		skin: {
			tint1: {
				head: SkinTint1Head,
			},
		},
	},
	loremPicsum: {
		_200: "https://picsum.photos/200",
		_200X300: "https://picsum.photos/200/300",
	}
};

export default assets;

export const eyebrows = Eyebrows;
export const eyes = Eyes;
export const faces = Faces;
export const mouths = Mouths;
export const noses = Noses;

export const hairs = Hairs;
