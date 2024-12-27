import React, { useState, useEffect } from 'react'

const UserForm = ({ title, saveUser }) => {
   
   const [name, setName]   = useState('');
   const [email, setEmail] = useState('');
   const handleSubmit = (e) => {
      e.preventDefault(); 
      const obj = {username : name, email : email};
      if(name !== '' && email !== ''){
         saveUser(obj);
         setName('');
         setEmail('');
      }else{
         alert('Enter all form fields')
      }
   }
   
  return (
    <div className='col-9'>
    <h3>{title}</h3>
     <form onSubmit={handleSubmit} className='w-50' method="post">
           <div className="form-group">
              <label htmlFor="name">Username</label>
              <input type="text" name="name" value={name} className='form-control' onChange={e => setName(e.target.value)} />
           </div>
           <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" value={email} className='form-control' onChange={e => setEmail(e.target.value)} />
           </div>
           <br/>
           <button type="submit">Submit</button>
        </form>
        </div>
  )
}

export default UserForm