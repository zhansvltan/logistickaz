import React from 'react'

import { Link } from 'react-router-dom'

const Card = ({ imageSrc, name, buttontext, link }) => {
  return (
    <div
      className="rounded-[24px] overflow-hidden bg-[#f0f0f0] relative flex flex-col p-4
    mobile:max-w-[90%] mobile:mx-auto  mobile:px-4 mobile:h-[100%]
    tablet:max-w-[40%] tablet:mx-auto tablet:mb-8 tablet:px-4
    laptop:max-w-[300px] laptop:mx-0 laptop:mb-0 laptop:px-0
    "
    >
      <Link to={link}>
        <button
          className="bg-white rounded-3xl text-[#030303] leading-[18px] font-[600]
      absolute right-[24px] top-[24px]
      mobile:h-[30px] mobile:w-[90px] mobile:text-[10px]
      laptop:h-[40px] laptop:w-[120px] laptop:text-[16px]"
        >
          {buttontext}
        </button>
      </Link>
      <img src={imageSrc} alt={name} className="justify-center mb-4" />
      <h2
        className="justify-start text-[#030303] font-[600] pl-2 mobile:text-justify
        laptop:text-start
      laptop:text-[16px] laptop:leading-[32px] mobile:text-[14px] mobile:leading-[22px]"
      >
        {name}
      </h2>
      {/* <p
        className="justify-start text-[#030303]
      laptop:text-[14px] laptop:leading-[22px] mb-16 pl-2"
      >
        {description}
      </p> */}
    </div>
  )
}

export default Card
