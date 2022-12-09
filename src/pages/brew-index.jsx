import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../components/navbar'
import NewBrewButton from '../components/newbrewbutton'
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
import { useTranslation } from 'react-i18next'
export default function BrewIndex() {
  const { t, i18n } = useTranslation();

  const changeLanguageHandler = (lang) =>
     {
       i18n.changeLanguage("th")
     }
  return (
    <div>
      <NavBar />
      <NewBrewButton />
  <div id="main_template">
    <div className="container" style={{paddingTop: '60px'}}>
      <div className="row row-cols-2 row-cols-sm-2 row-cols-md-4 row-cols-lg-4 row-cols-xl-4 row-cols-xxl-4">
        <div className="col d-flex d-sm-flex d-md-flex d-lg-flex d-xl-flex d-xxl-flex justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-center justify-content-xl-center justify-content-xxl-center">
          <div className="d-flex justify-content-center align-items-center Method_box"><Link to="/brew-recipe/hario-v60"><a href="">
              <div className="card d-flex mcard" data-bss-hover-animate="pulse">
                <div className="card-body" style={{textAlign: 'center'}}><img className="Method_icon" src="assets/img/Hario%20V60.png" />
                  <h4 className="card-title Method_name">{t('Ltext01')}</h4>
                </div>
              </div>
            </a></Link></div>
        </div>
        <div className="col d-flex d-sm-flex d-md-flex d-lg-flex d-xl-flex d-xxl-flex justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-center justify-content-xl-center justify-content-xxl-center">
          <div className="d-flex justify-content-center align-items-center Method_box"><Link to="/brew-recipe/aeropress"><a href="">
              <div className="card d-flex mcard" data-bss-hover-animate="pulse">
                <div className="card-body" style={{textAlign: 'center'}}><img className="Method_icon" src="assets/img/Aeropress.png" />
                  <h4 className="card-title Method_name">Aeropress</h4>
                </div>
              </div>
            </a></Link></div>
        </div>
        <div className="col d-flex d-sm-flex d-md-flex d-lg-flex d-xl-flex d-xxl-flex justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-center justify-content-xl-center justify-content-xxl-center">
          <div className="d-flex justify-content-center align-items-center Method_box"><Link to="/brew-recipe/french-press"><a href="">
              <div className="card d-flex mcard" data-bss-hover-animate="pulse">
                <div className="card-body" style={{textAlign: 'center'}}><img className="Method_icon" src="assets/img/Frenchpress.png" />
                  <h4 className="card-title Method_name">French Press<br /></h4>
                </div>
              </div>
            </a></Link></div>
        </div>
        <div className="col d-flex d-sm-flex d-md-flex d-lg-flex d-xl-flex d-xxl-flex justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-center justify-content-xl-center justify-content-xxl-center">
          <div className="d-flex justify-content-center align-items-center Method_box"><Link to="/brew-recipe/moka-pot"><a href="">
              <div className="card d-flex mcard" data-bss-hover-animate="pulse">
                <div className="card-body" style={{textAlign: 'center'}}><img className="Method_icon" src="assets/img/MokaPot.png" />
                  <h4 className="card-title Method_name">Moka Pot</h4>
                </div>
              </div>
            </a></Link></div>
        </div>
        <div className="col d-flex d-sm-flex d-md-flex d-lg-flex d-xl-flex d-xxl-flex justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-center justify-content-xl-center justify-content-xxl-center">
          <div className="d-flex justify-content-center align-items-center Method_box"><Link to="/brew-recipe/chemex"><a href="">
              <div className="card d-flex mcard" data-bss-hover-animate="pulse">
                <div className="card-body" style={{textAlign: 'center'}}><img className="Method_icon" src="assets/img/Chemex.png" />
                  <h4 className="card-title Method_name">Chemex</h4>
                </div>
              </div>
            </a></Link></div>
        </div>
        <div className="col">
          <div />
        </div>
      </div>
    </div>
  </div>
  <div className="d-flex" id="Header">
    <p id="header_paragraph">วิธีการชงกาแฟเเนะนำ</p>
  </div>
  <div className="d-flex" id="Footer">
    <button className="btn btn-primary disabled" data-bss-hover-animate="pulse" id="brew_button" type="button" disabled>
      <img src="assets/img/Cup%20Icon.png" style={{width: '50px', marginTop: '-17px'}} /></button>
      <Link to="/brew-fav"><a className="btn btn-primary d-flex" role="button" data-bss-hover-animate="pulse" id="fav_button" href="">
        <img src="assets/img/Favorite%20Icon.png" style={{width: '42px'}} /></a></Link></div>
</div>
  )
}
