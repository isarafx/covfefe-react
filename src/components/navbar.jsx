import React from 'react'
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function NavBar() {
  const { t, i18n } = useTranslation()

  const [sidebarActive, setSidebarActive] = useState(false)
  const [overlayActive, setOverlayActive] = useState(false)

  function changeLanguage(){
    if(i18n.language==="en"){
      i18n.changeLanguage('th')
      localStorage.setItem('i18nextLng','th')
    }else{
      i18n.changeLanguage('en')
      localStorage.setItem('i18nextLng','en')
    }
  }
  return (<>
    <div id="Navbar" >
        <a onClick={() => {setOverlayActive(true);setSidebarActive(true)}} className="btn btn-primary btn-customized open-menu" role="button" style={{background: 'rgba(243,91,63,0)', fontSize: '16px', paddingLeft: '15px', paddingRight: '10px'}}>
        <i className="fa fa-navicon" style={{fontSize: '22px', color: 'rgba(107,62,30,0.85)'}} />&nbsp;
        </a>
        <div className={`sidebar ${sidebarActive ? "active": ""}`}>
          <div onClick={()=>{setSidebarActive(false); setOverlayActive(false)}} className="dismiss"><i className="fa fa-caret-left" /></div>
          <Link to="/"><div className="brand"><a className="navbar-brand">Coffee Cup<i className="fas fa-coffee" /></a></div></Link>
          <nav className="navbar navbar-dark navbar-expand">
            <div className="container-fluid">
              <ul className="navbar-nav flex-column me-auto">
              <Link to="/article"><li className="nav-item"><a onClick={()=>{setSidebarActive(false); setOverlayActive(false)}} className="nav-link"  style={{fontSize: '19px', marginBottom: '5px'}}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" style={{color: 'rgba(255,255,255,0.55)', fontSize: '24px'}}><path d="M12 6.25278V19.2528M12 6.25278C10.8321 5.47686 9.24649 5 7.5 5C5.75351 5 4.16789 5.47686 3 6.25278V19.2528C4.16789 18.4769 5.75351 18 7.5 18C9.24649 18 10.8321 18.4769 12 19.2528M12 6.25278C13.1679 5.47686 14.7535 5 16.5 5C18.2465 5 19.8321 5.47686 21 6.25278V19.2528C19.8321 18.4769 18.2465 18 16.5 18C14.7535 18 13.1679 18.4769 12 19.2528" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></svg>&nbsp;{t("Menu01")}</a></li></Link>
              <Link to="/"><li className="nav-item"><a onClick={()=>{setSidebarActive(false); setOverlayActive(false)}} className="nav-link" style={{fontSize: '19px', marginBottom: '5px'}}><i className="fas fa-coffee" />&nbsp;{t("Menu02")}</a></li></Link>
              <Link to="/community"><li className="nav-item"><a onClick={()=>{setSidebarActive(false); setOverlayActive(false)}} className="nav-link" style={{fontSize: '19px', marginBottom: '5px'}}><i className="fas fa-globe" />&nbsp; {t("Menu03")}</a></li></Link>
              <Link to="/profile"><li className="nav-item"><a onClick={()=>{setSidebarActive(false); setOverlayActive(false)}} className="nav-link" href="" style={{fontSize: '19px', marginBottom: '5px'}}><i className="fas fa-user-tie" />&nbsp; {t("Menu04")}</a></li></Link>
              <Link to="/admin"><li className="nav-item"><a onClick={()=>{setSidebarActive(false); setOverlayActive(false)}} className="nav-link" style={{fontSize: '19px', marginBottom: '5px'}}><i className="fas fa-user-cog" />&nbsp; Admin</a></li></Link>
              <li className="nav-item"><a onClick={()=>{setSidebarActive(false); setOverlayActive(false); changeLanguage()}} className="nav-link" style={{fontSize: '19px', marginBottom: '5px'}}><i className="fas fa-globe fa-solid" />&nbsp; Lang</a></li>
              

                </ul>
            </div>
          </nav>
        </div>
        <div onClick={()=>{setSidebarActive(false); setOverlayActive(false)}} className={`overlay ${overlayActive ? "active" : ""}`} />
    </div>
    <div className="d-flex" id="Footer" />
    </>
  )
}