import React from 'react'

import style from './Image.module.css'
import NavComponent from './Navbar'

export default function ImgComponent() {
  return (
    <div style={{ background: 'black' }}>
      <img src="assets/header.svg" alt="Image" className={style.bgimg} />
      <h1 className={style.text}>
        Ассоциация логистических и индустриальных парков Казахстана
      </h1>
    </div>
  )
}
