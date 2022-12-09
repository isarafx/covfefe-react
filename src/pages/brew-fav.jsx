import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/Multiple-Input-Select-Pills.css"
import "../styles/Profile_page.css"
import "../styles/Round_switch.css"
import "../styles/styles.css"
import "../styles/Ultimate-Sidebar-Menu-BS5.css"
import "../styles/Brewing_Guide.css"
import "../styles/Brewing_Guide2.css"
import "../styles/Brewing_Guide3.css"
import "../styles/Brewing_Guide4.css"
import "../styles/Features-Clean.css"
import NavBar from '../components/navbar'

export default function BrewFav() {
  return (
    <div>
  <NavBar />
  <div className="d-flex div_a"><Link to="/brew-new"><a href=""><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-plus-circle Add_icon">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
      </svg></a></Link></div>
  <div id="main_template">
    <div className="container" id="search_contrainer">
      <div className="input-group"><input className="form-control" type="search" id="search_input" /><button className="btn btn-primary" data-bss-hover-animate="pulse" id="search_button" type="button"><i className="fa fa-search" id="Tool_icon" style={{color: '#ffffff'}} /></button></div>
    </div>
    <div className="container" id="favorite_contrainer1">
      <div>
        <div className="row">
          <div className="col">
            <p className="method_title1">Method Title : Count</p>
          </div>
        </div>
        <div className="row" id="method_result_list">
          <div className="col"><a href="https://www.google.com/">
              <div className="card" id="fcard1">
                <div className="card-body fcard_body">
                  <div className="row row-cols-2 d-flex">
                    <div className="col d-flex">
                      <p className="recipe_title1">Paragraph</p>
                    </div>
                    <div className="col d-flex justify-content-end" style={{paddingRight: '0px'}}>
                      <div className="btn-group d-flex" role="group"><button className="btn btn-primary" data-bss-hover-animate="jello" type="button" style={{background: '#bc000000'}}><i className="fa fa-pencil" id="Tool_icon" /></button><button className="btn btn-primary" data-bss-hover-animate="jello" type="button" style={{background: '#bc000000'}}><i className="fas fa-share" id="Tool_icon" /></button><button className="btn btn-primary" data-bss-hover-animate="jello" type="button" style={{background: '#bc000000'}}><i className="fas fa-heart-broken" id="Tool_icon" /></button><button className="btn btn-primary" data-bss-hover-animate="jello" type="button" style={{background: '#bc000000'}}><i className="fas fa-trash" id="Tool_icon" /></button></div>
                    </div>
                  </div>
                </div>
              </div>
            </a></div>
        </div>
        <div className="row" id="method_result_list">
          <div className="col"><a href="https://www.google.com/">
              <div className="card" id="fcard1">
                <div className="card-body fcard_body">
                  <div className="row row-cols-2 d-flex">
                    <div className="col d-flex">
                      <p className="recipe_title1">Paragraph</p>
                    </div>
                    <div className="col d-flex justify-content-end" style={{paddingRight: '0px'}}>
                      <div className="btn-group d-flex" role="group"><button className="btn btn-primary" data-bss-hover-animate="jello" type="button" style={{background: '#bc000000'}}><i className="fa fa-pencil" id="Tool_icon" /></button><button className="btn btn-primary" data-bss-hover-animate="jello" type="button" style={{background: '#bc000000'}}><i className="fas fa-share" id="Tool_icon" /></button><button className="btn btn-primary" data-bss-hover-animate="jello" type="button" style={{background: '#bc000000'}}><i className="fas fa-heart-broken" id="Tool_icon" /></button><button className="btn btn-primary" data-bss-hover-animate="jello" type="button" style={{background: '#bc000000'}}><i className="fas fa-trash" id="Tool_icon" /></button></div>
                    </div>
                  </div>
                </div>
              </div>
            </a></div>
        </div>
      </div>
    </div>
    <div className="container" id="favorite_contrainer2">
      <div>
        <div className="row">
          <div className="col">
            <p className="method_title2">Method Title : Count</p>
          </div>
        </div>
        <div className="row" id="method_result_list">
          <div className="col"><a href="https://www.amazon.com/">
              <div className="card" id="fcard2">
                <div className="card-body fcard_body">
                  <div className="row row-cols-2 d-flex">
                    <div className="col d-flex">
                      <p className="recipe_title2">Paragraph</p>
                    </div>
                    <div className="col d-flex justify-content-end" style={{paddingRight: '0px'}}>
                      <div className="btn-group d-flex" role="group"><button className="btn btn-primary" data-bss-hover-animate="jello" type="button" style={{background: '#bc000000'}}><i className="fa fa-pencil" id="Tool_icon" /></button><button className="btn btn-primary" data-bss-hover-animate="jello" type="button" style={{background: '#bc000000'}}><i className="fas fa-share" id="Tool_icon" /></button><button className="btn btn-primary" data-bss-hover-animate="jello" type="button" style={{background: '#bc000000'}}><i className="fas fa-heart-broken" id="Tool_icon" /></button><button className="btn btn-primary" data-bss-hover-animate="jello" type="button" style={{background: '#bc000000'}}><i className="fas fa-trash" id="Tool_icon" /></button></div>
                    </div>
                  </div>
                </div>
              </div>
            </a></div>
        </div>
        <div className="row" id="method_result_list">
          <div className="col"><a href="https://www.amazon.com/">
              <div className="card" id="fcard2">
                <div className="card-body fcard_body">
                  <div className="row row-cols-2 d-flex">
                    <div className="col d-flex">
                      <p className="recipe_title2">Paragraph<br /></p>
                    </div>
                    <div className="col d-flex justify-content-end" style={{paddingRight: '0px'}}>
                      <div className="btn-group d-flex" role="group"><button className="btn btn-primary" data-bss-hover-animate="jello" type="button" style={{background: '#bc000000'}}><i className="fa fa-pencil" id="Tool_icon" /></button><button className="btn btn-primary" data-bss-hover-animate="jello" type="button" style={{background: '#bc000000'}}><i className="fas fa-share" id="Tool_icon" /></button><button className="btn btn-primary" data-bss-hover-animate="jello" type="button" style={{background: '#bc000000'}}><i className="fas fa-heart-broken" id="Tool_icon" /></button><button className="btn btn-primary" data-bss-hover-animate="jello" type="button" style={{background: '#bc000000'}}><i className="fas fa-trash" id="Tool_icon" /></button></div>
                    </div>
                  </div>
                </div>
              </div>
            </a></div>
        </div>
      </div>
    </div>
  </div>
  <div className="d-flex" id="Header">
    <p id="header_paragraph">สูตรที่ฉันชื่นชอบ</p>
  </div>
  <div className="d-flex" id="Footer">
    <Link to="/"><a className="btn btn-primary" role="button" data-bss-hover-animate="pulse" id="fbrew_button" href="">
      <img src="assets/img/Cup%20Icon.png" style={{width: '50px', marginTop: '-17px'}} /></a></Link>
      <button className="btn btn-primary disabled d-flex" data-bss-hover-animate="pulse" id="ffav_button" type="button" disabled>
        <img src="assets/img/Favorite%20Icon.png" style={{width: '42px'}} /></button></div>
</div>
  )
}
