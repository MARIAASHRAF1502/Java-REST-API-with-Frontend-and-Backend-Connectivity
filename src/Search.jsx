import React,{useState} from 'react';
import axios from 'axios';


const Search = ()=>
{

    const [name, setName] = useState({name:""});
    const [msg,setMsg] = useState("");
    const [serverDetails,setServerDetails] = useState([]);

    const handleInput = (e)=>
    {
        setName({...name,[e.target.name]:e.target.value});
    }

    const sendRequest = ()=>{
    axios.get("http://localhost:8080/findRecord/"+`${name.name}`).then((res)=>
    {
    setServerDetails(res.data);
    setMsg("");
    }).catch((err)=>
    {
      setMsg(err.message+" , no Record found");
    })
  }

    return(
      <>
      <br/>
      <br/>
      <br/>
      <div className="formContainer">
      <p>Search Operation</p>
      <input type="text" placeholder='Enter server name' name="name" onChange={handleInput}/>
      <button onClick={sendRequest}>send</button> 

      {
        serverDetails.map((value)=>{
          return(
            <>
            <div className='mainContainer'>
            <p>Server id : {value.id}</p>
            <p>Name : {value.name}</p>
            <p>Language : {value.language}</p>
            <p>Framework : {value.framework}</p>
            </div>
            </>
        )})
    }   

      <pre>{msg}</pre>  
      </div>
      </>
    )
    
}

export default Search;