import Image from "next/image";
import { FaCheck } from "react-icons/fa6";

export default function ServicesContent() {
  const bestFeatures = [
    "Hazard Identification - identify potential hazards",
    "Risk Assessment - Evaluate exposure, duration, toxicity",
    "Selection of methods - questionaires, medical, biological and physical monitoring",
    "Baseline Health Assessment - to establish a baseline for comparison in future evaluations",
    "Regular Monitoring - develops regular monitoring protocols",
    "Data Collection and analysis - identify trends, assess effectiveness of control measures",
    "Cummunication and Education - for the workers' awareness and protective measures",
    "Follow-Up and Intervention - treatment & control measures",
    "Documentation and Record-Keeping - for review and analysis",
    "Continuous Improvement - incorporate new knowledge and technologies"
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
        Detecting ill-health effects at an early stage, allowing employers to introduce better controls to prevent them from getting worse. Providing data to help employers evaluate health risks in their workplace. Program can be designed to prevent and eliminate the harm at the primary level and implement measures to to treat and manage the ill effects at the secondary level.
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
                <FaCheck size={18} className="text-[#49b2f6]" />
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
