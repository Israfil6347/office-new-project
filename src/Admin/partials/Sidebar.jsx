import React from 'react'
import Logo from "../../assets/Logo/white_logo.png"
import { NavLink } from 'react-router-dom'

function Sidebar() {
  return (
    <div>

        <div className="w-72 bg-onBackground h-screen">
                <div className='flex gap-2 p-5 border-b-[1px] '>
                    <div className=''>
                       <img
                          className="h-8"
                          src={Logo}
                          alt="header logo"
                        />
                    </div>
                    <div>
                     <h2
                        className="self-center  text-xl font-semibold text-secondary items-center"
                      >
                        Dhaka Credit
                      </h2>
                    </div>
                    
                </div>


                <div className='text-secondary p-4'>
                  <ul className=''>
                    <li className='py-2'><i class="fa-regular fa-house px-3"></i><NavLink className="" to="">Home</NavLink></li>
                    <li className='py-2'><i class="fa-solid fa-briefcase px-3"></i><NavLink to="">Service</NavLink></li>
                    <li className='py-2'><i class="fa-solid fa-hand-holding-hand px-3"></i><NavLink to="">Project</NavLink></li>
                    <li className='py-2'><i class="fa-solid fa-sack-dollar px-3"></i><NavLink to="">Loan</NavLink></li>
                    <li className='py-2'><i class="fa-solid fa-piggy-bank px-3"></i><NavLink to="">Deposit</NavLink></li>
                    <li className='py-2'><i class="fa-regular fa-address-card px-3"></i><NavLink to="">About</NavLink></li>
                    <li className='py-2'><i class="fa-solid fa-person-circle-question px-3"></i><NavLink to="">Faqs</NavLink></li>
                    <li className='py-2'><i class="fa-solid fa-address-book px-3"></i><NavLink to="">Contacts</NavLink></li>
                  </ul>
                </div>
              </div>
      
    </div>
  )
}

export default Sidebar
