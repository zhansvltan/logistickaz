import React from 'react'

import style from './News.module.css'
import event1 from '../assets/event1.svg'
import event2 from '../assets/event2.svg'
import event3 from '../assets/event3.svg'
import icon1 from '../assets/icon1.svg'
import icon2 from '../assets/icon2.svg'
import icon3 from '../assets/icon3.svg'
import Card from './Card'

const EventsComponent = () => {
  const cardsData = [
    {
      imageSrc: event1,
      name: 'Association',
      description: 'Learn about the association and its mission',
      logo: icon1,
      text1: 'Membership',
      text2: 'Welcome to LogisticKaz!',
      text3: 'Discover the logistics and industrial parks of Kazakhstan',
      buttontext: 'Learn more',
    },
    {
      imageSrc: event2,
      name: 'About LogisticKaz',
      description: 'Find out about the association and its mission',
      logo: icon2,
      text1: 'Contact us for more information',
      text2: 'Join our network of logistics professionals',
      text3: 'Explore the benefits of membership',
      buttontext: 'Learn more',
    },
    {
      imageSrc: event3,
      name: 'Become a Member',
      description: 'Connect with logistics experts',
      logo: icon3,
      text1: 'Expand your',
      text2: 'Access exclusive resources and events',
      text3: 'Promote your company to a wider audience',
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
