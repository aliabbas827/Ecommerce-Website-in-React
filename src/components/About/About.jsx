import React from 'react'
import { Link } from 'react-router-dom'
import Brand from '../Brand-different/Brand'

function About() {
  return (
    <>
      <main>
        <section>
          <div className='px-4 py-14 md:py-28 flex justify-center'>
            <h1 className='text-3xl md:text-2xl lg:text-4xl md:w-11/12 xl:w-1/2 md:text-center'>A brand built on the love of craftmanship,
              quality and outstanding customer service</h1>
          </div>
        </section>
        <section>
          <div className=' flex justify-center flex-col md:mt-0 md:flex-row'>

            <div className=' flex flex-col justify-around md:w-11/12 md:py-5'>
              <div className='flex flex-col xl:w-11/12 px-4 lg:px-14 gap-8'>
                <div >
                  <h1 className='text-2xl md:text-3xl lg:text-4xl  '>From a studio in London to a global brand with
                    over 400 outlets</h1>
                </div>
                <div className='flex flex-col gap-8 '>
                  <p className='text-base lg:text-lg'>When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market. </p>
                  <p className='text-base lg:text-lg xl:w-11/12 lg:text-justify'>Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</p>
                  <Link className="text-center  bg-lightgray text-lg  py-3 mb-5 md:hidden">Get in touch</Link>
                </div>
              </div>
              <div className='lg:px-14 hidden md:flex md:mt-4'>
                <Link className=" bg-lightgray  px-7 py-4 text-sm lg:text-lg">Get in touch</Link>
              </div>
            </div>
            <div className=' md:w-screen'>
              <img src="./Images/banner1.png" alt="" className='h-full w-full' />
            </div>
          </div>
        </section>
        <section>
          <div className=' flex justify-center flex-col  md:mt-0 md:flex-row'>
            <div className=' md:w-11/12'>
              <img src="./Images/banner2.png" alt="" className='h-full w-full' />
            </div>

            <div className=' flex flex-col justify-around py-5 md:w-screen md:py-5'>
              <div className='flex flex-col xl:w-11/12 px-4 lg:px-14 gap-8'>
                <div >
                  <h1 className='text-2xl md:text-3xl lg:text-4xl  '>Our service isn’t just personal, it’s actually
                    hyper personally exquisite</h1>
                </div>
                <div className='flex flex-col gap-8 '>
                  <p className='text-base lg:text-lg'>When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.</p>
                  <p className='text-base lg:text-lg xl:w-11/12 lg:text-justify'>Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</p>
                  <Link className="text-center  bg-lightgray text-lg  py-3 mb-5 md:hidden">Get in touch</Link>
                </div>
              </div>
              <div className='lg:px-14 hidden md:flex md:mt-4'>
                <Link className=" bg-lightgray  px-7 py-4 text-sm lg:text-lg">Get in touch</Link>
              </div>
            </div>

          </div>
        </section>
        <section>
        <Brand />
        </section>
        <section>
          <div className='bg-lightgray py-10 mt-10 md:mt-20 md:py-16'>
            <div className='md:container bg-white flex flex-col items-center px-3 md:px-0 py-14 gap-6'>
              <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>Join the club and get the benefits</h1>
              <p className='md:w-1/2 xl:w-1/3 md:text-center'>Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more</p>
              <form>
                <div className="flex ">
                  <input
                    className=" bg-lightgray p-3 text-sm  focus:outline-none"
                    type="email"
                    placeholder="your@email.com"
                  ></input>
                  <button
                    type="button"
                    className=" bg-darkprimary p-3  text-white text-nowrap"
                  >
                    Sign up
                  </button>
                </div>
              </form>

            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default About