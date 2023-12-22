import React from 'react'

import style from './Contact.module.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
export default function ContactComponent() {
  return (
    <div className={style.container} id="contact">
      <h2 className={style.h2}>Связаться с нами</h2>
      <h3 className={style.h3}>
        Свяжитесь с нами по любым интересующим Вас вопросам
      </h3>
      <div className={style.main}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <p className={style.text}>Ваше ФИО</p>
          <input type="text" placeholder="ФИО" className={style.input} />
          <p className={style.text}>Электронный адрес</p>
          <input
            type="text"
            placeholder="example@example.com"
            className={style.input}
          />
          <p className={style.text}>Тема</p>
          <input
            type="text"
            placeholder="Опишите тему обращения"
            className={style.input}
          />
          <p className={style.text}>Сообщение</p>
          <input
            type="text"
            placeholder="Напишите сообщение"
            className={style.input}
          />
          <button className={style.button}>Отправить</button>
        </div>
        <MapContainer
          center={[51.505, -0.09]}
          zoom={13}
          style={{ height: '445px', width: '100%' }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={[51.505, -0.09]}>
            <Popup>A marker example.</Popup>
          </Marker>
        </MapContainer>
      </div>
      <div className={style.box}>
        <div className={style.subsection}>
          <h3 className={style.contacth3}>Позвоните нам</h3>
          <p className={style.contacttext}>+ 123 456 789 101</p>
          <p className={style.contacttext}>+ 235 456 789 101</p>
        </div>
        <div className={style.subsection}>
          <h3 className={style.contacth3}>Напишите нам</h3>
          <p className={style.contacttext}>info@association.com</p>
          <p className={style.contacttext}>hello@association.com</p>
        </div>
        <div className={style.subsection}>
          <h3 className={style.contacth3}>Посетите нас</h3>
          <p className={style.contacttext}>123 Main Street</p>
          <p className={style.contacttext}>Astana, Kazakhstan</p>
        </div>
      </div>
    </div>
  )
}
