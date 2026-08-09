import localFont from "next/font/local";
import Link from "next/link";
import Image from "next/image";

const myFont = localFont({
  src: "../../fonts/ComicFontJames-Regular.ttf",
});

const photos = [
  "/house_show/photo1.png", "/house_show/photo2.png", "/house_show/photo3.png", "/house_show/photo4.png", "/house_show/photo5.png"
];

export default function House_Shows() {
  return (
    <main
      className={`${myFont.className} min-h-screen bg-[#fffaf0] px-6 py-8 text-black`}
    >

      <h1 className="text-5xl text-pink-500">
        House Shows
      </h1>

      <Link
        href="/"
        className="inline-block text-xl text-black hover:text-pink-500 px-4 py-2"
      >
        ← Home
      </Link>

    <div></div>
    <p className="text-3xl text-black">
      Over the last three years of running house shows they have raised over{" "}
      <span className="text-pink-500">
        £10,000
      </span>{" "}
      for Palestine
    </p>
    <div className="mt-12 grid grid-cols-3 gap-x-16 gap-y-12">
        {photos.map((photo) => (
           <Image
            src={photo}
            alt={`$House show {photo}`}
            width={320}
            height={180}
            className="object-cover"
          />
        ))}
      </div>
    </main>
  );
}