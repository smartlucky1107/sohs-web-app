import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { GoChevronRight } from "react-icons/go";

export default function ServicesSidebar() {
  const router = useRouter();

  const services = [
    {
      label: "Medical Surveillance Programs",
      href: "/services/medical-surveillance-programs",
    },
    {
      label: "Periodic Medical Examination",
      href: "/services/periodic-medical-examination",
    },
    {
      label: "Pre-Placement Medicals",
      href: "/services/pre-placement-medicals",
    },
    {
      label: "On-site Medical Services",
      href: "/services/on-site-medical-services",
    },
    {
      label: "Toxicology Surveillance",
      href: "/services/toxicology-surveillance",
    },
    {
      label: "Audiometry Examination",
      href: "/services/audiometry-examination",
    },
    {
      label: "Company Wellness Programs",
      href: "/services/company-wellness-programs",
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
              href={service.href}
              className="group flex items-center justify-between py-5"
            >
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-[#49B2F6] rounded-full block"></span>
                <span className="text-[#222222]">{service.label}</span>
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
