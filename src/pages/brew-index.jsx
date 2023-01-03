import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../components/navbar'
import NewBrewButton from '../components/newbrewbutton'

import { useState } from 'react'
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
import imgcup from "../assets/img/Cup Icon.png"
import imgfav from "../assets/img/Favorite Icon.png"
import imghar from "../assets/img/Hario V60.png"
import imgaer from "../assets/img/Aeropress2.png"
import imgfre from "../assets/img/Frenchpress.png"
import imgmok from "../assets/img/MokaPot.png"
import imgche from "../assets/img/Chemex.png"
import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'
import { postAll } from '../method/mmss'
export default function BrewIndex() {
  const { t, i18n } = useTranslation();

  const changeLanguageHandler = (lang) =>
     {
       i18n.changeLanguage("th")
     }
  let [online, isOnline] = useState(navigator.onLine);
  const setOnline = () => { isOnline(true); postAll() };
  const setOffline = () => { isOnline(false); };
  useEffect(() => { window.addEventListener('offline', setOffline); window.addEventListener('online', setOnline); return () => { window.removeEventListener('offline', setOffline); window.removeEventListener('online', setOnline); } }, []);
  useEffect(()=>{
      if(online){
        postAll()
      }
      document.title = t("Covfefe")
  }, [])
  return (
    <div>
      <NavBar />
      <NewBrewButton />
  <div id="main_template">
    <div className="container" style={{paddingTop: '60px'}}>
      <div className="row row-cols-2 row-cols-sm-2 row-cols-md-4 row-cols-lg-4 row-cols-xl-4 row-cols-xxl-4">
        <div className="col d-flex d-sm-flex d-md-flex d-lg-flex d-xl-flex d-xxl-flex justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-center justify-content-xl-center justify-content-xxl-center">
          <div className="d-flex justify-content-center align-items-center Method_box"><Link to="/brew-recipe/hario">
              <div className="card d-flex mcard" data-bss-hover-animate="pulse">
                <div className="card-body" style={{textAlign: 'center'}}><img className="Method_icon" src={imghar} />
                  <h4 className="card-title Method_name">Hario V60</h4>
                </div>
              </div>
            </Link></div>
        </div>
        <div className="col d-flex d-sm-flex d-md-flex d-lg-flex d-xl-flex d-xxl-flex justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-center justify-content-xl-center justify-content-xxl-center">
          <div className="d-flex justify-content-center align-items-center Method_box"><Link to="/brew-recipe/aeropress">
              <div className="card d-flex mcard" data-bss-hover-animate="pulse">
                <div className="card-body" style={{textAlign: 'center'}}><img className="Method_icon" src={imgaer} />
                  <h4 className="card-title Method_name">Aeropress</h4>
                </div>
              </div>
            </Link></div>
        </div>
        <div className="col d-flex d-sm-flex d-md-flex d-lg-flex d-xl-flex d-xxl-flex justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-center justify-content-xl-center justify-content-xxl-center">
          <div className="d-flex justify-content-center align-items-center Method_box"><Link to="/brew-recipe/frenchpress">
              <div className="card d-flex mcard" data-bss-hover-animate="pulse">
                <div className="card-body" style={{textAlign: 'center'}}><img className="Method_icon" src={imgfre} />
                  <h4 className="card-title Method_name">French Press<br /></h4>
                </div>
              </div>
            </Link></div>
        </div>
        <div className="col d-flex d-sm-flex d-md-flex d-lg-flex d-xl-flex d-xxl-flex justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-center justify-content-xl-center justify-content-xxl-center">
          <div className="d-flex justify-content-center align-items-center Method_box"><Link to="/brew-recipe/mokapot">
              <div className="card d-flex mcard" data-bss-hover-animate="pulse">
                <div className="card-body" style={{textAlign: 'center'}}><img className="Method_icon" src={imgmok} />
                  <h4 className="card-title Method_name">Moka Pot</h4>
                </div>
              </div>
            </Link></div>
        </div>
        <div className="col d-flex d-sm-flex d-md-flex d-lg-flex d-xl-flex d-xxl-flex justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-center justify-content-xl-center justify-content-xxl-center">
          <div className="d-flex justify-content-center align-items-center Method_box"><Link to="/brew-recipe/chemex">
              <div className="card d-flex mcard" data-bss-hover-animate="pulse">
                <div className="card-body" style={{textAlign: 'center'}}><img className="Method_icon" src={imgche} />
                  <h4 className="card-title Method_name">Chemex</h4>
                </div>
              </div>
            </Link></div>
        </div>
        <div className="col">
          <div />
        </div>
      </div>
    </div>
  </div>
  <div className="d-flex" id="Header">
    <p id="header_paragraph">{t("Btext01")}</p>
  </div>
  <div className="d-flex" id="Footer">
    <button className="btn btn-primary disabled" data-bss-hover-animate="pulse" id="brew_button" type="button" disabled>
      <img src={imgcup} style={{width: '50px', marginTop: '-17px'}} /></button>
      <Link to="/favorite" className="btn btn-primary d-flex" role="button" data-bss-hover-animate="pulse" id="fav_button" >
        <img src={imgfav} style={{width: '42px'}} /></Link></div>
</div>
  )
}
