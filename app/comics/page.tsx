import localFont from "next/font/local";
import Link from "next/link";

const myFont = localFont({
  src: "../../fonts/ComicFontJames-Regular.ttf",
});

const comics = [
  {
    title: "Lost Property",
    pdf: "/comics/lost_property.pdf",
  },
  {
    title: "Footie",
    pdf: "/comics/footie.pdf",
  },
];

export default function Comics() {
  return (
    <main
      className={`${myFont.className} min-h-screen bg-[#fffaf0] px-6 py-8 text-black`}
    >
      <h1 className="text-5xl text-red-500">Comics</h1>

      <Link
        href="/"
        className="inline-block px-4 py-2 text-xl text-black hover:text-red-500"
      >
        ← Home
      </Link>

      <div className="mt-12 grid grid-cols-1 gap-12 sm:grid-cols-2">
        {comics.map((comic) => (
          <div
            key={comic.title}
            className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-8"
          >
            <a
              href={comic.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-black transition-colors hover:text-red-500"
            >
              {comic.title}
            </a>

            <a
              href={comic.pdf}
              target="_blank"
              rel="noopener noreferrer"
            >
              <iframe
                src={`${comic.pdf}#toolbar=0&navpanes=0&scrollbar=0`}
                className="h-64 w-48 max-w-full pointer-events-none"
                title={`${comic.title} preview`}
              />
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}