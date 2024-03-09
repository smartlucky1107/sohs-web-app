import React, { useState } from 'react';

export default function HomeFaq() {
    // State to manage visibility of answers
    const [answersVisible, setAnswersVisible] = useState({});

    // Function to toggle visibility of answer for a question
    const toggleAnswer = (index) => {
        setAnswersVisible((prevState) => ({
            ...prevState,
            [index]: !prevState[index],
        }));
    };

    return (
        <section className="w-full flex justify-center p-5 pb-0 relative "  style={{
            backgroundImage: 'url(/faq-bg.png)',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
        }}>
            <div className="w-full h-full flex-col max-w-[1280px] flex justify-center sm:flex-col gap-8 py-14 pb-0">
                <div className="flex gap-12 items-center sm:flex-col w-full justify-center h-full">
                    <div className="flex w-1/2 sm:w-full h-full flex-col gap-6">
                        <p className=" text-blue-400">FAQ</p>
                        <h1 className="text-white text-4xl sm:text-xl ">Frequently Asked Have Any Question?</h1>
                        <div className="w-full flex flex-col gap-3 min-h-[400px]">
                            <div className={`bg-white w-full p-5 rounded-md h-auto flex flex-col cursor-pointer  ${answersVisible[1] ? 'gap-4' : 'gap-0'} `} style={{ transition: 'all 0.4s ease', overflowY: 'hidden' }}>
                                <h3 onClick={() => toggleAnswer(1)} className='items-center text-xl w-full flex justify-between sm:text-sm'>01. What services does the clinic offer ? <span className='text-blue-400 text-3xl'>{answersVisible[1] && "-" }{!answersVisible[1] && "+" }</span></h3>

                                <p className='text-sm'
                                style={{
                                  opacity: answersVisible[1] ? 1 : 0,
                                  height: answersVisible[1] ? 'auto' : '0',
                                  width: answersVisible[1] ? 'auto' : '0',
                                  transition: "height width 0.5s ease" // Apply transition effect inline
                                }}>Our clinic is strategically located for easy access, ensuring that you can reach us conveniently from various parts of the community. We also provide accessibility.</p>
                            </div>
                            <div className={`bg-white w-full p-5 rounded-md h-auto flex flex-col cursor-pointer ${answersVisible[2] ? 'gap-4' : 'gap-0'} `} style={{ transition: 'all 0.4s ease', overflowY: 'hidden' }}>
                                <h3 onClick={() => toggleAnswer(2)} className='items-center text-xl w-full flex justify-between sm:text-sm'>02. How do I schedule an appointment ? <span className='text-blue-400 text-3xl'>{answersVisible[2] && "-" }{!answersVisible[2] && "+" }</span></h3>

                                <p className='text-sm'
                                style={{
                                  opacity: answersVisible[2] ? 1 : 0,
                                  height: answersVisible[2] ? 'auto' : '0',
                                  width: answersVisible[2] ? 'auto' : '0',
                                  transition: "height width 0.5s ease" // Apply transition effect inline
                                }}>Our clinic is strategically located for easy access, ensuring that you can reach us conveniently from various parts of the community. We also provide accessibility.</p>
                            </div>
                            <div className={`bg-white w-full p-5 rounded-md h-auto flex flex-col cursor-pointer ${answersVisible[3] ? 'gap-4' : 'gap-0'} `} style={{ transition: 'all 0.4s ease', overflowY: 'hidden' }}>
                                <h3 onClick={() => toggleAnswer(3)} className='items-center text-xl w-full flex justify-between sm:text-sm'>03. What are the clinic hours of operation ? <span className='text-blue-400 text-3xl'>{answersVisible[3] && "-" }{!answersVisible[3] && "+" }</span></h3>

                                <p className='text-sm'
                                style={{
                                  opacity: answersVisible[3] ? 1 : 0,
                                  height: answersVisible[3] ? 'auto' : '0',
                                  width: answersVisible[3] ? 'auto' : '0',
                                  transition: "height width 0.5s ease" // Apply transition effect inline
                                }}>Our clinic is strategically located for easy access, ensuring that you can reach us conveniently from various parts of the community. We also provide accessibility.</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center w-1/2 sm:w-full">
                        <img src="/doc-3.png" alt="doc" className="w-full max-w-[500px]" />
                    </div>
                </div>
            </div>
        </section>
    )
}