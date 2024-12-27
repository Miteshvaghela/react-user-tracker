import React, { useState } from 'react'
import NavBar from './components/NavBar.jsx'
import UserList from './components/UserList.jsx';
import UserForm from './components/UserForm.jsx';
import Footer from './components/Footer.jsx';

let init = [
  {id : 1, username : 'user 1', email : 'user1@funtechstic.com'}
]
const App = () => {
  const [users, setUsers] = useState(init);
  const [updateUser, setUpdateUser] = useState(false)
  const saveUser = (data) => {
    const addedUsers = [...users, data];
    setUsers(addedUsers)
  }

  const deleteUser = (id) => {
    const user = users.filter(item => item.id === id); 
    if(user){
      const newUsers = users.filter(item => item.id !== id);
      console.log(newUsers);
      setUsers(prev => {
        return [...newUsers]
      })
    }
  }

  const editUser = (id) => {
    setUpdateUser(true);
    console.log('Update user id : ', id)
  }
  return (
    <>
      <NavBar logo={'ReactApp'} />
      <div className="container min-vh-100 mt-5">
        <div className="row">
          <UserList title={ 'Users' } users={users} deleteUser={deleteUser} editUser={editUser}/>
          <UserForm title={'User Submission Form'} saveUser={saveUser} updateUser={updateUser}/>
        </div>
      </div>
      <Footer copyText={'Copyright All rights reserved 2024'} />
    </>
  )
}

export default App