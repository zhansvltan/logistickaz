import React from 'react'

import Card from './Card'

const NewsComponent = () => {
  const cardsData = [
    {
      imageSrc: 'assets/news1.svg',
      name: 'Новость №1',
      description: 'Описание новости',
      buttontext: 'Читать',
    },
    {
      imageSrc: 'assets/news2.svg',
      name: 'Новость №2',
      description: 'Описание новости',
      buttontext: 'Читать',
    },
    {
      imageSrc: 'assets/news3.svg',
      name: 'Новость №3',
      description: 'Описание новости',
      buttontext: 'Читать',
    },
  ]

  return (
    <div id="news">
      <div /* className="flex justify-center" */>
        <h2
          className="text-[#030303] font-[700]
       mobile:text-[16px] mobile:leading-[24px] mobile:text-center
       tablet:text-[24px] tablet:leading-[40px]
       laptop:text-[32px] laptop:leading-[48px] laptop:text-start"
        >
          Новости Ассоциации
        </h2>
      </div>
      <div
        className="flex justify-between items-baseline
      mobile:flex-col mobile:space-y-3 mobile:items-center
      tablet:space-y-6 
      laptop:flex-row laptop:items-baseline laptop:px-36"
      >
        {cardsData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  )
}

export default NewsComponent
