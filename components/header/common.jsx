import { CiMail, CiClock2, CiCircleInfo, CiUser } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { IoMdMenu } from "react-icons/io";

export default function CommonHeader() {
    return (
        <section className="w-full flex flex-col bg-white justify-center items-center">
            <div className="flex w-full h-[40px] bg-black justify-center items-center px-4">
                <div className="flex w-full max-w-[1280px] h-[40px] bg-black justify-between items-center">
                    <div className="flex gap-4 h-full items-center sm:hidden">
                        <div className="flex h-full items-center gap-1">
                            <CiMail color="#fff" />
                            <a href="mailto:sohspl@gmail.com" className="text-white text-xs">sohspl@gmail.com</a>
                        </div>
                        <div className="flex h-full items-center gap-1">
                            <CiClock2 color="#fff" />
                            <p className="text-white text-xs">Mon - Fri 9:00 - 17:30</p>
                        </div>
                    </div>
                    <div className="flex gap-6 h-full items-center sm:w-full sm:justify-between">
                        <div className="flex gap-4 h-full items-center">
                            <div className="flex h-full items-center gap-1">
                                <CiCircleInfo color="#fff" />
                                <a href="/contact-us" className="text-white text-xs">Need help</a>
                            </div>
                            <div className="flex h-full items-center gap-1">
                                <CiUser color="#fff" />
                                <p className="text-white text-xs"><a href="/login">Sign In</a> / <a href="/register">Register</a></p>
                            </div>
                        </div>
                        <div className="flex gap-4 h-full items-center">
                            <a href="" className="text-white"><FaFacebookF color="#fff" /></a>
                            <a href="" className="text-white"><RiTwitterXLine color="#fff" /></a>
                            <a href="" className="text-white"><FaLinkedinIn color="#fff" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-[60px] flex items-center justify-center px-4">
                <div className="flex w-full max-w-[1280px] h-[60px] justify-between items-center">
                    <div className="h-full flex gap-6 items-center">
                        <img src="/logo.svg" alt="logo" className="h-[50px]" />
                        <div className=" md:flex sm:hidden h-full items-center gap-6">
                            <a href="/">Home</a>
                            <a href="/about">About Us</a>
                            <a href="/services">Services</a>
                            <a href="/workers">Workers</a>
                            <a href="/test">Test</a>
                            <a href="/contact">Contact</a>
                        </div>
                    </div>
                    <div className="h-full flex gap-7 py-2">
                        <div className="h-full flex gap-3 items-center">
                            <FiPhoneCall size={'25'} />
                            <div className="h-full flex flex-col justify-center">
                                <p className="text-[10px] text-gray">Call in</p>
                                <h4 className="sm:text-xs"><a href="tel:65 68725020">+65 68725020</a>/<a href="tel:65 67772829">67772829</a></h4>
                            </div>
                        </div>
                        <div className="h-full flex items-center">
                            <a href="/contact-us" className="flex items-center text-white bg-[#0094f1] px-5 sm:px-3 sm:text-xs h-full">CONTACT US</a>
                            <button className="sm:p-3 sm:text-xs md:hidden"><IoMdMenu /></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}