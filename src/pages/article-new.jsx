import React from 'react'
import { useState } from 'react';
import SunEditor,{buttonList} from "suneditor-react";
import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File
import BackButton from '../components/backbutton';
import { Base64 } from 'js-base64';
import { encode, decode } from 'js-base64';
import { Link } from 'react-router-dom';

export default function ArticleNew() {
  const [data, setData] = useState("")
  const [contents, setContents] = useState('')
  const [title, setTitle] = useState('')
  const handleChange = (content) =>{
    setData(content)
  }

  return (
    <div>
  <div className="div_back"><Link to="/article" ><i className="icon ion-android-arrow-back" id="Back_icon" /></Link></div>
  <div className="d-flex div_a" style={{ width: '80%', marginLeft: '20%' }}>
    <button onClick={()=>{setData(20)}} className="btn" id="brew_save_btn" type="button"><i className="fas fa-save Add_icon" style={{ fontSize: '25px' }} /></button></div>
  <div id="main_template">
    <div className="container article_container">
    <button onClick={() => {navigator.clipboard.writeText(Base64.encode(title))}}>copy</button>
        <h3>title :</h3><input value={title} onChange={(e)=>{setTitle(e.target.value)}} />
        <SunEditor onChange={setData} width="100%" height='100%'
        setOptions={{ 
					buttonList: [...buttonList.formatting, ['image']] // Or Array of button list, eg. [['font', 'align'], ['image']]
                    // plugins: [font] set plugins, all plugins are set by default
					// Other option
			}} />
        <p>{Base64.encode(data)}</p>
    </div>
  </div>
  <div className="d-flex" id="Header">
    <p id="header_paragraph">New Article</p>
  </div>
  <div className="d-flex" id="Footer" />
</div>


  )
}
