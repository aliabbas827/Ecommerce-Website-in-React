import React from 'react'

function Card({img,prod_name, prod_price}) {
  return (
    <>
    <div className='flex flex-col gap-3'>
        <div className='w-11/12'>
            <img src={img} alt="" className='w-full h-auto'/>
        </div>
        <div className='flex flex-col gap-1'>
            <h1 className='text-lg font-medium'>{prod_name}</h1>
            <h1 className='text-lg'>{prod_price}</h1>
        </div>
    </div>
    </>
  )
}

export default Card