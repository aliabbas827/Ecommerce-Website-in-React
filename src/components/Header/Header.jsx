import {
  Search, ShoppingCart, CircleUser, Menu, X, CreditCard,
  LogOut,
  Settings,
  User
} from 'lucide-react'
import React, { useState, useEffect } from 'react'
import { auth } from "../../firebase/firebase";
import { NavLink, Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { signOut, onAuthStateChanged } from "firebase/auth";
import { toast, Toaster } from "react-hot-toast";
import { useUser } from "@/context/UserProvider";


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
  const { user, profilePic, setUser } = useUser();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(currentUser);

    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        toast.success("Signed out successfully");
      })
      .catch((error) => {
        toast.error("Sign out failed" + error.message);
      });
  };

  const dropDownItems = [
    { name: "Profile", link: "/", icon: <User className="w-5" /> },
    { name: "Billing", link: "/", icon: <CreditCard className="mr-2 h-4 w-4" /> },
    { name: "Settings", link: "/", icon: <Settings className="mr-2 h-4 w-4" /> },
    {name: "Logout",link: "#",icon: <LogOut className="mr-2 h-4 w-4" />,onClick: handleSignOut,}
  ];


  if (!user) {
    Links.push({ name: "Login", path: "/login" })
    Links.push({ name: "Signup", path: "/sign-up" })
    Links.splice(0, 3)
  }


  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <header>
        <div className='container py-7 md:flex justify-between items-center'>
          <div>
            <Link to="/"><img src="/Images/Avion.png" alt="" width={80} /></Link>
          </div>
          <div
            className="absolute right-8 top-[4.6%] text-2xl lg:hidden md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? (

              <Menu name="menu" color="#2A254B" />
            ) :
              (< X name="close" color="#2A254B" />
              )}
          </div>
          <div className={`flex justify-between pt-10  md:flex md:py-0 md:gap-14 md:items-center   ${open ? "hidden" : "flex "}
            `}>
            <ul className='flex flex-col gap-3 md:flex-row md:items-center md:gap-8'>
              {Links.map((link) => { return <li key={link.name} className='font-medium text-lightpurple text-nowrap'><NavLink to={link.path}>{link.name}</NavLink></li> })}
            </ul>
            {user && (<div className='flex gap-6 items-center'>
              <button><Search size={20} color="#2A254B" /></button>
              <NavLink to="basket"><ShoppingCart size={20} color="#2A254B" /></NavLink>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  {user && profilePic ? (
                    <img src={profilePic} alt="User" className="w-10 h-10 rounded-full" />
                  ) : (
                    <CircleUser size={20} color="#2A254B" />
                  )}

                </DropdownMenuTrigger>
                <DropdownMenuContent className=" bg-darkprimary text-white rounded w-52 border-0">
                  <DropdownMenuSeparator />
                  <ul className="px-1 flex flex-col gap-2">
                    {dropDownItems.map((items) => (
                      <li key={items.name}>
                        <Link
                          to={items.link}
                          className="flex gap-1 items-center"
                          onClick={items.onClick}
                        >
                          {items.icon}
                          <DropdownMenuItem className="cursor-pointer text-xs">
                            {items.name}
                          </DropdownMenuItem>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>)} 
          </div>

        </div>

      {user && ( <>
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
            {products.map((product) => { return <SwiperSlide key={product.name} className='font-medium text-lightpurple text-nowrap text-center'><NavLink to="all-product">{product.name}</NavLink></SwiperSlide> })}
          </Swiper>
        </div>
      </>   )}
      </header>
    </>

  )
}

export default Header