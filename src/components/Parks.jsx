import React from 'react'

import style from './Parks.module.css'
import ParkCard from './ParkCard.jsx'

const ParksComponent = () => {
  const cardsData = [
    {
      imageSrc: 'assets/park1.svg',
      text1: 'Parks',
      name: 'Park Name 1',
      text2: 'Park Name 4',
      date: '13 Jun 2023',
    },
    {
      imageSrc: 'assets/park2.svg',
      text1: 'Parks',
      name: 'Park Name 2',
      text2: 'Park Name 5',
      date: '13 Jun 2023',
    },
    {
      imageSrc: 'assets/park3.svg',
      text1: 'Parks',
      name: 'Park Name 3',
      text2: 'Park Name 6',
      date: '13 Jun 2023',
    },
  ]

  return (
    <div>
      <div className={style.section}>
        <h2 className={style.h2}>
          Индустриальные и логистические парки Ассоциации
        </h2>
      </div>
      <div className={style.parks}>
        {cardsData.map((card, index) => (
          <ParkCard key={index} {...card} />
        ))}
      </div>
    </div>
  )
}

export default ParksComponent
