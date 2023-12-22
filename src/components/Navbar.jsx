import React, { useState } from 'react'

import { Link } from 'react-router-dom'

export default function NavComponent() {
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
      laptop:w-full laptop:pl-[14%] laptop:pt-[8%]
      " /*mobile:top-[2vh] mobile:left-[6vw]
      laptop:top-[5vh] laptop:left-[5.6vw]*/
    >
      <img
        src="assets/logo.svg"
        alt="logo"
        className="max-w-[105px] mobile:w-[20%] laptop:w-[100%]"
      />

      <div
        className="flex items-center justify-center
        mobile:top-[6vh] mobile:py-4
        laptop:top-[0vh] laptop:py-0 laptop:text-[26px] laptop:gap-[20px] laptop:w-[75%] laptop:px-[70px]"
      >
        <div
          className={`flex gap-[20px]
          mobile:absolute mobile:top-[6.5vh] mobile:w-[30%] mobile:items-center mobile:py-4 mobile:right-[0px] mobile:bg-indigo-700
          tablet:top-[11vh] bigtablet:top-[7vh]
          laptop:static laptop:bg-transparent laptop:w-[100%] laptop:items-center laptop:py-0
        ${
          isMenuOpen ? 'flex-col' : 'hidden laptop:flex laptop:justify-between'
        }`}
        >
          <Link to="/" onClick={() => handleScrollClick('news')}>
            Новости
          </Link>
          <Link to="/" onClick={() => handleScrollClick('about')}>
            О нас
          </Link>
          <Link to="/" onClick={() => handleScrollClick('mem')}>
            Услуги
          </Link>
          <Link to="/" onClick={() => handleScrollClick('contact')}>
            Контакты
          </Link>
          <div className="flex gap-[20px]">
            <button>
              <img src="assets/rus.svg" alt="rus" />
            </button>
            <button>
              <img src="assets/eng.svg" alt="eng" />
            </button>
          </div>
        </div>
        <div className="flex mobile:gap-[10px]">
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
          mobile:h-[30px] mobile:text-[8px] mobile:w-[11vw]
          laptop:w-[8vw] laptop:h-[45px] laptop:text-[18px]"
          >
            <Link to="/">Войти</Link>
          </button>
        </div>
      </div>
    </div>
  )
}
