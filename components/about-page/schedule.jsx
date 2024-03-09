import Link from "next/link";

export default function AboutSchedule() {
  return (
    <section
      className="w-full relative bg-cover min-h-[210px] flex items-center justify-center"
      style={{
        backgroundImage: "url(/schedule-bg.png)",
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full max-w-[1280px] flex justify-center mx-auto flex-col gap-6">
        <div className="flex lg:items-start items-center justify-between flex-col lg:flex-row gap-8">
          <div>
            <h1 className="text-4xl text-white">
              Schedule a free inspection, it's easy!
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="h-[51px] px-10 flex items-center justify-center bg-white tracking-[2px] uppercase font-medium"
            >
              Contact US
            </Link>

            <Link
              href="/"
              className="h-[51px] px-10 flex items-center justify-center border border-white text-white tracking-[2px] uppercase font-medium"
            >
              Buy now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
