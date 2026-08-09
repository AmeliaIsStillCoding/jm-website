import localFont from "next/font/local";
import Link from "next/link";

const myFont = localFont({
  src: "../../fonts/ComicFontJames-Regular.ttf",
});

export default function Contact() {
  return (
    <main
      className={`${myFont.className} min-h-screen bg-[#fffaf0] px-6 py-8 text-black`}
    >
      <h1 className="text-5xl text-orange-500">
        Contact
      </h1>

      <Link
        href="/"
        className="inline-block px-4 py-2 text-xl text-black hover:text-orange-500"
      >
        ← Home
      </Link>

      <div className="mt-12">
        <a
          href="https://www.instagram.com/jamesmossnospaces/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl text-black hover:text-orange-500"
        >
          @jamesmossnospaces
        </a>
      </div>
    </main>
  );
}