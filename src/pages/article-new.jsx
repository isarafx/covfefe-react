import React from 'react'

import { useState } from 'react';
import Editor from '../components/Editor';

export default function ArticleNew() {
  const [data, setData] = useState("")
  const handleChange = (content) =>{
    setData(content)
  }
  return (
    <div>
  <div className="div_back"><a href="{javascript:history.back()}"><i className="icon ion-android-arrow-back" id="Back_icon" /></a></div>
  <div id="main_template">
    <div className="container article_container">
    <button onClick={() => {navigator.clipboard.writeText(data)}}>copy</button>
        <Editor />
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
