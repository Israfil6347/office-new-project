import React from 'react'
import MyCard from '../../globalComponents/MyCard'
import Image from '../../assets/projects/1.jpg'
import Image2 from '../../assets/projects/2.jpg'
import Image3 from '../../assets/projects/3.jpg'
import Image4 from '../../assets/projects/4.jpg'


function Project() {
  return (
    <div className="grid md:grid-cols-3  grid-cols-1 md:p-12 gap-4 p-4">
      <div className='w-full'>
        <MyCard rounded="md" shadow="md"  >
          <div className='grid grid-cols-1 md:grid-cols-2 '>
            <div className='p-2'>
              <img src={Image} alt=""  className='rounded h-40 w-full'/>
            </div>
            <div className='p-4 flex flex-col items-center justify-center'>
              <h2 className='text-xl font-semibold lg:text-lg flex justify-center py-4'>Deposit Product</h2>
          
              <p className='text-justify'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum               
              </p>
              <div className=''>
                <button className='block hover:cursor-pointer group-hover:underline p-2'>Read more</button>
              </div>
              
            </div>
          </div>
        </MyCard>
      </div>
      <div className='w-full'>
        <MyCard rounded="md" shadow="md"  >
          <div className='grid grid-cols-1 md:grid-cols-2 '>
            <div className='p-2'>
              <img src={Image2} alt=""  className='rounded h-40 w-full'/>
            </div>
            <div className='p-4 flex flex-col items-center justify-center'>
              <h2 className='text-xl font-semibold lg:text-lg flex justify-center py-4'>Security Service</h2>
          
              <p className='text-justify'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum               
              </p>
              <div className=''>
                <button className='block hover:cursor-pointer group-hover:underline p-2'>Read more</button>
              </div>
              
            </div>
          </div>
        </MyCard>
      </div>
      <div className='w-full'>
        <MyCard rounded="md" shadow="md"  >
          <div className='grid grid-cols-1 md:grid-cols-2 '>
            <div className='p-2'>
              <img src={Image3} alt=""  className='rounded h-40 w-full'/>
            </div>
            <div className='p-4 flex flex-col items-center justify-center'>
              <h2 className='text-xl font-semibold lg:text-lg flex justify-center py-4'>Ambulance Service</h2>
          
              <p className='text-justify'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum               
              </p>
              <div className=''>
                <button className='block hover:cursor-pointer group-hover:underline p-2'>Read more</button>
              </div>
              
            </div>
          </div>
        </MyCard>
      </div>
      <div className='w-full'>
        <MyCard rounded="md" shadow="md"  >
          <div className='grid grid-cols-1 md:grid-cols-2 '>
            <div className='p-2'>
              <img src={Image4} alt=""  className='rounded h-40 w-full'/>
            </div>
            <div className='p-4 flex flex-col items-center justify-center'>
              <h2 className='text-xl font-semibold lg:text-lg flex justify-center py-4'>Other Service</h2>
          
              <p className='text-justify'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum               
              </p>
              <div className=''>
                <button className='block hover:cursor-pointer group-hover:underline p-2'>Read more</button>
              </div>
              
            </div>
          </div>
        </MyCard>
      </div>
      <div className='w-full'>
        <MyCard rounded="md" shadow="md"  >
          <div className='grid grid-cols-1 md:grid-cols-2 '>
            <div className='p-2'>
              <img src={Image4} alt=""  className='rounded h-full w-full'/>
            </div>
            <div className='p-4 flex flex-col items-center justify-center'>
              <h2 className='text-xl font-semibold lg:text-lg flex justify-center py-4'>Other Service</h2>
          
              <p className='text-justify'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum               
              </p>
              <div className=''>
                <button className='block hover:cursor-pointer group-hover:underline p-2'>Read more</button>
              </div>
              
            </div>
          </div>
        </MyCard>
      </div>     
    </div>
  )
}

export default Project
