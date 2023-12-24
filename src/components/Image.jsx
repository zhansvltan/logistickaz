import React from 'react'

export default function ImgComponent() {
  return (
    <div style={{ background: 'black' }}>
      <img
        src="assets/header.svg"
        alt="Image"
        className="brightness-50 w-full"
      />
      <p
        className="absolute text-white font-[600] 
        mobile:text-center mobile:top-[90px] mobile:left-[15%] mobile:text-[18px] mobile:w-[70%] mobile:leading-[22px]
        tablet:top-[200px] tablet:left-[15%] tablet:text-[24px] tablet:leading-[32px] tablet:w-[60%]
        bigtablet:top-[160px] bigtablet:left-[20%] bigtablet:text-[32px] bigtablet:leading-[48px] bigtablet:w-[50%]
        laptop:text-start laptop:w-[40%] laptop:top-[26%] laptop:left-[13.6vw] laptop:text-[48px] laptop:leading-[62px]"
      >
        Ассоциация логистических и индустриальных парков Казахстана
      </p>
    </div>
  )
}
