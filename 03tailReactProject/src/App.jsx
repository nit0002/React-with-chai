import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Component/cardCpnt'

function App() {
  const [count, setCount] = useState(0)
  let myObj ={
    userNAme:"nitin sanodiya",
    age : 23,
}
  return (// <> it is freagment 
    <>
    <h2 className='bg-blue-800 mb-2 rounded-xl'>Tailwind Implimentation</h2>
    {/* <Card propsS="Props example" objcontainer={myObj}/> */}
    <Card props="Mobile " props2="Laptop" props3="Tablet"/>
    <Card props="IOS " props2="Linux" props3="Windows"/>
    </>
  )
}

export default App
