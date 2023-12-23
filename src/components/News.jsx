import React from 'react'

import Card from './Card'

const NewsComponent = () => {
  const cardsData = [
    {
      imageSrc: 'assets/news1.svg',
      name: 'Новость №1',
      description: 'Описание новости',
      buttontext: 'Читать',
      link: 'https://indparks.ru/press/news/aip-rossii-i-assotsiatsiya-industrialnykh-parkov-kazakhstana-reshili-prisoedinitsya-k-mezhdunarodnom/',
    },
    {
      imageSrc: 'assets/news2.svg',
      name: 'Новость №2',
      description: 'Описание новости',
      buttontext: 'Читать',
      link: 'https://youtube.com',
    },
    {
      imageSrc: 'assets/news3.svg',
      name: 'Новость №3',
      description: 'Описание новости',
      buttontext: 'Читать',
    },
  ]

  return (
    <div id="news" className="mb-11">
      <div>
        <h2
          className="text-[#030303] font-[700] mb-4
       mobile:text-[16px] mobile:leading-[24px] mobile:text-center
       tablet:text-[24px] tablet:leading-[40px]
       laptop:text-[32px] laptop:leading-[48px] laptop:text-start laptop:pl-[9.4vw]"
        >
          Новости Ассоциации
        </h2>
      </div>
      <div
        className="flex justify-between items-baseline flex-wrap
        mobile:gap-[10px] mobile:px-4 mobile:justify-center
        tablet:gap-[20px] tablet:px-2 tablet:justify-center
        laptop:gap-[30px]  laptop:justify-between laptop:pl-[9.4vw] laptop:max-w-[90%]"
      >
        {cardsData.map((card, index) => (
          <div key={index} className="w-full mobile:w-auto mb-4 laptop:mb-0">
            <Card key={index} {...card} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default NewsComponent
