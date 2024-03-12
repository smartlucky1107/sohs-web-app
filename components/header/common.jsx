import { CiMail, CiClock2, CiCircleInfo, CiUser } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { IoMdMenu } from "react-icons/io";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function CommonHeader() {
  const router = useRouter();
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {},
  });

  const handleSignOut = async () => {
    const data = await signOut({ redirect: false, callbackUrl: "/" });
    if (data) {
      router.push(data.url);
    }
  };

  return (
    <section className="w-full flex flex-col bg-white justify-center items-center">
      <div className="flex w-full h-[40px] bg-black justify-center items-center px-4">
        <div className="flex w-full max-w-[1280px] h-[40px] bg-black justify-between items-center">
          <div className="flex gap-4 h-full items-center sm:hidden">
            <div className="flex h-full items-center gap-1">
              <CiMail color="#fff" />
              <Link
                href="mailto:sohspl@gmail.com"
                className="text-white text-xs"
              >
                sohspl@gmail.com
              </Link>
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
                <Link href="/contact" className="text-white text-xs">
                  Need help
                </Link>
              </div>
              <div className="flex h-full items-center gap-1">
                <CiUser color="#fff" />
                <p className="text-white text-xs">
                  {session ? (
                    <>
                      {session?.user?.name} /{" "}
                      <button onClick={handleSignOut}>Logout</button>
                    </>
                  ) : (
                    <>
                      <Link href={"/login?redirect=" + router.pathname}>
                        Sign In
                      </Link>{" "}
                      / <Link href="/register">Register</Link>
                    </>
                  )}
                </p>
              </div>
            </div>
            <div className="flex gap-4 h-full items-center">
              <Link href="" className="text-white">
                <FaFacebookF color="#fff" />
              </Link>
              <Link href="" className="text-white">
                <RiTwitterXLine color="#fff" />
              </Link>
              <Link href="" className="text-white">
                <FaLinkedinIn color="#fff" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[60px] flex items-center justify-center px-4">
        <div className="flex w-full max-w-[1280px] h-[60px] justify-between items-center">
          <div className="h-full flex gap-6 items-center">
            <img src="/logo.png" alt="logo" className="h-[50px]" />
            <div className=" md:flex sm:hidden h-full items-center gap-6">
              <Link href="/">Home</Link>
              <Link href="/about">About Us</Link>
              <Link href="/services">Services</Link>
              <Link href="/workers">Workers</Link>
              <Link href="/test">Test</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>
          <div className="h-full flex gap-7 py-2">
            <div className="h-full flex gap-3 items-center">
              <FiPhoneCall size={"25"} />
              <div className="h-full flex flex-col justify-center">
                <p className="text-[10px] text-gray">Call in</p>
                <h4 className="sm:text-xs">
                  <Link href="tel:65 68725020">+65 68725020</Link>/
                  <Link href="tel:65 67772829">67772829</Link>
                </h4>
              </div>
            </div>
            <div className="h-full flex items-center">
              <Link
                href="/contact"
                className="flex items-center text-white bg-[#0094f1] px-5 sm:px-3 sm:text-xs h-full"
              >
                CONTACT US
              </Link>
              <button className="sm:p-3 sm:text-xs md:hidden">
                <IoMdMenu />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
