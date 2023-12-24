import React from 'react'

import { Link } from 'react-router-dom'

const Card = ({ imageSrc, name, buttontext, link, description }) => {
  return (
    <div
      className="overflow-hidden  relative flex-col p-4
    mobile:max-w-[100%] mobile:mx-auto  mobile:px-4 mobile:h-[22rem]
    tablet:max-w-[40%] tablet:mx-auto tablet:mb-8 tablet:px-4
    laptop:max-w-[300px] laptop:mx-0 laptop:mb-0 laptop:px-2 laptop:h-[auto]
    "
    >
      <Link to={link}>
        <button
          className="bg-white rounded-3xl text-[#030303] leading-[18px] font-[600]
      absolute mobile:right-[24px] laptop:right-[12px]
      top-[24px]
      mobile:h-[30px] mobile:w-[90px] mobile:text-[10px]
      laptop:h-[40px] laptop:w-[120px] laptop:text-[16px]"
        >
          {buttontext}
        </button>
      </Link>
      <img
        src={imageSrc}
        alt={name}
        className="justify-center mb-4 rounded-3xl w-[300px] max-h-[152px] object-cover"
      />
      <h2
        className="text-[#030303] font-[600] pl-2 mb-16
        mobile:text-justify mobile:text-[14px] mobile:leading-[22px]
        laptop:text-justify laptop:text-[16px] laptop:leading-[32px]"
      >
        {name}
      </h2>
    </div>
  )
}

export default Card
