import React,{useState} from 'react';
import axios from 'axios';


const Read = ()=>{
    
    const [id, setId] = useState({id:""});
    const [msg,setMsg] = useState("");
    const [server,setServer] = useState([]);

    const handleInput = (e)=>
    {
        setId({...id,[e.target.name]:e.target.value});
    }

    const sendRequest = ()=>{
        if(id.id != ""){
            axios.get("http://localhost:8080/getServer/"+`${id.id}`).then((res)=>{
                setServer(res.data);
                setMsg("");
    }).catch((err)=>{
        setMsg(err.message+" , no Record found");
    });

    }else{
        setMsg("Server Id required");
    }
    
  }

    return(
        <>
        <br/>
        <br/>
        <br/>
        <div className="formContainer">
            <p>Read Operation</p>
            <input type="text" placeholder='Enter server Id' name="id" onChange={handleInput}/>
            <button onClick={sendRequest}>send</button> 
            {server.length != 0   && 
            <div className='mainContainer'>
                <p>Server Id : {server.id}</p>
                <p>Server Name : {server.name}</p>
                <p>Language : {server.language}</p>
                <p>Framework : {server.framework}</p>
            </div>
          }
          <pre>{msg}</pre>
        </div>
        </>
    );
    
}

export default Read;