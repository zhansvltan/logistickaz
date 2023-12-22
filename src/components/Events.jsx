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
       mobile:text-[16px] mobile:leading-[24px] mobile:text-center
       tablet:text-[24px] tablet:leading-[40px]
       laptop:text-[32px] laptop:leading-[48px] laptop:text-start laptop:pl-[9.4vw]"
        >
          Мероприятия Ассоциации
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

export default EventsComponent
