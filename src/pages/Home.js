import React from 'react'
import Technology from "../components/Technology"
import TechnologySub  from "../components/TechnologySub "
import BreakingNews from "../components/BreakingNews"
import Sports from "../components/Sports"

const Home = () => {
  return (
    <div>
        <Technology />
        <TechnologySub />
        <BreakingNews />
        <Sports/>
    
    </div>
  )
}

export default Home