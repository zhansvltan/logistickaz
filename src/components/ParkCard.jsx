import React from 'react'

const ParkCard = ({ imageSrc, text1, name, text2 }) => {
  return (
    <div className="flex flex-col">
      <img src={imageSrc} alt={name} className="justify-center mb-4" />
      <p
        className="justify-start text-[#030303] font-[700]
      laptop:text-[16px] laptop:leading-[22px] mb-5 pl-2"
      >
        {text1}
      </p>
      <h2
        className="justify-start text-[#030303] font-[900]
      laptop:text-[24px] laptop:leading-[32px] mb-16 pl-2"
      >
        {name}
      </h2>
      <p
        className="justify-start text-[#030303] font-[700]
      laptop:text-[14px] laptop:leading-[18px] pl-2"
      >
        {text2}
      </p>
    </div>
  )
}
export default ParkCard
