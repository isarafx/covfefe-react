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
    
  const token = localStorage.getItem('token')
  const [file, setFile] = useState(null);

  const handleChange = (event) => {
    setFile(event.target.files[0]);
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
  
    const formData = new FormData();
    formData.append('file', file);
    formData.append('token', token)
    axios.post('https://q27z6n.deta.dev/users/images', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
    const [axiosTest, setAxiosTest] = useState('test')
    const fetchData  = async () => { 
      try{
          const result = await axios.get('https://q27z6n.deta.dev/recipes/users', { headers: { 'accept': 'application/json', 'x-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImlzYXJhd25AZ21haWwuY29tIiwidXNlcm5hbWUiOiJpc2FyYXduIn0.DBhvxU9uZtRJCHbUItDEVqWIPfxkExzQ9wVsiVskV2E", 'Content-Type': 'application/json' }})
        }
         catch(error){
      console.log(error.response)
    }
  };
  return (
    <div>
      <form id="image_upload" onSubmit={handleSubmit}>
        <input type="file" name="file" accept="image/png, image/jpeg" onChange={handleChange} />
        <input type="submit" />
      </form>
      <h1>{JSON.stringify(axiosTest)}</h1>
      <button onClick={fetchData} >test button</button>
    </div>
  )
}
