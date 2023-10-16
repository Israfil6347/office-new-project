import React from 'react'
import erp_logo from '../assets/Logo/erp_logo.png';

import SubFooter from './SubFooter';

function Footer() {
  return (
    <>
      <footer className="mt-auto text-onSurface bg-surface ">
        
        <SubFooter/>
        <div className='text-center'>
        <div className=" flex flex-col items-center justify-center p-3 py-10">
        <p className="text-sm font-bold">Powered by</p>
        <div className="">
          
          <img src={erp_logo} alt="" className="h-10" />
        </div>
        <p>
          Developed by <strong>DC Quantum Labs</strong>
        </p>
      </div>
        </div>
      
      </footer>
    </>
  )
}

export default Footer

