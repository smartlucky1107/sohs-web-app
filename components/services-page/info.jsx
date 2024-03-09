export default function ServicesInfo() {
  return (
    <section className="flex w-full flex-col justify-center items-center py-10 px-4">
      <div className="w-full max-w-[1280px] flex flex-col justify-center items-center gap-10">
        <h1 className="text-3xl sm:text-2xl">
          SINGAPORE OCUPATIONAL HEALTH SERVICES PTE LTD
        </h1>
        <div className="flex flex-col justify-center items-center gap-3 w-full">
          <div className="flex sm:flex-wrap justify-center items-center w-full gap-3 w-full">
            <div className="flex py-3 px-3 border-black items-center border w-full bg-[#ffeced] gap-4">
              <div className="rounded-full w-[60px] h-[60px] bg-white border border-black flex justify-center items-center">
                <img width={"50%"} src={"/services/10.png"} alt="services" />
              </div>
              <h3 className="text-sm">
                Office Contact No: 68725020, 67772829, 68720070
              </h3>
            </div>
            <div className="flex py-3 px-3 border-black items-center border sm:w-full bg-[#e5f3ff] gap-4">
              <div className="rounded-full w-[60px] h-[60px] bg-white border border-black flex justify-center items-center">
                <img width={"50%"} src={"/services/11.png"} alt="services" />
              </div>
              <h3 className="text-sm text-nowrap">Fax: 68725679</h3>
            </div>
            <div className="flex py-3 px-3 border-black items-center border sm:w-full bg-[#E6FFF4] gap-4">
              <div className="rounded-full w-[60px] h-[60px] bg-white border border-black flex justify-center items-center">
                <img width={"50%"} src={"/services/12.png"} alt="services" />
              </div>
              <h3 className="text-sm text-nowrap">Mobile: 90738282</h3>
            </div>
          </div>
          <div className="flex py-3 px-3 border-black items-center border bg-[#DBF9FF] gap-4 w-full">
            <div className="rounded-full w-[60px] h-[60px] bg-white border border-black flex justify-center items-center">
              <img width={"50%"} src={"/services/9.png"} alt="services" />
            </div>
            <h3 className="text-sm">
              Singapore Occupational Health Services Pte Ltd, Tempco
              Technominium, 16 Ayer Rajah Crescent #06-06B, Singapore 139965
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
