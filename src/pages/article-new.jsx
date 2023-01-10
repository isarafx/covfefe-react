import React from 'react'
import { useState } from 'react';
import SunEditor,{buttonList} from "suneditor-react";
import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File
import BackButton from '../components/backbutton';
import { Base64 } from 'js-base64';
import { encode, decode } from 'js-base64';
import { Link } from 'react-router-dom';
import axios from 'axios'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useNavigate } from 'react-router-dom'

export default function ArticleNew() {
  const [data, setData] = useState("")
  const [contents, setContents] = useState('')
  const [title, setTitle] = useState('')
  const navigate = useNavigate()
  const [imgurl, setimgurl] = useState()
  const [imgHeader, setimgHeader] = useState()
  const MySwal = withReactContent(Swal)
  const token = localStorage.getItem('token')
  const [file, setFile] = useState(null);
  
  const handleChange = (content) =>{
    setData(content)
  }
  const handleSelectPhoto = (event) => {
    setFile(event.target.files[0]);
    setimgurl(URL.createObjectURL(event.target.files[0]))
  }
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();

    formData.append('file', file);
    formData.append('token', token)
    console.log(formData)
    MySwal.fire({ icon: 'info', title: 'Uploading', text: 'Uploading', allowEscapeKey: false, allowOutsideClick: false , showConfirmButton: false, timer: 2000})
    axios.post('https://q27z6n.deta.dev/admin/images', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then((response) => {
        console.log(response.data);
        setimgHeader(`https://q27z6n.deta.dev${response.data.detail}`)
        MySwal.fire({ icon: 'success', title: 'Upload Successfully', text: 'Upload Successfully', allowEscapeKey: false, allowOutsideClick: false , showConfirmButton: false, timer: 700})
      })
      .catch((error) => {
        MySwal.fire({ icon: 'error', title: 'Upload Failed', text: 'Upload Failed', allowEscapeKey: false, allowOutsideClick: false })
        console.log(error);
      });


  }

  const Record  = async () => {
      try{
          let postBody = {
              "title": title,
              "content": Base64.encode(data),
              "image": imgHeader
          }
          let token = localStorage.getItem('token')
          const result = await axios.post(`https://q27z6n.deta.dev/articles`, JSON.stringify(postBody), { headers: { 'x-token': token, 'Content-Type': 'application/json' } });
          console.log('posted successfully')
          navigate('/article')
      }catch(error){
        console.log(error.response)
      }
  }
  const returnBody = () =>{
    return { "title": title, "content": Base64.encode(data), "image": imgHeader }
  }
  return (
    <div>
  <div className="div_back"><Link to="/article" ><i className="icon ion-android-arrow-back" id="Back_icon" /></Link></div>
  <div className="d-flex div_a" style={{ width: '80%', marginLeft: '20%' }}>
    <button onClick={()=>{Record()}} className="btn" id="brew_save_btn" type="button"><i className="fas fa-save Add_icon" style={{ fontSize: '25px' }} /></button></div>
  <div id="main_template">
    <div className="container article_container">
    <button onClick={() => {navigator.clipboard.writeText(JSON.stringify(returnBody()))}}>copy</button>
        <div className='d-inline-flex'>
          <h3>title :</h3>
          <input value={title} onChange={(e)=>{setTitle(e.target.value)}} />
        </div>
        <form id="image_upload" onSubmit={handleSubmit}>
            <input type="file" name="file" accept="image/png, image/jpeg" onChange={handleSelectPhoto} />
            <input type="submit" />
        </form>

        <SunEditor onChange={setData} width="100%" height='100%'
        setOptions={{ 
					buttonList: [...buttonList.formatting, ['image']] // Or Array of button list, eg. [['font', 'align'], ['image']]
                    // plugins: [font] set plugins, all plugins are set by default
					// Other option
			}} />
        {/* <p>{Base64.encode(data)}</p> */}
    </div>
  </div>
  <div className="d-flex" id="Header">
    <p id="header_paragraph">New Article</p>
  </div>
  <div className="d-flex" id="Footer" />
</div>


  )
}
