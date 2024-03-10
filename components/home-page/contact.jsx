export default function HomeContact() {
    return (
        <section className="w-full flex justify-center p-5 pb-0 relative "  style={{
            backgroundImage: 'url(/contact-bg.png)',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
        }}>
            <div className="w-full h-full flex-col max-w-[1280px] flex justify-center sm:flex-col gap-8 py-14">
                <div className="flex gap-12 items-center w-full justify-center flex-col h-full">
                    <div className="relative flex justify-center items-center">
                        <h1 className="text-white text-4xl sm:text-xl text-center">Contact Us For your Questions</h1>
                        <img src="./shapes/1.png" alt="shapes" className="w-1/2 absolute bottom-[-25px] left-0" />
                        <img src="./shapes/2.png" alt="shapes" className="absolute top-13 right-[-35px]" />
                        <img src="./shapes/3.png" alt="shapes" className="absolute top-0 left-[-30px]" />
                    </div>
                    <a className="text-white bg-[#0094f1] px-6 py-2" href="/contact">Contact Us</a>
                </div>
            </div>
        </section>
    )
}