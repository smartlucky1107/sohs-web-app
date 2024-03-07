import { PathDisplay } from "../pathdisplay"

export default function TestsHero() {
    return (
        <section className="w-full flex justify-center p-5 pb-0 relative "  style={{
            backgroundImage: 'url(/path-bg.jpg)',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
        }}>
            <div className="w-full h-full flex-col max-w-5xl flex justify-center sm:flex-col gap-8 py-14">
                <div className="flex gap-4 items-center w-full justify-center flex-col h-full">
                    <div className="relative flex justify-center items-center">
                        <h1 className="text-white text-4xl sm:text-xl text-center">All Tests</h1>
                    </div>
                    <PathDisplay
                      path={[
                        {
                          text: `Home > `,
                          link: `/`,
                        },
                        {
                          text: `All Tests`,
                          link: `/addtests/`,
                        },
                      ]}
                    />
                </div>
            </div>
        </section>
    )
}