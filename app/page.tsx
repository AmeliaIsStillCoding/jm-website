import localFont from "next/font/local";
import Link from "next/link";

const myFont = localFont({
  src: "../fonts/ComicFontJames-Regular.ttf",
});

export default function Home() {
  return (
    <main className="relative min-h-screen w-full bg-pink-100">
      <h1
        className={`${myFont.className} absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-5xl tracking-tight`}
      >
        <span className="text-red-500 [text-shadow:-2px_-2px_0_white,2px_-2px_0_white,-2px_2px_0_white,2px_2px_0_white,0_0_2px_white]" >J</span>
        <span className="text-orange-500 [text-shadow:-2px_-2px_0_white,2px_-2px_0_white,-2px_2px_0_white,2px_2px_0_white,0_0_2px_white]">a</span>
        <span className="text-yellow-400 [text-shadow:-2px_-2px_0_white,2px_-2px_0_white,-2px_2px_0_white,2px_2px_0_white,0_0_2px_white]">m</span>
        <span className="text-green-500 [text-shadow:-2px_-2px_0_white,2px_-2px_0_white,-2px_2px_0_white,2px_2px_0_white,0_0_2px_white]">e</span>
        <span className="text-blue-500 [text-shadow:-2px_-2px_0_white,2px_-2px_0_white,-2px_2px_0_white,2px_2px_0_white,0_0_2px_white]">s</span>
        <span className="text-purple-500 [text-shadow:-2px_-2px_0_white,2px_-2px_0_white,-2px_2px_0_white,2px_2px_0_white,0_0_2px_white]"> </span>
        <span className="text-pink-500 [text-shadow:-2px_-2px_0_white,2px_-2px_0_white,-2px_2px_0_white,2px_2px_0_white,0_0_2px_white]">M</span>
        <span className="text-red-500 [text-shadow:-2px_-2px_0_white,2px_-2px_0_white,-2px_2px_0_white,2px_2px_0_white,0_0_2px_white]">o</span>
        <span className="text-orange-500 [text-shadow:-2px_-2px_0_white,2px_-2px_0_white,-2px_2px_0_white,2px_2px_0_white,0_0_2px_white]">s</span>
        <span className="text-blue-500 [text-shadow:-2px_-2px_0_white,2px_-2px_0_white,-2px_2px_0_white,2px_2px_0_white,0_0_2px_white]">s</span>
      </h1>

      <nav className={`${myFont.className} text-3xl`}>
        <Link
          href="/comics"
          className="group absolute left-[28%] top-[18%] whitespace-nowrap text-red-500 hover:text-green-600"
        >
          <span className="relative z-10">
            Comics
          </span>
          <span className="absolute -inset-8 -z-0 rounded-full bg-white blur-md" />
        </Link>

        <Link
          href="/music"
          className="group absolute left-[72%] top-[21%] whitespace-nowrap text-blue-500 hover:text-orange-500"
        >
          <span className="relative z-10">
            Music
          </span>
          <span className="absolute -inset-8 -z-0 rounded-full bg-white blur-md" />
        </Link>

        <Link
          href="/film"
          className="group absolute left-[10%] top-[52%] whitespace-nowrap text-green-500 hover:text-red-500"
        >
          <span className="relative z-10">
            Film and Music Videos
          </span>
          <span className="absolute -inset-8 -z-0 rounded-full bg-white blur-md" />
        </Link>

        <Link
          href="/writing"
          className="group absolute left-[75%] top-[55%] whitespace-nowrap text-purple-600 hover:text-yellow-400"
        >
          <span className="relative z-10">
            Writing
          </span>
          <span className="absolute -inset-8 -z-0 rounded-full bg-white blur-md" />
        </Link>

        <Link
          href="/house_shows"
          className="group absolute left-[43%] top-[82%] whitespace-nowrap text-pink-500 hover:text-[#BFFF00]"
        >
          <span className="relative z-10">
            House Shows
          </span>
          <span className="absolute -inset-8 -z-0 rounded-full bg-white blur-md" />
        </Link>

        <Link
          href="/contact"
          className="group absolute left-[88%] top-[88%] whitespace-nowrap text-orange-400 hover:text-blue-500 text-xl"
        >
          <span className="relative z-10">
            Contact
          </span>
          <span className="absolute -inset-4 -z-0 rounded-full bg-white blur-md" />
        </Link>
      </nav>
    </main>
  );
}