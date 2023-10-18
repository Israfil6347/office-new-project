import React from 'react'
import SmallCardWithIcon from '../../globalComponents/SmallCardWithIcon'

function DepositItem({url, Heading, SubHeading}) {
  return (
    <div>
          <SmallCardWithIcon
            rounded={'md'}
            shadow={'sm'}
            icon={<i class="fa-solid fa-sack-dollar text-2xl "></i>}
            action={url}
            actionLevel={'Read More'}
            heading={Heading}
            height="h-[125px]"
          >
            <p className=" group-hover:cursor-pointer">{SubHeading}</p>
      </SmallCardWithIcon>
      
    </div>
  )
}

export default DepositItem
