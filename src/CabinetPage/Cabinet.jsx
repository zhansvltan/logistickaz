import { Link } from 'react-router-dom'

import style from './Cabinet.module.scss'

const CabinetPage = () => {
  const footerData = [
    {
      title: 'Expand to New Markets',
      text: 'Increased',
    },
    {
      title: 'Connect with International',
      text: 'Boost your',
    },
    {
      title: 'Improved Supply Chain',
      text: 'Streamlined',
    },
    {
      title: 'Access to Advanced Technology',
      text: 'Financial',
    },
    {
      title: 'Stay Ahead of the Competition',
      text: 'Const-effective',
    },
    {
      title: 'Business Expansion Support',
      text: 'Guidance for',
    },
  ]
  const data = [1, 2, 3, 4, 5, 6, 7]

  return (
    <div className={style.wrapper}>
      <div className={style.wrapper__leftContainer}>
        <img
          className={style.wrapper__leftContainer__logo}
          src="/src/assets/logo.svg"
          alt="logo"
        />
        <div className={style.wrapper__leftContainer__item}>
          <img src="/src/assets/home.svg" alt="home" />
          <span>
            <Link to="/">Главная</Link>
          </span>
        </div>
        <div className={style.wrapper__leftContainer__search}>
          <img src="/src/assets/search.svg" alt="home" />
          <span>
            <Link to="/">Поиск</Link>
          </span>
        </div>
        <div className={style.wrapper__leftContainer__item}>
          <img src="/src/assets/bookmark.svg" alt="home" />
          <span>
            <Link to="/">Парки</Link>
          </span>
        </div>
        <div
          className={style.wrapper__leftContainer__item}
          style={{
            marginTop: '64px',
          }}
        >
          <img src="/src/assets/plus.svg" alt="home" />
          <span>
            <Link to="/">Добавить</Link>
          </span>
        </div>

        <div
          className={style.wrapper__leftContainer__item}
          style={{
            marginTop: '370px',
          }}
        >
          <img src="/src/assets/settings.svg" alt="home" />
          <span>
            <Link to="/">Настройки</Link>
          </span>
        </div>
        <div
          className={style.wrapper__leftContainer__item}
          style={{
            marginTop: '22px',
          }}
        >
          <img src="/src/assets/logout.svg" alt="home" />
          <span>
            <Link to="/">Выйти</Link>
          </span>
        </div>
      </div>
      <div className={style.wrapper__centerContainer}>
        <h1>Главная</h1>
        <div className={style.wrapper__centerContainer__item}>
          <img src="/src/assets/user.svg" alt="user" />
          <div style={{}}>
            <span>Доступ к базе данных</span>
            <h2>парков</h2>
          </div>
          <img src="/src/assets/line.svg" alt="line" />
        </div>
        <div className={style.wrapper__centerContainer__item}>
          <img src="/src/assets/flag.svg" alt="user" />
          <div style={{}}>
            <span>Возможность рассказать</span>
            <h2>про себя</h2>
          </div>
          <img src="/src/assets/group.svg" alt="line" />
        </div>
        <div className={style.wrapper__centerContainer__item}>
          <img src="/src/assets/globe.svg" alt="user" />
          <div style={{}}>
            <span>Междунородное сотрудничество</span>
            <h2>и инвестиций</h2>
          </div>
          <img src="/src/assets/IconPlus.svg" alt="line" />
        </div>
        <h2>Возможности кабинета</h2>
        {footerData.map((item) => (
          <div
            key={item.text}
            className={style.wrapper__centerContainer__footer}
          >
            <span>{item.text}</span>
            <span>{item.title}</span>
          </div>
        ))}
      </div>
      <div className={style.right}>
        <div className={style.header}>
          <input
            className={style.input}
            type="text"
            placeholder="Введите наименование парка"
          />
          <button className={style.button} type="text">
            Поиск
          </button>
          <img className={style.img} src="/src/assets/message.svg" alt="" />
          <img src="/src/assets/bell.svg" alt="" />
          <img src="/src/assets/Image.svg" alt="" />
        </div>
        <section>
          <span>Наименование</span>
          <span>Действие 1</span>
          <span>Описание</span>
          <span>Действие 2</span>
        </section>
        <article>
          {data.map((item, index) => (
            <div>
              <div className={style.inside}>
                <span className={style.inside__first}>Парк {index + 1}</span>
                <div className={style.inside__button}>Activate</div>
                <p>Описание</p>
                <div className={style.inside__together}>
                  <span>View Details</span>
                  <div className={style.inside__together_element}>
                    <img src="/src/assets/up.svg" alt="up" />
                    <span>Accelerator</span>
                  </div>
                </div>
              </div>
              <div className={style.next}>
                <div>Activate</div>
                <span>View Pricing</span>
              </div>
            </div>
          ))}
        </article>
      </div>
    </div>
  )
}
export default CabinetPage
