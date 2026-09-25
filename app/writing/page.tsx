import BasePage from "../base/BasePage";

const writings = [
  {
    title: "Ubiquitous Apocalypses",
    pdf: "/writings/ubiq_apoc.pdf",
  },
];

export default function Writing() {
  return (
    <BasePage
    titleImage="/assets/writing.png"
    titleAlt="Writing"
      highlightOutline="outline-pink-300"
      hoverOutline="hover:outline-pink-300"
    >

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
              className="text-3xl text-black transition-colors hover:text-pink-300"
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
    </BasePage>
  );
}