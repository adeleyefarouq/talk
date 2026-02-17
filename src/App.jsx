import React from 'react'
import Impact from './component/Impact';
import Navbar from './component/Navbar'
import Howto from './component/Howto'
import About from "./component/About";
import Another from "./component/Another";


import Productpage from './pages/productpage'
import Aboutpage from './pages/aboutpage';
import Create from './component/Create';


const App = () => {
  return (
    <div>
       <Navbar />
      <Howto />
      <About />
      {/* <Productpage/>  */}
      <Aboutpage /> 
       <Impact />
      <Create/>
      <Another /> 

      {/* <State/> */}

    </div>
  )
};



export default App
