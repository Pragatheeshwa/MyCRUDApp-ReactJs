import React, { useState } from 'react'

const AddUser = (props) => {
  
  const Defaultvalue={
    id:null,
    name:'',
    username:''
  }
  const [IData,setIData] =useState(Defaultvalue)
  
   const handleChange=(e)=>{
        const {name,value} = e.target
        setIData({...IData,[name]:value})
   }


   const handleSubmit=(e)=>{
      e.preventDefault();
      if(!IData.name||!IData.username) return;
      console.log(IData);
     
      props.addUser(IData)
      setIData(Defaultvalue)
   }
  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="">Name</label>
        <input type="text" name="name" value={IData.name} onChange={handleChange} />
        <label htmlFor="">UserName</label>
        <input type="text" name="username" value={IData.username} onChange={handleChange}  />
        <button>Add New User</button>
    </form>
  )
}

export default AddUser