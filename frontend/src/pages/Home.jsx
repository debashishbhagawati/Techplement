import React from 'react'
import LeftSidebar from '../components/LeftSidebar.jsx'
import RightSidebar from '../components/RightSidebar.jsx'
import {Outlet} from "react-router-dom"

const Home = () => {
  return (
    <div className='flex justify-around mt-5 mx-auto'>
      <LeftSidebar/>
      <Outlet/>
      <RightSidebar/>
    </div>
  )
}

export default Home
