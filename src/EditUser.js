import React, { useEffect, useState } from 'react'


const EditUser = (props) => { 

  const [IData,setIData] =useState(props.InitialEdit)
  useEffect(()=>{
   setIData(props.InitialEdit)
  },[props])
    const handleChange=(e)=>{
        const {name,value} = e.target
        setIData({...IData,[name]:value})
   }
   const handleSubmit=(e)=>{
    e.preventDefault();
    if(!IData.name||!IData.username) return;
    console.log(IData); 
    props.handleUpdate(IData.id,IData)
    
 }

  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="">Name</label>
        <input type="text" name="name" value={IData.name} onChange={handleChange} />
        <label htmlFor="">UserName</label>
        <input type="text" name="username" value={IData.username} onChange={handleChange}  />
        <button>Update User</button>
        <button className='button muted-button' onClick={()=>props.setEditMode(false)}>Cancel</button>
    </form>
  )
}

export default EditUser