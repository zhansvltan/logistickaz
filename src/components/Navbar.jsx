import React from 'react'

import { Link } from 'react-router-dom'

import style from './Navbar.module.css'
import logo from '../assets/logo.svg'

export default function NavComponent() {
  return (
    <div className={style.nav}>
      <img src={logo} alt="logo" className={style.img} />
      <div className={style.links}>
        <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
          О нас
        </Link>
        <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
          Услуги
        </Link>
        <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
          Преимущества
        </Link>
        <Link
          to="/"
          style={{
            textDecoration: 'none',
            color: 'white',
            marginRight: '50px',
          }}
        >
          Новости
        </Link>
      </div>
      <button className={style.button}>
        {' '}
        <Link
          to="/cabinet"
          style={{
            textDecoration: 'none',
            color: 'white',
          }}
        >
          Войти
        </Link>
      </button>
    </div>
  )
}
