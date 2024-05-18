import React from 'react'
import { Outlet } from 'react-router-dom'
import { Home } from 'react-router-dom'

const Main = () => {
  return (
    <div>
      <nav>
        <Home/>
      </nav>
      <Outlet/>
    </div>
  )
}

export default Main
