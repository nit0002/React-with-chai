import  { useContext,useState} from 'react'
import UserContext from '../Context/UserContext'

export const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
            e.preventDefault()
            setUser({username,password})
    }
  return (
    <>
     <div>Login</div>
     <input type='text' placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)}/><br></br>
     <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
     <button onClick={handleSubmit}>Submit</button>
    </>
   
  )
}
