export default function HomeMotto() {
    return (
        <section className="w-full flex justify-center align-bottom relative md:max-h-[250px]"  style={{
                backgroundImage: 'url(/motto-bg.jpg)',
                backgroundPosition: 'bottom center',
                backgroundSize: 'cover',
            }}>
            <div className="w-full h-full md:max-h-[250px] p-5 pb-0 flex justify-between align-bottom items-end gap-6 sm:flex-col-reverse">
                <img src="/doc-2.png" alt="doctor" className="w-[300px] min-h-[400px] origin-bottom" />
                <div className="w-full h-full min-h-[250px] max-w-[1280px] items-center flex justify-center flex-col gap-6">
                    <div className="flex gap-6 items-center sm:gap-1 w-full justify-center flex-col h-full">
                        <h1 className="text-3xl sm:text-xl text-center text-white">Our Motto</h1>
                        <p className="text-center text-white">To add quality to life of worker in his workplace providing preventive medical care and services to achieve for him a better understanding, lifestyle, habits and  behaviour ….and extending to his family and community too</p>
                        <a className="bg-[#fff] text-black px-6 py-2" href="">Contact Us</a>
                    </div>
                </div>
                <div>
                <img src="/sthetoscope.jpg" alt="doctor" className="max-w-[300px] sm:hidden" />
                </div>
            </div>
        </section>
    )
}