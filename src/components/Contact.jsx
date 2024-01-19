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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2504.108219776062!2d71.43020617673275!3d51.1249118385732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4245841eac167fb3%3A0xa835e4d4496ca3cb!2sDostyq%20St%2016%2C%20Astana%20020000!5e0!3m2!1sen!2skz!4v1705652284075!5m2!1sen!2skz"
          height="445"
          width="100%"
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
          className={`${style.subsection}
        `}
        >
          <h3 className={style.contacth3}>Посетите нас</h3>
          <p className={style.contacttext}>г. Астана, район Есиль,</p>          
          <p className={style.contacttext}>ул. Достык, 16</p>
          <p className={style.contacttext}>24 этаж, офис 19</p>
        </div>
      </div>
    </div>
  )
}
