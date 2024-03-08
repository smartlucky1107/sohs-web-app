import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";

export default function CommonFooter() {
    return (
        <section className="w-full flex flex-col bg-white justify-center items-center" style={{
            backgroundImage: 'url(/footer-bg.jpg)',
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
        }}>
            <div className="w-full flex items-center justify-center px-4 py-20">
                <div className="flex w-full max-w-5xl justify-center items-center">
                    <div className="h-full flex flex-col gap-6 items-center">
                        <img src="/logo.svg" alt="logo" className="h-[100px]" />
                        <div className="flex flex-wrap h-full items-center justify-center gap-6">
                            <a className="text-white " href="/home">Home</a>
                            <a className="text-white " href="/about">About Us</a>
                            <a className="text-white " href="/services">Services</a>
                            <a className="text-white " href="/workers">Workers</a>
                            <a className="text-white " href="/test">Test</a>
                            <a className="text-white " href="/contact">Contact</a>
                        </div>
                        <button className="text-white bg-[#0094f1] px-5 sm:px-3 sm:text-xs py-3">CONTACT US</button>
                    </div>
                </div>
            </div>
            <div className="flex w-full h-[40px] bg-black justify-center items-center px-4">
                <div className="flex w-full max-w-5xl h-[40px] bg-black justify-between items-center">
                    <div className="flex gap-4 h-full items-center">
                        <div className="flex h-full items-center gap-1">
                            <p className="text-white text-xs">Copyright © 2023 American Packout</p>
                        </div>
                    </div>
                    <div className="flex gap-6 h-full items-center sm:justify-between">
                        <div className="flex gap-4 h-full items-center">
                            <a href="" className="text-white"><FaFacebookF color="#fff" /></a>
                            <a href="" className="text-white"><RiTwitterXLine color="#fff" /></a>
                            <a href="" className="text-white"><FaLinkedinIn color="#fff" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}