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
      <div>
        <h2
          className="text-[#030303] font-[700] mobile:mb-4 laptop:mb-8
       mobile:text-[18px] mobile:leading-[24px] mobile:text-center
       tablet:text-[24px] tablet:leading-[40px]
       laptop:text-[32px] laptop:leading-[48px] laptop:text-start laptop:pl-[12vw]"
        >
          Индустриальные и логистические парки Ассоциации
        </h2>
      </div>
      <div
        className="flex justify-between items-baseline
          mobile:gap-[10px] mobile:justify-center mobile:flex-col mobile:items-center
          tablet:gap-[20px] tablet:justify-center
          laptop:gap-[30px]  laptop:justify-between laptop:pl-[9.4vw] laptop:max-w-[90%] laptop:flex-row"
      >
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="mobile:w-[75%] laptop:w-[auto] mb-4 laptop:mb-0 laptop:px-10"
          >
            <ParkCard key={index} {...card} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ParksComponent
