import React from 'react'

import style from './News.module.css'
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
        <h2 className={style.text}>Мероприятия Ассоциации</h2>
      </div>
      <div
        className="flex justify-around items-baseline
      mobile:flex-col mobile:space-y-3 mobile:items-center
      tablet:space-y-6 
      laptop:flex-row laptop:items-baseline"
      >
        {cardsData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  )
}

export default EventsComponent
