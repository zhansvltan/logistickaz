import React from 'react'

import style from './News.module.css'
import news1 from '../assets/news1.svg'
import news2 from '../assets/news2.svg'
import news3 from '../assets/news3.svg'
import icon1 from '../assets/icon1.svg'
import Card from './Card'

const NewsComponent = () => {
  const cardsData = [
    {
      imageSrc: news1,
      name: 'Parks Overview',
      description: 'Browse different logistics and industrial',
      logo: icon1,
      text1: 'Kazakhstan',
      text2: 'Russia',
      text3: 'China',
      buttontext: 'Read more',
    },
    {
      imageSrc: news2,
      name: 'Media Player',
      description: 'Watch videos about logistics and',
      logo: icon1,
      text1: 'Kazakhstan',
      text2: 'Russia',
      text3: 'China',
      buttontext: 'View details',
    },
    {
      imageSrc: news3,
      name: 'Contact',
      description: 'Get in touch with association',
      logo: icon1,
      text1: 'Email',
      text2: 'Phone',
      text3: 'Address',
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
