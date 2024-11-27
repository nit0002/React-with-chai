
import UsercontextProvider from './Context/UsercontextProvider'
import { Login } from './Component/Login'
import { Profile } from './Component/Profile'

function App() {
 

  return (
    <UsercontextProvider>
    <h1>Learning context Api </h1>
    <Login/>
    <Profile/>
    </UsercontextProvider>
  )
}

export default App
