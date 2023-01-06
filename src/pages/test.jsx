import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { UpdateFav } from '../method/updateFav';
import { getToken } from '../method/localStorageMethod';
import { useSearchParams } from 'react-router-dom';
import { postAll } from '../method/mmss';
import { useContext } from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export default function Test() {
  const [data, setData] = useState('{}')
  const navigate = useNavigate()
  const MySwal = withReactContent(Swal)
  const [mytimer, setTimer] = useState(6000)
  function handleClick(e){
    setData(localStorage.getItem('update'))
  }
  function handlePost(){
    postAll()
  }
  function indexPage(){
    let timerInterval
    MySwal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
      allowEscapeKey: false,
      allowOutsideClick: false,
      timer: 5000,
  didOpen: () => {
    Swal.showLoading()
    const b = Swal.getHtmlContainer().querySelector('b')
    timerInterval = setInterval(() => {
      b.textContent = Swal.getTimerLeft()
    }, 100)
  },
  willClose: () => {
    clearInterval(timerInterval)
  }
    })
  }
  return (
    <div>
      <button onClick={handleClick}>Button</button>
      <button onClick={handlePost}>post</button>
      <button onClick={indexPage}>index</button>
      <button onClick={()=>{}}>index</button>
      <h3>{data}</h3>
    </div>
  )
}