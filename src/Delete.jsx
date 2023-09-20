import React,{useState} from 'react';
import axios from 'axios';


const Delete = ()=>
{

    const [id, setId] = useState({id:""});
    const [server,setServer] = useState("");
    const [msg, setMsg] = useState("");
 
    const handleInput = (e)=>{
        setId({...id,[e.target.name]:e.target.value});
    }

    const sendRequest = ()=>{
    axios.delete("http://localhost:8080/deleteRecord/"+`${id.id}`).then((res)=>
    {
        setServer(res.data);
        setMsg("");
    }).catch((err)=>{
        setMsg(err.message+" , data not exist");
    })
  }

    return(
        <>
        <br/>
        <br/>
        <br/>
        <div className="formContainer">
            <p>Delete Operation</p>
            <input type="text" placeholder='Enter server id' name="id" onChange={handleInput}/>
            <button onClick={sendRequest}>Delete</button>
            <pre>{server}</pre>
            <pre>{msg}</pre>
        </div>
        </>
    )
    
}

export default Delete;