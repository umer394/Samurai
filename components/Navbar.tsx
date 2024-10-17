"use client"
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import { BiLogoTwitter } from "react-icons/bi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useState } from "react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    
    return (
        <header className="text-white mx-5 md:mx-10  pt-6 cursor-pointer">
            <div className="flex justify-between xl:justify-evenly items-center">
                <div className="block md:hidden lg:block">
                    <Image src="/logo.png" alt="logo" width={150} height={30} />
                </div>
                <div className="hidden md:block lg:hidden">
                    <Image src="/logo.png" alt="logo" width={80} height={20} />
                </div>

                <nav className={`md:flex ${menuOpen ? "block" : "hidden"} mt-4 md:mt-0 lg:mt-3`}>
                <div className="md:flex md:space-x-8 space-y-4 md:space-y-0 lg:space-x-1 text-center md:text-left">
                    <p className="flex justify-center md:justify-start">
                        <Link href="" className="md:text-[10px] lg:text-sm">IT Infrastructure</Link>
                        <RiArrowDropDownLine size={30} color="red" className="md:hidden lg:block"/>
                    </p>
                    <p className="flex justify-center md:justify-start">
                        <Link href="" className="md:text-[10px] lg:text-sm">Cybersecurity</Link>
                        <RiArrowDropDownLine size={30} color="red" className="md:hidden lg:block"/>
                    </p>
                    <p className="flex justify-center md:justify-start">
                        <Link href="" className="md:text-[10px] lg:text-sm">Digital Transformation</Link>
                        <RiArrowDropDownLine size={30} color="red" className="md:hidden lg:block"/>
                    </p>
                    <p className="flex justify-center md:justify-start">
                        <Link href="" className="md:text-[10px] lg:text-sm">About Us</Link>
                    </p>
                </div>
            </nav>
            
                <div className="md:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)} >
                        ☰
                    </button>
                </div>

                <div className="hidden md:flex items-center space-x-3 xl:space-x-6">
                    <div className="border-2 rounded-lg w-[90px] lg:hidden md:hidden  xl:block" />
                    <FaFacebookF />
                    <TiSocialLinkedin color="red" />
                    <BiLogoTwitter />
                    <div className="border-2 w-[90px] rounded-lg  md:hidden lg:hidden xl:block" />
                    <button className="h-[32px] w-[132px]  lg:text-sm bg-red-700 font-bold">Get A Quote</button>
                </div>
            </div>

            {/* Menu Links */}
            
        </header>
    );
}
