import { useContext } from "react"
import { Context } from "./UserContext"


const Admin = () => {
    // You have to get all user from fetchData() and display as table html.
    const { fetchData } = useContext(Context)
    // example of fetchData() usage
    // const data = fetchData()
    // data will return array of user object, otherwise empty array
    // example of user Object show below
    // {
    //     id: 0, 
    //     username: 'example',
    //     fullname: 'example',
    //     organization: 'example'
    // }

    const users = fetchData()
    
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Fullname</th>
                        <th>Organization</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr>
                            <td>{user.id}</td>
                            <td>{user.fullname}</td>
                            <td>{user.organization}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Admin    