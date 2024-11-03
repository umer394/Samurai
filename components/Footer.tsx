import Image from "next/image";
import { FaInstagram,FaLinkedinIn,FaFacebookF,FaTwitter } from "react-icons/fa6"
export default function Footer(){
    return(
        <footer className="text-black bg-white pt-10">
            <section className="">
                <div className="flex flex-col justify-center items-center shadow-lg mx-10 md:mx-24 mt-24 rounded-lg p-10">
                    <div className="flex gap-2 items-center">
                    <hr className="border-black h-[4px]  bg-black w-[100px] md:w-[150px]"/>
                    <p className="text-[#0B0A0A] text-sm md:text-md">Elevate you Presents</p>
                    </div>
                    <h1 className="text-[20px] md:text-[40px] lg:text-[50px] font-semibold"><span className="text-[#C92127] ">Ready To</span> Elevate Your</h1>
                    <h2 className="text-[20px] md:text-[40px] lg:text-[50px]">Digital Strategy?</h2>
                    <div className="max-w-[800px] my-10 flex flex-col items-center">
                        <p>We want your campaigns to thrive. Digital Remedy connects the right data to the highest performing channels to</p>
                        <p>nail your dream KPIs—so you can feel confident your media spend is worth every penny.</p>
                    </div>
                    <button className="bg-black text-white font-bold w-[220px] h-[35px] rounded-sm">Book Consultation</button>
                </div>
                <div className="lg:flex mt-20 mx-10 md:mx-20 justify-between pb-20">
                    <div className=" max-w-[540px] space-y-10">
                        <Image src={"/logo-black.png"} alt={"logo"} width={200} height={100}/>
                        <p className="text-sm">Samurai-Team of solution architects, developers and consultants having only one aim in mind <b> “deliver the best, nothing else”</b></p>
                    </div>
                    <div className="max-w-[540px] mt-4">
                        <div className="flex space-x-6 font-bold  text-[9px] md:text-[14px] mb-8 md:mb-24">
                            <h2>Terms and Conditions</h2>
                            <h3>Publisher Terms</h3>
                            <h4>Privacy Policy</h4>
                            <h5>Our Partners</h5>
                        </div>
                        <div className="md:flex md:items-center md:space-x-6">
                            <hr className="border-black h-[4px]  bg-black  w-[210px] "/>
                            <div className="flex mt-4 md:mt-0 space-x-10 md:space-x-16">
                            <FaInstagram size={20}/>
                            <FaLinkedinIn size={18}/>
                            <FaFacebookF size={20}/>
                            <FaTwitter size={18}/>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center bg-black text-white p-4">
                    <h6 className="text-sm">All Rights Reserved | Copyrights ©2024</h6>
                </div>
            </section>
        </footer>
    )
}