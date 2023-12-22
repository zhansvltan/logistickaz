import React from 'react'

import ParkCard from './ParkCard.jsx'

const ParksComponent = () => {
  const cardsData = [
    {
      imageSrc: 'assets/park1.svg',
      text1: 'Индустриальный парк',
      name: 'Название парка №1',
      text2: 'Компания №1',
    },
    {
      imageSrc: 'assets/park2.svg',
      text1: 'Логистический парк',
      name: 'Название парка №2',
      text2: 'Компания №2',
    },
    {
      imageSrc: 'assets/park3.svg',
      text1: 'Индустриальный парк',
      name: 'Название парка №3',
      text2: 'Компания №3',
    },
  ]

  return (
    <div className="mt-16 mb-16">
      <div className="mt-8">
        <h2
          className="text-[#030303] font-[700] mb-16
       mobile:text-[16px] mobile:leading-[24px] mobile:text-center
       tablet:text-[24px] tablet:leading-[40px]
       laptop:text-[32px] laptop:leading-[48px] laptop:text-start laptop:pl-[12vw]"
        >
          Индустриальные и логистические парки Ассоциации
        </h2>
      </div>
      <div
        className="flex justify-between items-baseline
      mobile:flex-col mobile:space-y-3 mobile:items-center
      tablet:space-y-6 
      laptop:flex-row laptop:items-baseline laptop:px-44"
      >
        {cardsData.map((card, index) => (
          <ParkCard key={index} {...card} />
        ))}
      </div>
    </div>
  )
}

export default ParksComponent
