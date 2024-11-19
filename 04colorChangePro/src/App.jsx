import { useState } from 'react'
import './App.css'

function App() {
    const [color,setColor] = useState("#161D6F")
  return (
    
    <div className= "min-h-screen w-full "
    style={{backgroundColor: color, margin:0 }}>

     <div className='fixed flex flex-wrap  absolute bottom-0 justify-center inset-x-0 px-2 '>
      <div className='flex flex-wrap justify-center gap-3 hover:shadow-lg  bg-white px-7 py-2 rounded-3xl'
      style={{boxShadow:"0 5px 50px 10px rgba(0, 0, 255, 0.5)"}}>
      
      <button className='outline-none px-2 rounded-lg py-0.5 px-2 mx-2'
      onClick={()=>setColor("#131842")}
      style={{backgroundColor:"#131842"}}>Navy Blue</button>

      <button className='outline-none px-2 bg-red-700 rounded-lg py-0.5 px-2 mx-2'
      onClick={()=>setColor("#6C946F")}
      style={{backgroundColor:"#6C946F"}}>Sage</button>

      <button className='outline-none px-2 bg-red-700 rounded-lg py-0.5 px-2 mx-2'
      onClick={()=>setColor("#FFD35A")}
      style={{backgroundColor:"#FFD35A"}}>Yellow</button>

      <button className='outline-none px-2 bg-red-700 rounded-lg py-0.5 px-2 mx-2'
      onClick={()=>setColor("#1F316F")}
      style={{backgroundColor:"#1F316F"}}>Blue</button>
      
      <button className='outline-none px-2 bg-red-700 rounded-lg py-0.5 px-2 mx-2'
      onClick={()=>setColor("#424242")}
      style={{backgroundColor:"#424242"}}>black</button>
      
      <button className='outline-none px-2 bg-red-700 rounded-lg py-0.5 px-2 mx-2'
      onClick={()=>setColor("#7A1CAC")}
      style={{backgroundColor:"#7A1CAC"}}>Purpul</button>
      
      <button className='outline-none px-2 bg-red-700 rounded-lg py-0.5 px-2 mx-2'
      onClick={()=>setColor("#2E07")}
      style={{backgroundColor:"#2E07"}}>oliveg</button>
      
      <button className='outline-none px-2 bg-red-700 rounded-lg py-0.5 px-2 mx-2'
      onClick={()=>setColor("#41B3A2")}
      style={{backgroundColor:"#41B3A2"}}>Teal</button>
      
      <button className='outline-none px-2 bg-red-700 rounded-lg py-0.5 px-2 mx-2'
      onClick={()=>setColor("#CD5C08")}
      style={{backgroundColor:"#CD5C08"}}>Orange</button>
      
      <button className='outline-none px-2 bg-red-700 rounded-lg py-0.5 px-2 mx-2'
      onClick={()=>setColor("#7C93C3")}
      style={{backgroundColor:"#7C93C3"}}>Light B</button>
      
      <button className='outline-none px-2 bg-red-700 rounded-lg py-0.5 px-2 mx-2'
      onClick={()=>setColor("#C7253E")}
      style={{backgroundColor:"#C7253E"}}>Red</button>
      </div>
     
     </div>
    </div>
    
  )
}

export default App
