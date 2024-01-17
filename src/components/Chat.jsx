import React, { useRef, useState } from 'react';
import'./Chat.css';
import axios from 'axios';
import Loader from './Loader';

const Chat = () => {
    const inputRef = useRef(null);
    const[topic, setTopic]= useState("");
    const[data, setData]= useState("");
    const[loading, setLoading] =useState(false);
    const[isSearching, setIsSearching] = useState(false);
    const getResults= async()=>{
        setLoading(true);
        setIsSearching(true)
        try{
            const response = await axios.get(`http://localhost:5000/?topic=${topic}`);
            setData(response.data);
            setLoading(false);
        }
        catch(e){
            alert(e?.message || e);
        }
    }
  return (
    <div className='main-div'>
        <h3>Search your topics</h3>
        <div className='input-div'>
            <input type="text" placeholder=' Search any Topic here' ref={inputRef} className='input-box' onChange={(e)=>{setTopic(e.target.value), setData(""), setIsSearching(false)}} />
            <button className='search-btn' onClick={getResults}>Search</button>
        </div>
        {
            loading?
            <Loader width="250px"/> 
            :
            (topic !== "" ? data !== "" ? <> <div>Results for {topic}</div><div dangerouslySetInnerHTML={{__html:data}} className='result-div'></div> </> : isSearching && <div>No Results for {topic}</div>: <div className="results" >Search any Topic to see results here</div> )
        }
    </div>
  )
}

export default Chat;