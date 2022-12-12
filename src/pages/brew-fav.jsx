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

import { useTranslation } from 'react-i18next';

export default function BrewFav() {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <NavBar />
      <div className="d-flex div_a"><Link to="/brew-new"><a href=""><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-plus-circle Add_icon">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
      </svg></a></Link></div>
      <div id="main_template">
        <div className="container" id="search_contrainer">
          <div className="input-group"><input className="form-control" type="search" id="search_input" /><button className="btn btn-primary" data-bss-hover-animate="pulse" id="search_button" type="button"><i className="fa fa-search" id="Tool_icon" style={{ color: '#ffffff' }} /></button></div>
        </div>
        <div className="container" id="recipelist_container" style={{ marginTop: '-70px' }}>
          <div id="method_result_card">
            <div className="row">
              <div className="col"><a href="Brewing_Guide.html">
                <div className="card" style={{ height: '65px', background: 'rgba(255,255,255,0)', borderStyle: 'none' }}>
                  <div className="card-body fcard_body">
                    <div className="row">
                      <div className="col d-flex justify-content-center method_result_col">
                        <div className="method_result_ico_border"><img className="method_result_ico" src="assets/img/Hario_ICO.png" /></div>
                      </div>
                      <div className="col d-flex align-items-center" style={{ maxWidth: '550px', minWidth: '200px' }}>
                        <p className="recipe_title2">Recipe name<br /></p>
                      </div>
                    </div>
                  </div>
                </div>
              </a></div>
            </div>
            <div className="row">
              <div className="col">
                <div className="btn-group d-flex" role="group" style={{ width: '100%' }}><button className="btn btn-primary" data-bss-hover-animate="jello" id="Tool_color" type="button"><i className="fa fa-pencil" id="Tool_icon" /></button><a className="btn btn-primary" role="button" data-bss-hover-animate="jello" id="Tool_color" href="Community_shared.html"><i className="fas fa-share" id="Tool_Shared" /></a><button className="btn btn-primary" data-bss-hover-animate="jello" id="Tool_color" type="button"><i className="fas fa-heart-broken" id="Tool_Faved" /></button><button className="btn btn-primary" data-bss-hover-animate="jello" id="Tool_color" type="button"><i className="fas fa-trash" id="Tool_icon" /></button></div>
              </div>
            </div>
          </div>
          <div id="method_result_card">
            <div className="row">
              <div className="col"><a href="Brewing_Guide.html">
                <div className="card" style={{ height: '65px', background: 'rgba(255,255,255,0)', borderStyle: 'none' }}>
                  <div className="card-body fcard_body">
                    <div className="row">
                      <div className="col d-flex justify-content-center method_result_col">
                        <div className="method_result_ico_border"><img className="method_result_ico" src="assets/img/Frenchpress_ICO.png" /></div>
                      </div>
                      <div className="col d-flex align-items-center" style={{ maxWidth: '550px', minWidth: '200px' }}>
                        <p className="recipe_title2">Recipe name&nbsp;</p>
                      </div>
                    </div>
                  </div>
                </div>
              </a></div>
            </div>
            <div className="row">
              <div className="col">
                <div className="btn-group d-flex" role="group" style={{ width: '100%' }}><button className="btn btn-primary" data-bss-hover-animate="jello" id="Tool_color" type="button"><i className="fa fa-pencil" id="Tool_icon" /></button><a className="btn btn-primary" role="button" data-bss-hover-animate="jello" id="Tool_color" href="Community_shared.html"><i className="fas fa-share" id="Tool_icon" /></a><button className="btn btn-primary" data-bss-hover-animate="jello" id="Tool_color" type="button"><i className="fas fa-heart-broken" id="Tool_Faved" /></button><button className="btn btn-primary" data-bss-hover-animate="jello" id="Tool_color" type="button"><i className="fas fa-trash" id="Tool_icon" /></button></div>
              </div>
            </div>
          </div>
          <div id="method_result_card">
            <div className="row">
              <div className="col"><a href="Brewing_Guide.html">
                <div className="card" style={{ height: '65px', background: 'rgba(255,255,255,0)', borderStyle: 'none' }}>
                  <div className="card-body fcard_body">
                    <div className="row">
                      <div className="col d-flex justify-content-center method_result_col">
                        <div className="method_result_ico_border"><img className="method_result_ico" src="assets/img/Chemex_ICO.png" /></div>
                      </div>
                      <div className="col d-flex align-items-center" style={{ maxWidth: '550px', minWidth: '200px' }}>
                        <p className="recipe_title2">Recipe name&nbsp;</p>
                      </div>
                    </div>
                  </div>
                </div>
              </a></div>
            </div>
            <div className="row">
              <div className="col">
                <div className="btn-group d-flex" role="group" style={{ width: '100%' }}><button className="btn btn-primary" data-bss-hover-animate="jello" id="Tool_color" type="button"><i className="fa fa-pencil" id="Tool_icon" /></button><a className="btn btn-primary" role="button" data-bss-hover-animate="jello" id="Tool_color" href="Community_shared.html"><i className="fas fa-share" id="Tool_icon" /></a><button className="btn btn-primary" data-bss-hover-animate="jello" id="Tool_color" type="button"><i className="fas fa-heart-broken" id="Tool_Faved" /></button><button className="btn btn-primary" data-bss-hover-animate="jello" id="Tool_color" type="button"><i className="fas fa-trash" id="Tool_icon" /></button></div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="d-flex" id="Header">
        <p id="header_paragraph">{t("Btext02")}</p>
      </div>
      <div className="d-flex" id="Footer">
        <Link to="/"><a className="btn btn-primary" role="button" data-bss-hover-animate="pulse" id="fbrew_button" href="">
          <img src="assets/img/Cup%20Icon.png" style={{ width: '50px', marginTop: '-17px' }} /></a></Link>
        <button className="btn btn-primary disabled d-flex" data-bss-hover-animate="pulse" id="ffav_button" type="button" disabled>
          <img src="assets/img/Favorite%20Icon.png" style={{ width: '42px' }} /></button></div>
    </div>
  )
}
