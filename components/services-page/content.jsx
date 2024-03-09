import Image from "next/image";
import { FaCheck } from "react-icons/fa6";

export default function ServicesContent() {
  const bestFeatures = [
    "That extremely painful or again is there anyone",
    "Indignation and dislike men who are so beguiled.",
    "Desires these cases are perfectly simple easy",
    "That extremely painful again that is there anyone.",
  ];

  return (
    <>
      <div>
        <Image
          src="/about-img-1.jpg"
          alt=""
          width={1920}
          height={435}
          className="bg-red-500 h-[435px] object-cover object-top"
        />
        <p className="mt-5 text-[#222222] text-lg leading-[32px]">
          In Hospitals or larger hospital systems may provide their own
          ambulance service as a service to the community, or where ambulance
          care is unreliable or chargeable. Many hospital•based EMS departments
          operate solely with their hospital The physicians will attempt to
          treat casualties at the scene and will only transport them to hospital
          if it is deemed necessary. If patients are transported to hospital,
          they are more likely to go straight to a ward rather than to an
          emergency department. Countries that use this model include Austria,
          France, Belgium, Luxembourg, Italy, Spain, Brazil and Chile.
        </p>
      </div>

      {/* Best Features */}
      <div className="flex items-center flex-col lg:flex-row gap-5 mt-14">
        <div className="w-full lg:w-[calc(100%_-_356px)]">
          <h2 className="text-4xl mb-5">Best Features</h2>

          <ul className="space-y-2">
            {bestFeatures.map((feature) => (
              <li
                className="flex items-center gap-4 text-lg text-[#222222]"
                key={feature}
              >
                <FaCheck size={38} className="text-[#49b2f6]" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full lg:w-[356px]">
          <Image
            src="/service-2.png"
            alt=""
            width={259}
            height={356}
            className="h-[259px] lg:w-[356px] w-auto object-cover"
          ></Image>
        </div>
      </div>

      {/* Best Health service */}
      <div className="mt-14">
        <h2 className="text-4xl mb-5">Find Our Best Health Service</h2>
        <p className="text-lg text-[#222222] leading-[32px]">
          The Anglo-American model is also known as , ambulances are staffed by
          paramedics and/or emergency medical technicians. , but not to the same
          level as a physician. In this model it is rare to find a physician
          actually Specialized medical training working routinely in ambulances,{" "}
        </p>
      </div>
    </>
  );
}
