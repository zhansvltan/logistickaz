import React from 'react'

import Card from './Card'

const NewsComponent = () => {
  const cardsData = [
    {
      imageSrc: 'assets/news1.svg',
      name: 'АИП России и Ассоциация индустриальных парков Казахстана решили присоединиться к международному Альянсу промышленных зон',
      buttontext: 'Читать',
      link: 'https://indparks.ru/press/news/aip-rossii-i-assotsiatsiya-industrialnykh-parkov-kazakhstana-reshili-prisoedinitsya-k-mezhdunarodnom/',
    },
    {
      imageSrc: 'assets/news2.svg',
      name: 'АИП России и Ассоциация индустриальнниться к международному Альянсу промышленных зон',
      buttontext: 'Читать',
      link: 'https://indparks.ru/press/news/aip-rossii-i-assotsiatsiya-industrialnykh-parkov-kazakhstana-reshili-prisoedinitsya-k-mezhdunarodnom/',
    },
    {
      imageSrc: 'assets/news3.svg',
      name: 'АИП России и Ассоциация индустриальных парков Казахстана решили присоединиться к международному Альянсу промышленных зон',
      buttontext: 'Читать',
      link: 'https://indparks.ru/press/news/aip-rossii-i-assotsiatsiya-industrialnykh-parkov-kazakhstana-reshili-prisoedinitsya-k-mezhdunarodnom/',
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
        className="flex justify-between items-baseline
        mobile:gap-[10px] mobile:justify-center mobile:flex-wrap
        tablet:gap-[20px] tablet:justify-center tablet:flex-wrap 
        laptop:gap-[30px] laptop:justify-between laptop:pl-[9.4vw] laptop:max-w-[90%]"
      >
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="mobile:w-[75%] laptop:w-[auto] mb-4 laptop:mb-0 flex-wrap"
          >
            <Card key={index} {...card} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default NewsComponent
