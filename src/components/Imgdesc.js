import React from 'react'

const Imgdesc = (props) => {
  return (
    <div className='Imgdesc'>
      <div>
      <img src={props?.data?.urlToImage} alt="" />
      <p>{props?.data?.title}</p>
      </div>
      <div>
      {props?.data?.publishedAt?.substring(10, 0)}

      </div>

    </div>
  )
}

export default Imgdesc