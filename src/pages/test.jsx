import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Test() {
    const [result, setResult] = useState()
    const [trigger, setTrigger] = useState(false)
    const data = {"breweer":"Moka Pot","name":"","coffee_weight":16,"water":160,"ratio":10,"equipment":[{"name":"Coffee","description":"test"}],"note":"test","public":false,"process":[{"name":"","time":"23","comment":"","water":"133"}],"grind_size":"Medium","temp":80,"roast_level":"Medium"}
    const navigate = useNavigate();
    const header = {
      headers: {
          'accept': 'application/json',
          'x-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIn0.xxMLezVa5jtc7hSBVJ8vEPvqesEQNu0CIQNK2pw5sZc',
          'Content-Type': 'application/json'
      }
  }
    useEffect(() => {
      const fetchData  = async () => { 
        try{
          if(trigger){
            const result = await axios.post('https://q27z6n.deta.dev/recipes', data, header)
            setTrigger(false)
          }
      } catch(error){
        console.log(error.response.status)
      }
    };
      fetchData()
      }, [trigger]);
    

  return (
    <div>
      <button onClick={()=>{setTrigger(!trigger)}}>for test</button>
      <p>{result}</p>
    </div>
  )
}
