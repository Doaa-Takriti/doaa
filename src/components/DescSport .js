import React from 'react'

const DescSport  = (props) => {
  return (
    <div className='DescSport'>
      <div>
<h6>{props?.data?.title}</h6>
<p>{props?.data?.description}</p>
      </div>
      <div>
     {props?.data?.publishedAt?.substring(10, 0)}
      </div>

    </div>
  )
}

export default DescSport 