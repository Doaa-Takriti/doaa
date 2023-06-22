import React from 'react'

const BreakingNewsSubCenter = (props) => {
  return (
    <div className='BreakingNewsSubCenter'>
        <img src={props?.data?.urlToImage} alt="" />
        <p style={{fontWeight: 'bold'}}>{props?.data?.title}</p>
        <p>{props?.data?.content}</p>

        <p>{props?.data?.description}</p>
     </div>
  )
}

export default BreakingNewsSubCenter