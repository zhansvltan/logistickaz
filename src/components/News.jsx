import React from 'react'

import style from './News.module.css'
import Card from './Card'

const NewsComponent = () => {
  const cardsData = [
    {
      imageSrc: 'assets/news1.svg',
      name: 'Новость №1',
      description: 'Описание новости',
      buttontext: 'Читать',
    },
    {
      imageSrc: 'assets/news2.svg',
      name: 'Новость №2',
      description: 'Описание новости',
      buttontext: 'Читать',
    },
    {
      imageSrc: 'assets/news3.svg',
      name: 'Новость №3',
      description: 'Описание новости',
      buttontext: 'Читать',
    },
  ]

  return (
    <div id="news">
      <div /* className="flex justify-center" */>
        <h2 className={style.text}>Новости Ассоциации</h2>
      </div>
      <div
        className="flex justify-around items-baseline
      mobile:flex-col mobile:space-y-3 mobile:items-center
      tablet:space-y-6 
      laptop:flex-row laptop:items-baseline"
      >
        {cardsData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  )
}

export default NewsComponent
