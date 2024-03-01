import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { Link } from 'react-router-dom'

export default function NavComponent() {
  const { t, i18n } = useTranslation()
  const [locale, setLocale] = useState(i18n.language)
  const handlecChangeLanguage = (language) => {
    i18n.changeLanguage(language)
    setLocale(language)
  }
  const [isMenuOpen, setMenuOpen] = useState(false)
  const handleScrollClick = (targetId) => {
    const targetComponent = document.getElementById(targetId)

    if (targetComponent) {
      const yOffset =
        targetComponent.getBoundingClientRect().top + window.scrollY

      // Scroll to the target component
      window.scrollTo({ top: yOffset, behavior: 'smooth' })

      // Close the menu after clicking on a link
      setMenuOpen(false)
    }
  }

  return (
    <div
      className="absolute z-10 text-white flex items-center justify-between
      mobile:w-full mobile:pl-[5%] mobile:pt-[2%]
      laptop:w-full laptop:pl-[14%] laptop:pt-[4%]
      " /*mobile:top-[2vh] mobile:left-[6vw]
      laptop:top-[5vh] laptop:left-[5.6vw]*/
    >
      <img
        src="assets/logo.svg"
        alt="logo"
        className="max-w-[105px] mobile:w-[10%] laptop:w-[100%]"
      />

      <div
        className="flex items-center 
        mobile:top-[6vh] mobile:py-4
        laptop:top-[0vh] laptop:py-0 laptop:text-[26px] laptop:gap-[20px] laptop:w-[85%] laptop:px-[70px]"
      >
        <div
          className={`flex gap-[1.4vw]
          mobile:absolute mobile:top-[6.5vh] mobile:w-[35%] mobile:items-center mobile:py-4 mobile:right-[0px] mobile:bg-indigo-700
          tablet:top-[11vh] bigtablet:top-[7vh]
          laptop:static laptop:bg-transparent laptop:w-[100%] laptop:items-center laptop:py-0
        ${
          isMenuOpen ? 'flex-col' : 'hidden laptop:flex laptop:justify-between'
        }`}
        >
          <Link to="/" onClick={() => handleScrollClick('news')}>
            {t('news')}
          </Link>
          <Link to="/" onClick={() => handleScrollClick('about')}>
            {t('about_us')}
          </Link>
          <Link to="/" onClick={() => handleScrollClick('abouthead')}>
            {t('about_the_chairman')}
          </Link>
          <Link to="/" onClick={() => handleScrollClick('mem')}>
            {t('services')}
          </Link>
          <Link to="/" onClick={() => handleScrollClick('contact')}>
            {t('contacts')}
          </Link>
          <div className="flex gap-[15px] items-center">
            <button
              onClick={() => handlecChangeLanguage('kk')}
              className="w-[29px]"
            >
              <img src="assets/kaz.svg" />
              {/* <span className="inline-block bg-blue-500 text-white rounded-full px-2 py-1 text-xs font-semibold">
                {t('kaz')}
              </span> */}
            </button>
            <button
              onClick={() => handlecChangeLanguage('ru')}
              className="w-[29px]"
            >
              <img src="assets/rus.svg" />
              {/* <span className="inline-block bg-blue-500 text-white rounded-full px-2 py-1 text-xs font-semibold">
                {t('rus')}
              </span> */}
            </button>
            <button
              onClick={() => handlecChangeLanguage('en')}
              className="w-[29px]"
            >
              <img src="assets/eng.svg" />
              {/*  <span className="inline-block bg-blue-500 text-white rounded-full px-2 py-1 text-xs font-semibold">
                {t('eng')}
              </span> */}
            </button>
          </div>
        </div>
        <div className="flex mobile:gap-[10px] items-center">
          <button
            className="
          mobile:w-[40%]
          laptop:hidden"
            onClick={() => setMenuOpen(!isMenuOpen)}
          >
            <img
              src="assets/burger.png"
              className="m-0 p-0 w-[30px] laptop:hidden"
              alt="burger menu"
            />
          </button>
          <button
            className="bg-[#5856d6] rounded-3xl font-[600] leading-tight
          mobile:h-[30px] mobile:text-[10px] mobile:w-[11vw]
          laptop:w-[8vw] laptop:h-[45px] laptop:text-[18px]"
          >
            <Link to="/cabinet">{t('sign_in')}</Link>
          </button>
        </div>
      </div>
    </div>
  )
}
