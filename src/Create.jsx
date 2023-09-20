import React,{useState} from 'react';
import './create.css';
import axios from 'axios'


const Create = ()=>{

    const handleInput = (e)=>
    {
        setServer({...server,[e.target.name]:e.target.value});
    }

    const [server,setServer] = useState({
        id:"",
        name:"",
        language:"",
        framework:""
    });

    const[res,setRes] = useState("");

    const handleSubmit = ()=>{
    axios.post("http://localhost:8080/create",{
        id:server.id,
        name:server.name,
        language:server.language,
        framework:server.framework
    }).then((res)=>{
        setRes(res.data);
    })
}

    return(
        <>
        <br/>
        <br/>
        <br/>
        <div className="formContainer">
            <p>Create Operation</p>
            <input type="text" onChange={handleInput} placeholder='Enter server Id' name="id"/>
            <input type="text" onChange={handleInput} placeholder='Enter server name' name="name"/>
            <input type="text" onChange={handleInput} placeholder='Enter language' name="language"/>
            <input type="text" onChange={handleInput} placeholder='Enter framework' name="framework"/>
            <button onClick={handleSubmit}>send</button>
            <pre>{res}</pre>
        </div>
        </>
    )  
}

export default Create;