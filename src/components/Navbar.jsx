import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import style from './Navbar.module.css'
import logo from '../assets/logo.svg'

import MenuIcon from '@mui/icons-material/Menu'
export default function NavComponent() {
  const [open, setOpen] = React.useState(false)
  return (
    <div className={style.nav}>
      <img src={logo} alt="logo" className={style.img} />
      <div className={style.links}>
        <Link
          to="/"
          style={{
            textDecoration: 'none',
            color: 'white',
            whiteSpace: 'nowrap',
          }}
        >
          О нас
        </Link>
        <Link
          to="/"
          style={{ textDecoration: 'none', color: 'white' }}
          onClick={() => handleScrollClick('mem')}
        >
          Услуги
        </Link>
        <Link
          to="/"
          style={{ textDecoration: 'none', color: 'white' }}
          onClick={() => handleScrollClick('mem')}
        >
          Преимущества
        </Link>
        <Link
          to="/"
          style={{
            textDecoration: 'none',
            color: 'white',
            marginRight: '50px',
          }}
          onClick={() => handleScrollClick('news')}
        >
          Новости
        </Link>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {open && (
          <div className={style.burger}>
            <Link to="/">О нас</Link>
            <Link to="/">Услуги</Link>
            <Link to="/">Преимущества</Link>
            <Link to="/">Новости</Link>
          </div>
        )}
        <button className={style.button}>
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
        <div className={style.mobile}>
          <MenuIcon
            onClick={() => setOpen(!open)}
            sx={{
              background: '#5856d6',
              borderRadius: '50%',
              marginLeft: '20px',
              color: 'white',
              width: '36px',
              alignItems: 'center',
              height: '36px',
              padding: '5px',
            }}
          />
        </div>
      </div>
    </div>
  )
}
