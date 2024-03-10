import Image from "next/image";
import Link from "next/link";

export default function ContactInformation() {
  const infos = [
    {
      icon: "/icons/phone.png",
      label: "Phone Number",
      details: (
        <>
          Monday-Friday: 9:00 - 17:30
        </>
      ),
    },
    {
      icon: "/icons/map.png",
      label: "Our Address",
      details: (
        <>
          Singapore Occupational Health Services Pte Ltd, Tempco Technominium, 16 Ayer Rajah Crescent #06-06B, Singapore 139965
        </>
      ),
    },
    {
      icon: "/icons/email.png",
      label: "Email",
      details: "sohspl@gmail.com ",
    },
  ];

  return (
    <section className="w-full flex justify-center items-center p-5 relative">
      <div className="w-full max-w-[1280px] py-14 flex justify-center flex-col gap-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-3xl md:text-4xl mb-14">
            Reach Out For Hearing Test From Experts!
          </h1>
          <Link
            href="tel:+6568725020"
            className="text-white bg-[#0094f1] px-8 sm:px-5 sm:text-xs py-3 font-medium"
          >
            CALL +65 68725020
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 grid-cols-2 sm:grid-cols-1 gap-5">
          {infos.map((info, index) => (
            <div key={"contact-info-"+index}>
              <div className="border border-black px-5 py-7 flex items-center justify-center flex-col text-center h-[calc(100%_-_17px)]">
                <div className="w-24 h-24 rounded-full bg-[#F5F5FA] flex items-center justify-center">
                  <Image src={info.icon} width={42} height={42} />
                </div>

                <h4 className="text-2xl font-medium mt-5 mb-3">{info.label}</h4>

                <p className="text-[#666666] text-lg">{info.details}</p>
              </div>
              <div className="h-[17px] bg-[#0194F3]"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
