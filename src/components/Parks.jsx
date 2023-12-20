import React from 'react'

import style from './Parks.module.css'
import park1 from '../assets/park1.svg'
import park2 from '../assets/park2.svg'
import park3 from '../assets/park3.svg'
import ParkCard from './ParkCard.jsx'

const ParksComponent = () => {
  const cardsData = [
    {
      imageSrc: park1,
      text1: 'Parks',
      name: 'Park Name 1',
      text2: 'Park Name 4',
      date: '13 Jun 2023',
    },
    {
      imageSrc: park2,
      text1: 'Parks',
      name: 'Park Name 2',
      text2: 'Park Name 5',
      date: '13 Jun 2023',
    },
    {
      imageSrc: park3,
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
