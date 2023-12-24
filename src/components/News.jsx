import React from 'react'

import Card from './NewsCard'

const NewsComponent = () => {
  const cardsData = [
    {
      imageSrc: 'assets/news1.jpeg',
      name: 'АИП России и Ассоциация индустриальных парков Казахстана решили присоединиться к международному Альянсу промышленных зон',
      buttontext: 'Читать',
      link: 'https://indparks.ru/press/news/aip-rossii-i-assotsiatsiya-industrialnykh-parkov-kazakhstana-reshili-prisoedinitsya-k-mezhdunarodnom/',
    },
    {
      imageSrc: 'assets/news2.jpg',
      name: 'Ассоциация логистических и индустриальных парков Казахстана вошла в международный альянс промышленных зон',
      buttontext: 'Читать',
      link: 'https://indparks.ru/press/news/aip-rossii-i-assotsiatsiya-industrialnykh-parkov-kazakhstana-reshili-prisoedinitsya-k-mezhdunarodnom/',
    },
    {
      imageSrc: 'assets/news3.jpeg',
      name: 'Специальную экономическую зону «G4 City» создали в Алматинской области',
      buttontext: 'Читать',
      link: 'https://indparks.ru/press/news/aip-rossii-i-assotsiatsiya-industrialnykh-parkov-kazakhstana-reshili-prisoedinitsya-k-mezhdunarodnom/',
    },
  ]

  return (
    <div id="news">
      <div>
        <h2
          className="text-[#030303] font-[700] mobile:mb-4 laptop:mb-8
       mobile:text-[18px] mobile:leading-[24px] mobile:text-center
       tablet:text-[24px] tablet:leading-[40px]
       laptop:text-[32px] laptop:leading-[48px] laptop:text-start laptop:pl-[9.4vw]"
        >
          Новости Ассоциации
        </h2>
      </div>
      <div
        className="flex justify-between items-stretch
        mobile:gap-[10px] mobile:justify-center mobile:flex-wrap
        tablet:gap-[20px] tablet:justify-center tablet:flex-wrap 
        laptop:gap-[30px] laptop:justify-between laptop:pl-[9.4vw] laptop:max-w-[90%] laptop:flex-row"
      >
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="mobile:w-[75%] mobile:mb-4 laptop:w-[auto] laptop:mb-0 flex-wrap laptop:flex-row bg-[#f0f0f0] rounded-[24px]"
          >
            <Card key={index} {...card} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default NewsComponent
