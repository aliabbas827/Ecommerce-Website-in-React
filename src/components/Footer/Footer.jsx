import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useUser } from "@/context/UserProvider";

function Footer() {
  const { user} = useUser();
  return (
    <>
      {user && ( <footer>
        <div className='bg-darkprimary'>
          <div className='container grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 py-20 border-b-2 gap-11 border-lightpurple'>
            <div className='flex flex-col gap-4'>
              <h4 className='text-white text-xl mb-2'>Menu</h4>
              <NavLink className='text-white text-sm'>New arrivals</NavLink>
              <NavLink className='text-white text-sm'>Best sellers</NavLink>
              <NavLink className='text-white text-sm'>Recently viewed</NavLink>
              <NavLink className='text-white text-sm'>Popular this week</NavLink>
              <NavLink className='text-white text-sm'>All products</NavLink>
            </div>
            <div className='flex flex-col gap-4'>
              <h4 className='text-white text-xl mb-2'>Categories</h4>
              <NavLink className='text-white text-sm'>Crockery</NavLink>
              <NavLink className='text-white text-sm'>Furniture</NavLink>
              <NavLink className='text-white text-sm'>Homeware</NavLink>
              <NavLink className='text-white text-sm'>Plant pots</NavLink>
              <NavLink className='text-white text-sm'>Chairs</NavLink>
              <NavLink className='text-white text-sm'>Crockery</NavLink>
            </div>
            <div className='flex flex-col gap-4'>
              <h4 className='text-white text-xl mb-2'>Our company</h4>
              <NavLink className='text-white text-sm'>About us</NavLink>
              <NavLink className='text-white text-sm'>Vacancies</NavLink>
              <NavLink className='text-white text-sm'>Contact us</NavLink>
              <NavLink className='text-white text-sm'>Privacy</NavLink>
              <NavLink className='text-white text-sm'>Returns policy</NavLink>
            </div>
            <div className='flex flex-col gap-4'>
              <h4 className='text-white text-xl mb-2'>Join our mailing list</h4>
              <form >
                <div className="flex  items-center">
                  <input
                    className="flex  w-full bg-lightpurple p-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-white"
                    type="email"
                    placeholder="your@email.com"
                  ></input>
                  <button
                    type="button"
                    className=" bg-white p-3 text-sm font-semibold text-darkprimary text-nowrap"
                  >
                    Sign up
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className='container py-4 flex flex-col-reverse  justify-between items-center gap-3 md:flex-row'>
                <div>
                  <p className='text-white text-sm'>Copyright 2022 Avion LTD</p>
                </div>
                <div className='flex gap-3'>
                  <Link ><img src="/Images/linkedin.png" alt="" width={25}/></Link>
                  <Link><img src="/Images/facebook.png" alt="" width={25}/></Link>
                  <Link><img src="/Images/instagram.png" alt="" width={25}/></Link>
                  <Link><img src="/Images/skype.png" alt="" width={25}/></Link>
                  <Link><img src="/Images/twitter.png" alt="" width={25}/></Link>
                  <Link><img src="/Images/pintrest.png" alt="" width={25}/></Link>
                </div>
          </div>
        </div>

      </footer>
      )}
    </>
  )
}

export default Footer