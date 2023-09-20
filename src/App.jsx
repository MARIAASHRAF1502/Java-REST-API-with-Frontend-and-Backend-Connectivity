import React from 'react';
import { BrowserRouter as Router, Routes,Route,Link} from "react-router-dom";
import './App.css';
import ReadAll from './readAll';
import Create from './Create';
import Read from './Read';
import Search from './Search';
import Delete from './Delete';
import spring from './images/spring.png'
import postman from './images/postman.png'
import mongo from './images/mongo.png';



const App = ()=>
{

  return(
    <>
        <Router>
            <div className='headerblock'>
            <div className='headertitle'>
                <p>Java REST API</p>
                <img src={spring}></img>
                <img src={mongo}></img>
                <img src={postman}></img>
            </div>
            <div className='link'>  
                <Link to="/" className=''>Create</Link>
                <Link to="/readAll" className=''>Fetch</Link>
                <Link to="/read" className=''>Read</Link>
                <Link to="/search" className=''>Search</Link>
                <Link to="/delete" className=''>Delete</Link>      
            </div>  
            </div>
            <Routes>
              <Route path="/" element={<Create/>} />
              <Route path="/readAll" element={<ReadAll/>} />
              <Route path="/read" element={<Read/>} />
              <Route path="/search" element={<Search/>} />
              <Route path="/delete" element={<Delete/>} />
            </Routes>
        </Router>       

    </>
  )
    

}

export default App;