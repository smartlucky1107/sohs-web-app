import { PathDisplay } from "../pathdisplay"

export default function ResultHero() {
    return (
        <section className="w-full flex justify-center p-5 pb-0 relative "  style={{
            backgroundImage: 'url(/path-bg-2.png)',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
        }}>
            <div className="w-full h-full flex-col max-w-[1280px] flex justify-center sm:flex-col gap-8 py-14">
                <div className="flex gap-4 items-center w-full justify-center flex-col h-full">
                    <div className="relative flex justify-center items-center">
                        <h1 className="text-white text-4xl sm:text-xl text-center">Test Result</h1>
                    </div>
                    <PathDisplay
                      path={[
                        {
                          text: `Home > `,
                          link: `/`,
                        },
                        {
                          text: `Test Result`,
                          link: `/testresult/`,
                        },
                      ]}
                    />
                </div>
            </div>
        </section>
    )
}