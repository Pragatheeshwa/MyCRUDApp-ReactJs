import { useState } from "react";
import UserTable from "./UserTable";
import AddUser from "./AddUser";
import EditUser from "./EditUser";



function App() {

  const Data =[
      {id:1,name:'Pragatheesh',username:'Pragatheeshwa22'},
      {id:2,name:'Ramasamy',username:'Ramasamyknms'},
      {id:3,name:'PromothKumar',username:'PromothKumar07'},
  ]

  const [Userdata,setUserdata]=useState(Data)

  const [EditMode,setEditMode]=useState(false)
  const InitialEditData={id:null,name:'',username:''}
  const [InitialEdit,setInitialEdit]=useState(InitialEditData)

  const addUser =(IncData)=>{
    IncData.id=Userdata.length+1
   
    setUserdata([...Userdata,IncData])
  }
  const handleDelete=(id)=>{
        setUserdata(Userdata.filter((user)=>user.id!==id))
        if (InitialEdit.id===id)
          setEditMode(false)
        else return;
        
  }
  const handleEdit=(Incinfo)=>{
      setEditMode(true)
      setInitialEdit({id:Incinfo.id,name:Incinfo.name,username:Incinfo.username})

  }

  const handleUpdate=(Incid,IncData)=>{
    setEditMode(false)
    setUserdata(Userdata.map((userdata)=>userdata.id===Incid?IncData:userdata))
  }

    return (
    <div className="container">
       <h1>My CRUD App</h1>
            <div className="flex-row">
                  <div className="flex-large">
                    {EditMode?(<div>
                      
                      <h2>Edit User</h2>
                      <EditUser
                      handleUpdate={handleUpdate}
                      setEditMode={setEditMode}
                      InitialEdit={InitialEdit}                      
                      />                      
                    </div> ):(<div>
                      <h2>Add User</h2>
                      <AddUser
                      addUser={addUser}
                      />
                  </div>)}
              </div>
                <div className="flex-large">
                    <h2>View User</h2>
                    <UserTable
                    Userdata={Userdata}
                    setUserdata={setUserdata}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                    />
                </div>
            </div>
    </div>
  );
}

export default App;
