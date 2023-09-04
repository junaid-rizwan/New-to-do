import React, { useEffect } from 'react'
import { useState } from 'react';
import Task from './Task';




function Home() {
    const [goles,setGoles]=useState(localStorage.getItem('goles')?JSON.parse(localStorage.getItem("goles")):[]);
    const[title,setTitle]=useState("");
    const[discription,setDiscription]=useState("");


    const submitHandiler=(e)=>{
        e.preventDefault();//form will not refresh.
        setGoles([...goles,{title,discription}])//spread operater
       
        
    }
    useEffect(()=>{
        localStorage.setItem("goles",JSON.stringify(goles))


    },[goles])

    const deletetask=(index)=>{
        const filteredArr=goles.filter((val,i)=>{
            return i!==index;
        })
        setGoles(filteredArr);


    };

    


  return (

    <div className='container'>
        <h1>Daily Goles</h1>


        <form action="" onSubmit={submitHandiler}>
            <input type="text" placeholder='Title' value={title} onChange={(e)=>setTitle(e.target.value)}/>
            <textarea name="" id="" cols="30" rows="10" placeholder='Description' value={discription} onChange={(e)=>setDiscription(e.target.value)}></textarea>
            <button type='submit'>Add</button>
        </form>

       {goles.map((item,index)=>{
        return(
            <Task key={index} title={item.title} description={item.discription}
            deletetask={deletetask}
            index={index}/>
        )
       })}
      
    </div>
  )
}

export default Home
