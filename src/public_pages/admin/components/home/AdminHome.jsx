import React from 'react';

const HomePageContain = [
  { label: 'Page', number: '10', icon: 'fa-regular fa-file' },
  { label: 'Deposit product', number: '15', icon: 'fa-regular fa-file' },
  { label: 'Loan Product', number: '12', icon: 'fa-regular fa-file' },
  { label: 'User', number: '18', icon: 'fa-regular fa-file' },
  { label: 'Notice', number: '120', icon: 'fa-regular fa-file' },
  { label: 'Gallery images', number: '30', icon: 'fa-regular fa-file' },
  { label: 'Slider image', number: '27', icon: 'fa-regular fa-file' },
  { label: 'Service', number: '10', icon: 'fa-regular fa-file' },
  { label: 'Download', number: '15', icon: 'fa-regular fa-file' },
  { label: 'Job Circulars', number: '82', icon: 'fa-regular fa-file' },
  { label: 'Setting', number: '30', icon: 'fa-regular fa-file' },
  { label: 'Leaders', number: '30', icon: 'fa-regular fa-file' },
  { label: 'Account Setting', number: '35', icon: 'fa-regular fa-file' }
];

function AdminHome() {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-4 gap-4 ">
      {HomePageContain.map((item, index) => (
        <div className="p-4 bg-white flex justify-between rounded-lg ">
          <div className="">
            <h2 className="text-3xl">{item.number}</h2>
            <p>{item.label}</p>
          </div>
          <div className="flex flex-col items-center justify-center h-14 w-14 bg-primary rounded-full">
            <i class={`text-3xl text-background ${item.icon}`}></i>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AdminHome;
