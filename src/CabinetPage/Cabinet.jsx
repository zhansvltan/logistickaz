import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import ParkCard from '../components/ParkCard.jsx'

const CabinetPage = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen)
  }
  const cardsData = [
    {
      imageSrc: 'assets/park1.svg',
      text1: 'Индустриальный парк',
      name: 'Название парка №1',
      text2: 'Компания №1',
    },
    {
      imageSrc: 'assets/park2.svg',
      text1: 'Логистический парк',
      name: 'Название парка №2',
      text2: 'Компания №2',
    },
    {
      imageSrc: 'assets/park3.svg',
      text1: 'Индустриальный парк',
      name: 'Название парка №3',
      text2: 'Компания №3',
    },
  ]

  return (
    <div className="flex overflow-hidden mobile:justify-center laptop:justify-start">
      <div
        id="sidebar"
        className={`flex-col justify-around bg-[#f0f0f0] rounded-[24px] ${
          isSidebarOpen
            ? 'mobile:block mobile:absolute mobile:left-0 mobile:pt-[20%] mobile:w-[170px] mobile:h-[100%]'
            : 'mobile:hidden'
        } laptop:static laptop:block laptop:w-[200px] laptop:min-h-[100vh] text-[18px]`}
      >
        <div className="flex-col h-[88%]" id="top side">
          <div className="pt-8  mobile:pl-4 laptop:pl-8">
            <img
              src="/assets/logo.svg"
              alt="logo"
              className="w-[105px] h-[85px] mb-10 mobile:hidden laptop:block"
            />
          </div>
          <div className="flex gap-4 mb-3  mobile:pl-4 laptop:pl-8 items-center">
            <img
              src="/assets/home.svg"
              alt="home"
              className="mobile:h-[16px] mobile:w-[16px] laptop:h-[20px] laptop:w-[20px]"
            />
            <span className="font-[600] text-[#030303] mobile:text-[12px] laptop:text-[18px]">
              <Link to="/">Главная</Link>
            </span>
          </div>
          <div
            className="flex gap-4 mb-3 bg-white rounded-[24px] mobile:pl-4 laptop:pl-8 h-[44px] items-center"
            style={{ boxShadow: '0px 2px 10px rgba(3,3,3,0.1)' }}
          >
            <img
              src="/assets/search.svg"
              alt="home"
              className="mobile:h-[16px] mobile:w-[16px] laptop:h-[20px] laptop:w-[20px]"
            />
            <span className="font-[600] text-[#030303] mobile:text-[12px] laptop:text-[18px]">
              <Link to="/">Поиск</Link>
            </span>
          </div>
          <div className="flex gap-4 mb-16  mobile:pl-4 laptop:pl-8 items-center">
            <img
              src="/assets/bookmark.svg"
              alt="home"
              className="mobile:h-[16px] mobile:w-[16px] laptop:h-[20px] laptop:w-[20px]"
            />
            <span className="font-[600] text-[#030303] mobile:text-[12px] laptop:text-[18px]">
              <Link to="/">Парки</Link>
            </span>
          </div>
          <div className="flex gap-4  mobile:pl-4 laptop:pl-8 items-center">
            <img
              src="/assets/plus.svg"
              alt="home"
              className="mobile:h-[16px] mobile:w-[16px] laptop:h-[20px] laptop:w-[20px]"
            />
            <span className="font-[600] text-[#030303] mobile:text-[12px] laptop:text-[18px]">
              <Link to="/">Добавить</Link>
            </span>
          </div>
        </div>

        <div className="flex-col mobile:pl-4 laptop:pl-8 " id="bottom side">
          <div className="flex gap-4 mb-6 items-center">
            <img
              src="/assets/settings.svg"
              alt="home"
              className="mobile:h-[16px] mobile:w-[16px] laptop:h-[20px] laptop:w-[20px]"
            />
            <span className="font-[600] text-[#030303] mobile:text-[12px] laptop:text-[18px]">
              <Link to="/">Настройки</Link>
            </span>
          </div>
          <div className="flex gap-4 items-center">
            <img
              src="/assets/logout.svg"
              alt="home"
              className="mobile:h-[16px] mobile:w-[16px] laptop:h-[20px] laptop:w-[20px]"
            />
            <span className="font-[600] text-[#030303] mobile:text-[12px] laptop:text-[18px]">
              <Link to="/">Выйти</Link>
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col mobile:gap-[5vh] laptop:gap-[13vh] w-[85%]">
        <div className="flex gap-[27vw] items-center laptop:pt-8 laptop:px-8">
          <button
            onClick={toggleSidebar}
            className="mobile:absolute mobile:z-10 mobile:top-0 mobile:left-0 mobile:mobile:pl-4 laptop:pl-8 mobile:pt-6 mobile:block laptop:hidden"
          >
            <img
              src="/assets/logo.svg"
              alt="logo"
              className="mobile:w-[60px] mobile:h-[50px] laptop:w-[105px] laptop:h-[85px] mb-10 "
            />
          </button>
          <p className="text-[20px] text-[#030303] font-[600] leading-[32px] w-[10%] mobile:hidden laptop:block">
            Главная
          </p>
          <div className="flex laptop:gap-10 items-center">
            <div
              id="search"
              className="mobile:hidden laptop:block laptop:flex gap-4 items-center "
            >
              <input
                type="text"
                placeholder="Введите наименование парка"
                style={{
                  boxShadow: '0px 1px 2px rgba(0,0,0,0.08)',
                  border: '1px solid #e3e3e3',
                  padding: '0px 8px',
                }}
                className="w-[260px] h-[48px] rounded-3xl bg-white text-[15px] font-[500] leading-[24px] text-[#1f1f1f]"
              />
              <button
                type="text"
                style={{ padding: '0px 8px' }}
                className="bg-[#5856d6] rounded-3xl font-[700]
              mobile:h-[30px] mobile:text-[10px] mobile:w-[11vw]
              laptop:w-[8vw] laptop:h-[48px] laptop:text-[15px] leading-[20px] text-[#ffffff]"
              >
                Поиск
              </button>
            </div>
            <div className="relative">
              <img
                src="/assets/message.svg"
                alt=""
                className="w-[20px] h-[20px] mobile:hidden laptop:block"
              />
              <img
                src="/assets/notify.svg"
                className="w-[12px] h-[12px] absolute top-0 right-[-1px] mobile:hidden laptop:block"
              />
            </div>
            <div className="relative">
              <img
                src="/assets/bell.svg"
                alt=""
                className="w-[20px] h-[20px] mobile:hidden laptop:block"
              />
              <img
                src="/assets/notify.svg"
                className="w-[12px] h-[12px] absolute top-0 right-[-1px] mobile:hidden laptop:block"
              />
            </div>
            <img
              src="/assets/Image.svg"
              alt=""
              className="w-[48px] h-[48px] mobile:ml-[75vw] mobile:mt-6 laptop:ml-0 laptop:mt-0"
            />
          </div>
        </div>
        <div
          className="flex justify-between items-baseline
          mobile:gap-[10px] mobile:justify-center mobile:flex-col mobile:items-center
          tablet:gap-[20px] tablet:justify-center
          laptop:justify-around  laptop:flex-row"
        >
          {cardsData.map((card, index) => (
            <div
              key={index}
              className="mobile:w-[75%] laptop:w-[auto] mb-4 laptop:mb-0 "
            >
              <ParkCard key={index} {...card} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default CabinetPage
