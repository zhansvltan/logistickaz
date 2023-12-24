import React from 'react'

import Card from './EventsCard'

const EventsComponent = () => {
  const cardsData = [
    {
      imageSrc: 'assets/event1.jpeg',
      name: 'Исполнение поручений Президента: в Казахстане утверждена Дорожная карта по развитию СЭЗ',
      description: 'Описание мероприятия',
      buttontext: 'Подробнее',
    },
    {
      imageSrc: 'assets/event2.jpeg',
      name: 'Работа по развитию и повышению эффективности СЭЗ будет продолжена',
      description: 'Описание мероприятия',
      buttontext: 'Подробнее',
    },
    {
      imageSrc: 'assets/event3.jpeg',
      name: 'Сенаторы встретились с участниками СЭЗ «Астана – новый город»',
      description: 'Описание мероприятия',
      buttontext: 'Подробнее',
    },
  ]

  return (
    <div className="mobile:mt-8 laptop:mt-16">
      <div>
        <h2
          className="text-[#030303] font-[700] mobile:mb-4 laptop:mb-8
       mobile:text-[18px] mobile:leading-[24px] mobile:text-center
       tablet:text-[24px] tablet:leading-[40px]
       laptop:text-[32px] laptop:leading-[48px] laptop:text-start laptop:pl-[9.4vw]"
        >
          Мероприятия Ассоциации
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

export default EventsComponent
