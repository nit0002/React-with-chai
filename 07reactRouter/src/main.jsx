import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Component/Home/Home.jsx'
import About from './Component/About/About.jsx'
import Contect from './Component/Contect/Contect.jsx'
import Github,{githubinfoloader} from './Component/Github/Github.jsx'
import User from './Component/User/User.jsx'

// const router = createBrowserRouter([
//   {
//     path : '/', //top level nexting iske under changing ho rhi ho rhi h
//     element:<Layout/>,
//     children:[
//       {
//         path:"home",
//         element:<Home/>,
//       },
//       {
//         path:"about",
//         element:<About/>
//       },
//       {
//         path:"Contect",
//         element:<Contect/>
//       },
//       {
//         path:"github",
//         element:<Github/>
//       }
//     ]
//   }
// ]) //method ke ander array

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='home' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contect' element={<Contect/>}/>
      <Route path='user/:userid' element={<User/>}/>
      <Route 
         loader={githubinfoloader}
         path='github'
         element={<Github/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>
)


  