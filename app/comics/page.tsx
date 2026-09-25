import BasePage from "../base/BasePage";

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
     <BasePage
        titleImage="/assets/comics.png"
        titleAlt="Comics"
        highlightOutline="outline-green-300"
        hoverOutline="hover:outline-green-300"
      >

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
              className="text-3xl text-black transition-colors hover:text-green-300"
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
    </BasePage>
  );
}