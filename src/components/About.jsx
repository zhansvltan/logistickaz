import React from 'react'

import style from './About.module.css'
import aboutimg from '../assets/about.svg'

export default function AboutComponent() {
  return (
    <div className={style.about}>
      <div className={style.lefthalf}>
        <h1 className={style.h1}> Об Ассоциации</h1>
        <p className={style.text}>
          АЛИП Казахстана - отраслевая некоммерческая организация, объединяющая
          большинство индустриальных парков и СЭЗ страны.
        </p>
        <button className={style.button}>Подробнее</button>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '20px',
          }}
        >
          <div className={style.divider}></div>
        </div>
      </div>
      <img src={aboutimg} alt="About" className={style.aboutimg} />
    </div>
  )
}
