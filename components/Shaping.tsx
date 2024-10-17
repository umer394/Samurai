import Image from "next/image";

export default function Shaping(){
    return (
        <section className="bg-black">
            <div className="mx-8 md:mx-20 my-10  justify-center">
                <header className="flex flex-col justify-end gap-0 items-end w-full">
                    <h1 className="text-md md:text-xl lg:text-2xl text-gray-400 font-extralight">Excellennce</h1>
                    <h2 className="text-lg md:text-4xl lg:text-5xl ">and Innovations</h2>
                    <h3 className="text-[19px] md:text-5xl lg:text-7xl  text-[#CB2127]">Shaping Tomorrow</h3>
                </header>
                 <div className="md:flex space-y-4 justify-between mt-20 mb-10">
                    <div>
                        <div className="flex items-center gap-1">
                        <div className="border-white border-2 w-[80px] h-[2px]"/>
                        <h4 className="text-sm text-gray-400">Our Partners</h4>
                        </div>
                        <p className="text-4xl"><span className="text-[#CB2127] ">Our</span> Stack Partners</p>
                        <p className="text-2xl">to grow your Business.</p>
                        
                    </div>
                    <div className="max-w-[600px] md:max-w-[250px] lg:max-w-[600px] text-sm">
                        <p>From small businesses to industry giants, we provide tailored solutions that fit your unique needs. Our expertise spans diverse sectors, ensuring personalized service and robust support. Trust us to help you grow and thrive in an ever-evolving market.</p>
                    </div>
                 </div>
                <footer className="my-10 space-y-2">
                    <div className="md:flex md:justify-between space-y-2 md:space-y-0 ">
                        <div className="bg-[#181815] flex justify-center items-center border-[#3A3A3A] border-2 rounded-lg w-[250px] h-[80px]">
                            <Image src={"/shaping-Image/p1.png"} alt={"identity"} width={200} height={70}/>
                        </div>
                        <div className="bg-[#181815] border-[#3A3A3A] flex justify-center items-center border-2 rounded-lg w-[250px] h-[80px]">
                        <Image src={"/shaping-Image/p2.png"} alt={"redhat"} width={200} height={70}/>
                        </div>
                        <div className="bg-[#181815] border-[#3A3A3A] border-2 rounded-lg justify-center flex items-center w-[250px] h-[80px]">
                        <Image src={"/shaping-Image/p3.png"} alt={"IBM"} width={110} height={30}/>
                        </div>
                        <div className="bg-[#181815] border-[#3A3A3A] border-2 rounded-lg w-[250px] flex justify-center items-center h-[80px]">
                        <Image src={"/shaping-Image/p4.png"} alt={"compellent"} width={140} height={30}/>
                        </div>
                    </div>
                    <div className="md:flex md:justify-between space-y-2 md:space-y-0">
                        <div className="bg-[#181815] border-[#3A3A3A] border-2 flex justify-center items-center rounded-lg w-[250px] h-[80px]">
                        <Image src={"/shaping-Image/p5.png"} alt={"compellent"} width={200} height={30}/>
                        </div>
                        <div className="bg-[#181815] border-[#3A3A3A] border-2 flex justify-center items-center rounded-lg w-[250px] h-[80px]">
                        <Image src={"/shaping-Image/p6.png"} alt={"compellent"} width={140} height={30}/>
                        </div>
                        <div className="bg-[#181815] border-[#3A3A3A] border-2 flex justify-center items-center rounded-lg w-[250px] h-[80px]">
                        <Image src={"/shaping-Image/p7.png"} alt={"compellent"} width={160} height={30}/>
                        </div>
                        <div className="bg-[#181815] border-[#3A3A3A] border-2 rounded-lg w-[250px] h-[80px] flex justify-center items-center">
                        <Image src={"/shaping-Image/p8.png"} alt={"compellent"} width={90} height={30}/>
                        </div>
                    </div>
                </footer> 
            </div>
        </section>
    )
}