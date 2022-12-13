import React from 'react'

import { CKEditor } from '@ckeditor/ckeditor5-react';
import { Editor} from 'ckeditor5-custom-build/build/ckeditor'
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useState } from 'react';

export default function ArticleNew() {
  const [data, setData] = useState("")
  return (
    <div>
  <div className="div_back"><a href="{javascript:history.back()}"><i className="icon ion-android-arrow-back" id="Back_icon" /></a></div>
  <div id="main_template">
    <div className="container article_container">
    <button onClick={() => {navigator.clipboard.writeText(data)}}>copy</button>
    <CKEditor
                    editor={ Editor }
                    data=""
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        setData(editor.getData());
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                />
        <h1>test</h1>
    </div>
  </div>
  <div className="d-flex" id="Header">
    <p id="header_paragraph">New Article</p>
  </div>
  <div className="d-flex" id="Footer" />
</div>


  )
}
