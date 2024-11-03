import Image from "next/image";


export default function Hero() {
  return (
    <section id="home" className="text-white overflow-clip bg-logo bg-no-repeat  bg-right-10">
      <div className="flex flex-col mt-32 mx-10" >
        <div>
          <p className="text-gray-400 font-extralight">
            Turning Your Challenges
          </p>
          <h1 className="text-5xl">
            <span className="text-[#CB2127] font-neuropol"> Into Innovative</span> Solutions{" "}
            <br />
            Saamurai Systems{" "}
          </h1>
          <div className="flex space-x-4 mt-2">
            <div className="border-2 w-[250px] border-[#CB2127]" />
            <div className="border-2 w-[100px] border-[#CB2127]" />
          </div>
        </div>
        <div className="mt-8">
          <p className="text-gray-400">
            Samurai-Team of solution architects, developers and consultants
            having only one aim in mind <br />
            <span className="text-white">
              {" "}
              “deliver the best, nothing else”
            </span>
          </p>
        </div>
        <div className="mt-6 md:space-x-4  ">
          <button className="bg-[#CB2127] w-[170px] h-[36px] rounded-md font-semibold">
            Get A Quote
          </button>
          <button className=" w-[170px] h-[36px] border-[rgb(36,30,30)] border-[1px] rounded-md font-semibold md:mt-0 mt-2">
            Our Services
          </button>
        </div>
        <div className=" border-[1px] border-[#3A3A3A] md:mt-40 mt-20 w-full max-w-fit">
          <div className="flex mx-2 md:mx-6 px-2 space-x-2 md:space-x-12 ">
            <div className="">
              <p className=" md:text-[24px] text-[#C92127] font-bold"> 2000+</p>
              <p className="text-white text-[14px] md:text-[18px]">Projects </p>
            </div>
            <div>
              <p className="md:text-[24px] text-[#C92127] font-bold"> 100+</p>
              <p className="text-white text-[12px] md:text-[18px]">Clients </p>
            </div>
            <div>
              <p className="text-[13px] md:text-[24px] text-[#C92127] font-bold md:mt-0 mt-1"> 22+ Year</p>
              <p className="text-white text-[9px] md:text-[18px] md:mt-0 mt-1">of Experience</p>
            </div>
            <div>
              <p className="md:text-[24px] text-[#C92127] font-bold"> 24/7</p>
              <p className="text-white text-[10px] md:text-[18px] ">Support</p>
            </div>
          </div>
        </div>
        <div id="hero-last" className="my-32 border-[1px] rounded-lg  border-[#181815] bg-[#181815]">
          <div className="md:flex mx-10 my-12 justify-between items-center">
            <div>
            <div className="flex space-x-1 items-center">
                <hr className="border-gray-300 h-[2px]  w-[100px]"/>
                <p className="text-gray-300 ">WHAT SETS US APART</p>
                    
            </div>
            <div>
                <h2 className="text-[25px] text-white "><span className="text-[#C92127]">Bringing The Gap </span>Between <br />you and your audience</h2>
            </div>
            </div>
            <div className="max-w-md text-gray-300 ">
            <p className="text-sm md:text-md">We not only deliver high quality  enterprise solutions but also provide seamless integration with back office system and mobile  interface as a single stack.</p>
          </div>
          </div>
          <div className="md:flex justify-between mx-7  md:mx-32">
            <div className="max-w-[300px] mb-6 md:mb-0"> 
              <h3 className="font-bold text-xl">Cybersecurity Expertise at <br/> Your Fingertips</h3>
              <p className="text-[15px] text-gray-400 mt-4">Gain access to experts with extensive experience leading cybersecurity programs for global enterprises.</p>
            </div>
            <div className="max-w-[300px] mb-6 md:mb-0"> 
              <h3 className="font-bold text-xl">End-to-end Cyber Risk <br /> Management</h3>
              <p className="text-[15px] text-gray-400 mt-4">Count on one trusted source for a comprehensive range of cybersecurity consulting and managed services.</p>
            </div>
            <div className="max-w-[300px]"> 
              <h3 className="font-bold text-xl">Security Investment <br /> Optimization</h3>
              <p className="text-[15px] text-gray-400 mt-4">Utilize a shared model to access enterprise-level cybersecurity capabilities at a reasonable cost.</p>
            </div>
          </div>
          <div className="flex mt-20 justify-between mx-2 md:mx-10">
            <div className="bg-[#1D1D1D] w-[220px] h-[50px] md:h-[70px] rounded-md flex justify-center items-center">
              <Image src={"/Hasana.png"} alt={"hasana"} width={200} height={40} />
            </div>
            <div className="bg-[#1D1D1D] w-[220px] h-[50px] md:h-[70px] rounded-md flex justify-center items-center">
              <Image src={"/Stc.png"} alt={"hasana"} width={90} height={50} />
            </div>
            <div className="bg-[#1D1D1D] w-[220px] h-[50px] md:h-[70px] rounded-md flex justify-center items-center">
              <Image src={"/saudi.png"} alt={"hasana"} width={130} height={50} />
            </div>
            <div className="bg-[#1D1D1D] w-[220px] h-[50px] md:h-[70px] rounded-md flex justify-center items-center">
              <Image src={"/edarat.png"} alt={"hasana"} width={200} height={50} />
            </div>
            <div className="bg-[#1D1D1D] w-[220px] h-[50px] md:h-[70px] rounded-md flex justify-center items-center">
              <Image src={"/bussma.png"} alt={"hasana"} width={130} height={50} />
            </div>
          </div>
          <div className="w-full mx-auto  mt-4 mb-16 flex justify-center">
          <h4 className="mx-100 text-[10px] md:text-[16px]">2.6k Companies & Individuals <b>Trusted Us</b></h4>
          </div>
        </div>
      </div>
    </section>
  );
}
