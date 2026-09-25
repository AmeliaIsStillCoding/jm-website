import localFont from "next/font/local";
import Link from "next/link";
import Image from "next/image";

const myFont = localFont({
	src: "../fonts/ComicFontJames-Regular.ttf",
});

export default function Home() {
	return (
		<main
			className={`${myFont.className} min-h-screen bg-white px-6 py-8 text-black`}
		>
			{/* Title */}
			<Image
				src="/assets/james_moss_website_title.png"
				alt="James Moss Website"
				width={500}
				height={100}
				className="h-auto max-w-full"
			/>

			{/* Main content */}
			<div className="flex flex-col gap-12 px-4 py-4 md:flex-row md:gap-120">

				{/* Left navigation */}
				<div className="flex flex-col items-start gap-12">

					<Link href="/music" className="hover:outline hover:outline-4 hover:outline-blue-300">
						<Image
							src="/assets/music.png"
							alt="Music"
							width={120}
							height={100}
						/>
					</Link>

					<Link href="/film" className="hover:outline hover:outline-4 hover:outline-yellow-300">
						<Image
							src="/assets/film.png"
							alt="Film"
							width={120}
							height={100}
						/>
					</Link>

					<Link href="/comics" className="hover:outline hover:outline-4 hover:outline-green-300">
						<Image
							src="/assets/comics.png"
							alt="Comics"
							width={120}
							height={100}
						/>
					</Link>

					<Link href="/writing" className="hover:outline hover:outline-4 hover:outline-pink-300">
						<Image
							src="/assets/writing.png"
							alt="Writing"
							width={120}
							height={100}
						/>
					</Link>

					<Link href="/shows" className="hover:outline hover:outline-4 hover:outline-orange-300">
						<Image
							src="/assets/shows.png"
							alt="Shows"
							width={120}
							height={100}
						/>
					</Link>

					<Link href="/reading_group" className="hover:outline hover:outline-4 hover:outline-purple-300">
						<Image
							src="/assets/reading_group.png"
							alt="Reading Group"
							width={200}
							height={100}
						/>
					</Link>

				</div>

				{/* Right side */}
				<div className="flex flex-col items-start gap-8 md:flex-row md:gap-30">

					<Image
						src="/assets/squiggle.png"
						alt="Squiggle"
						width={300}
						height={100}
						className="h-auto max-w-full"
					/>

					{/* Contact / About */}
					<div className="flex flex-col items-start gap-10 py-4 md:py-80">

						<Link href="/contact" className="hover:outline hover:outline-4 hover:outline-gray-300">
							<Image
								src="/assets/contact.png"
								alt="Contact"
								width={80}
								height={100}
							/>
						</Link>

						<Link href="/about" className="hover:outline hover:outline-4 hover:outline-red-300">
							<Image
								src="/assets/about.png"
								alt="About"
								width={80}
								height={100}
							/>
						</Link>

					</div>

				</div>

			</div>
		</main>
	);
}