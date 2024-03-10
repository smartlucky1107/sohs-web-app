import { BsChevronRight } from "react-icons/bs";

export default function ContactHero() {
  return (
    <section
      className="w-full flex justify-center items-center bg-white p-5 relative pb-0 h-[313px] bg-cover"
      style={{
        backgroundImage: "url(/contact-page-bg.png)",
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full max-w-[1280px] pt-10 flex justify-center items-center sm:flex-col">
        <div className="flex flex-col justify-center w-1/2 gap-14 sm:w-full sm:gap-4">
          <h1 className="text-white text-5xl sm:text-center sm:text-3xl text-center">
            Contact Us
          </h1>

          <ul className="flex items-center justify-center gap-1.5">
            <li className="text-lg text-white"><a href="/">Home</a></li>
            <li className="text-white text-xl">
              <BsChevronRight />
            </li>
            <li className="text-lg text-white">Contact Us</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
