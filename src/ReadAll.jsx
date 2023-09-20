import React,{useState} from 'react';
import axios from 'axios';
import './readAll.css'

const ReadAll = ()=>{

  const [data,setData] = useState([]);

  const sendRequest = ()=>
  {
    axios.get("http://localhost:8080/getServer").then((res)=>
    {
    setData(res.data);
    })
  }

  return(
    <> 
    <br/>
    <br/>
    <br/>
    <div className="formContainer">
      <p>Read all Operation</p>
      <button onClick={sendRequest}>Fetch</button>
      {data.map((value)=>{
        return(
          <>
          <div className='mainContainer'>
          <p>Server id : {value.id}</p>
          <p>Name : {value.name}</p>
          <p>Language : {value.language}</p>
          <p>Framework : {value.framework}</p>
          </div>
          </>
        )

      })}
    </div>
    </>
  )

}

export default ReadAll;