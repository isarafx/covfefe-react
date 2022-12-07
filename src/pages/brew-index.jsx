import React from 'react'

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

export default function BrewIndex() {
  return (
    <div>
  <div id="Navbar"><a className="btn btn-primary btn-customized open-menu" role="button" style={{background: 'rgba(243,91,63,0)', fontSize: '16px', paddingLeft: '15px', paddingRight: '10px'}}><i className="fa fa-navicon" style={{fontSize: '22px', color: 'rgba(107,62,30,0.85)'}} />&nbsp;</a>
    <div className="sidebar">
      <div className="dismiss"><i className="fa fa-caret-left" /></div>
      <div className="brand"><a className="navbar-brand">Coffee Cup</a></div>
      <nav className="navbar navbar-dark navbar-expand">
        <div className="container-fluid">
          <ul className="navbar-nav flex-column me-auto">
            <li className="nav-item"><a className="nav-link" href="Article_main.html" style={{fontSize: '19px', marginBottom: '5px'}}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" style={{color: 'rgba(255,255,255,0.55)', fontSize: '24px'}}>
                  <path d="M12 6.25278V19.2528M12 6.25278C10.8321 5.47686 9.24649 5 7.5 5C5.75351 5 4.16789 5.47686 3 6.25278V19.2528C4.16789 18.4769 5.75351 18 7.5 18C9.24649 18 10.8321 18.4769 12 19.2528M12 6.25278C13.1679 5.47686 14.7535 5 16.5 5C18.2465 5 19.8321 5.47686 21 6.25278V19.2528C19.8321 18.4769 18.2465 18 16.5 18C14.7535 18 13.1679 18.4769 12 19.2528" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                </svg>&nbsp;Coffee Article<br /></a></li>
            <li className="nav-item"><a className="nav-link" href="Brewing_Main.html" style={{fontSize: '19px', marginBottom: '5px'}}><i className="fas fa-coffee" />&nbsp;Brewing Guide</a></li>
            <li className="nav-item"><a className="nav-link" href="Community_main.html" style={{fontSize: '19px', marginBottom: '5px'}}><i className="fas fa-globe" />&nbsp; Community</a></li>
            <li className="nav-item"><a className="nav-link" href="Profile.html" style={{fontSize: '19px', marginBottom: '5px'}}><i className="fas fa-user-cog" />&nbsp;Profile</a></li>
            <li className="nav-item"><a className="nav-link" href="Admin_site.html" style={{fontSize: '19px', marginBottom: '5px'}}><i className="fas fa-user-tie" />&nbsp; Admin</a></li>
          </ul>
        </div>
      </nav>
    </div>
    <div className="overlay" />
  </div>
  <div className="d-flex div_a"><a href="Brewing_NewBrewing.html"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-plus-circle Add_icon">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
      </svg></a></div>
  <div id="main_template">
    <div className="container" style={{paddingTop: '60px'}}>
      <div className="row row-cols-2 row-cols-sm-2 row-cols-md-4 row-cols-lg-4 row-cols-xl-4 row-cols-xxl-4">
        <div className="col d-flex d-sm-flex d-md-flex d-lg-flex d-xl-flex d-xxl-flex justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-center justify-content-xl-center justify-content-xxl-center">
          <div className="d-flex justify-content-center align-items-center Method_box"><a href="Brewing_Receipe.html">
              <div className="card d-flex mcard" data-bss-hover-animate="pulse">
                <div className="card-body" style={{textAlign: 'center'}}><img className="Method_icon" src="assets/img/Hario%20V60.png" />
                  <h4 className="card-title Method_name">Hario V60</h4>
                </div>
              </div>
            </a></div>
        </div>
        <div className="col d-flex d-sm-flex d-md-flex d-lg-flex d-xl-flex d-xxl-flex justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-center justify-content-xl-center justify-content-xxl-center">
          <div className="d-flex justify-content-center align-items-center Method_box"><a href="Brewing_Receipe.html">
              <div className="card d-flex mcard" data-bss-hover-animate="pulse">
                <div className="card-body" style={{textAlign: 'center'}}><img className="Method_icon" src="assets/img/Aeropress.png" />
                  <h4 className="card-title Method_name">Aeropress</h4>
                </div>
              </div>
            </a></div>
        </div>
        <div className="col d-flex d-sm-flex d-md-flex d-lg-flex d-xl-flex d-xxl-flex justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-center justify-content-xl-center justify-content-xxl-center">
          <div className="d-flex justify-content-center align-items-center Method_box"><a href="Brewing_Receipe.html">
              <div className="card d-flex mcard" data-bss-hover-animate="pulse">
                <div className="card-body" style={{textAlign: 'center'}}><img className="Method_icon" src="assets/img/Frenchpress.png" />
                  <h4 className="card-title Method_name">French Press<br /></h4>
                </div>
              </div>
            </a></div>
        </div>
        <div className="col d-flex d-sm-flex d-md-flex d-lg-flex d-xl-flex d-xxl-flex justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-center justify-content-xl-center justify-content-xxl-center">
          <div className="d-flex justify-content-center align-items-center Method_box"><a href="Brewing_Receipe.html">
              <div className="card d-flex mcard" data-bss-hover-animate="pulse">
                <div className="card-body" style={{textAlign: 'center'}}><img className="Method_icon" src="assets/img/MokaPot.png" />
                  <h4 className="card-title Method_name">Moka Pot</h4>
                </div>
              </div>
            </a></div>
        </div>
        <div className="col d-flex d-sm-flex d-md-flex d-lg-flex d-xl-flex d-xxl-flex justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-center justify-content-xl-center justify-content-xxl-center">
          <div className="d-flex justify-content-center align-items-center Method_box"><a href="Brewing_Receipe.html">
              <div className="card d-flex mcard" data-bss-hover-animate="pulse">
                <div className="card-body" style={{textAlign: 'center'}}><img className="Method_icon" src="assets/img/Chemex.png" />
                  <h4 className="card-title Method_name">Chemex</h4>
                </div>
              </div>
            </a></div>
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
  <div className="d-flex" id="Footer"><button className="btn btn-primary disabled" data-bss-hover-animate="pulse" id="brew_button" type="button" disabled><img src="assets/img/Cup%20Icon.png" style={{width: '50px', marginTop: '-17px'}} /></button><a className="btn btn-primary d-flex" role="button" data-bss-hover-animate="pulse" id="fav_button" href="Brewing_Fav.html"><img src="assets/img/Favorite%20Icon.png" style={{width: '42px'}} /></a></div>
</div>
  )
}
