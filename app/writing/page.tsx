import localFont from "next/font/local";
import Link from "next/link";

const myFont = localFont({
  src: "../../fonts/ComicFontJames-Regular.ttf",
});

const writings = [
  {
    title: "Ubiquitous Apocalypses",
    pdf: "/writings/ubiq_apoc.pdf",
  },
];

export default function Writing() {
  return (
    <main
      className={`${myFont.className} min-h-screen bg-[#fffaf0] px-6 py-8 text-black`}
    >
      <h1 className="text-5xl text-purple-500">Writing</h1>

      <Link
        href="/"
        className="inline-block px-4 py-2 text-xl text-black hover:text-purple-500"
      >
        ← Home
      </Link>

      <div className="mt-12 grid grid-cols-1 gap-12 sm:grid-cols-2">
        {writings.map((writing) => (
          <div
            key={writing.title}
            className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-8"
          >
            <a
              href={writing.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-black transition-colors hover:text-purple-500"
            >
              {writing.title}
            </a>

            <a
              href={writing.pdf}
              target="_blank"
              rel="noopener noreferrer"
            >
              <iframe
                src={`${writing.pdf}#toolbar=0&navpanes=0&scrollbar=0`}
                className="h-64 w-48 max-w-full pointer-events-none"
                title={`${writing.title} preview`}
              />
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}