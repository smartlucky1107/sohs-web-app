export default function ServicesOurMotto() {
  return (
    <div
      className="w-full flex justify-center items-center bg-white p-5 relative pb-0 min-h-[256px] bg-cover mt-14"
      style={{
        backgroundImage: "url(/services-motto-bg.png)",
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="text-center px-16 lg:py-0 py-10">
        <h1 className="text-4xl mb-3 text-white">Our Motto</h1>
        <p className="text-lg leading-[32px] text-white">
          To add quality to life of worker in his workplace – providing
          preventive medical care and s ervices to achieve for him a better
          understanding, lifestyle, habits and behaviour ….and extending to his
          family and community too.
        </p>
      </div>
    </div>
  );
}
