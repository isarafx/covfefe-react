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
    { link: "/article/1", name: "ปัจจัยที่มีผลต่อรสชาติของกาแฟ ที่คุณควรรู้", detail: "test", pic: "./Article1/Article1_sub1.png" },
    { link: "/article/2", name: "Hario V60 ชูกลิ่นอันหอมฟุ้งของกาแฟให้โดดเด่น", detail: "test", pic: "./Article2/Article2_sub1.jpg" },
    { link: "/article/3", name: "คำศัพท์เฉพาะวงการกาแฟที่น่าสนใจ", detail: "test", pic: "./Article3/Article3_1.jpeg" },
    { link: "/article/4", name: "Moka Pot เพลิดเพลินกับกาแฟเอสเปรสโซ่ได้อย่างง่ายดาย", detail: "โมก้าพ็อตได้รับการพัฒนาขึ้นเมื่อปี 1933 โดยอัลฟอนโซ", pic: "./Article4/Article4_1.png" },
  ]
  return (
    <div>
      <NavBar />

      <div className="d-flex div_a"><a href="Brewing_NewBrewing.html"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-plus-circle Add_icon">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
      </svg></a></div>


      <div id="main_template">
        <div className="container article_container">
          <div className="row">
            {article.map((item) => {
              return (<CardArticle name={item.name} link={item.link} detaill={item.detail} pic={item.pic} />)
            })}

          </div>
          

          <div className="col-md-4 article_column">
            <a href="Article_content.html">
              <div className="d-flex justify-content-center align-items-center">
                <div className="card" id="a_card">
                  <div className="card-body" data-bss-hover-animate="pulse">
                    <div className="d-flex justify-content-center"><img className="d-flex article_picture" src="assets/img/Article_Dummy.png" /></div>
                    <h4 className="card-title article_title">ชอบกาแฟ1</h4>
                    <p className="card-text article_description">====เนื้อหา====<br /></p>
                    <div className="btn-group" role="group" id="AdminManage_btn" style={{ width: '100%' }}><button className="btn btn-primary" id="article_admin_edit" type="button"><i className="fas fa-pencil-alt" id="Tool_icon" /></button><button className="btn btn-primary" id="article_admin_del" type="button"><i className="fas fa-trash" id="Tool_icon" /></button></div>
                  </div>
                </div>
              </div>
            </a>
          </div>


          <div style={{ height: '50px' }} />
        </div>
      </div>
      <div className="d-flex" id="Header">
        <p id="header_paragraph">{t("Atext01")}</p>
      </div>
      <div className="d-flex" id="Footer" />
    </div>


  )
}
