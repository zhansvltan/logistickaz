import React from 'react'

import style from './About.module.css'

export default function AboutComponent() {
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
      className="flex justify-center
      mobile:flex-col mobile:items-center mobile:gap-2
      laptop:flex-row laptop:items-center"
      id="about"
    >
      <div
        className="flex flex-col
        mobile:gap-2 mobile:w-[60%] mobile:items-center 
        laptop:gap-4 laptop:w-[34%] laptop:items-start"
      >
        <h1
          className="text-[#030303] font-[700] mobile:w-[100%] laptop:w-[80%]
          mobile:leading-[32px] mobile:text-[24px] mobile:text-center
          laptop:leading-[48px] laptop:text-[32px] laptop:text-start"
        >
          Об Ассоциации
        </h1>
        <p
          className="text-[#000000] m-0 p-0 
          mobile:text-center  mobile:leading-[18px] mobile:text-[14px] mobile:w-[100%]
          tablet:leading-[24px] tablet:text-[20px] tablet:w-[95%]
          laptop:text-start laptop:leading-[30px] laptop:text-[20px] laptop:w-[90%]"
        >
          АЛИП Казахстана - отраслевая некоммерческая организация, объединяющая
          большинство индустриальных парков и СЭЗ страны.
        </p>
        <button
          onClick={handleScrollClick}
          className="rounded-3xl text-white bg-[#5856d6] font-[600] px-2 mt-4
          mobile:text-[10px] mobile:leading-[16px] mobile:h-[31px] mobile:w-[120px]
          tablet:text-[14px] tablet:leading-[22px] tablet:h-[40px] tablet:w-[180px]
          laptop:text-[18px] laptop:leading-[28px] laptop:h-[62px] laptop:w-[201px]"
        >
          Подробнее
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
        className="mobile:w-[70%] mobile:rounded-3xl tablet:w-[60%] laptop:w-[46%] laptop:rounded-[0px]"
      />
    </div>
  )
}
