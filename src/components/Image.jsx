import React from 'react'

import img from '../assets/header.svg'
import style from './Image.module.css'

export default function ImgComponent() {
  return (
    <div style={{ background: 'black' }}>
      <img src={img} alt="Image" className={style.bgimg} />
      <h1 className={style.text}>
        Ассоциация логистических и индустриальных парков Казахстана
      </h1>
    </div>
  )
}
