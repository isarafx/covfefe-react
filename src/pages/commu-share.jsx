import React from 'react'

import "../styles/Community.css"
import "../styles/Multiple-Input-Select-Pills.css"
import "../styles/Profile_page.css"
import "../styles/Round_switch.css"
import "../styles/styles.css"
import "../styles/Ultimate-Sidebar-Menu-BS5.css"
import "../styles/Features-Clean.css"

export default function CommuShare() {
  return (
    <div>
  <div className="div_back"><a href="javascript:history.back()"><i className="icon ion-android-arrow-back" id="Back_icon" /></a></div>
  <div id="main_template">
    <div className="container profile_container">
      <form id="Shared_card">
        <div className="row" style={{textAlign: 'center', marginBottom: '20px'}}>
          <div className="col d-flex justify-content-center">
            <div className="Shared_icon_border"><img id="Shared_icon" src="assets/img/Hario_ICO.png" /></div>
          </div>
        </div>
        <div className="row" style={{marginBottom: '10px'}}>
          <div className="col">
            <div className="Ecard" style={{height: '92px'}}>
              <div className="d-inline-flex" style={{width: '100%', marginTop: '5px'}}><img className="ae_legend" src="assets/img/legend_name.png" />
                <p id="Etitle">รายชื่อสูตรที่ต้องการเเชร์</p>
              </div><input className="form-control-plaintext" type="text" id="Shared_title" defaultValue="Recipe name here" readOnly />
            </div>
          </div>
        </div>
        <div className="row" style={{marginBottom: '10px'}}>
          <div className="col">
            <div className="Ecard" style={{height: '214px'}}>
              <div className="d-inline-flex" style={{width: '100%', marginTop: '5px'}}><img className="ae_legend" src="assets/img/legend_note.png" />
                <p id="Etitle">คำอธิบายสูตร</p>
              </div><textarea className="form-control" id="Shared_com_field" rows={6} defaultValue={""} />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col" style={{textAlign: 'center'}}><a className="btn btn-primary" role="button" id="Ecancel" href="javascript:history.back()">ยกเลิก</a><button className="btn btn-primary" id="Esubmit" type="submit">ยืนยัน</button></div>
        </div>
      </form>
    </div>
  </div>
  <div className="d-flex" id="Header">
    <p id="header_paragraph">เเชร์สูตรของคุณ</p>
  </div>
  <div className="d-flex" id="Footer" />
</div>


  )
}
