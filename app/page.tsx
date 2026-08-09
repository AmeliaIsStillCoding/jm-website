import localFont from "next/font/local";
import Link from "next/link";

const myFont = localFont({
  src: "../fonts/ComicFontJames-Regular.ttf",
});

export default function Home() {
  return (
    <main
      className={`${myFont.className} relative min-h-screen overflow-hidden bg-pink-100`}
    >
      <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-4xl tracking-tight sm:text-5xl">
        James Moss
      </h1>

      <nav className="text-2xl sm:text-3xl">
        <Link
          href="/comics"
          className="group absolute left-[10%] top-[12%] whitespace-nowrap text-red-500 hover:text-green-600 sm:left-[28%] sm:top-[18%]"
        >
          <span className="relative z-10">Comics</span>
          <span className="absolute -inset-6 -z-0 rounded-full bg-white blur-md" />
        </Link>

        <Link
          href="/music"
          className="group absolute right-[10%] top-[22%] whitespace-nowrap text-blue-500 hover:text-orange-500 sm:left-[72%] sm:top-[21%] sm:right-auto"
        >
          <span className="relative z-10">Music</span>
          <span className="absolute -inset-6 -z-0 rounded-full bg-white blur-md" />
        </Link>

        <Link
          href="/film"
          className="group absolute left-[8%] top-[62%] whitespace-nowrap text-green-500 hover:text-red-500 sm:left-[10%] sm:top-[52%]"
        >
          <span className="relative z-10">Film and Music Videos</span>
          <span className="absolute -inset-6 -z-0 rounded-full bg-white blur-md" />
        </Link>

        <Link
          href="/writing"
          className="group absolute right-[8%] top-[58%] whitespace-nowrap text-purple-600 hover:text-yellow-400 sm:left-[75%] sm:top-[55%] sm:right-auto"
        >
          <span className="relative z-10">Writing</span>
          <span className="absolute -inset-6 -z-0 rounded-full bg-white blur-md" />
        </Link>

        <Link
          href="/house_shows"
          className="group absolute left-1/2 top-[78%] -translate-x-1/2 whitespace-nowrap text-pink-500 hover:text-[#BFFF00] sm:left-[43%] sm:top-[82%] sm:translate-x-0"
        >
          <span className="relative z-10">House Shows</span>
          <span className="absolute -inset-6 -z-0 rounded-full bg-white blur-md" />
        </Link>

        <Link
          href="/contact"
          className="group absolute right-[8%] top-[88%] whitespace-nowrap text-xl text-orange-400 hover:text-blue-500 sm:left-[88%] sm:top-[88%] sm:right-auto"
        >
          <span className="relative z-10">Contact</span>
          <span className="absolute -inset-4 -z-0 rounded-full bg-white blur-md" />
        </Link>
      </nav>
    </main>
  );
}