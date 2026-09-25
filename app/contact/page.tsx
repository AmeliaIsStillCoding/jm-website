import BasePage from "../base/BasePage";

export default function Contact() {
  return (
     <BasePage
        titleImage="/assets/contact.png"
        titleAlt="Contact"
        highlightOutline="outline-gray-300"
        hoverOutline="hover:outline-gray-300"
      >

      <div className="mt-12 text-3xl">
        <a
          href="https://www.instagram.com/jamesmossnospaces/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-gray-300"
        >
          @jamesmossnospaces
        </a>
        <span className="ml-4 text-xl">on Instagram</span>
      </div>
    </BasePage>
  );
}