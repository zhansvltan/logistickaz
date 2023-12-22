import React from 'react'

import style from './Membership.module.css'

export default function MembershipComponent() {
  return (
    <div id="mem">
      <h1 className={style.h1}>Услуги и преимущества членства в Ассоциации</h1>
      <div className={style.subsection}>
        <div className={style.card}>
          <img src="assets/mem1.svg" className={style.mem} />
          <h2 className={style.text}>Связь с государством</h2>
          <img src="assets/mem2.svg" className={style.mem} />
        </div>
        <p className={style.description}>
          Оперативный диалог с государством по вопросу регулирования отрасли и
          государственной поддержки
        </p>
      </div>
      <div className={style.subsection}>
        <p className={style.description2}>
          Коллективный маркетинг и прямой доступ к запросам на размещение
          производства
        </p>
        <div className={style.card}>
          <img src="assets/mem3.svg" className={style.mem} />
          <h2 className={style.text}>Продвижение и маркетинг</h2>
          <img src="assets/mem4.svg" className={style.mem} />
        </div>
        <p className={style.description1}>
          Коллективный маркетинг и прямой доступ к запросам на размещение
          производства
        </p>
      </div>
      <div className={style.subsection}>
        <div className={style.card}>
          <img src="assets/mem5.svg" className={style.mem} />
          <h2 className={style.text}>Расширение партнерства</h2>
          <img src="assets/mem6.svg" className={style.mem} />
        </div>
        <p className={style.description}>
          Расширение партнерской сети и прямой доступ к запросам от инвесторов
        </p>
      </div>
    </div>
  )
}
