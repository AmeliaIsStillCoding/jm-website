import localFont from "next/font/local";
import Link from "next/link";
import Image from "next/image";

const myFont = localFont({
  src: "../../fonts/ComicFontJames-Regular.ttf",
});

const films = [
  {
    title: "Bishopskin - Hey Little Sister",
    youtube: "https://www.youtube.com/watch?v=TJDEdW3Na40",
  },
  {
    title: "Frank Lloyd Wleft - I Have Been In The Desert So Long",
    youtube: "https://www.youtube.com/watch?v=lVKWXBV6Wdg",
  },
];

function getYoutubeThumbnail(url: string) {
  const videoId = new URL(url).searchParams.get("v");

  return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
}

export default function Film() {
  return (
    <main
      className={`${myFont.className} min-h-screen bg-[#fffaf0] px-6 py-8 text-black`}
    >
      <h1 className="text-5xl text-green-500">Film</h1>

      <Link
        href="/"
        className="inline-block px-4 py-2 text-xl text-black hover:text-green-600"
      >
        ← Home
      </Link>

      <div className="mt-12 flex flex-col gap-12">
        {films.map((film) => (
          <div
            key={film.title}
            className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-8"
          >
            <a
              href={film.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="max-w-full text-3xl text-black transition-colors hover:text-green-600"
            >
              {film.title}
            </a>

            <a
              href={film.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0"
            >
              <Image
                src={getYoutubeThumbnail(film.youtube)}
                alt={`${film.title} thumbnail`}
                width={320}
                height={180}
                className="h-auto w-full max-w-[320px] object-cover"
              />
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}