import React from 'react'

import style from './Card.module.css'

const Card = ({ imageSrc, name, description, buttontext }) => {
  return (
    <div className={style.card}>
      <button className={style.button}>{buttontext}</button>
      <img src={imageSrc} alt={name} className={style.cardimg} />
      <h2 className={style.name}>{name}</h2>
      <p className={style.description}>{description}</p>
    </div>
  )
}

export default Card
