import React from 'react'

export default function HeadComponent() {
  return (
    <div
      className="flex flex-col justify-center mobile:mt-8 laptop:mt-16
    mobile:flex-col mobile:items-center mobile:gap-2
    laptop:flex-col laptop:items-center"
      id="abouthead"
    >
      <h1
        className="text-[#030303] font-[700] mobile:w-[100%] laptop:w-[80%]
        mobile:leading-[32px] mobile:text-[18px] mobile:text-center
        tablet:text-[24px] tablet:leading-[40px]
        laptop:leading-[48px] laptop:text-[32px] laptop:text-start"
      >
        О Председателе
      </h1>

      <img
        src="assets/azamat.jpg"
        className="mobile:w-[75%] mobile:block tablet:w-[60%] laptop:w-[46%] laptop:hidden"
      />
      <div
        className="flex flex-row mb-3
        mobile:gap-2 mobile:w-[75%] mobile:items-center 
        laptop:gap-4 laptop:w-[80%] laptop:items-start"
      >
        <img
          src="assets/azamat.jpg"
          className="mobile:w-[75%] mobile:hidden tablet:w-[60%] laptop:w-[46%] laptop:block"
        />
        <div className="flex flex-col gap-4">
          <h2 className="text-[#000000] mobile:text-center laptop:text-start laptop:leading-[30px] laptop:text-[24px] font-[600]">
            Азамат Асқарұлы
          </h2>
          <p
            className="text-[#000000] m-0 p-0 
          mobile:text-justify  mobile:leading-[18px] mobile:text-[14px] mobile:w-[100%]
          tablet:leading-[24px] tablet:text-[20px] tablet:w-[95%]
          laptop:text-start laptop:leading-[30px] laptop:text-[20px] laptop:w-[90%]"
          >
            Является одним из основателей Ассоциации логистических и
            индустриальных парков.
          </p>
          <p
            className="text-[#000000] m-0 p-0 
          mobile:text-justify  mobile:leading-[18px] mobile:text-[14px] mobile:w-[100%]
          tablet:leading-[24px] tablet:text-[20px] tablet:w-[95%]
          laptop:text-start laptop:leading-[30px] laptop:text-[20px] laptop:w-[90%]"
          >
            Окончил Казахский национальный университет имени Аль-Фараби,
            Гарвардский Университет и Гонконгский университет науки и
            технологии.
          </p>
        </div>
      </div>
      <p
        className="text-[#000000] m-0 p-0 
          mobile:text-justify  mobile:leading-[18px] mobile:text-[14px] mobile:w-[75%]
          tablet:leading-[24px] tablet:text-[20px] tablet:w-[95%]
          laptop:text-start laptop:leading-[30px] laptop:text-[20px] laptop:w-[80%]"
      >
        В разные годы работал на руководящих должностях в ТОО «Самрук-Казына
        Инвест», ООО «KTZ Express Hong Kong». Имеет обширный опыт в
        транспортно-логистической сфере. Участвовал в деятельности бондовых зон
        в Китае и в продвижении экспорта через индустриальные зоны.
      </p>
      <p
        className="text-[#000000] m-0 p-0 
          mobile:text-justify  mobile:leading-[18px] mobile:text-[14px] mobile:w-[75%]
          tablet:leading-[24px] tablet:text-[20px] tablet:w-[95%]
          laptop:text-start laptop:leading-[30px] laptop:text-[20px] laptop:w-[80%]"
      >
        Занимал должность Советника Заместителя Премьер-Министра Республики
        Казахстан, Вице-министра торговли и интеграции Республики Казахстан,
        Генерального директора АО «Центр торговой политики «QazTrade». В
        настоящее время является Генеральным директором Integrity Logistics Ltd.
      </p>
    </div>
  )
}
