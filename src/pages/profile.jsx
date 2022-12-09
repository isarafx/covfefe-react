import React from 'react'

import "../styles/Profile_page.css"
import "../styles/Multiple-Input-Select-Pills.css"
import "../styles/Profile_page.css"
import "../styles/Round_switch.css"
import "../styles/styles.css"
import "../styles/Ultimate-Sidebar-Menu-BS5.css"
import "../styles/Features-Clean.css"
import NavBar from '../components/navbar'

export default function Profile() {
  return (
    <div>
  <NavBar />
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
                  <p id="avatar_name" style={{fontSize: '17px'}}>Username<a href=""><i className="fa fa-edit" style={{color: '#515151', paddingLeft: '10px'}} /></a></p>
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
