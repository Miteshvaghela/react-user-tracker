import React from 'react'
import { FaTimes } from 'react-icons/fa';
import { FaPencil } from "react-icons/fa6";

const UserList = ({ title, users, deleteUser, editUser }) => { 
  return (
    <div className='col-3'>
    <h3>{title}</h3>
    <ul className="list-group"> 
        { (users.length > 0) ? users.map(item => (
            <li className="list-group-item" data-id={item.id} key={item.id + '' + item.username}>{item.username.toUpperCase()} <br/><i>{item.email}</i> 
            <FaTimes style={{color : 'red', fontWeight : 'bold', marginLeft : '20px'}} onClick={e => deleteUser(item.id)} />
            <FaPencil style={{color : 'green', fontWeight : 'bold', marginLeft : '20px'}} onClick={e => editUser(item.id)} />
            </li>
        )) : 'No users in system'}

    </ul>
    </div>
  )
}

export default UserList