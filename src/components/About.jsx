import React from 'react'

import style from './About.module.css'

export default function AboutComponent() {
  const handleScrollClick = () => {
    // Replace 'targetComponentId' with the actual ID of the target component
    const targetComponent = document.getElementById('contact')

    if (targetComponent) {
      const yOffset =
        targetComponent.getBoundingClientRect().top + window.scrollY

      // Scroll to the target component
      window.scrollTo({ top: yOffset, behavior: 'smooth' })
    }
  }
  return (
    <div className={style.about} id="about">
      <div className={style.lefthalf}>
        <h1 className={style.h1}> Об Ассоциации</h1>
        <p className={style.text}>
          АЛИП Казахстана - отраслевая некоммерческая организация, объединяющая
          большинство индустриальных парков и СЭЗ страны.
        </p>
        <button onClick={handleScrollClick} className={style.button}>
          Подробнее
        </button>
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
      <img src="assets/about.svg" alt="About" className={style.aboutimg} />
    </div>
  )
}
