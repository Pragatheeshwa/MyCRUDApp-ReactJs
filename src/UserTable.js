import React from 'react'

const UserTable = (props) => {
  return (
    <table>  
    <thead>
        <tr>
            <th>Name</th>
            <th>UserName</th>
            <th>Actions</th>
        </tr>
    </thead>
    <tbody>
        {props.Userdata.length>0?(
            props.Userdata.map((users)=>(
                <tr key={users.id}>
                  <td>{users.name}</td>
                <td>{users.username}</td>       
                <td>
                    <button className="button muted-button" onClick={()=>props.handleEdit(users)}>Edit</button>
                    <button className="button muted-button" onClick={()=>props.handleDelete(users.id)}>Delete</button>
                </td>
                </tr>
                
            ))):(
                <tr>
                    <td colspan={3}>No Users</td>
                </tr>
            )
        }
        
    </tbody>
    </table>
  )
}

export default UserTable