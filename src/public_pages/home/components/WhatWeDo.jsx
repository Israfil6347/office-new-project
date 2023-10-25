import React from 'react'
import MyCard from '../../../globalComponents/components/MyCard'

import Image from "./../../../assets/carosolImage/1.jpg"

function WhatWeDo() {
  return (
    <div>
    <h2 className='pt-4 md:pt-12 text-3xl font-semibold  flex justify-center'>What we do ..</h2>
    <div className='grid grid-cols-1 md:grid-cols-2 md:p-12 gap-4 p-4' >
      <div className='w-full'>
        <MyCard rounded="md" shadow="md"  >
          <div className='grid grid-cols-1 md:grid-cols-2 '>
            <div className='p-2'>
              <img src={Image} alt=""  className='rounded  w-full'/>
            </div>
            <div className='p-4 flex flex-col items-center justify-center '>
              <h2 className='text-xl font-semibold lg:text-lg flex justify-center py-4'>Deposit Product</h2>
          
              <p className='text-justify '>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
               
              </p>
              <div className='  '>
                <button className='block hover:cursor-pointer group-hover:underline p-2'>Read more</button>
              </div>
              
            </div>
          </div>
        </MyCard>
      </div>
      <div className='w-full'>
        <MyCard rounded="md" shadow="md"  >
          <div className='grid grid-cols-1 md:grid-cols-2'>
            <div className='p-2'>
              <img src={Image} alt=""  className='rounded'/>
            </div>
            <div className='p-4 flex flex-col items-center justify-center'>
              <h2 className='text-xl font-semibold lg:text-lg flex justify-center py-4'>Deposit Product</h2>
          
              <p className='text-justify'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
              </p>
              <div className=''>
                <button className='block hover:cursor-pointer group-hover:underline p-2'>Read more</button>
              </div>
              
            </div>
          </div>
        </MyCard>
      </div>
    </div>
  </div>
  )
}

export default WhatWeDo
