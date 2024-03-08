import Image from "next/image";
import Link from "next/link";

export default function ContactForm() {
  return (
    <section
      className="w-full relative bg-cover min-h-[593px] flex items-center justify-center mt-10"
      style={{
        backgroundImage: "url(/contact-form-bg.png)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full max-w-5xl flex justify-center mx-auto flex-col gap-6 py-10 px-5 lg:py-0 lg:px-0">
        <div className="flex items-center gap-14 lg:flex-row flex-col">
          <div className="lg:w-1/2 w-full">
            <div className="space-y-9">
              <h1 className="text-[34px] leading-[50px] text-white">
                Are you looking to incorporate hearing test?
              </h1>
              <p className="text-lg leading-[30px] text-white">
                Lorem ipsum dolor sit amet, consectetur lorem ipsum aipiscing
                anc vivita consectetur lorem ipsum aipiscing anc vivita
                consectetur lorem ipsum aipiscing anc vivita.
              </p>

              <div className="flex items-center gap-7 flex-row sm:flex-col">
                <Link
                  href="/"
                  className="h-[51px] px-10 inline-block leading-[51px] bg-white tracking-[2px] uppercase font-medium"
                >
                  Get in touch
                </Link>

                <Link
                  href="tel:5128438643"
                  className="text-lg font-medium text-white flex items-center justify-center gap-3"
                >
                  <Image
                    src="/icons/phone-white.png"
                    alt=""
                    width={42}
                    height={42}
                  />
                  (512) 843-8643
                </Link>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:w-1/2 w-full">
            <form className="space-y-2.5">
              <input
                type="text"
                className="bg-white h-[59px] px-5 w-full text-lg outline-none"
                placeholder="Your Full Name"
              />
              <input
                type="email"
                className="bg-white h-[59px] px-5 w-full text-lg outline-none"
                placeholder="Your Email"
              />
              <input
                type="text"
                className="bg-white h-[59px] px-5 w-full text-lg outline-none"
                placeholder="What Can We Help You With?"
              />
              <input
                type="text"
                className="bg-white h-[59px] px-5 w-full text-lg outline-none"
                placeholder="Your Phone Number"
              />

              <textarea
                rows="5"
                className="bg-white p-5 w-full text-lg outline-none"
                placeholder="How Would You Like Us To Help?:"
              ></textarea>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
