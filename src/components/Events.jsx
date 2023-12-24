import React from 'react'

import Card from './Card'

const EventsComponent = () => {
  const cardsData = [
    {
      imageSrc: 'assets/event1.svg',
      name: 'Мероприятие №1',
      description: 'Описание мероприятия',
      buttontext: 'Подробнее',
    },
    {
      imageSrc: 'assets/event2.svg',
      name: 'Мероприятие №2',
      description: 'Описание мероприятия',
      buttontext: 'Подробнее',
    },
    {
      imageSrc: 'assets/event3.svg',
      name: 'Мероприятие №3',
      description: 'Описание мероприятия',
      buttontext: 'Подробнее',
    },
  ]

  return (
    <div>
      <div>
        <h2
          className="text-[#030303] font-[700] mb-4
       mobile:text-[18px] mobile:leading-[24px] mobile:text-center
       tablet:text-[24px] tablet:leading-[40px]
       laptop:text-[32px] laptop:leading-[48px] laptop:text-start laptop:pl-[9.4vw]"
        >
          Мероприятия Ассоциации
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
            className="mobile:w-[75%] laptop:w-[auto] mb-4 laptop:mb-0"
          >
            <Card key={index} {...card} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default EventsComponent
