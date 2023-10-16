import React from 'react'
import { NavLink } from 'react-router-dom'

function SubFooter() {
  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 md:px-12'>
          <div className=''>
            <h2 className='mt-3 text-xl font-semibold lg:text-xl'>What we do</h2>
            <p className='text-justify py-2 '>
            The pioneer of the credit union movement in Bangladesh, Fr.Charles J. Young CSC was born in May 3rd 1904, in New York, USA. His full name is Fr. Charles Joseph Young CSC. He was the founder of "The Christian Co-Operative Credit Union Ltd. Dhaka," the largest credit union in Bangladesh and south Asia. Fr. Charles joined the seminary of the holy cross on September on 1923, and joined in the first verse in 1925 & accepted his blessing in 1928.In 1929
            </p>
            < NavLink to="#" className="">Read More </NavLink>
          </div>
          <div className=''>
          <h2 className='mt-3 text-xl font-semibold lg:text-xl'>Address</h2>
          <ul className="mt-3 list-disc">
            <li className="mt-2 flex gap-2">
            <i class="fa-solid fa-location-dot"></i><span className=''>Rev. Fr. Charles J. Young Bhaban, 173/1/A, East Tejturi Bazar, Tejgaon, Dhaka-1215.</span>
            </li>
            <li className="mt-2 flex gap-2">
            <i class="fa-solid fa-phone"></i><span>+880-1716-898929</span>
            </li>
            <li className="mt-2 flex gap-2">
            <i class="fa-solid fa-envelope"></i><span>nagari_cccu@yahoo.com</span>
            </li>
            </ul>
          </div>
          <div className=''>
            <h2 className='mt-3 text-xl font-semibold lg:text-xl'>Join the conversation</h2>
              <ul className="flex items-center gap-4 py-4">
                  <li className="group flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 shadow-md transition-all duration-300 hover:scale-125 hover:text-primary">
                  <NavLink>
                        <i className="fa-brands fa-facebook-f text-xl text-primary group-hover:text-error"></i>
                  </NavLink>
                  </li>
                  <li className="group flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 shadow-md transition-all duration-300 hover:scale-125 hover:text-primary">
                  <NavLink>
                        <i className="fa-brands fa-linkedin text-xl text-primary group-hover:text-error"></i>
                  </NavLink>
                  </li>
                  <li className="group flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 shadow-md transition-all duration-300 hover:scale-125 hover:text-primary">
                  <NavLink>
                        <i className="fa-brands fa-twitter text-xl text-primary group-hover:text-error"></i>
                  </NavLink>
                  
                  </li>
              </ul>
          </div>
        </div>
    </div>
  )
}

export default SubFooter
