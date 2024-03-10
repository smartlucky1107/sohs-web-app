import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { GoChevronRight } from "react-icons/go";

export default function ServicesSidebar() {
  const router = useRouter();

  const services = [
    {
      name: "Medical Surveillance Programs",
      image: "1.png",
      link: "/services/medical-surveillance-programs",
    },
    {
      name: "Periodic Medical Examination",
      image: "2.png",
      link: "/services/periodic-medical-examination",
    },
    {
      name: "Pre Placement Medicals",
      image: "3.png",
      link: "/services/pre-placement-medicals",
    },
    {
      name: "On-site Medical Services",
      image: "4.png",
      link: "/services/on-site-medical-services",
    },
    {
      name: "Toxicology Surveillance",
      image: "5.png",
      link: "/services/toxicology-surveillance",
    },
    {
      name: "Audiometry Examination",
      image: "6.png",
      link: "/services/audiometry-examination",
    },
    {
      name: "Company Wellness Programs",
      image: "7.png",
      link: "/services/company-wellness-programs",
    },
    {
      name: "Statutory Medical Exaination ",
      image: "7.png",
      link: "/services/statutory-medical-exaination ",
    },
    {
      name: "Management of Chronic Illnesses",
      image: "7.png",
      link: "/services/management-of-chronic-illnesses",
    },
    {
      name: "Travel & Vaccination Services ",
      image: "7.png",
      link: "/services/travel-vaccination-services ",
    },
    {
      name: "Genetic Blood Tests & Health Plan",
      image: "7.png",
      link: "/services/genetic-blood-tests-health-plan",
    },
    {
      name: "Spirometry and respiratory assessment",
      image: "7.png",
      link: "/services/spirometry-and-respiratory-assessment",
    },
  ];

  return (
    <div className="bg-[#F0F7FE] p-7">
      <div className="flex items-center gap-3 mb-3">
        <Image
          src="/services/service-icon-1.png"
          alt=""
          width={36}
          height={36}
        />
        <h3 className="text-2xl">Our Service</h3>
      </div>

      <ul className="divide-y divide-[#D1D5DA]">
        {services.map((service, index) => (
          <li key={index}>
            <Link
              href={service.link}
              className="group flex items-center justify-between py-5"
            >
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-[#49B2F6] rounded-full block"></span>
                <span className="text-[#222222]">{service.name}</span>
              </div>

              <div
                className={`w-5 h-5 rounded-full flex items-center justify-center transition text-[#49B2F6] group-hover:bg-[#49B2F6] group-hover:text-white ${
                  service.href == router.pathname && "text-white bg-[#49B2F6]"
                }`}
              >
                <GoChevronRight />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
