import React, {useState} from 'react';






const state = () => {
   const [ react, setReact] = useState(false)  


   const subscribe = () =>  {
    setReact(true)
   }
  // const [count, setCount] = useState(0);
  //   const [username, setUsername] = useState("farouq");
  
    
  // const increase = () => {
  //    if (count > 10) return;
  //   setCount(count + 1);
  // }

  //    const reset = () => {
  //   setCount(0);
  // }

  

  //  const decrease = () => {
  //   if (count == 0) return;
  //     setCount(count-1)
  // }



  // const Change = () => {
  //   setUsername("fariouz");
  // }
  

  return (
    <div>
      {react ? (
         <h1>Welcome to react class </h1>
      ) : (
      <h1>Welcome to javacript</h1>
      )}

      <button className="border-3" onClick={subscribe}>
        subscribe for react
      </button>
    </div>
  //   <div className='justify-center item-center flex flex-col gap-5 mx-auto'>
  //    <span className='text-3xl'>the count is; {count}</span>
  //     <button onClick={increase} className='bg-amber-400  px-8 py-5 text-white  rounded-2xl max-w-30'>+</button>

     
  //      <button onClick={decrease} className='bg-amber-400  px-8 py-5 text-white  rounded-2xl max-w-30'>-</button>

  //     <span className='text-3xl'>the name is; {username}</span>
  //   <button onClick={Change} className='bg-amber-400  px-8 py-5 text-white  rounded-2xl max-w-30'>Change</button>



  //     <button onClick={reset} className='bg-amber-400  px-8 py-5 text-white  rounded-2xl max-w-30'>reset</button>
  //  </div>  

  )
}

export default state
