import React, { useState } from 'react'

import { Link } from 'react-router-dom'

export default function NavComponent() {
  const [isMenuOpen, setMenuOpen] = useState(false)

  return (
    <div
      className="absolute z-10 text-white top-[5vh] left-[13.6vw]
                  flex items-center laptop:gap-[20vw]"
    >
      <img src="assets/logo.svg" alt="logo" className="mobile:w-[15%]" />

      <button
        className="
          mobile:w-[30px]
          laptop:hidden"
        onClick={() => setMenuOpen(!isMenuOpen)}
      >
        <img
          src="assets/burger.svg"
          className="laptop:hidden"
          alt="burger menu"
        />
      </button>

      <div
        className={`flex items-center gap-[3vw]
         ${isMenuOpen ? 'flex-col' : 'hidden laptop:flex'}`}
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
        <button>
          <img src="assets/rus.svg" />
        </button>
        <button>
          <img src="assets/eng.svg" />
        </button>
      </div>
      <button
        className="bg-[#5856d6] rounded-3xl font-[600] leading-tight 
                      mobile:h-[25px] mobile:text-[8px] mobile:w-[14vw]
                      tablet:h-[40px] tablet:text-[12px]
                      laptop:h-[45px] laptop:text-[18px] laptop:w-[8vw] laptop:px-2"
      >
        <Link to="/">Войти</Link>
      </button>
    </div>
  )
}
