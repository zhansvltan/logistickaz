import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import style from './Navbar.module.css'
import logo from '../assets/logo.svg'
//FIX THE SIZES AND SPACINGS FOR BURGER BUTTON
export default function NavComponent() {
  const [isMenuOpen, setMenuOpen] = useState(false)

  const handleScrollClick = (targetId) => {
    const targetComponent = document.getElementById(targetId)

    if (targetComponent) {
      const yOffset =
        targetComponent.getBoundingClientRect().top + window.scrollY

      // Scroll to the target component
      window.scrollTo({ top: yOffset, behavior: 'smooth' })

      // Close the menu after clicking on a link
      setMenuOpen(false)
    }
  }

  return (
    <div className={style.nav}>
      <img src={logo} alt="logo" className={style.img} />
      <div className={`${style.links} ${isMenuOpen ? style.showMenu : ''}`}>
        <Link
          to="/"
          style={{ textDecoration: 'none', color: 'white' }}
          onClick={() => handleScrollClick('about')}
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
      <button
        onClick={() => setMenuOpen(!isMenuOpen)}
        className={style.burgerbutton}
      >
        ☰
      </button>
      <button className={style.button}>
        <Link
          to="/"
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
