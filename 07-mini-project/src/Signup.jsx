import Layout from "./Layout"
import { Context } from "./UserContext"
import { useContext, useState } from "react"

const Signup = () => {
    // You have to pass data to signup() function to successful registration.
    const { signup } = useContext(Context)
    // example of signup with button onClick event listerner.
    // <button onClick={() => signup({
    //     username: 'mock',
    //     password: 'mock',
    //     fullname: 'mock',
    //     organization: 'mock'
    // })}>Text</button>
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [fullname, setFullname] = useState('');
    const [organization, setOrganization] = useState('');

    return (
        <Layout>
            <div>
                Signup
            </div>
            <div>
                <input type="text" placeholder="Username" onChange={e => setUsername(e.target.value)} /><br />
                <input type="text" placeholder="Password" onChange={e => setPassword(e.target.value)} /><br />
                <input type="text" placeholder="Fullname" onChange={e => setFullname(e.target.value)} /><br />
                <input type="text" placeholder="Organization" onChange={e => setOrganization(e.target.value)}/><br />
                <button onClick={() => signup({username: username, password: password, fullname: fullname, organization: organization})}>Sign Up</button>
            </div>
        </Layout>
    )
}

export default Signup