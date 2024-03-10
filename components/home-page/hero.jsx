import { FiPhoneCall } from "react-icons/fi";

export default function HomeHero() {
    return (
        <section className="w-full flex justify-center items-center bg-blue-500 p-5 relative pb-0" style={{
            backgroundImage: 'url(/hero-bg.jpg)',
            backgroundPosition: 'top center',
            backgroundSize: 'cover',
        }}>
            <div className="w-full max-w-[1280px] pt-10 flex justify-center items-center sm:flex-col">
                <div className="flex flex-col justify-center w-1/2 gap-14 sm:w-full sm:gap-4">
                    <h1 className="text-white text-5xl sm:text-center sm:text-3xl">Get Our Best Hearing Test, Expert Right Here</h1>
                    <p className="text-white text-sm sm:text-center" style={{ lineHeight: '2.2' }}>Enim cras in eget urna. Ut proin integer tempor, bibendum quam ullamcorper faucibus. Nulla convallis ultrices augue condimentum non justo ultrices urna. Porttitor neque tortor ultricies vitae donec.</p>
                    <div className="flex gap-5 flex-wrap items-center">
                        <a  href="/contact" className="text-black bg-white px-7 py-2">CONTACT US</a>
                        <div className="h-full flex gap-3 items-center justify-center">
                            <a href="tel:+6568725020"><FiPhoneCall size={'25'} color="#90f05d" /></a>
                            <h4 className="text-white"><a href="tel:+6568725020">+65 68725020</a>/<a href="tel:+6567772829">67772829</a></h4>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center w-1/2 sm:w-full sm:mt-8">
                    <img src="/doc-1.png" alt="doc-1" className="" />
                </div>
            </div>
            <img src="/wave.png" alt="wave" className="absolute bottom-0 w-full" />
        </section>
    )
}