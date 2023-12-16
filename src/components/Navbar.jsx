import React from 'react'

import { Link } from 'react-router-dom'

import style from './Navbar.module.css'
import logo from '../assets/logo.svg'

export default function NavComponent() {
  return (
    <div className={style.nav}>
      <img src={logo} alt="logo" />
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
        <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
          Новости
        </Link>
      </div>
      <button className={style.button}>Войти</button>
    </div>
  )
}
