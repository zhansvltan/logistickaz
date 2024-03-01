import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import style from './Contact.module.css'
export default function ContactComponent() {
  const { t, i18n } = useTranslation()
  const [locale, setLocale] = useState(i18n.language)
  const handlecChangeLanguage = (language) => {
    i18n.changeLanguage(language)
    setLocale(language)
  }
  return (
    <div className={style.container} id="contact">
      <h2 className={style.h2}>{t('contact_us')}</h2>
      <h3 className={style.h3}>{t('contact_us2')}</h3>
      <div className={`${style.main} laptop:gap-[40px]`}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <p className={style.text}>{t('fullname')}</p>
          <input type="text" placeholder={t('fname')} className={style.input} />
          <p className={style.text}>{t('email')}</p>
          <input
            type="text"
            placeholder="example@example.com"
            className={style.input}
          />
          <p className={style.text}>{t('subject')}</p>
          <input
            type="text"
            placeholder={t('description')}
            className={style.input}
          />
          <p className={style.text}>{t('msg')}</p>
          <input
            type="text"
            placeholder={t('msgdescription')}
            className={style.input}
          />
          <button className={style.button}>{t('send')}</button>
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
          <h3 className={style.contacth3}>{t('call')}</h3>
          <p className={style.contacttext}>+7 707 317 3545</p>
        </div>
        <div className={style.subsection}>
          <h3 className={style.contacth3}>{t('text_us')}</h3>
          <p className={style.contacttext}>info@alip.kz</p>
        </div>
        <div
          className={`${style.subsection}
        `}
        >
          <h3 className={style.contacth3}>{t('visit_us')}</h3>
          <p className={style.contacttext}>{t('city')}</p>
          <p className={style.contacttext}>{t('street')}</p>
          <p className={style.contacttext}>{t('office')}</p>
        </div>
      </div>
    </div>
  )
}
