import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { UpdateFav } from '../method/updateFav';
import { getToken } from '../method/localStorageMethod';
import { useSearchParams } from 'react-router-dom';
import { postAll } from '../method/mmss';
export default function Test() {
  const [data, setData] = useState('{}')
  function handleClick(e){
    setData(localStorage.getItem('update'))
  }
  function handlePost(){
    postAll()
  }
  return (
    <div>
      <button onClick={handleClick}>Button</button>
      <button onClick={handlePost}>post</button>
      <h3>{data}</h3>
    </div>
  )
}