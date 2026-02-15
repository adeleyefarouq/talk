import React from 'react'
import Navbar from './component/Navbar'
import Howto from './component/Howto'
import About from './component/about'
import Productpage from './pages/productpage'
import Aboutpage from './pages/aboutpage'

function HOME() {
  return (
    <div>
        <Navbar />
        <Howto />
        <About /> 
       <Productpage/> 
      <Aboutpage />
    </div>
  )
}

export default HOME
