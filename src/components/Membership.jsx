import React from 'react'

import style from './Membership.module.css'
import mem1 from '../assets/mem1.svg'
import mem2 from '../assets/mem2.svg'
import mem3 from '../assets/mem3.svg'
import mem4 from '../assets/mem4.svg'
import mem5 from '../assets/mem5.svg'
import mem6 from '../assets/mem6.svg'

export default function MembershipComponent() {
  return (
    <div>
      <h1 className={style.h1}>Услуги и преимущества членства в Ассоциации</h1>
      <div className={style.subsection}>
        <div className={style.card}>
          <img src={mem1} className={style.mem} />
          <h2 className={style.text}>Связь с государством</h2>
          <img src={mem2} className={style.mem} />
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
          <img src={mem3} className={style.mem} />
          <h2 className={style.text}>Продвижение и маркетинг</h2>
          <img src={mem4} className={style.mem} />
        </div>
        <p className={style.description1}>
          Коллективный маркетинг и прямой доступ к запросам на размещение
          производства
        </p>
      </div>
      <div className={style.subsection}>
        <div className={style.card}>
          <img src={mem5} className={style.mem} />
          <h2 className={style.text}>Расширение партнерства</h2>
          <img src={mem6} className={style.mem} />
        </div>
        <p className={style.description}>
          Расширение партнерской сети и прямой доступ к запросам от инвесторов
        </p>
      </div>
    </div>
  )
}
