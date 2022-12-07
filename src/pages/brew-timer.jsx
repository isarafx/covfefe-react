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

export default function BrewTimer() {
  return (
    <div>
  <div className="div_back"><a href="javascript:history.back()"><i className="icon ion-android-arrow-back" id="Back_icon" /></a></div>
  <div id="main_template">
    <div className="container" id="recipelist_container2" style={{position: 'relative'}}>
      <div className="d-flex justify-content-center" id="Timer_container1"><button className="btn btn-primary" id="Timer_PP_button" type="button" />
        <div className="Main_timer" />
        <p className="Main_timer_text">เวลาที่เหลือในขั้นตอนปัจจุบัน</p>
        <p className="Main_timer_num">00:00</p><img className="timer_control_icon" src="assets/img/Timer_play_ico.png" />
        <div className="d-inline-flex Sub_timer"><img className="Sub_timer_icon" src="assets/img/guide_timer_ico.png" />
          <p style={{fontSize: '14px'}}>00:00</p>
        </div><button className="btn btn-primary d-flex justify-content-center align-items-center" id="Timer_Skip_button" type="button"><img className="timer_skip_icon" src="assets/img/Timer_skip_ico.png" /></button>
      </div>
      <div id="Timer_container2">
        <div id="Current_method_box">
          <div id="process_card2">
            <div className="d-inline-flex" style={{minWidth: '100%'}}>
              <div style={{minWidth: '15%'}}><img id="process_pic" src="assets/img/Process_Dummy_icon.png" /></div>
              <p id="process_title" style={{color: '#dc6c62'}}>Process</p>
            </div>
            <div>
              <p id="process_des">Pour xx ml water slow</p>
            </div>
            <div>
              <p id="process_comment">Comment<br /></p>
            </div>
          </div>
        </div>
        <hr className="Current_method_line" style={{background: 'rgb(127, 80, 43)'}} />
      </div>
      <div id="Timer_container3">
        <div className="d-flex d-sm-flex justify-content-center justify-content-sm-center" style={{height: '14px', background: '#ffffff', marginTop: '-7px'}}>
          <p className="Nextstep_text">ขั้นตอนถัดไป</p>
        </div>
        <div className="Nextstep_box">
          <div id="process_card3">
            <div className="d-inline-flex" style={{minWidth: '100%'}}>
              <div style={{minWidth: '15%'}}><img id="process_pic" src="assets/img/Process_Dummy_icon.png" /></div>
              <p id="process_title" style={{color: 'rgb(80,80,80)'}}>Process</p>
              <p className="text-end" style={{minWidth: '15%'}}>00:00</p>
            </div>
            <div>
              <p id="process_des">Pour xx ml water slow</p>
            </div>
            <div>
              <p id="process_comment">Comment</p>
            </div>
          </div>
          <div id="process_card3">
            <div className="d-inline-flex" style={{minWidth: '100%'}}>
              <div style={{minWidth: '15%'}}><img id="process_pic" src="assets/img/Process_Dummy_icon.png" /></div>
              <p id="process_title" style={{color: 'rgb(80,80,80)'}}>Process</p>
              <p className="text-end" style={{minWidth: '15%'}}>00:00</p>
            </div>
            <div>
              <p id="process_des">Pour xx ml water slow</p>
            </div>
            <div>
              <p id="process_comment">Comment</p>
            </div>
          </div>
          <div id="process_card3">
            <div className="d-inline-flex" style={{minWidth: '100%'}}>
              <div style={{minWidth: '15%'}}><img id="process_pic" src="assets/img/Process_Dummy_icon.png" /></div>
              <p id="process_title" style={{color: 'rgb(80,80,80)'}}>Process</p>
              <p className="text-end" style={{minWidth: '15%'}}>00:00</p>
            </div>
            <div>
              <p id="process_des">Pour xx ml water slow</p>
            </div>
            <div>
              <p id="process_comment">Comment</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="d-flex" id="Header">
    <p id="header_paragraph">Recipe Name</p>
  </div>
  <div className="d-flex" id="Footer" />
</div>


  )
}
