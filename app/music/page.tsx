import Image from "next/image";
import BasePage from "../base/BasePage";

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
      },
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
      <BasePage
      	titleImage="/assets/music.png"
			  titleAlt="Music"
        highlightOutline="outline-blue-300"
        hoverOutline="hover:outline-blue-300"
      >

      <div className="mt-12 flex flex-col gap-12">
        {musics.map((music) => (
          <div
            key={music.title}
            className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-12"
          >
            <div className="flex items-center gap-3 sm:w-64">
              {music.logo && (
                <Image
                  src={music.logo}
                  alt=""
                  width={40}
                  height={40}
                  className="h-10 w-10 object-contain"
                />
              )}

              <p className="text-3xl text-black">{music.title}</p>
            </div>

            <div className="flex flex-col items-start gap-3 text-xl text-black sm:flex-row sm:items-center sm:gap-8">
              {music.description.map((part, index) =>
                part.link ? (
                  <a
                    key={index}
                    href={part.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-300"
                  >
                    {part.text}
                  </a>
                ) : (
                  <span key={index}>{part.text}</span>
                )
              )}
            </div>

            {music.image && (
              <Image
                src={music.image}
                alt=""
                width={320}
                height={180}
                className="h-auto w-full max-w-[320px] object-cover"
              />
            )}
          </div>
        ))}
      </div>
    </BasePage>
  );
}