import React from 'react'
import NavBar from '../components/navbar'
import CommuCard from '../components/commucard'
import "../styles/Community.css"
import "../styles/Multiple-Input-Select-Pills.css"
import "../styles/Profile_page.css"
import "../styles/Round_switch.css"
import "../styles/styles.css"
import "../styles/Ultimate-Sidebar-Menu-BS5.css"
import "../styles/Features-Clean.css"
import { Link } from 'react-router-dom'
import { useState } from 'react'

import { useTranslation } from 'react-i18next';

export default function CommuMain() {
  const { t, i18n } = useTranslation();
  const data = [
    {recipe_name:"recipe 1", note:"", fav:0, star:0, comment:0},
  ]
  const [type, setType] = useState(0)
  const [sort, setSort] = useState(0)
  return (
    <div>
      <NavBar />
  <div id="main_template">
    <div className="container" id="search_contrainer">
      <div className="input-group">
        <div className="dropdown"><button className="rounded-0 rounded-start btn btn-primary dropdown-toggle" aria-expanded="false" data-bs-toggle="dropdown" data-bss-hover-animate="pulse" id="search_filter2" type="button"><i className="fas fa-filter" style={{fontSize: '20px', fontWeight: 'bold'}} /></button>
          <div className="dropdown-menu">
          <a onClick={()=>{setSort(0)}} className="dropdown-item" href="#">{t("Ctext06")}</a>
          <a onClick={()=>{setSort(1)}} className="dropdown-item" href="#">{t("Ctext07")}</a></div>
        </div><input className="form-control" type="search" id="search_input2" /><button className="btn btn-primary" data-bss-hover-animate="pulse" id="search_button2" type="button"><i className="fas fa-search" id="Tool_icon" style={{color: '#ffffff'}} /></button>
      </div>
      <div className="d-flex d-sm-flex d-md-flex d-lg-flex d-xl-flex d-xxl-flex justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-center justify-content-xl-center justify-content-xxl-center Page_Head">
        <p id="Page_Head_text">{t("Ctext08")} {sort}</p>
      </div>
    </div>
    <div className="container d-flex justify-content-start align-items-center justify-content-sm-center" id="method_bar">
      <div className="d-flex justify-content-center align-items-center" id="Method_selectorbox">
        <div className="form-check d-flex align-items-center method_box">
          <input onClick={(e)=>{setType(0)}} className="form-check-input" type="radio" id="Radio_button" name="coffee" /><label className="form-check-label" htmlFor="Radio_button"><img className="Method_pic" src="assets/img/ALL_ICO.png" /></label></div>
      </div>
      <div className="d-flex justify-content-center align-items-center" id="Method_selectorbox">
        <div className="form-check d-flex align-items-center method_box">
          <input onClick={(e)=>{setType(1)}} className="form-check-input" type="radio" id="Radio_button" name="coffee" /><label className="form-check-label" htmlFor="Radio_button"><img className="Method_pic" src="assets/img/Hario_ICO.png" /></label></div>
      </div>
      <div className="d-flex justify-content-center align-items-center" id="Method_selectorbox">
        <div className="form-check d-flex align-items-center method_box">
          <input onClick={(e)=>{setType(2)}} className="form-check-input" type="radio" id="Radio_button" name="coffee" /><label className="form-check-label" htmlFor="Radio_button"><img className="Method_pic" src="assets/img/Aeropress_ICO.png" /></label></div>
      </div>
      <div className="d-flex justify-content-center align-items-center" id="Method_selectorbox">
        <div className="form-check d-flex align-items-center method_box">
          <input onClick={(e)=>{setType(3)}} className="form-check-input" type="radio" id="Radio_button" name="coffee" /><label className="form-check-label" htmlFor="Radio_button"><img className="Method_pic" src="assets/img/Moka_ICO.png" /></label></div>
      </div>
      <div className="d-flex justify-content-center align-items-center" id="Method_selectorbox">
        <div className="form-check d-flex align-items-center method_box">
          <input onClick={(e)=>{setType(4)}} className="form-check-input" type="radio" id="Radio_button" name="coffee" /><label className="form-check-label" htmlFor="Radio_button"><img className="Method_pic" src="assets/img/Frenchpress_ICO.png" /></label></div>
      </div>
      <div className="d-flex justify-content-center align-items-center" id="Method_selectorbox">
        <div className="form-check d-flex align-items-center method_box">
          <input onClick={(e)=>{setType(5)}} className="form-check-input" type="radio" id="Radio_button" name="coffee" /><label className="form-check-label" htmlFor="Radio_button"><img className="Method_pic" src="assets/img/Chemex_ICO.png" /></label></div>
      </div>
    </div>
    <div className="container" id="results_container">
      <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-2 row-cols-xxl-2" style={{marginBottom: '10px'}}>
        
        <CommuCard />
      </div>
    </div>
  </div>
  <div className="d-flex" id="Header">
    <p id="header_paragraph">{t("Ctext04")}</p>
  </div>
  <div className="d-flex" id="Footer"><button className="btn btn-primary disabled" data-bss-hover-animate="pulse" id="index_button" type="button" disabled>
    <img src="assets/img/Mug%20icon.png" style={{width: '35px', marginTop: '-8px'}} /></button>
    <Link to="/commu-shop"><a className="btn btn-primary d-flex justify-content-center align-items-center" role="button" data-bss-hover-animate="pulse" id="shop_button" href="">
      <img src="assets/img/Shop%20Icon.png" style={{width: '34px'}} /></a></Link></div>
</div>


  )
}
