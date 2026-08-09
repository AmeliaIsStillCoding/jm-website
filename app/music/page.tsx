import localFont from "next/font/local";
import Link from "next/link";
import Image from "next/image";

const myFont = localFont({
  src: "../../fonts/ComicFontJames-Regular.ttf",
});

const musics = [
  {
    title: "The Wheel 2!",
    logo: "/wheel2-logo.png",
    image: "/wheel2-photo.png",
    instagram: "https://www.instagram.com/thewheel2exclamationmark/",
    description: [
      {
        text: "@thewheel2exclamationmark",
        link: "https://www.instagram.com/thewheel2exclamationmark/",
      },
      {
        text: "Live at the Windmill - Lou Smith",
        link: "https://www.youtube.com/watch?v=7idAP-jH-C8",
      }
    ],
  },
  {
    title: "Hysterical Backslider",
    description: [
      {
        text: "Falling Moon compilation",
        link: "https://fallingmoonfm.bandcamp.com/album/volume-1-the-music-scene-stands-with-gaza",
      },
    ],
  },
];

export default function Music() {
  return (
    <main
      className={`${myFont.className} min-h-screen bg-[#fffaf0] px-6 py-8 text-black`}
    >
      <h1 className="text-5xl text-blue-500">
        Music
      </h1>

      <Link
        href="/"
        className="inline-block px-4 py-2 text-xl text-black hover:text-blue-500"
      >
        ← Home
      </Link>

      <div className="mt-12 flex flex-col gap-12">
        {musics.map((music) => (
          <div
            key={music.title}
            className="flex items-center gap-12"
          >
            {/* Logo + title */}
            <div className="flex w-64 items-center gap-3">
              {music.logo && (
                <Image
                  src={music.logo}
                  alt=""
                  width={40}
                  height={40}
                  className="h-10 w-10 object-contain"
                />
              )}

              <p className="text-3xl text-black">
                {music.title}
              </p>
            </div>

            {/* Description */}
            <div className="flex items-center gap-8 text-xl text-black">
              {music.description.map((part, index) =>
                part.link ? (
                  <a
                    key={index}
                    href={part.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-500"
                  >
                    {part.text}
                  </a>
                ) : (
                  <span key={index}>{part.text}</span>
                )
              )}
            </div>

            {/* Custom photo */}
            {music.image && (
              <Image
                src={music.image}
                alt=""
                width={320}
                height={180}
                className="object-cover"
              />
            )}
          </div>
        ))}
      </div>
    </main>
  );
}