import { useCallback, useEffect, useState,useRef  } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(5)
  const [numberAlloud,setNumber] = useState(false)
  const [charAlloud,setCharacter] = useState(false)
  const [password,setPassword] = useState("")

  const passwordGenerator = useCallback(()=>{
    let pass= ""
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAlloud) str += "0123456789"
    if(charAlloud) str += "@#$%^&*(){}[]|"
    for(let i=1; i<length; i++){
      let char = Math.floor( Math.random()*str.length )// 1, 0 na aye isliye + kiya h
      pass += str.charAt(char) //character lene ki property charAt() and + nhi krte h to ek char geenrate hota h
    }

    setPassword(pass)
  },[length,numberAlloud,charAlloud,setPassword])// here we are using usecallback it is responsible to memorize or optimize and handle the dependency//and setPassword isliye use kre taki cache me rakhe and setPassword denge to password infinite loop me random me ho jyga
    
//useEffect - jab hamara page rlode hota h to first time pr call hota h 
  useEffect(()=>{
    passwordGenerator()
  },[length,numberAlloud,charAlloud,passwordGenerator])//here we use useEffect for if any chhhed-chhad dependency array ke sath ho to fir se call kr dunga

 // useref hook- this hook give to reference of any element of screen 
  const copytoclickboardOpr = ()=>{
    passref.current?.select()//reactproperties using for copy
    passref.current.setSelectionRange(0,length)//reactproperties
    window.navigator.clipboard.writeText(password )//properties h 
  }
  const passref = useRef(null) // 34-46 ye bat kr pa rhe

  return (
    <>
    <div className=' max-w-md w-full max-h-full mx-auto shadow-md rounded-xl px-4  bg-indigo-950 p-10 m-20'>

        <h1 className=' text-white text-center m-5 text-lg font-bold'>Password Generator</h1>

      <div className='w-full flex shadow-lg rounded-full overflow-hidden ' >
          <input
           type='text'
           value={password}
           className=' w-full h-full py-3 px-5'
           placeholder='Password'
           readOnly
           ref={passref}
          />
     
          <button 
          onClick={copytoclickboardOpr}
          className='outline-none bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 shrink-0 '>Copy
          </button>
      </div>

        <div className='flex text-sm gap-x-5 ml-2 m-5  '>
         <div className='flex item-center gap-x-2'>
            <input
            type='range'
            min={5}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e)=> {setLength(e.target.value)}}>

        </input>
        <label className='text-white'>length:{length}</label>

        </div>
    
   
     
      <div className='flex item-center gap-x-1'>
        <input
        type='checkbox'
        defaultValue={numberAlloud}
        id='numberInput'
        onChange={()=> {setNumber((prev) => !prev)}}>

        </input>
        <label className='text-white'>Number</label>
        
      </div>
        <div className='flex item-center gap-x-1'>
            <input
            type='checkbox'
            defaultValue={charAlloud}
            id='CharacterInput'
            onChange={()=> {setCharacter((prev) => !prev)}}>
            </input>
            <label className='text-white'>CharactorInput</label>
        </div>
      </div>
         {/* <
         <divh1 className='text-white'>Password Generator</h1> */}
    </div>
    </>
  )
}

export default App
