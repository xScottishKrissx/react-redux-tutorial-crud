import './App.css';
import { useState } from 'react';
// Read the current value of a state in the store
import { useSelector, useDispatch } from 'react-redux'
import {addUser, deleteUser, updateUser} from './features/Users'

function App() {
  const userList = useSelector((state) => state.users.value)
  const dispatch = useDispatch()

  const [name, setName] = useState("")
  const [username, setUsername] = useState("")
  const [newUsername, setNewusername] = useState("")

  return (
    <div className="App">
      <h1>React Redux Tutorial - Crud</h1>
      
      <div className="addUser">
        <input type="text" placeholder='Name..' onChange={(e)=>setName(e.target.value)} />
        <input type="text" placeholder='Username..'  onChange={(e)=>setUsername(e.target.value)} />
        <button onClick={()=> {

          dispatch(addUser({id:userList.length + 1 , name, username, }))
          // shorthand notation when key + value are the same thing
          // dispatch(addUser({id:userList.length + 1 , name: name, username: username, }))
        }}>
          Add User</button>
      </div>

      <div className="displayUsers">
        
        {userList.map((user) => {
          return (
            <div>
              <h1>{user.id} - {user.name} - {user.username}</h1>
              <input type="text" placeholder='New userame..' onChange={(e)=>setNewusername(e.target.value)} />
              <button onClick={()=>{dispatch(updateUser({id: user.id, newname: newUsername}))}}>Update Username</button>
              <button onClick={()=>{dispatch(deleteUser(user.id))}}>Delete Username</button>
            </div>
          )
        })}

      </div>
    </div>
  );
}

export default App;
