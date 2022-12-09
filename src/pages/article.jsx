import React from 'react'
import NavBar from '../components/navbar'
import "../styles/Coffee_Article.css"
import "../styles/Multiple-Input-Select-Pills.css"
import "../styles/Profile_page.css"
import "../styles/Round_switch.css"
import "../styles/styles.css"
import "../styles/Ultimate-Sidebar-Menu-BS5.css"
import "../styles/Features-Clean.css"
import CardArticle from '../components/cardarticle'

import { useTranslation } from 'react-i18next';

export default function ArticleMain() {
  const { t, i18n } = useTranslation();
  const article = {
    
  }
  return (
    <div>
  <NavBar />
  <div id="main_template">
    <div className="container article_container">
      <div className="row">
        <CardArticle />
          
      </div>
      <div style={{height: '50px'}} />
    </div>
  </div>
  <div className="d-flex" id="Header">
    <p id="header_paragraph">{t("Atext01")}</p>
  </div>
  <div className="d-flex" id="Footer" />
</div>


  )
}
