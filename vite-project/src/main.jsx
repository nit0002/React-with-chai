
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'
import Mybuild from '../../01basicreact/src/Mybuild.jsx'



/*  const reactElemnt ={
  type:'a',
  props:{
      href: 'https://www.google.com',
      target: 'p'
         } , 
  Children: 'Click me to visit google'
}
*/
const anotherElement =(
  <a href= "https://www.google.com" target= "_blank">visit google</a>
)

const user = 'NIT '
const reactElemnt = React.createElement(
  'a',
{  href: 'https://www.google.com',
  target:'-blank'},
  'click me to visit google',
  user
)


createRoot(document.getElementById('root'))
.render(
  // anotherElement
  reactElemnt
  // <Mybuild/>
  // <App />
 
)
