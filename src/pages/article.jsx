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
  const article = [
    {link:"/article/1", name:"ปัจจัยที่มีผลต่อรสชาติของกาแฟ ที่คุณควรรู้", detail:"test", pic:"./Article1/Article1_sub1.png"},
    {link:"/article/2", name:"test", detail:"test", pic:"./Article2/Article2_sub1.jpg"},
    {link:"/article/3", name:"test", detail:"test", pic:"./Article3/Article3_1.jpeg"},
    {link:"/article/4", name:"test", detail:"test", pic:"./Article4/Article4_1.png"},
  ]
  return (
    <div>
  <NavBar />
  <div id="main_template">
    <div className="container article_container">
      <div className="row">
        {article.map((item)=>{
          return (<CardArticle name={item.name} link={item.link} detaill={item.detail} pic={item.pic} />)
        })}
          
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
