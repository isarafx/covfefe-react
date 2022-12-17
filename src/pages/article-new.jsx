import React from 'react'
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';
import { useState } from 'react';
import BackButton from '../components/backbutton';

export default function ArticleNew() {
  const [data, setData] = useState("")
  const handleChange = (content) =>{
    setData(content)
  }
  return (
    <div>
  <BackButton />
  <div className="d-flex div_a" style={{ width: '80%', marginLeft: '20%' }}><button className="btn" id="brew_save_btn" type="button"><i className="fas fa-save Add_icon" style={{ fontSize: '25px' }} /></button></div>
  <div id="main_template">
    <div className="container article_container">
    {/* <button onClick={() => {navigator.clipboard.writeText(data)}}>copy</button> */}
        <h3>title :</h3><input width="100%"/>
        
        <SunEditor />
        <p>{data}</p>
    </div>
  </div>
  <div className="d-flex" id="Header">
    <p id="header_paragraph">New Article</p>
  </div>
  <div className="d-flex" id="Footer" />
</div>


  )
}
