import React from 'react'

import "../styles/Community.css"
import "../styles/Multiple-Input-Select-Pills.css"
import "../styles/Profile_page.css"
import "../styles/Round_switch.css"
import "../styles/styles.css"
import "../styles/Ultimate-Sidebar-Menu-BS5.css"
import "../styles/Features-Clean.css"
import NavBar from '../components/navbar'
import { Link } from 'react-router-dom'
import CommuShopCard from '../components/commushopcard'
export default function CommuShop() {
  return (
    <div>
  <NavBar />
  <div id="main_template">
    <div className="container" id="search_contrainer">
      <div className="input-group"><span className="input-group-text" id="search_filter2">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span><input className="form-control" type="search" id="search_input2" /><button className="btn btn-primary" data-bss-hover-animate="pulse" id="search_button2" type="button"><i className="fas fa-search" id="Tool_icon" style={{color: '#ffffff'}} /></button></div>
      <div className="d-flex justify-content-center Page_Head" style={{marginBottom: '20px'}}>
        <p id="Page_Head_text">ค้นหาผลิตภัณฑ์กาแฟ</p>
      </div>
    </div>
    <div className="container" id="shop_container">
      <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-2 row-cols-xxl-2" style={{marginBottom: '10px'}}>
        <CommuShopCard />
      </div>
    </div>
  </div>
  <div className="d-flex" id="Header">
    <p id="header_paragraph">ชุมชน</p>
  </div>
  <div className="d-flex" id="Footer">
    <Link to="/commu-main"><a className="btn btn-primary" role="button" data-bss-hover-animate="pulse" id="findex_button" href="">
      <img src="assets/img/Mug%20icon.png" style={{width: '35px', marginTop: '-8px'}} /></a></Link>
      <button className="btn btn-primary disabled d-flex justify-content-center align-items-center" data-bss-hover-animate="pulse" id="fshop_button" type="button" disabled>
        <img src="assets/img/Shop%20Icon.png" style={{width: '34px'}} /></button></div>
</div>


  )
}
