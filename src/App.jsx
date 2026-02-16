import React from 'react'
import Impact from './component/Impact';
import Navbar from './component/Navbar'
import Howto from './component/Howto'
import About from "./component/About";
import Create from './component/create'
import Another from './component/another'
import Productpage from './pages/productpage'
import Aboutpage from './pages/aboutpage'
const App = () => {
  return (
    <div>
      <Navbar />
      <Howto />
      <About />
       {/* <Productpage/> 
      <Aboutpage /> */}
      <Impact />
      <Create />
      <Another />

    </div>
  )
};



export default App
