import { useState } from 'react' //it hook which use in module

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [count1,setcount1] = useState(10)
  // let [count2,setcount2] = useState(10)
//  let count = 10;
  const v1=0;
  const v2=25;
 function adValue(){
    
  if(count1 <=25)
  {
    // console.log('value added',count1)
    // count1 = count1 + 1;
    // setcount1(count1)

    setcount1((precounter)=>{precounter +1})
    setcount1((precounter)=>{precounter +1})
    setcount1((precounter)=>{precounter +1})
  }
  else{
    console.log('value is maximum count: ');
  }
  }
   
 
 
 
 function removeValue(){
      if(count1>0)
         {
          console.log('value is less from 0 :')
        setcount1(count1-1) 
        }
        else{
          console.log("Count is over")
        }
      
 } 

  return (
    <>
      <h2>Conter Project</h2>
      <h3>Counting value from {v1} to {v2}</h3> 
      <button onClick= {adValue}>Add Value: {count1}</button>
      <br/>
      <br/>
      <button onClick={removeValue}>Remove Value: {count1}</button>
         </>
  )
}

export default App
