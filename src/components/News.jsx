import React, { useState } from 'react'
import Card from './NewsCard'
import { useTranslation } from 'react-i18next'

const NewsComponent = () => {
  const { t, i18n } = useTranslation()
  const [locale, setLocale] = useState(i18n.language)
  const handlecChangeLanguage = (language) => {
    i18n.changeLanguage(language)
    setLocale(language)
  }
  const cardsData = [
    {
      imageSrc: 'assets/news5.jpg',
      name: t('news_title5'),
      buttontext: t('read'),
      description: t('news_description5'),
    },
    {
      imageSrc: 'assets/news4.jpg',
      name: t('news_title4'),
      buttontext: t('read'),
      description: t('news_description4'),
    },
    {
      imageSrc: 'assets/news1.JPG',
      name: t('news_title1'),
      buttontext: t('read'),
      description: t('news_description1'),
    },
    {
      imageSrc: 'assets/news2.jpg',
      name: t('news_title2'),
      buttontext: t('read'),
      description: t('news_description2'),
    },
    {
      imageSrc: 'assets/news3.jpeg',
      name: t('news_title3'),
      buttontext: t('read'),
      description: t('news_description3'),
    },
  ]

  const [popupData, setPopupData] = useState(null)

  const openPopup = (data) => {
    setPopupData(data)
  }

  const closePopup = () => {
    setPopupData(null)
  }

  return (
    <div id="news">
      <div>
        <h2
          className="text-[#030303] font-[700] mobile:mb-4 laptop:mb-8
       mobile:text-[18px] mobile:leading-[24px] mobile:text-center
       tablet:text-[24px] tablet:leading-[40px]
       laptop:text-[32px] laptop:leading-[48px] laptop:text-start laptop:pl-[9.4vw]"
        >
          {t('news_assoc')}
        </h2>
      </div>
      <div
        className="flex
        mobile:gap-[10px] mobile:justify-center mobile:flex-wrap
        tablet:gap-[20px] tablet:justify-center tablet:flex-wrap 
        laptop:gap-[30px] laptop:justify-between laptop:pl-[9.4vw] laptop:max-w-[90%] laptop:flex-row"
      >
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="mobile:w-[75%] mobile:mb-4 laptop:w-[auto] laptop:mb-0  laptop:flex-row bg-[#f0f0f0] rounded-[24px]"
          >
            <Card key={index} {...card} openPopup={() => openPopup(card)} />
          </div>
        ))}
      </div>

      {/* Popup */}
      {popupData && (
        <Popup description={popupData.description} onClose={closePopup} />
      )}
    </div>
  )
}

export default NewsComponent
