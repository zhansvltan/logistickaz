import React from 'react'

import style from './Membership.module.css'

export default function MembershipComponent() {
  return (
    <div id="mem">
      <h1
        className="text-[#030303] font-[700]
       mobile:text-[16px] mobile:leading-[24px] mobile:text-center
       tablet:text-[24px] tablet:leading-[40px]
       laptop:text-[32px] laptop:leading-[48px] laptop:text-start"
      >
        Услуги и преимущества членства в Ассоциации
      </h1>
      <div
        className="flex justify-center items-center 
          mobile:flex-col mobile:space-y-4 mobile:mb-4 
          laptop:space-y-0 laptop:flex-row laptop:gap-[6vw] laptop:mb-24"
      >
        <div
          className="flex justify-around items-center bg-[#f0f0f0] rounded-3xl p-4 
        mobile:h-[64px] mobile:w-[60%] 
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
          mobile:leading-[20px] mobile:text-[16px] 
          laptop:leading-[42px] laptop:text-[32px] w-[60%]"
          >
            Связь с государством
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
        mobile:text-center 
        laptop:text-start laptop:text-[20px] laptop:leading-[30px] laptop:w-[40%]"
        >
          Оперативный диалог с государством по вопросу регулирования отрасли и
          государственной поддержки
        </p>
      </div>
      <div
        className="flex justify-center items-center 
      mobile:flex-col mobile:space-y-4 mobile:mb-4 
      laptop:space-y-0 laptop:flex-row laptop:gap-[6vw] laptop:mb-24"
      >
        <p
          className="text-[#030303] font-[500] 
        mobile:hidden mobile:text-center 
        laptop:text-start laptop:text-[20px] laptop:leading-[30px] laptop:w-[40%] laptop:block"
        >
          Коллективный маркетинг и прямой доступ к запросам на размещение
          производства
        </p>
        <div
          className="flex justify-around items-center bg-[#f0f0f0] rounded-3xl p-4 
        mobile:h-[64px] mobile:w-[60%] 
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
          mobile:leading-[20px] mobile:text-[16px] 
          laptop:leading-[42px] laptop:text-[32px] w-[60%]"
          >
            Продвижение и маркетинг
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
        mobile:block mobile:text-center 
        laptop:text-start laptop:text-[20px] laptop:leading-[30px] laptop:w-[40%] laptop:hidden"
        >
          Коллективный маркетинг и прямой доступ к запросам на размещение
          производства
        </p>
      </div>
      <div className="flex justify-center items-center mobile:flex-col mobile:space-y-4 mobile:mb-4 laptop:space-y-0 laptop:flex-row laptop:gap-[6vw]">
        <div
          className="flex justify-around items-center bg-[#f0f0f0] rounded-3xl p-4 
        mobile:h-[64px] mobile:w-[60%] tablet:w-[35%] 
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
          mobile:leading-[20px] mobile:text-[16px] 
          laptop:leading-[42px] laptop:text-[32px] w-[60%]"
          >
            Расширение партнерства
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
          mobile:text-center 
          laptop:text-start laptop:text-[20px] laptop:leading-[30px] laptop:w-[40%]"
        >
          Расширение партнерской сети и прямой доступ к запросам от инвесторов
        </p>
      </div>
    </div>
  )
}
