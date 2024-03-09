export default function AboutAbout() {
  return (
    <section className="w-full flex justify-center items-center p-5 relative">
      <div className="w-full max-w-[1280px] pt-10 flex justify-center flex-col gap-6">
        <div className="text-center mb-10">
          <h1 className="text-5xl mb-5">Our Motto</h1>
          <p className="text-gray-700">
            To add quality to life of worker in his workplace – providing
            preventive medical care and services to achieve for him a better
            understanding, lifestyle, habits and behaviour ….and extending to
            his family and community too
          </p>
        </div>

        <div className="flex gap-4 items-center sm:gap-1 w-full">
          <h1 className="text-4xl">About Us</h1>
          <img src="/icon-1.png" alt="icon" height={"100%"} />
        </div>
        <div className="flex w-full flex-wrap items-center h-auto sm:gap-6">
          <div className="flex flex-col gap-3  md:w-2/3 md:pr-7">
            <h1 className="text-3xl sm:text-1xl">Get Best Health Service</h1>
            <p className=" text-gray-700" style={{ lineHeight: "2" }}>
              {" "}
              Singapore Occupational Health Services provide preventive health
              and medical services to corporates and their employees. It is
              related to human work, work place and work environment. The
              company is guided by its motto "To Add quality to life of worker
              in his workplace“. The chief objectives of the company is safety
              of workers from injuries and diseases, and to improve the health
              status of the workers and his family, through health protections
              and promotions. Corporate clients also benefit from increased
              productivity of the workers, reduced absenteeism and improved
              relationship and trust between workers and management.
            </p>
          </div>
          <div
            className="flex flex-col gap-3 h-max md: min-h-80 lg:w-1/3 sm:w-full"
            style={{
              backgroundImage: "url(/about-img-1.jpg)",
              backgroundPosition: "top center",
              backgroundSize: "cover",
            }}
          >
            &nbsp;
          </div>
        </div>
        <div className="flex w-full flex-wrap items-center h-auto sm:gap-6 sm:flex-col-reverse">
          <div
            className="flex flex-col gap-3 h-max md: min-h-96 lg:w-1/3 sm:w-full"
            style={{
              backgroundImage: "url(/about-img-2.jpg)",
              backgroundPosition: "top center",
              backgroundSize: "cover",
            }}
          >
            &nbsp;
          </div>
          <div className="flex flex-col gap-3 md:w-2/3 md:pl-7">
            <h1 className="text-3xl sm:text-1xl">
              Offering a Wide Variety of Occupational Health Services and
              Solutions
            </h1>
            <p className=" text-gray-700" style={{ lineHeight: "2" }}>
              From pre-placement medical exams, medical testing, and independent
              assessments, to immunization and medical surveillance programs, we
              have you covered. Workplace Medical is your one-stop shop,
              offering a wide range of occupational health programs that allow
              you to implement an integrated and comprehensive occupational
              health solution. The services we offer include: Medical
              Surveillance Programs & Periodic Medicals, Pre-Placement Medicals,
              On-site Medical Services, Mask Fit Testing, Drug Testing Services,
              Flu Programs, Company Wellness Programs, Firefighter Medicals,
              Driver Medical, Pilot Medical and Executive Medical.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
