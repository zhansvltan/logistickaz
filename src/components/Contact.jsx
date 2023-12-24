import React from 'react'

import style from './Contact.module.css'
export default function ContactComponent() {
  return (
    <div className={style.container} id="contact">
      <h2 className={style.h2}>Связаться с нами</h2>
      <h3 className={style.h3}>
        Свяжитесь с нами по любым интересующим Вас вопросам
      </h3>
      <div className={`${style.main} laptop:gap-[40px]`}>
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
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2506.043025332603!2d71.41677177689787!3d51.089213471721266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x424585ab1a2fc967%3A0x29a4bb7370d5dfae!2sProspekt%20Mangilik%20Yel.%2055%2C%20Astana%20020000!5e0!3m2!1sen!2skz!4v1703419267507!5m2!1sen!2skz"
          width="100%"
          height="445"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className={style.box}>
        <div className={style.subsection}>
          <h3 className={style.contacth3}>Позвоните нам</h3>
          <p className={style.contacttext}>+7 777 77 77</p>
          <p className={style.contacttext}>+7 777 77 77</p>
        </div>
        <div className={style.subsection}>
          <h3 className={style.contacth3}>Напишите нам</h3>
          <p className={style.contacttext}>info@alip.kz</p>
        </div>
        <div
          className={`${style.subsection} laptop: pl-[3.4vw] mobile:pl-[20px]
        `}
        >
          <h3 className={style.contacth3}>Посетите нас</h3>
          <p className={style.contacttext}>г. Астана, район Есиль,</p>
          <p className={style.contacttext}>проспект Мангилик Ел,</p>
          <p className={style.contacttext}>здание 55/23</p>
        </div>
      </div>
    </div>
  )
}
