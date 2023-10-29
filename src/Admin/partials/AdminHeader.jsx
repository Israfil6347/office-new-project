import React from 'react'

function AdminHeader() {
  return (
  
        <div className='flex bg-white border-b-2'>
                    <div className='w-1/3 p-3'>
                      <ul className='flex p-3  gap-6'>
                        <li><a href=""><i class="fa-solid fa-bars"></i></a></li>
                        <li><a href="admin">Home</a></li>
                        <li><a href="">Contact</a></li>
                      </ul>
                    </div>
                    <div className='w-2/3 p-3'>  
                      <div className='flex'>
                        <div className="w-3/4">
                            <div className=''>
                              <from>
                                <label htmlFor="" className='mb-2 text-sm font-medium text-gray-900 sr-only'>Search</label>
                                <div className=''>
                                    <input type="search" className="block w-full p-3  text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 " placeholder='search' />
                                </div>
                               
                              </from>
                            </div>
                        </div>
                        <div className="w-1/4">
                          <ul className='flex gap-10 justify-end p-3 mr-4'>
                            <li><i class="fa-brands fa-rocketchat"></i></li>
                            <li><i class="fa-solid fa-bell"></i></li>
                            </ul>
                        </div>
                      

                      </div>
                    </div>
                </div>

  )
}

export default AdminHeader
