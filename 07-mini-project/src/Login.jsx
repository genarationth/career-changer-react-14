import Layout from "./Layout"
import { useContext, useState } from "react"
import { Context } from "./UserContext"

const Login = () => {
    // You have to pass data to signup() function to successful login.
    const { login } = useContext(Context)
    // example of login with button onClick event listerner.
    // <button onClick={() => signup({
    //     username: 'mock',
    //     password: 'mock',
    // })}>Text</button>
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <Layout>
            <div>
                <input type="text" value={username} placeholder="username" onChange={e => setUsername(e.target.value)}></input>
                <input type="text" value={password} placeholder="password" onChange={e => setPassword(e.target.value)}></input>
                <button onClick={() => login({username: username, password: password})}>Login</button>
            </div>
        </Layout>
    )
}

export default Login