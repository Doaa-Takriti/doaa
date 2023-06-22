import React, { useEffect, useState } from 'react'

const ScrollTop = () => {
    const [backtop,setBacktop] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
                setBacktop (true)
            }
            else {
                setBacktop (false)
            }

        })

    },[])
    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior : "smooth"
        })
    }
  return (
    <>
    {backtop &&
        <div className='ScrollTop' onClick={scrollUp}>
        <i className='fa fa-angle-up'>

</i>
  </div>
    }

    </>
  )
}

export default ScrollTop