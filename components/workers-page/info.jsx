export default function WorkersInfo() {
    return (
        <section className="flex w-full flex-col justify-center items-center py-10 px-4">
            <div className="w-full max-w-[1280px] flex flex-col justify-center items-center gap-7">
                <h1 className="text-3xl sm:text-2xl">SINGAPORE OCUPATIONAL HEALTH SERVICES PTE LTD</h1>
                <div className="flex flex-col justify-center items-center gap-3">
                    <div className="flex sm:flex-wrap justify-center items-center w-full gap-3">
                        <div className="flex py-3 px-3 border-[rgba(0,0,0,0.3)] items-center border w-full rounded bg-[#ffeced] gap-4">
                            <div className="rounded-full w-[60px] h-[60px] bg-gray-200 flex justify-center items-center">
                                <img width={'50%'} src={'/services/10.png'} alt="services" />
                            </div>
                            <h3 className="text-sm">Office Contact No: 68725020, 67772829, 68720070</h3>
                        </div>
                        <div className="flex py-3 px-3 border-[rgba(0,0,0,0.3)] items-center border sm:w-full rounded bg-[#e5f3ff] gap-4">
                            <div className="rounded-full w-[60px] h-[60px] bg-gray-200 flex justify-center items-center">
                                <img width={'50%'} src={'/services/11.png'} alt="services" />
                            </div>
                            <h3 className="text-sm text-nowrap">Fax: 68725679</h3>
                        </div>
                        <div className="flex py-3 px-3 border-[rgba(0,0,0,0.3)] items-center border sm:w-full rounded bg-[#e5f3ff] gap-4">
                            <div className="rounded-full w-[60px] h-[60px] bg-gray-200 flex justify-center items-center">
                                <img width={'50%'} src={'/services/12.png'} alt="services" />
                            </div>
                            <h3 className="text-sm text-nowrap">Mobile: 90738282</h3>
                        </div>
                    </div>
                    <div className="flex py-3 px-3 border-[rgba(0,0,0,0.3)] items-center border rounded bg-[#e5f3ff] gap-4">
                        <div className="rounded-full w-[60px] h-[60px] bg-gray-200 flex justify-center items-center">
                            <img width={'50%'} src={'/services/9.png'} alt="services" />
                        </div>
                        <h3 className="text-sm">Singapore Occupational Health Services Pte Ltd, Tempco Technominium, 16 Ayer Rajah Crescent #06-06B, Singapore 139965</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}