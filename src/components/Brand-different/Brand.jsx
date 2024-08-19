import React from 'react'

function Brand() {
  return (
    <>
        <div className='container my-12 md:my-16 xl:my-20'>
          <h1 className='md:text-center text-2xl font-medium'>What makes our brand different</h1>
          <div className='flex justify-center flex-col mt-12 gap-14 md:flex-row'>
            <div className='flex flex-col gap-3'>
              <div>
                <img src="Images/delivery.png" alt="" width={30} />
              </div>
              <div className='flex flex-col gap-2'>
                <h1 className='text-xl font-medium'>Next day as standard</h1>
                <p className=''>Order before 3pm and get your order
                  the next day as standard</p>
              </div>
            </div>
            <div className='flex flex-col gap-3'>
              <div>
                <img src="Images/check.png" alt="" width={30} />
              </div>
              <div className='flex flex-col gap-2'>
                <h1 className='text-xl '>Made by true artisans</h1>
                <p className=''>Handmade crafted goods made with
                  real passion and craftmanship</p>
              </div>
            </div>
            <div className='flex flex-col gap-3'>
              <div>
                <img src="Images/purchase.png" alt="" width={30} />
              </div>
              <div className='flex flex-col gap-2'>
                <h1 className='text-xl font-medium'>Unbeatable prices</h1>
                <p className=''>For our materials and quality you won’t find better prices anywhere</p>
              </div>
            </div>
            <div className='flex flex-col gap-3'>
              <div>
                <img src="Images/sprout.png" alt="" width={30} />
              </div>
              <div className='flex flex-col gap-2'>
                <h1 className='text-xl font-medium'>Recycled packaging</h1>
                <p className=' '>We use 100% recycled packaging to ensure our footprint is manageable</p>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Brand