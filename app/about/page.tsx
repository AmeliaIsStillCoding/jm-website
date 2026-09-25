import BasePage from "../base/BasePage";

export default function About() {
  return (
     <BasePage
        titleImage="/assets/about.png"
        titleAlt="About"
        highlightOutline="outline-red-300"
        hoverOutline="hover:outline-red-300"
      >

      <div className="mt-12 text-3xl">
        <span className="ml-4 text-xl">About text</span>
      </div>
    </BasePage>
  );
}