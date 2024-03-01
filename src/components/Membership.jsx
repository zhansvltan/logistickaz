import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function MembershipComponent() {
  const { t, i18n } = useTranslation()
  const [locale, setLocale] = useState(i18n.language)
  const handlecChangeLanguage = (language) => {
    i18n.changeLanguage(language)
    setLocale(language)
  }
  return (
    <div id="mem" className="">
      <h1
        className="text-[#030303] font-[700] mobile:mt-8 mobile:mb-4 laptop:mt-16 laptop:mb-8
       mobile:text-[18px] mobile:leading-[24px] mobile:text-center mobile:px-10
       tablet:text-[24px] tablet:leading-[40px]
       laptop:text-[32px] laptop:leading-[48px] laptop:text-start laptop:px-0 laptop:pl-[12vw]"
      >
        {t('mem_services')}
      </h1>
      <div
        className="flex justify-center items-center 
          mobile:flex-col mobile:space-y-4 mobile:mb-4 
          laptop:space-y-0 laptop:flex-row laptop:gap-[6vw] laptop:mb-24"
      >
        <div
          className="flex justify-around items-center bg-[#f0f0f0] rounded-3xl p-4 
        mobile:h-[64px] mobile:w-[75%] 
        tablet:w-[35%]
        laptop:h-[128px] laptop:w-[30%]"
        >
          <img
            src="assets/mem1.svg"
            className="mobile:h-[24px] mobile:w-[24px] 
            tablet:h-[36px] tablet:w-[36px] 
            laptop:h-[48px] laptop:w-[48px]"
          />
          <h2
            className="text-[#030303] font-[600] 
          mobile:leading-[20px] mobile:text-[14px] 
          laptop:leading-[42px] laptop:text-[32px] w-[60%]"
          >
            {t('gov_connect')}
          </h2>
          <img
            src="assets/mem2.svg"
            className="mobile:h-[24px] mobile:w-[24px] 
            tablet:h-[36px] tablet:w-[36px] l
            aptop:h-[48px] laptop:w-[48px]"
          />
        </div>
        <p
          className="text-[#030303] font-[500] 
        mobile:text-justify mobile:w-[75%]  mobile:text-[14px] 
        laptop:text-start laptop:text-[20px] laptop:leading-[30px] laptop:w-[40%]"
        >
          {t('gov_info')}
        </p>
      </div>
      <div
        className="flex justify-center items-center 
      mobile:flex-col mobile:space-y-4 mobile:mb-4  mobile:text-[14px] 
      laptop:space-y-0 laptop:flex-row laptop:gap-[6vw] laptop:mb-24"
      >
        <p
          className="text-[#030303] font-[500] 
        mobile:hidden mobile:text-center   mobile:text-[14px] 
        laptop:text-start laptop:text-[20px] laptop:leading-[30px] laptop:w-[40%] laptop:block"
        >
          {t('marketing_info')}
        </p>
        <div
          className="flex justify-around items-center bg-[#f0f0f0] rounded-3xl p-4 
        mobile:h-[64px] mobile:w-[75%] 
        tablet:w-[35%] 
        laptop:h-[128px] laptop:w-[30%]"
        >
          <img
            src="assets/mem3.svg"
            className="mobile:h-[24px] mobile:w-[24px]
            tablet:h-[36px] tablet:w-[36px] 
            laptop:h-[48px] laptop:w-[48px]"
          />
          <h2
            className="text-[#030303] font-[600] 
          mobile:leading-[20px] mobile:text-[14px] 
          laptop:leading-[42px] laptop:text-[32px] w-[60%]"
          >
            {t('marketing')}
          </h2>
          <img
            src="assets/mem4.svg"
            className="mobile:h-[24px] mobile:w-[24px] 
            tablet:h-[36px] tablet:w-[36px] 
            laptop:h-[48px] laptop:w-[48px]"
          />
        </div>
        <p
          className="text-[#030303] font-[500] 
        mobile:block mobile:text-justify mobile:w-[75%] mobile:text-[14px] 
        laptop:text-start laptop:text-[20px] laptop:leading-[30px] laptop:w-[40%] laptop:hidden"
        >
          {t('marketing_info')}
        </p>
      </div>
      <div className="flex justify-center items-center mobile:flex-col mobile:space-y-4 mobile:mb-4 laptop:space-y-0 laptop:flex-row laptop:gap-[6vw]">
        <div
          className="flex justify-around items-center bg-[#f0f0f0] rounded-3xl p-4 
        mobile:h-[64px] mobile:w-[75%] tablet:w-[35%] 
        laptop:h-[128px] laptop:w-[30%]"
        >
          <img
            src="assets/mem5.svg"
            className="mobile:h-[24px] mobile:w-[24px] 
            tablet:h-[36px] tablet:w-[36px] 
            laptop:h-[48px] laptop:w-[48px]"
          />
          <h2
            className="text-[#030303] font-[600] 
          mobile:leading-[20px] mobile:text-[14px] 
          laptop:leading-[42px] laptop:text-[32px] w-[60%]"
          >
            {t('partnership')}
          </h2>
          <img
            src="assets/mem6.svg"
            className="mobile:h-[24px] mobile:w-[24px] 
            tablet:h-[36px] tablet:w-[36px] 
            laptop:h-[48px] laptop:w-[48px]"
          />
        </div>
        <p
          className="text-[#030303] font-[500] 
          mobile:text-justify mobile:w-[75%]  mobile:text-[14px] 
          laptop:text-start laptop:text-[20px] laptop:leading-[30px] laptop:w-[40%]"
        >
          {t('partnership_info')}
        </p>
      </div>
    </div>
  )
}
