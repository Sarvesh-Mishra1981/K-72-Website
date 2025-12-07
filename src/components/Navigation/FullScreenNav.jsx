import React, { useRef } from 'react'
import image1 from "/Users/sarvesh/Documents/K-72 Website/src/assets/image.png"
import image2 from "/Users/sarvesh/Documents/K-72 Website/src/assets/image copy.png"
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const FullScreenNav = () => {
    const divRef = useRef(null)
    const fullLinkRef = useRef(null)

    useGSAP(() => {
        const tl = gsap.timeline()
        tl.from('.stair', {
            height: 0,
            duration: 2,
            stagger: {
                amount: -0.15
            }
        })
        tl.from(fullLinkRef.current, {
            opacity: 0
        })
        tl.from(".group",{
            rotateX:-90,
            stagger:{
                amount:-0.2
            }
        })
    })

    return (
        <div id='fullNavdiv' className='h-screen w-full absolute bg-black hidden'>
            <div className='h-screen w-full fixed top-0 left-0 z-0'>
                <div ref={divRef} className='h-screen w-full flex'>
                    <div className='stair h-full w-1/5 bg-black'></div>
                    <div className='stair h-full w-1/5 bg-black'></div>
                    <div className='stair h-full w-1/5 bg-black'></div>
                    <div className='stair h-full w-1/5 bg-black'></div>
                    <div className='stair h-full w-1/5 bg-black'></div>
                </div>
            </div>
            <div ref={fullLinkRef} className='relative z-10'>
                <div className='flex justify-between p-5'>
                    <div>
                        <svg className="mt-2" xmlns="http://www.w3.org/2000/svg" width="103" height="44" viewBox="0 0 103 44">
                            <path fill="white" fillRule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
                        </svg>
                    </div>
                    <div className='relative h-22 w-22 cursor-pointer'>
                        <div className='h-30 w-0.5 -rotate-45 origin-top absolute bg-[#D3FB50]'></div>
                        <div className='h-30 w-0.5 right-0 rotate-45 origin-top absolute bg-[#D3FB50]'></div>
                    </div>
                </div>
                <div className='mt-40'>
                    <div className='border-y origin-top group border-white relative overflow-hidden'>
                        <h1 className='text-[8vw] text-center leading-30 uppercase text-white'>Projects</h1>
                        <div className='absolute opacity-0 group-hover:opacity-100 flex w-full left-0 top-0 h-full items-center'>
                            <div className='flex movex min-w-full items-center bg-[#D3FB50]'>
                                <h2 className='whitespace-nowrap text-black text-[8vw] text-center leading-30 uppercase '>See Everything</h2>
                                <img className='h-[6vw] mt-6 object-cover shrink-0 w-[17vw] rounded-full' src={image1} alt="img1"></img>
                                <h2 className='whitespace-nowrap text-black text-[8vw] text-center leading-30 uppercase '>See Everything</h2>
                                <img className='h-[6vw] mt-6 object-cover shrink-0 w-[17vw] rounded-full' src={image2} alt="img2"></img>
                            </div>
                            <div className='flex movex min-w-full items-center bg-[#D3FB50]'>
                                <h2 className='whitespace-nowrap text-black text-[8vw] text-center leading-30 uppercase '>See Everything</h2>
                                <img className='h-[6vw] mt-6 object-cover shrink-0 w-[17vw] rounded-full' src={image1} alt="img1"></img>
                                <h2 className='whitespace-nowrap text-black text-[8vw] text-center leading-30 uppercase '>See Everything</h2>
                                <img className='h-[6vw] mt-6 object-cover shrink-0 w-[17vw] rounded-full' src={image2} alt="img2"></img>
                            </div>
                        </div>
                    </div>

                    <div className='border-y origin-top group border-white relative overflow-hidden'>
                        <h1 className='text-[8vw] text-center leading-30 uppercase text-white'>Agency</h1>
                        <div className='absolute opacity-0 group-hover:opacity-100 flex w-full left-0 top-0 h-full items-center'>
                             <div className='flex movex min-w-full items-center bg-[#D3FB50]'>
                                <h2 className='whitespace-nowrap text-black text-[8vw] text-center leading-30 uppercase '>See Everything</h2>
                                <img className='h-[6vw] mt-6 object-cover shrink-0 w-[17vw] rounded-full' src={image1} alt="img1"></img>
                                <h2 className='whitespace-nowrap text-black text-[8vw] text-center leading-30 uppercase '>See Everything</h2>
                                <img className='h-[6vw] mt-6 object-cover shrink-0 w-[17vw] rounded-full' src={image2} alt="img2"></img>
                            </div>
                             <div className='flex movex min-w-full items-center bg-[#D3FB50]'>
                                <h2 className='whitespace-nowrap text-black text-[8vw] text-center leading-30 uppercase '>See Everything</h2>
                                <img className='h-[6vw] mt-6 object-cover shrink-0 w-[17vw] rounded-full' src={image1} alt="img1"></img>
                                <h2 className='whitespace-nowrap text-black text-[8vw] text-center leading-30 uppercase '>See Everything</h2>
                                <img className='h-[6vw] mt-6 object-cover shrink-0 w-[17vw] rounded-full' src={image2} alt="img2"></img>
                            </div>
                        </div>
                    </div>

                    <div className='border-y group origin-top border-white relative overflow-hidden'>
                        <h1 className='text-[8vw] text-center leading-30 uppercase text-white'>Contact</h1>
                        <div className='absolute opacity-0 group-hover:opacity-100 flex w-full left-0 top-0 h-full items-center'>
                             <div className='flex movex min-w-full items-center bg-[#D3FB50]'>
                                <h2 className='whitespace-nowrap text-black text-[8vw] text-center leading-30 uppercase '>See Everything</h2>
                                <img className='h-[6vw] mt-6 object-cover shrink-0 w-[17vw] rounded-full' src={image1} alt="img1"></img>
                                <h2 className='whitespace-nowrap text-black text-[8vw] text-center leading-30 uppercase '>See Everything</h2>
                                <img className='h-[6vw] mt-6 object-cover shrink-0 w-[17vw] rounded-full' src={image2} alt="img2"></img>
                            </div>
                             <div className='flex movex min-w-full items-center bg-[#D3FB50]'>
                                <h2 className='whitespace-nowrap text-black text-[8vw] text-center leading-30 uppercase '>See Everything</h2>
                                <img className='h-[6vw] mt-6 object-cover shrink-0 w-[17vw] rounded-full' src={image1} alt="img1"></img>
                                <h2 className='whitespace-nowrap text-black text-[8vw] text-center leading-30 uppercase '>See Everything</h2>
                                <img className='h-[6vw] mt-6 object-cover shrink-0 w-[17vw] rounded-full' src={image2} alt="img2"></img>
                            </div>
                        </div>
                    </div>

                    <div className='border-y group origin-top border-white relative overflow-hidden'>
                        <h1 className='text-[8vw] text-center leading-30 uppercase text-white'>Blog</h1>
                        <div className='absolute opacity-0 group-hover:opacity-100 flex w-full left-0 top-0 h-full items-center'>
                             <div className='flex movex min-w-full items-center bg-[#D3FB50]'>
                                <h2 className='whitespace-nowrap text-black text-[8vw] text-center leading-30 uppercase '>See Everything</h2>
                                <img className='h-[6vw] mt-6 object-cover shrink-0 w-[17vw] rounded-full' src={image1} alt="img1"></img>
                                <h2 className='whitespace-nowrap text-black text-[8vw] text-center leading-30 uppercase '>See Everything</h2>
                                <img className='h-[6vw] mt-6 object-cover shrink-0 w-[17vw] rounded-full' src={image2} alt="img2"></img>
                            </div>
                             <div className='flex movex min-w-full items-center bg-[#D3FB50]'>
                                <h2 className='whitespace-nowrap text-black text-[8vw] text-center leading-30 uppercase '>See Everything</h2>
                                <img className='h-[6vw] mt-6 object-cover shrink-0 w-[17vw] rounded-full' src={image1} alt="img1"></img>
                                <h2 className='whitespace-nowrap text-black text-[8vw] text-center leading-30 uppercase '>See Everything</h2>
                                <img className='h-[6vw] mt-6 object-cover shrink-0 w-[17vw] rounded-full' src={image2} alt="img2"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FullScreenNav