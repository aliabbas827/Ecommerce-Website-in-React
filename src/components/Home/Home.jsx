import { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import Card from '../Product-card/Card'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Brand from '../Brand-different/Brand';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/firebase";
function Home() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);
  return (
    <>
      <main>
      <Toaster position="top-center" reverseOrder={false} />

       {user ? 
       <>
          <section>
          <div className='md:container flex justify-center  md:my-16'>
            <div className='bg-darkprimary  flex flex-col justify-around  xl:w-2/3'>
              <div className='flex flex-col w-5/6 px-3 py-10  xl:w-4/5 md:py-10 md:px-14 md:gap-8'>
                <div >
                  <h1 className='text-2xl md:text-3xl xl:text-5xl  text-white '>The furniture brand for the future, with timeless designs</h1>
                </div>
                <div className='md:w-36'>
                  <Link className="items-center hidden md:flex   bg-button1 px-5 py-3 text-white">
                    View collection
                  </Link>
                </div>
              </div>
              <div className='px-3 pt-3 pb-5 md:px-14 md:pt-0 '>
                <p className='text-white text-base lg:w-11/12 lg:text-justify md:text-base xl:text-xl'>A new era in eco friendly furniture with Avelon, the French luxury retail brand
                  with nice fonts, tasteful colors and a beautiful way to display things digitally
                  using modern web technologies.</p>
                <Link className="items-center  block md:hidden  bg-button1 px-5 py-2 mt-5 text-white text-center">
                  View collection
                </Link>
              </div>
            </div>
            <div className=' hidden md:flex  md:w-screen xl:w-1/3'>
              <img src="./Images/home1.png" alt="" className='h-full ' />
            </div>
          </div>
        </section>


        <section>
          <Brand />
        </section>
        <section>
          <div className='container my-20'>
            <h1 className='text-2xl md:text-3xl font-medium'>New ceramics</h1>
            <div className='mt-10 flex gap-14 flex-col md:flex-row'>
              <Link><Card img="/Images/home1.png" prod_name="The Dandy chair" prod_price="£250" /></Link>
              <Link><Card img="/Images/rvase.png" prod_name="Rustic Vase Set" prod_price="£155" /></Link>
              <Link><Card img="/Images/svase.png" prod_name="The Silky Vase" prod_price="£125" /></Link>
              <Link><Card img="/Images/lamp.png" prod_name="The Lucy Lamp" prod_price="£399" /></Link>
            </div>
            <div className='mt-8 flex justify-center'>
              <Link className="items-center  bg-lightgray text-lg px-7 py-4">View collection</Link>
            </div>
          </div>

        </section>
        <section>
          <div className='container my-20 hidden md:block'>
            <h1 className='text-2xl md:text-3xl font-medium'>Our popular products</h1>
            <div className='mt-10 flex flex-col md:flex-row'>
              <Link><Card img="/Images/sofa.png" prod_name="The Poplar suede sofa" prod_price="£980" /></Link>
              <Link><Card img="/Images/home1.png" prod_name="The Dandy chair" prod_price="£250" /></Link>
              <Link><Card img="/Images/chair.png" prod_name="The Dandy chair" prod_price="£250" /></Link>
            </div>
            <div className='mt-8  flex justify-center'>
              <Link className="items-center  bg-lightgray text-lg px-7 py-4">View collection</Link>
            </div>
          </div>
        </section>
        <section>
          <div className='container md:my-20 block md:hidden'>
            <h1 className='text-2xl md:text-3xl font-medium'>Our popular products</h1>
            <div className='mt-5'>
              <Swiper
                slidesPerView={1}
              >
                <SwiperSlide className='w-full h-auto'><Link><Card img="/Images/rvase.png" prod_name="Rustic Vase Set" prod_price="£250" /></Link></SwiperSlide>
                <SwiperSlide className='w-full h-auto'> <Link><Card img="/Images/home1.png" prod_name="The Dandy chair" prod_price="£250" /></Link></SwiperSlide>
                <SwiperSlide className='w-full h-auto'><Link><Card img="/Images/chair.png" prod_name="The Dandy chair" prod_price="£250" /></Link></SwiperSlide>
              </Swiper>
            </div>
            <div className='mt-8 flex justify-center'>
              <Link className="items-center  bg-lightgray text-lg px-7 py-4">View collection</Link>
            </div>
          </div>

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
        <section>
          <div className=' flex justify-center flex-col mt-6 md:mt-0 md:flex-row'>

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
       </> : null}
      
      </main>

    </>
  )
}

export default Home