import React from 'react'

import "../styles/Profile_page.css"
import "../styles/Multiple-Input-Select-Pills.css"
import "../styles/Profile_page.css"
import "../styles/Round_switch.css"
import "../styles/styles.css"
import "../styles/Ultimate-Sidebar-Menu-BS5.css"
import "../styles/Features-Clean.css"

export default function profile() {
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
                </svg>&nbsp;Coffee Article</a></li>
            <li className="nav-item"><a className="nav-link" href="Brewing_Main.html" style={{fontSize: '19px', marginBottom: '5px'}}><i className="fas fa-coffee" />&nbsp;Brewing Guide</a></li>
            <li className="nav-item"><a className="nav-link" href="Community_main.html" style={{fontSize: '19px', marginBottom: '5px'}}><i className="fas fa-globe" />&nbsp; Community</a></li>
            <li className="nav-item"><a className="nav-link" style={{fontSize: '19px', marginBottom: '5px'}} href="Profile.html"><i className="fas fa-user-cog" />&nbsp;Profile</a></li>
            <li className="nav-item"><a className="nav-link" href="Admin_site.html" style={{fontSize: '19px', marginBottom: '5px'}}><i className="fas fa-user-tie" />&nbsp; Admin</a></li>
          </ul>
        </div>
      </nav>
    </div>
    <div className="overlay" />
  </div>
  <div id="main_template">
    <div className="container profile_container">
      <div className="row profile_card">
        <div className="col profile_section">
          <div className="row prow">
            <div className="col" style={{textAlign: 'center'}}>
              <div className="d-flex justify-content-center">
                <div className="avatar_icon_border"><img id="avatar_icon" src="assets/img/AvatarIcon.jpg" /></div>
              </div>
              <div className="row">
                <div className="col">
                  <p id="avatar_name" style={{fontSize: '17px'}}>Username<a href="Profile_edit.html"><i className="fa fa-edit" style={{color: '#515151', paddingLeft: '10px'}} /></a></p>
                </div>
              </div>
            </div>
          </div>
          <div className="row prow" data-bss-hover-animate="pulse">
            <div className="col"><a className="btn btn-primary" role="button" style={{background: '#d35151'}} href="Login.html">เข้าสู่ระบบ</a></div>
          </div>
        </div>
        <div className="col profile_section">
          <div className="row statistics_card">
            <div className="col">
              <div>
                <p className="statistics_num">0</p>
              </div>
              <div>
                <p className="statistics_label">จำนวนกาแฟที่ฉันชง</p>
              </div>
            </div>
          </div>
          <div className="row statistics_card">
            <div className="col">
              <div>
                <p className="statistics_num">0</p>
              </div>
              <div>
                <p className="statistics_label">จำนวนสูตรที่ฉันสร้าง</p>
              </div>
            </div>
          </div>
          <div className="row statistics_card">
            <div className="col">
              <div style={{textAlign: 'center', paddingTop: '2px'}}><img className="rank01_ico" src="assets/img/Hario_ICO.png" /><img className="rank02_ico" src="assets/img/Moka_ICO.png" /><img className="rank03_ico" src="assets/img/Aeropress_ICO.png" /></div>
              <div>
                <p className="statistics_label">วิธีการชงที่ฉันชอบ</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row srow">
        <div className="col setting_card">
          <div>
            <p className="d-flex justify-content-center setting_title">เสียงเตือน</p>
          </div>
          <div className="d-flex justify-content-center">
            <div className="col" style={{width: '40.4px', maxWidth: '100%', textAlign: 'center'}}>
              <p className="setting_label">เปิด</p>
            </div>
            <div className="col" style={{maxWidth: '100%', width: '70px', textAlign: 'center', minWidth: '60px'}}><label className="switch">
                <input type="checkbox" />
                <span className="slider round" />
              </label></div>
            <div className="col" style={{width: '40.4px', maxWidth: '100%', textAlign: 'center'}}>
              <p className="setting_label">&nbsp;ปิด</p>
            </div>
          </div>
        </div>
        <div className="col setting_card">
          <div>
            <p className="d-flex justify-content-center setting_title">ภาษาที่ใช้</p>
          </div>
          <div className="d-flex justify-content-center">
            <div className="col" style={{width: '40.4px', maxWidth: '100%', textAlign: 'center'}}>
              <p className="setting_label2">ไทย</p>
            </div>
            <div className="col" style={{maxWidth: '100%', width: '70px', textAlign: 'center', minWidth: '60px'}}><label className="switch">
                <input type="checkbox" />
                <span className="slider round" />
              </label></div>
            <div className="col" style={{width: '40.4px', maxWidth: '100%', textAlign: 'center'}}>
              <p className="setting_label2">&nbsp;อังกฤษ</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="d-flex" id="Header">
    <p id="header_paragraph">โปรไฟล์เเละการตั้งค่า</p>
  </div>
  <div className="d-flex" id="Footer" />
</div>


  )
}
