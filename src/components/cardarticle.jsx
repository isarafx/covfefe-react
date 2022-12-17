import React from 'react'
import { Link } from 'react-router-dom'
export default function CardArticle({link="/", name="article.exe", detail="==เนื้อหา==", pic="assets/img/Article_Dummy.png"}) {
  return (
    <div className="col-md-4 article_column"><Link to={link} ><a href="">
            <div className="d-flex justify-content-center align-items-center">
              <div className="card" id="a_card">
                <div className="card-body" data-bss-hover-animate="pulse">
                  <div className="d-flex justify-content-center">
                    <img height="125" width="200" className="d-flex article_picture" src={pic} /></div>
                  <h4 className="card-title article_title">{name}</h4>
                  <p className="card-text article_description">{detail}<br /></p>
                </div>
              </div>
            </div>
          </a></Link></div>
  )
}
