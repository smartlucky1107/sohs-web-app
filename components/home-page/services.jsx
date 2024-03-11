import { Children } from "react";
import { servicesData } from "./data/services";
import Link from "next/link";

export default function HomeServices() {
  return (
    <section className="w-full flex justify-center items-center p-5 relative">
      <div className="w-full max-w-[1280px] pt-10 flex justify-center flex-col gap-6">
        <div className="flex gap-4 items-center sm:gap-1 w-full justify-center flex-col">
          <p className="text-center text-blue-400">OUR MEDICAL SERVICE</p>
          <h1 className="text-3xl sm:text-xl text-center">
            The Services We Offer Include
          </h1>
        </div>
        <div className="flex w-full flex-col items-center gap-10">
          <div className="w-full flex flex-wrap justify-between items-center">
            {Children.toArray(
              servicesData.map((data, index) => (
                <div
                  className="flex justify-center md:w-1/4 sm:w-full mb-20"
                  key={"service-data-" + index}
                >
                  <div className="flex flex-col justify-center items-center gap-4 max-w-[200px]">
                    <div className="rounded-full w-[80px] h-[80px] bg-gray-200 flex justify-center items-center">
                      <img
                        width={"50%"}
                        src={"/services/" + data.image}
                        alt="services"
                      />
                    </div>
                    <h2 className="text-center text-xl">{data.name}</h2>
                    <Link className="bg-[#90f05d] px-6 py-2" href={data.link}>
                      Read More
                    </Link>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
