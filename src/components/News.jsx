import React from 'react'

import style from './News.module.css'
import Card from './Card'

const NewsComponent = () => {
  const cardsData = [
    {
      imageSrc: 'assets/news1.svg',
      name: 'Parks Overview',
      description: 'Browse different logistics and industrial',
      buttontext: 'Read more',
    },
    {
      imageSrc: 'assets/news2.svg',
      name: 'Media Player',
      description: 'Watch videos about logistics and',
      buttontext: 'View details',
    },
    {
      imageSrc: 'assets/news3.svg',
      name: 'Contact',
      description: 'Get in touch with association',
      buttontext: 'Play video',
    },
  ]

  return (
    <div id="news">
      <div className={style.section}>
        <h2 className={style.text}>Новости Ассоциации</h2>
      </div>
      <div className={style.news}>
        {cardsData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  )
}

export default NewsComponent
