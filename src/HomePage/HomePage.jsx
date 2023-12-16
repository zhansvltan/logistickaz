import React from 'react'
import ImgComponent from '../components/Image'
import NavComponent from '../components/Navbar'
import NewsComponent from '../components/News'

const HomePage = () => {
  return (
    <>
      <NavComponent />
      <ImgComponent />
      <div
        style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}
      >
        <div
          style={{
            height: '2px',
            borderRadius: '2px',
            backgroundColor: '#f0f0f0',
            maxWidth: '1300px',
            width: '100%',
            margin: '0%',
            padding: '0%',
          }}
        ></div>
      </div>
      <NewsComponent />
    </>
  )
}
export default HomePage
