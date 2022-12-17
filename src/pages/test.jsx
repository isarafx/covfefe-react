import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { UpdateFav } from '../method/updateFav';
import { getToken } from '../method/localStorageMethod';
export default function Test() {
    const [result, setResult] = useState()
    const [trigger, setTrigger] = useState(false)
    const data = {"breweer":"Moka Pot","name":"","coffee_weight":16,"water":160,"ratio":10,"equipment":[{"name":"Coffee","description":"test"}],"note":"test","public":false,"process":[{"name":"","time":"23","comment":"","water":"133"}],"grind_size":"Medium","temp":80,"roast_level":"Medium"}
  //   const navigate = useNavigate();
  //   const header = {
  //     headers: {
  //         'accept': 'application/json',
  //         'x-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIn0.xxMLezVa5jtc7hSBVJ8vEPvqesEQNu0CIQNK2pw5sZc',
  //         'Content-Type': 'application/json'
  //     }
  // }
  //   useEffect(() => {
  //     const fetchData  = async () => { 
  //       try{
  //         if(trigger){
  //           const result = await axios.post('https://q27z6n.deta.dev/recipes', data, header)
  //           setTrigger(false)
  //         }
  //     } catch(error){
  //       console.log(error.response.status)
  //     }
  //   };
  //     fetchData()
  //     }, [trigger]);
    
  function test(){
    console.log(getToken())
  }

  return (
    <div>
      <form id="image_upload" method="post" action="https://q27z6n.deta.dev/users/images" encType="multipart/form-data">
        <input type="hidden" name="token" value="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIn0.xxMLezVa5jtc7hSBVJ8vEPvqesEQNu0CIQNK2pw5sZc" />
        <input type="file" name="file" accept="image/png, image/jpeg" />
        <input type="submit" />
      </form>
    </div>
  )
}
