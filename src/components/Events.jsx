import React from 'react'

import style from './News.module.css'
import Card from './Card'

const EventsComponent = () => {
  const cardsData = [
    {
      imageSrc: 'assets/event1.svg',
      name: 'Association',
      description: 'Learn about the association and its mission',
      buttontext: 'Learn more',
    },
    {
      imageSrc: 'assets/event2.svg',
      name: 'About LogisticKaz',
      description: 'Find out about the association and its mission',
      buttontext: 'Learn more',
    },
    {
      imageSrc: 'assets/event3.svg',
      name: 'Become a Member',
      description: 'Connect with logistics experts',
      buttontext: 'Join now',
    },
  ]

  return (
    <div>
      <div className={style.section}>
        <h2 className={style.text}>Мероприятия Ассоциации</h2>
      </div>
      <div className={style.news}>
        {cardsData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  )
}

export default EventsComponent
