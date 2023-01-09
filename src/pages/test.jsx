import React from 'react'
import { useState } from 'react'
import { postAll } from '../method/mmss';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export default function Test() {
  const [data, setData] = useState('{}')
  const MySwal = withReactContent(Swal)
  function handleClick(e){
    setData(localStorage.getItem('update'))
  }
  function handlePost(){
    postAll()
  }
  function indexPage(){
    MySwal.fire({
      position: 'bottom-end',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
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