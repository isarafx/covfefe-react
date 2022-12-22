import React from 'react'
import { useParams } from 'react-router';

import "../styles/Coffee_Article.css"
import "../styles/Multiple-Input-Select-Pills.css"
import "../styles/Profile_page.css"
import "../styles/Round_switch.css"
import "../styles/styles.css"
import "../styles/Ultimate-Sidebar-Menu-BS5.css"
import "../styles/Features-Clean.css"
import "../styles/content-styles.css"
import SunEditor, { buttonList } from "suneditor-react";
import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File
import BackButton from '../components/backbutton';
import { Base64 } from 'js-base64';
import { encode, decode } from 'js-base64';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

export default function ArticleRead() {
  const { t, i18n } = useTranslation();


  const [data, setData] = useState('')
  const { id } = useParams();
  const [contents, setContents] = useState('')
  useEffect(() => {
    const FetchData = async () => {
      const result = await axios.get(`https://q27z6n.deta.dev/articles`);
      // console.log(Base64.decode(result.data['items'][6]['content']))
      setContents(Base64.decode(result.data['items'].filter((item) => item.key === id)[0]['content']))
    }
    FetchData()
    console.log('here')
  }, [])
  return (
    <div>
      <BackButton />
      <div id="main_template">

        <div className="container article_container">
          <div>
            <div
              dangerouslySetInnerHTML={{ __html: contents }}
            />
          </div>
        </div>
        <div style={{ height: "50px" }} />
      </div>

      <div className="d-flex" id="Header">
        <p id="header_paragraph">{t("Atext01")}</p>
      </div>
      <div className="d-flex" id="Footer" />
    </div>

  )
}