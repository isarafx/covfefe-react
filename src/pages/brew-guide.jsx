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
import BrewGuideProcessCard from '../components/brewguideprocesscard'
import BrewGuideEQCard from '../components/brewguideeqcard'
import { useState } from 'react'
export default function BrewGuide() {
  const recipe = {
    name:"",
    note:"",
    score:8,
    coffee:20,
    water:200,
    ratio:10,
    refine:"Medium",
    heat:90,
    roast:"Medium",
    eqList:[{pic:"assets/img/Tools_5.png","detail":"something"},{pic:"assets/img/Tools_4.png","detail":"something2"}],
    processList:[{duration: "30", note: "test1", processStep: "Pour Water", water:"20"},
    {duration: "50", name: "custom dude", note: "test", name:"custom dude"},
    {duration: "20", note: "test", processStep: "Stir"}
    ]  
}
const [cup, setCup] = useState(1)

  
  return (
    <div>
  <div className="d-flex div_a" style={{width: '80%', marginLeft: '20%'}}><a href="Brewing_Edit.html"><i className="fa fa-pencil Add_icon" style={{fontSize: '25px'}} /></a></div>
  <div id="main_template">
    <div className="container" id="recipelist_container">
      <h1 id="guide_head">{recipe.name}</h1>
      <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-2 row-cols-xxl-2" style={{height: '385px'}}>
        <div className="col" style={{height: '425px'}}>
          <div id="guide_container1">
            <p id="guide_con_title">อุปกรณ์เเละรายละเอียด</p>
            <div className="d-inline-flex" id="guide_tool_bar">
              
              {recipe.eqList.map((item)=>{
                return(<BrewGuideEQCard pic={item.pic} detail={item.detail}/>)
              })}
            </div>
            <div className="row row-cols-3" id="guide_row">
              <div className="col d-flex justify-content-center" style={{paddingLeft: '5px', paddingRight: '5px'}}>
                <div id="guide_card"><img id="guide_icon" src="assets/img/guide_ratio_ico.png" />
                  <p id="guide_name">อัตราส่วน</p>
                  <div className="input-group"><span className="d-flex justify-content-end input-group-text" id="guide_unit2">1&nbsp; :</span>
                  <input className="form-control" type="number" id="guide_input2" value={recipe.ratio} /></div>
                </div>
              </div>
              <div className="col d-flex justify-content-center" style={{paddingLeft: '5px', paddingRight: '5px'}}>
                <div id="guide_card"><img id="guide_icon" src="assets/img/guide_pack_ico.png" />
                  <p id="guide_name">กาแฟ</p>
                  <div className="input-group">
                    <input className="form-control" type="number" id="guide_input" value={recipe.coffee*cup} /><span className="input-group-text" id="guide_unit">g</span></div>
                </div>
              </div>
              <div className="col d-flex justify-content-center" style={{paddingLeft: '5px', paddingRight: '5px'}}>
                <div id="guide_card"><img id="guide_icon" src="assets/img/guide_water_ico.png" />
                  <p id="guide_name">น้ำ</p>
                  <div className="input-group">
                    <input className="form-control" type="number" id="guide_input" value={recipe.water*cup} /><span className="input-group-text" id="guide_unit">ml</span></div>
                </div>
              </div>
            </div>
            <hr className="guide_nline" />
            <div className="row row-cols-3" style={{marginRight: '0px', marginLeft: '0px'}}>
              <div className="col d-flex justify-content-center" style={{paddingLeft: '5px', paddingRight: '5px'}}>
                <div id="guide_card"><img id="guide_icon" src="assets/img/guide_grind_ico.png" />
                  <p id="guide_name">ความละเอียด</p><select id="guide_option" disabled>
                    <option value={14} selected>{recipe.refine}</option>
                    {/* <option value={13}>Fine</option>
                    <option value>Medium Fine</option>
                    <option value={12} selected>Medium</option>
                    <option value>Medium Coarse</option>
                    <option value={15}>Coarse</option> */}
                  </select>
                </div>
              </div>
              <div className="col d-flex justify-content-center" style={{paddingLeft: '5px', paddingRight: '5px'}}>
                <div id="guide_card"><img id="guide_icon" src="assets/img/guide_heat_ico.png" />
                  <p id="guide_name">ความร้อน</p>
                  <div className="input-group d-sm-flex justify-content-center justify-content-xxl-center" style={{width: '100%'}}>
                    <input className="form-control" type="text" id="guide_readonly" value={recipe.heat} disabled /><span className="input-group-text" id="guide_unit">°C</span></div>
                </div>
              </div>
              <div className="col d-flex justify-content-center" style={{paddingLeft: '5px', paddingRight: '5px'}}>
                <div id="guide_card" style={{maxWidth: '150px', minWidth: '95px'}}><img id="guide_icon" src="assets/img/guide_bean_ico.png" />
                  <p id="guide_name">การคั่ว</p><select id="guide_option" disabled>
                    <option value={14} selected>{recipe.roast}</option>
                    {/* <option value={13}>Medium</option>
                    <option value={12} selected>Dark</option> */}
                  </select>
                </div>
              </div>
            </div>
            <div className="row row-cols-3 d-flex justify-content-center align-items-center" style={{marginRight: '0px', marginLeft: '0px', width: '100%'}}>
              <div className="col" style={{width: '100%'}}>
                <div className="d-inline-flex" style={{width: '100%'}}>
                  <div id="cup_number_div"><img id="cup_number_icon" src="assets/img/Cup%20Icon.png" /></div>
                  <input className="form-range" type="range" id="myRange" min={1} max={10} step={1} value={cup} onChange={(e)=>{setCup(e.target.value)}} />{cup}<span id="demo" style={{marginTop: '18px', paddingLeft: '10px'}} />
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

              {recipe.processList.map((item)=>{
                return(<BrewGuideProcessCard name={item.processName ? item.processName:item.processStep} description={item.description} comment={item.detail} time={item.duration}/>)
              })}
            </div>
            <div style={{textAlign: 'center'}}><a className="btn btn-primary" role="button" id="process_timer_start" href="Brewing_Timer.html">เริ่มชงกาแฟ</a></div>
          </div>
        </div>
        <div className="col" style={{height: '415px'}}>
          <div id="guide_container1" style={{height: '407px'}}>
            <p id="guide_con_title">บันทึกเพิ่มเติม</p><textarea id="comment_guide_box" rows={9} readOnly value={recipe.note}/>
            <p id="guide_con_title">คะเเนนรวม</p>
            <div className="d-inline-flex" style={{minWidth: '100%'}}><i className="fa fa-star" id="comment_rating" style={{width: '10%', fontSize: '30px', color: 'rgb(255,184,0)', marginLeft: '10px', marginTop: '-5px'}} />
            <input className="form-range" type="range" id="ratingbar" min={1} max={10} step={1} value={recipe.score} style={{width: '70%'}} disabled /><span id="score" style={{paddingLeft: '10px'}} /><span>{recipe.score}/10</span></div>
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
