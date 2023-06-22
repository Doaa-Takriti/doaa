import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";



const Spinner1 = () => {
 
  return (
    <div>
          <ClipLoader
        color="hsl(0, 100%, 35%)"
      
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
        </div>
  )
}

export default Spinner1