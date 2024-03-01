import React, { useState } from 'react'

import Card from './EventsCard'
import { useTranslation } from 'react-i18next'

const EventsComponent = () => {
  const { t, i18n } = useTranslation()
  const [locale, setLocale] = useState(i18n.language)
  const handlecChangeLanguage = (language) => {
    i18n.changeLanguage(language)
    setLocale(language)
  }
  const cardsData = [
    {
      imageSrc: 'assets/event1.jpeg',
      name: t('events_title1'),
      description: 'Описание мероприятия',
      buttontext: t('more'),
    },
    {
      imageSrc: 'assets/event2.jpeg',
      name: t('events_title2'),
      description: 'Описание мероприятия',
      buttontext: t('more'),
    },
    {
      imageSrc: 'assets/event3.jpeg',
      name: t('events_title3'),
      description: 'Описание мероприятия',
      buttontext: t('more'),
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
          {t('activities')}
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
