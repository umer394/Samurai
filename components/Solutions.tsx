import React from 'react'
import Image from 'next/image'

function Solutions() {
  return (
    <main className='py-20 text-black bg-white'>
        <div className='mx-2 md:mx-10'>
            <section className='lg:flex lg:justify-between'>
                <div>
                    <div className='max-w-lg'>
                        <div className='flex items-center gap-3'>
                            <hr className='border-[1px] w-[40px]  border-[#C92127]'/>
                            <h1 className='text-[#0B0A0A] text-md font-extralight'>Cybersecurity</h1>
                        </div>
                       
                        <h2 className='text-[#0B0A0A] font-bold text-xl'>GRC Consultation & Implementation</h2>
                        <p className='my-4 text-[#666666] text-lg font-extralight'>Investing in Governance, Risk, and Compliance (GRC) is critical to long-term growth, value, and sustainability. However, right-sizing your effort to meet regulations...</p>
                        <h3 className='text-sm text-[#C92127] font-bold'>Explore More</h3>
                    </div>
                    
                    <hr className='mt-6 mb-20 border-[1px] border-[#939393]'/>
                    <div className='max-w-lg'>
                        <div className='flex items-center gap-3'>
                            <hr className='border-[1px] w-[40px]  border-[#C92127]'/>
                            <h1 className='text-[#0B0A0A] text-md font-extralight'>Digital Transformation</h1>
                        </div>
                        <h2 className='text-[#0B0A0A] font-bold text-xl'>Digital Led Strategic Transformation</h2>
                        <p className='my-4 text-[#666666] text-lg font-extralight'>Investing in Governance, Risk, and Compliance (GRC) is critical to long-term growth, value, and sustainability. However, right-sizing your effort to meet regulations...</p>
                    </div>
                </div>
                <div className='max-w-lg md:mt-10 lg:mt-0'>
                    <div className='flex items-center gap-3'>
                        <hr className='border-[1px] w-[120px]  border-black'/>
                        <h1 className='text-[#0B0A0A] text-md font-extralight'>EXCELLENCE ACROSS MULTIPLE DISCIPLINES</h1>
                    </div>
                    <h2 className='text-4xl font-bold'><span className='text-[#C92127]'>Solutions TO </span>Your Needs</h2>
                    <h3 className='text-3xl font-bold'>to grow your Business.</h3>
                    <p className='text-sm my-10'>From small businesses to industry giants, we provide tailored solutions that fit your unique needs. Our expertise spans diverse sectors, ensuring personalized service and robust support. Trust us to help you grow and thrive in an ever-evolving market.</p>
                    <button className='text-white bg-black rounded-md py-2 px-12 font-bold'>Start Project</button>
                </div>
            </section>
            <section className='border-[1px] rounded-lg shadow-lg md:px-10 bg-isolate bg-no-repeat'>
                <div className='mt-10 flex flex-col justify-center items-center'>
                    <div className='flex items-center gap-3'>
                        <hr className='border-[1px] w-[120px]  border-black'/>
                        <h1 className='text-[#0B0A0A] text-sm md:text-md font-extralight'>EXCELLENCE ACROSS MULTIPLE DISCIPLINES</h1>
                    </div>
                    <h2 className='text-md md:text-4xl lg:text-5xl font-bold mt-1'><span className='text-[#C92127]'>Secured Your </span>Business With us</h2>
                    <h3 className='text-sm md:text-3xl font-bold'>Your preferred IT solution</h3>
                    <div className='flex bg-[#FAFAFA] mt-16 space-x-2 md:space-x-6 md:pr-6 rounded-md items-center'>
                        <button className='bg-[#C92127] text-white py-[6px] md:py-[8px] text-sm font-bold px-[4px] md:px-6 rounded-md'>IT Infrastucture</button>
                        <h1 className='text-black text-sm font-semibold'>Cybersecurity</h1>
                        <h1 className='text-black text-sm font-semibold'>Digital Transformation</h1>
                    </div>
                </div>
                <div className='lg:flex lg:justify-between my-20 '>
                    <div className='max-w-xl '>
                        <div className='flex items-center gap-3'>
                            <hr className='border-[1px] w-[120px]  border-black'/>
                            <h1 className='text-[#0B0A0A] text-lg font-extralight'>IT Infrastructure</h1>
                           
                        </div>
                        <h2 className='text-4xl font-bold mt-1'><span className='text-[#C92127]'>Major Expense </span>for Companies</h2>
                        <h3 className='text-2xl font-bold'>IT Solutions for Every Business Size</h3>
                        <p className='my-10 '>One of the biggest expenses for companies and enterprises is investing in the right IT equipment. We can help you if you're a start-up, a large company, or an organization moving to the cloud. Our services inculde.</p>
                        <div className='md:flex justify-between mb-20'>
                            <div className='space-y-1'>
                                <h1 className='flex gap-2 font-semibold text-sm'><Image src={'/list.png'} alt={'list'} height={20} width={20}/>Technical IT infrastructure </h1>
                                <h1 className='flex gap-2 font-semibold text-sm'><Image src={'/list.png'} alt={'list'} height={20} width={20}/>IT Infrastructure Architecture </h1>
                                <h1 className='flex gap-2 font-semibold text-sm'><Image src={'/list.png'} alt={'list'} height={20} width={20}/>Legacy Platform Migration</h1>
                            </div>
                            <div className='space-y-1'>
                                <h1 className='flex gap-2 font-semibold text-sm'><Image src={'/list.png'} alt={'list'} height={20} width={20}/>IT Infrastructure Management Auditing</h1>
                            <h1 className='flex gap-2 font-semibold text-sm'><Image src={'/list.png'} alt={'list'} height={20} width={20}/>IT System Optimization Solutions</h1>
                            <h1 className='flex gap-2 font-semibold text-sm'><Image src={'/list.png'} alt={'list'} height={20} width={20}/>Data Center Security Services</h1>
                            <h1 className='flex gap-2 font-semibold text-sm'><Image src={'/list.png'} alt={'list'} height={20} width={20}/>Cloud Migration and Integration</h1>
                            </div>
                            
                        </div>
                        <button className='text-white bg-black rounded-md py-2 px-12 font-bold'>Start Project</button>
                
                    </div>
                    <Image src={'/soltutions.png'} alt={'solutions'} width={400} height={400} className=' md:mx-auto items-center lg:mx-0 mt-4'/>
                </div>
            </section>
        </div>
    </main>
  )
}

export default Solutions