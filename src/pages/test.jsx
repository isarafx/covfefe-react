import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { UpdateFav } from '../method/updateFav';
import { getToken } from '../method/localStorageMethod';
import { useSearchParams } from 'react-router-dom';
export default function Test() {
  const [searchParams, setSearchParams] = useSearchParams();
  let brewer = searchParams.get("brewer")
  let id = searchParams.get("id")
  useEffect(()=>{
    console.log(brewer)
    console.log(id)
  }, [])
    // const [result, setResult] = useState()
    // const [trigger, setTrigger] = useState(false)
    // const data = {"breweer":"Moka Pot","name":"","coffee_weight":16,"water":160,"ratio":10,"equipment":[{"name":"Coffee","description":"test"}],"note":"test","public":false,"process":[{"name":"","time":"23","comment":"","water":"133"}],"grind_size":"Medium","temp":80,"roast_level":"Medium"}
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
    
  // const token = localStorage.getItem('token')
  // const [file, setFile] = useState(null);

  // const handleChange = (event) => {
  //   setFile(event.target.files[0]);
  // }
  
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  
  //   const formData = new FormData();
  //   formData.append('file', file);
  //   formData.append('token', token)
  //   axios.post('https://q27z6n.deta.dev/users/images', formData, {
  //     headers: {
  //       'Content-Type': 'multipart/form-data'
  //     }
  //   })
  //     .then((response) => {
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }
    const [data, setData] = useState([{"name": "hario"}, {"name": "filter"}, {"name": "monkey"}, {"name": "monday"}]);
    const [result, setResult] = useState([]);
    const [searchValue, setSearch] = useState("");
    function Search(){
      let temp = []
      for (let i = 0; i < data.length; i++) {
        if (data[i]['name'].toLowerCase().includes(searchValue.toLowerCase())) {
            // result.push(data[i]);
            temp.push(data[i]);
        }
      }
      setResult(temp)
    }
    const [testdata, setTestData] = useState({name:"123", surname:"456"})
    const [num, setNum] = useState(0)
  return (
    <div>
      <input value={searchValue} onChange={(e)=>{setSearch(e.target.value)}}></input>
      <button onClick={()=>{setTestData({...testdata, name:`potato${num}`});setNum(num+1)}}>test</button>
      <h3>{testdata.name}</h3>
    </div>
  )
}
