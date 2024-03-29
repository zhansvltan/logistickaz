import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function AboutComponent() {
  const { t, i18n } = useTranslation()
  const [locale, setLocale] = useState(i18n.language)
  const handlecChangeLanguage = (language) => {
    i18n.changeLanguage(language)
    setLocale(language)
  }
  const handleScrollClick = () => {
    // Replace 'targetComponentId' with the actual ID of the target component
    const targetComponent = document.getElementById('contact')

    if (targetComponent) {
      const yOffset =
        targetComponent.getBoundingClientRect().top + window.scrollY

      // Scroll to the target component
      window.scrollTo({ top: yOffset, behavior: 'smooth' })
    }
  }
  return (
    <div
      className="flex justify-center mobile:mt-8 laptop:mt-16
      mobile:flex-col mobile:items-center mobile:gap-2
      laptop:flex-row laptop:items-center"
      id="about"
    >
      <div
        className="flex flex-col mb-3
        mobile:gap-2 mobile:w-[75%] mobile:items-center 
        laptop:gap-4 laptop:w-[34%] laptop:items-start"
      >
        <h1
          className="text-[#030303] font-[700] mobile:w-[100%] laptop:w-[80%]
          mobile:leading-[32px] mobile:text-[18px] mobile:text-center
          tablet:text-[24px] tablet:leading-[40px]
          laptop:leading-[48px] laptop:text-[32px] laptop:text-start"
        >
          {t('about_assoc')}
        </h1>
        <img
          src="assets/about.svg"
          alt="About"
          className="mobile:w-[100%] mobile:rounded-3xl mobile:block mobile:mb-2 tablet:w-[60%] laptop:w-[46%] laptop:rounded-[40px] laptop:hidden"
        />
        <p
          className="text-[#000000] m-0 p-0 
          mobile:text-justify  mobile:leading-[18px] mobile:text-[14px] mobile:w-[100%]
          tablet:leading-[24px] tablet:text-[20px] tablet:w-[95%]
          laptop:text-start laptop:leading-[30px] laptop:text-[20px] laptop:w-[90%]"
        >
          {t('alip')}
        </p>
        <button
          onClick={handleScrollClick}
          className="rounded-3xl text-white bg-[#5856d6] font-[600] px-2 mt-4
          mobile:text-[10px] mobile:leading-[16px] mobile:h-[31px] mobile:w-[120px]
          tablet:text-[14px] tablet:leading-[22px] tablet:h-[40px] tablet:w-[180px]
          laptop:text-[18px] laptop:leading-[28px] laptop:h-[62px] laptop:w-[201px]"
        >
          {t('more')}
        </button>
        <div
          className="flex justify-center mt-16 
          mobile:hidden
          laptop:block"
        >
          <div className="w-[70vw] h-[2px] rounded-[2px] bg-[#f0f0f0] m-0 p-0"></div>
        </div>
      </div>
      <img
        src="assets/about.svg"
        alt="About"
        className="mobile:w-[75%] mobile:rounded-3xl mobile:hidden tablet:w-[60%] laptop:w-[46%] laptop:rounded-[40px] laptop:block"
      />
    </div>
  )
}
