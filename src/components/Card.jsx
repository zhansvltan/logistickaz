import React from 'react'

import { Link } from 'react-router-dom'

const Card = ({ imageSrc, name, description, buttontext, link }) => {
  return (
    <div
      className="rounded-[24px] overflow-hidden bg-[#f0f0f0] relative flex flex-col p-4
      mobile:w-[70%]
      tablet:w-[50%]
      laptop:w-[30%]"
    >
      <Link to={link}>
        <button
          className="bg-white rounded-3xl text-[#030303] leading-[18px] font-[600]
      absolute right-[24px] top-[24px]
      mobile:h-[30px] mobile:w-[70px] mobile:text-[10px]
      laptop:h-[40px] laptop:w-[120px] laptop:text-[14px]"
        >
          {buttontext}
        </button>
      </Link>
      <img src={imageSrc} alt={name} className="justify-center mb-4" />
      <h2
        className="justify-start text-[#030303] font-[600] pl-2
      laptop:text-[22px] laptop:leading-[32px]"
      >
        {name}
      </h2>
      <p
        className="justify-start text-[#030303]
      laptop:text-[14px] laptop:leading-[22px] mb-16 pl-2"
      >
        {description}
      </p>
    </div>
  )
}

export default Card
