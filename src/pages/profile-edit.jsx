import React from 'react'

import "../styles/Profile_page.css"
import "../styles/Multiple-Input-Select-Pills.css"
import "../styles/Profile_page.css"
import "../styles/Round_switch.css"
import "../styles/styles.css"
import "../styles/Ultimate-Sidebar-Menu-BS5.css"
import "../styles/Features-Clean.css"

export default function ProfileEdit() {
  return (
    <div>
  <div className="div_back"><a href="javascript:history.back()"><i className="icon ion-android-arrow-back" id="Back_icon" /></a></div>
  <div id="main_template">
    <div className="container profile_container">
      <form id="Eprofile_card">
        <div className="row" style={{textAlign: 'center', marginBottom: '20px'}}>
          <div className="col d-flex justify-content-center">
            <div className="Eavarta_icon_border"><img id="Eavarta_icon" src="assets/img/AvatarIcon.jpg" /></div>
          </div>
        </div>
        <div className="row" style={{marginBottom: '10px'}}>
          <div className="col">
            <div className="Ecard" style={{height: '92px'}}>
              <div className="d-inline-flex" style={{width: '100%', marginTop: '5px'}}><img className="ae_legend" src="assets/img/legend_picture.png" />
                <p id="Etitle">เเก้ไขภาพโปรไฟล์ที่เเสดง</p>
              </div><input className="form-control pAvarta_input" type="file" id="pAvarta_input" accept="image/*" />
            </div>
          </div>
        </div>
        <div className="row" style={{marginBottom: '25px'}}>
          <div className="col">
            <div className="Ecard" style={{height: '92px'}}>
              <div className="d-inline-flex" style={{width: '100%', marginTop: '5px'}}><img className="ae_legend" src="assets/img/legend_rename.png" />
                <p id="Etitle">เเก้ไขชื่อเล่นที่เเสดง</p>
              </div><input className="form-control" type="text" id="Einput" placeholder="nickname" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col" style={{textAlign: 'center'}}><a className="btn btn-primary" role="button" id="Ecancel" href="Profile.html">ยกเลิก</a><button className="btn btn-primary" id="Esubmit" type="submit">ยืนยัน</button></div>
        </div>
      </form>
    </div>
  </div>
  <div className="d-flex" id="Header">
    <p id="header_paragraph">โปรไฟล์เเละการตั้งค่า</p>
  </div>
  <div className="d-flex" id="Footer" />
</div>


  )
}