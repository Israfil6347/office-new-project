import React from 'react';

import SmallCardWithIcon from '../../globalComponents/components/SmallCardWithIcon';


function LoanItem({ url, Heading, SubHeading }) {
  return (
  <>
    <div className=''>
      <SmallCardWithIcon
        rounded={'md'}
        shadow={'sm'}
        icon={<i class="fa-solid fa-hand-holding-dollar text-2xl"></i>}
        action={url}
        actionLevel={'Read More'}
        heading={Heading}
        height="h-[125px]"
      >
        <p className=" group-hover:cursor-pointer">{SubHeading}</p>
      </SmallCardWithIcon>
      
    </div></>
  );
}

export default LoanItem;
