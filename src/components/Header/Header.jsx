import { Search, ShoppingCart, CircleUser, Menu, X } from 'lucide-react'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


function Header() {
  const Links = [
    { name: "About us", path: "about" },
    { name: "Contact", path: "contact" },
    { name: "Blog", path: "blog" }
  ]
  const products = [
    { name: 'All products' },
    { name: 'Plant pots' },
    { name: 'Ceramics' },
    { name: 'Tables' },
    { name: 'Chairs' },
    { name: 'Crockery' },
    { name: 'Tableware' },
    { name: 'Cutlery' },

  ]
  const [open, setOpen] = useState(true);


  return (
    <>
      <header>
        <div className='container py-7 md:flex justify-between items-center'>
          <div>
            <img src="/Images/Avion.png" alt="" width={80} />
          </div>
          <div
            className="absolute right-8 top-[4.6%] text-2xl lg:hidden md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? (

              <Menu name="menu" color="#2A254B"/>
            ) :
              (< X name="close" color="#2A254B"/>
              )}
          </div>
          <div className={`flex justify-between pt-10  md:flex md:py-0 md:gap-14 md:items-center   ${open ? "hidden" : "flex "}
            `}>
            <ul className='flex flex-col gap-3 md:flex-row md:items-center md:gap-8'>
              {Links.map((link) => { return <li key={link.name} className='font-medium text-lightpurple text-nowrap'><NavLink to={link.path}>{link.name}</NavLink></li> })}
            </ul>
            <div className='flex gap-6 items-center'>
              <button><Search size={20} color="#2A254B" /></button>
              <NavLink><ShoppingCart size={20} color="#2A254B" /></NavLink>
              <button><CircleUser size={20} color="#2A254B" /></button>
            </div>
          </div>
       
        </div>
        <div className='bg-lightgray py-5 hidden lg:block'>
          <ul className='flex justify-center gap-12'>
            {products.map((product) => {
              return <li key={product.name} className='text-lightpurple font-medium text-nowrap'><NavLink to="all-product">{product.name}</NavLink></li>
            })}
          </ul>
        </div>
        <div className='bg-lightgray py-5 container  lg:hidden'>
            <Swiper
              spaceBetween={30}
              slidesPerView={3}
              breakpoints={{
                768: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
              }}
              pagination={false}
            >
              {products.map((product) => { return <SwiperSlide key={product.name}  className='font-medium text-lightpurple text-nowrap text-center'><NavLink to="all-product">{product.name}</NavLink></SwiperSlide> })}
            </Swiper>
          </div>
      </header>
    </>

  )
}

export default Header