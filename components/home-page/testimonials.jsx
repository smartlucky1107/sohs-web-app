export default function HomeTestimonials() {
    return (
        <section className="w-full flex justify-center p-5 pb-0 relative ">
            <div className="w-full h-full flex-col max-w-5xl flex justify-center sm:flex-col gap-8 py-14">
                <div className="flex gap-6 items-center sm:gap-1 w-full justify-center flex-col h-full">
                    <h1 className="text-3xl sm:text-xl text-center">Our Happy Clients</h1>
                </div>
                <div className="flex flex-col gap-8 w-full justify-center items-center">
                    <p className="text-center text-sm max-w-[750px]" style={{ lineHeight: '2' }}>
                    “Great value price! If you are sitting on the face thinking buying this theme, just do it! Every time I had a question or any issues it was answered quickly and promptly. I have only good things to say about this item. No bugs and it’s fast, it simply works”
                    </p>
                    <div className="flex flex-col gap-1 justify-center items-center">
                        <h4 className="text-center">Anna Marina</h4>
                        <p className="text-center text-gray-600">Customer</p>
                    </div>
                </div>
            </div>
        </section>
    )
}