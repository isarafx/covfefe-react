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

export default function BrewGuide() {
  return (
    <div>
  <div className="div_back"><a href="javascript:history.back()"><i className="icon ion-android-arrow-back" id="Back_icon" /></a></div>
  <div className="d-flex div_a" style={{width: '80%', marginLeft: '20%'}}><a href="Brewing_Edit.html"><i className="fa fa-pencil Add_icon" style={{fontSize: '25px'}} /></a></div>
  <div id="main_template">
    <div className="container" id="recipelist_container">
      <h1 id="guide_head">Recipe name</h1>
      <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-2 row-cols-xxl-2" style={{height: '385px'}}>
        <div className="col" style={{height: '425px'}}>
          <div id="guide_container1">
            <p id="guide_con_title">อุปกรณ์เเละรายละเอียด</p>
            <div className="d-inline-flex" id="guide_tool_bar">
              <div className="d-flex align-items-center guide_toolbox">
                <div className="row g-0 row-cols-3 d-flex guide_toolr">
                  <div className="col d-flex align-items-center guide_toolc1">
                    <div className="guide_tool_border"><img id="guide_tool_icon" src="assets/img/Tools_5.png" /></div>
                  </div>
                  <div className="col guide_toolc2">
                    <p className="fw-normal" id="gtext">Aeropress</p>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center guide_toolbox">
                <div className="row g-0 row-cols-3 d-flex guide_toolr">
                  <div className="col d-flex align-items-center guide_toolc1">
                    <div className="guide_tool_border"><img id="guide_tool_icon" src="assets/img/Tools_5.png" /></div>
                  </div>
                  <div className="col guide_toolc2">
                    <p className="fw-normal" id="gtext">Aeropress</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row row-cols-3" id="guide_row">
              <div className="col d-flex justify-content-center" style={{paddingLeft: '5px', paddingRight: '5px'}}>
                <div id="guide_card"><img id="guide_icon" src="assets/img/guide_ratio_ico.png" />
                  <p id="guide_name">อัตราส่วน</p>
                  <div className="input-group"><span className="d-flex justify-content-end input-group-text" id="guide_unit2">1&nbsp; :</span><input className="form-control" type="number" id="guide_input2" placeholder={0} defaultValue={0} /></div>
                </div>
              </div>
              <div className="col d-flex justify-content-center" style={{paddingLeft: '5px', paddingRight: '5px'}}>
                <div id="guide_card"><img id="guide_icon" src="assets/img/guide_pack_ico.png" />
                  <p id="guide_name">กาแฟ</p>
                  <div className="input-group"><input className="form-control" type="number" id="guide_input" placeholder={0} defaultValue={0} /><span className="input-group-text" id="guide_unit">g</span></div>
                </div>
              </div>
              <div className="col d-flex justify-content-center" style={{paddingLeft: '5px', paddingRight: '5px'}}>
                <div id="guide_card"><img id="guide_icon" src="assets/img/guide_water_ico.png" />
                  <p id="guide_name">น้ำ</p>
                  <div className="input-group"><input className="form-control" type="number" id="guide_input" placeholder={0} defaultValue={0} /><span className="input-group-text" id="guide_unit">ml</span></div>
                </div>
              </div>
            </div>
            <hr className="guide_nline" />
            <div className="row row-cols-3" style={{marginRight: '0px', marginLeft: '0px'}}>
              <div className="col d-flex justify-content-center" style={{paddingLeft: '5px', paddingRight: '5px'}}>
                <div id="guide_card"><img id="guide_icon" src="assets/img/guide_grind_ico.png" />
                  <p id="guide_name">ความละเอียด</p><select id="guide_option" disabled>
                    <option value={14}>Extra Fine</option>
                    <option value={13}>Fine</option>
                    <option value>Medium Fine</option>
                    <option value={12} selected>Medium</option>
                    <option value>Medium Coarse</option>
                    <option value={15}>Coarse</option>
                  </select>
                </div>
              </div>
              <div className="col d-flex justify-content-center" style={{paddingLeft: '5px', paddingRight: '5px'}}>
                <div id="guide_card"><img id="guide_icon" src="assets/img/guide_heat_ico.png" />
                  <p id="guide_name">ความร้อน</p>
                  <div className="input-group d-sm-flex justify-content-center justify-content-xxl-center" style={{width: '100%'}}><input className="form-control" type="text" id="guide_readonly" placeholder defaultValue={80} disabled /><span className="input-group-text" id="guide_unit">°C</span></div>
                </div>
              </div>
              <div className="col d-flex justify-content-center" style={{paddingLeft: '5px', paddingRight: '5px'}}>
                <div id="guide_card" style={{maxWidth: '150px', minWidth: '95px'}}><img id="guide_icon" src="assets/img/guide_bean_ico.png" />
                  <p id="guide_name">การคั่ว</p><select id="guide_option" disabled>
                    <option value={14}>Light</option>
                    <option value={13}>Medium</option>
                    <option value={12} selected>Dark</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row row-cols-3 d-flex justify-content-center align-items-center" style={{marginRight: '0px', marginLeft: '0px', width: '100%'}}>
              <div className="col" style={{width: '100%'}}>
                <div className="d-inline-flex" style={{width: '100%'}}>
                  <div id="cup_number_div"><img id="cup_number_icon" src="assets/img/Cup%20Icon.png" /></div><input className="form-range" type="range" id="myRange" min={1} max={10} step={1} defaultValue={0} /><span id="demo" style={{marginTop: '18px', paddingLeft: '10px'}} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col" style={{height: '425px'}}>
          <div id="guide_container1">
            <div className="d-inline-flex" style={{minWidth: '100%'}}>
              <p id="guide_con_title" style={{width: '80%'}}>ขั้นตอนการชง</p>
              <div style={{minWidth: '10%'}}><img src="assets/img/guide_timer_ico.png" style={{width: '30px', height: '30px'}} /></div>
              <p style={{textAlign: 'center', minWidth: '10%', paddingTop: '5px'}}>00:00</p>
            </div>
            <div id="process_container">
              <div id="process_card">
                <div className="d-inline-flex" style={{minWidth: '100%'}}>
                  <div style={{minWidth: '15%'}}><img id="process_pic" src="assets/img/Process_Dummy_icon.png" /></div>
                  <p id="process_title">Process</p>
                  <p className="text-end" style={{minWidth: '15%'}}>00:00</p>
                </div>
                <div>
                  <p id="process_des">Pour xx ml water slow</p>
                </div>
                <div>
                  <p id="process_comment">Comment</p>
                </div>
              </div>
              <div id="process_card">
                <div className="d-inline-flex" style={{minWidth: '100%'}}>
                  <div style={{minWidth: '15%'}}><img id="process_pic" src="assets/img/Process_Dummy_icon.png" /></div>
                  <p id="process_title">Process</p>
                  <p className="text-end" style={{minWidth: '15%'}}>00:00</p>
                </div>
                <div>
                  <p id="process_des">Pour xx ml water slow</p>
                </div>
                <div>
                  <p id="process_comment">Comment</p>
                </div>
              </div>
              <div id="process_card">
                <div className="d-inline-flex" style={{minWidth: '100%'}}>
                  <div style={{minWidth: '15%'}}><img id="process_pic" src="assets/img/Process_Dummy_icon.png" /></div>
                  <p id="process_title">Process</p>
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
            <div style={{textAlign: 'center'}}><a className="btn btn-primary" role="button" id="process_timer_start" href="Brewing_Timer.html">เริ่มชงกาแฟ</a></div>
          </div>
        </div>
        <div className="col" style={{height: '415px'}}>
          <div id="guide_container1" style={{height: '407px'}}>
            <p id="guide_con_title">บันทึกเพิ่มเติม</p><textarea id="comment_guide_box" rows={9} readOnly defaultValue={""} />
            <p id="guide_con_title">คะเเนนรวม</p>
            <div className="d-inline-flex" style={{minWidth: '100%'}}><i className="fa fa-star" id="comment_rating" style={{width: '10%', fontSize: '30px', color: 'rgb(255,184,0)', marginLeft: '10px', marginTop: '-5px'}} /><input className="form-range" type="range" id="ratingbar" min={1} max={10} step={1} defaultValue={0} style={{width: '70%'}} disabled /><span id="score" style={{paddingLeft: '10px'}} /><span>/10</span></div>
          </div>
          <div style={{height: '60px', bottom: 0}} />
        </div>
      </div>
    </div>
  </div>
  <div className="d-flex" id="Header">
    <p id="header_paragraph">รายละเอียดสูตรการชง</p>
  </div>
  <div className="d-flex" id="Footer" />
</div>


  )
}
