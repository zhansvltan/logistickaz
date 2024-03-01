import React, { useState } from 'react'

import ParkCard from './ParkCard.jsx'
import { useTranslation } from 'react-i18next'

const ParksComponent = () => {
  const { t, i18n } = useTranslation()
  const [locale, setLocale] = useState(i18n.language)
  const handlecChangeLanguage = (language) => {
    i18n.changeLanguage(language)
    setLocale(language)
  }
  const cardsData = [
    {
      imageSrc: 'assets/park1.svg',
      text1: t('ind_park'),
      name: t('name1'),
      text2: t('company1'),
    },
    {
      imageSrc: 'assets/park2.svg',
      text1: t('log_park'),
      name: t('name2'),
      text2: t('company2'),
    },
    {
      imageSrc: 'assets/park3.svg',
      text1: t('ind_park'),
      name: t('name3'),
      text2: t('company3'),
    },
  ]

  return (
    <div className="mt-16 mb-16">
      <div>
        <h2
          className="text-[#030303] font-[700] mobile:mb-4 laptop:mb-8
       mobile:text-[18px] mobile:leading-[24px] mobile:text-center mobile:px-10
       tablet:text-[24px] tablet:leading-[40px]
       laptop:text-[32px] laptop:leading-[48px] laptop:text-start laptop:px-0 laptop:pl-[12vw]"
        >
          {t('parks')}
        </h2>
      </div>
      <div
        className="flex justify-between items-baseline
          mobile:gap-[10px] mobile:justify-center mobile:flex-col mobile:items-center
          tablet:gap-[20px] tablet:justify-center
          laptop:gap-[30px]  laptop:justify-between laptop:pl-[9.4vw] laptop:max-w-[90%] laptop:flex-row"
      >
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="mobile:w-[75%] laptop:w-[auto] mb-4 laptop:mb-0 laptop:px-10"
          >
            <ParkCard key={index} {...card} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ParksComponent
