import React from 'react'

import style from './Card.module.css'

const Card = ({
  imageSrc,
  name,
  description,
  logo,
  text1,
  text2,
  buttontext,
}) => {
  return (
    <div className={style.card}>
      <button className={style.button}>{buttontext}</button>
      <img src={imageSrc} alt={name} className={style.cardimg} />
      <h2 className={style.name}>{name}</h2>
      <p className={style.description}>{description}</p>
      <div className={style.low}>
        <div className={style.lowleft}>
          <img src={logo} alt="icon" />
          <p className={style.text1}>{text1}</p>
        </div>
        <p className={style.text2}>{text2}</p>
      </div>
    </div>
  )
}

export default Card
