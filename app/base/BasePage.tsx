import localFont from "next/font/local";
import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";

const myFont = localFont({
	src: "../../fonts/ComicFontJames-Regular.ttf",
});

type BasePageProps = {
	children: ReactNode;
	titleImage: string;
	titleAlt: string;
	titleImageWidth?: number;
	highlightOutline: string;
	hoverOutline: string;
};

export default function BasePage({
	children,
	titleImage,
	titleAlt,
	titleImageWidth = 150,
	highlightOutline,
	hoverOutline,
}: BasePageProps) {
	return (
		<main
			className={`${myFont.className} min-h-screen px-6 py-8 text-black`}
		>
			<div className="flex items-center gap-8">
				<Link
					href="/"
					className={`inline-block text-xl text-black hover:outline-2 ${hoverOutline}`}
				>
					← Home
				</Link>

				<Image
					src={titleImage}
					alt={titleAlt}
					width={titleImageWidth}
					height={100}
					className={`outline-4 ${highlightOutline}`}
				/>
			</div>

			{children}
		</main>
	);
}