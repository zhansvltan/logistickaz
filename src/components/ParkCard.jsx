import React from 'react'

import style from './ParkCard.module.css'

const ParkCard = ({ imageSrc, text1, name, text2, date }) => {
  return (
    <div className={style.parkcard}>
      <img src={imageSrc} alt={name} className={style.img} />
      <p className={style.text1}>{text1}</p>
      <h2 className={style.h2}>{name}</h2>
      <div className={style.low}>
        <p className={style.text2}>{text2}</p>
        <p className={style.date}>{date}</p>
      </div>
    </div>
  )
}
export default ParkCard
