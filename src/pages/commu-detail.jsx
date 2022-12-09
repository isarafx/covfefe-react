import React from 'react'
import { useState } from 'react'
// import '../styles/Admin_page.css'
import BackButton from '../components/backbutton'



import "../styles/Community.css"



import "../styles/Multiple-Input-Select-Pills.css"
import "../styles/Round_switch.css"
import "../styles/styles.css"
import "../styles/Ultimate-Sidebar-Menu-BS5.css"
import "../styles/Features-Clean.css"


export default function CommuDetail() {
  const [name, setName] = useState("recipe")
  const [note, setNote] = useState("")
  const [score, setScore] = useState(1)
  const [coffee, setCoffee] = useState(16)
  const [water, setWater] = useState(160)
  const [ratio, setRatio] = useState(10)
  const [refine, setRefine] = useState('Medium')
  const [heat, setHeat] = useState(80)
  const [roast, setRoast] = useState('Medium')
  const [cup, setCup] = useState(1)
  const [comment, setComment] = useState()


  const [processList, setProcessList] = useState([
    {name:"process 1", detail:"test ", comment:"test", time:20},
    {name:"process 2", detail:"test ", comment:"test ", time:20},
    {name:"process 3", detail:"test ", comment:"test ", time:20},
  ])
  const [equipmentList, setEquipmentList] = useState(['aeropress', 'equipment2'])


  function setTotalCup(newcup){
    setWater(parseInt(water/cup*newcup))
    setCoffee(parseInt(coffee/cup*newcup))
    setCup(newcup)
  }

  return (
    <div>
  <BackButton />
  <div className="d-flex div_a" style={{width: '80%', marginLeft: '20%'}}><a href="#"><i className="fa fa-heart-o" id="Interaction_d_icon" /></a></div>
  <div id="main_template">
    <div className="container" id="recipelist_container">
      <h1 id="guide_head">{name}</h1>
      <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-2 row-cols-xxl-2" style={{height: '385px'}}>
        <div className="col" style={{height: '425px'}}>
          <div id="guide_container1">
            <p id="guide_con_title">อุปกรณ์เเละรายละเอียด</p>
            <div className="d-inline-flex" id="guide_tool_bar">

            </div>
            <div className="row row-cols-3" id="guide_row">
              <div className="col d-flex justify-content-center" style={{paddingLeft: '5px', paddingRight: '5px'}}>
                <div id="guide_card"><img id="guide_icon" src="assets/img/guide_ratio_ico.png" />
                  <p id="guide_name">อัตราส่วน</p>
                  <div className="input-group"><span className="d-flex justify-content-end input-group-text" id="guide_unit2">1&nbsp; :</span>
                  <input className="form-control" type="number" id="guide_input2" value={ratio} /></div>
                </div>
              </div>
              <div className="col d-flex justify-content-center" style={{paddingLeft: '5px', paddingRight: '5px'}}>
                <div id="guide_card"><img id="guide_icon" src="assets/img/guide_pack_ico.png" />
                  <p id="guide_name">กาแฟ</p>
                  <div className="input-group">
                    <input className="form-control" type="number" id="guide_input" value={coffee} /><span className="input-group-text" id="guide_unit">g</span></div>
                </div>
              </div>
              <div className="col d-flex justify-content-center" style={{paddingLeft: '5px', paddingRight: '5px'}}>
                <div id="guide_card"><img id="guide_icon" src="assets/img/guide_water_ico.png" />
                  <p id="guide_name">น้ำ</p>
                  <div className="input-group">
                    <input className="form-control" type="number" id="guide_input" value={water} /><span className="input-group-text" id="guide_unit">ml</span></div>
                </div>
              </div>
            </div>
            <hr className="guide_nline" />
            <div className="row row-cols-3" style={{marginRight: '0px', marginLeft: '0px'}}>
              <div className="col d-flex justify-content-center" style={{paddingLeft: '5px', paddingRight: '5px'}}>
                <div id="guide_card"><img id="guide_icon" src="assets/img/guide_grind_ico.png" />
                  <p id="guide_name">ความละเอียด</p><select id="guide_option" disabled>
                    {/* <option value={14}>Extra Fine</option>
                    <option value={13}>Fine</option>
                    <option value>Medium Fine</option> */}
                    <option value={12} selected>{refine}</option>
                    {/* <option value>Medium Coarse</option>
                    <option value={15}>Coarse</option> */}
                  </select>
                </div>
              </div>
              <div className="col d-flex justify-content-center" style={{paddingLeft: '5px', paddingRight: '5px'}}>
                <div id="guide_card"><img id="guide_icon" src="assets/img/guide_heat_ico.png" />
                  <p id="guide_name">ความร้อน</p>
                  <div className="input-group d-sm-flex justify-content-center justify-content-xxl-center" style={{width: '100%'}}>
                    <input className="form-control" type="text" id="guide_readonly" placeholder value={heat} disabled /><span className="input-group-text" id="guide_unit">°C</span></div>
                </div>
              </div>
              <div className="col d-flex justify-content-center" style={{paddingLeft: '5px', paddingRight: '5px'}}>
                <div id="guide_card" style={{maxWidth: '150px', minWidth: '95px'}}><img id="guide_icon" src="assets/img/guide_bean_ico.png" />
                  <p id="guide_name">การคั่ว</p><select id="guide_option" disabled>
                    {/* <option value={14}>Light</option>
                    <option value={13}>Medium</option> */}
                    <option value={12} selected>{roast}</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row row-cols-3 d-flex justify-content-center align-items-center" style={{marginRight: '0px', marginLeft: '0px', width: '100%'}}>
              <div className="col" style={{width: '100%'}}>
                <div className="d-inline-flex" style={{width: '100%'}}>
                  <div id="cup_number_div"><img id="cup_number_icon" src="assets/img/Cup%20Icon.png" /></div>
                  <input className="form-range" type="range" id="myRange" min={1} max={10} step={1} value={cup} onChange={(e)=>{setTotalCup(e.target.value)}} />{cup}<span id="demo" style={{marginTop: '18px', paddingLeft: '10px'}} />
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

              {processList.map((item)=>{
                return(<div id="process_card">
                <div className="d-inline-flex" style={{minWidth: '100%'}}>
                  <div style={{minWidth: '15%'}}><img id="process_pic" src="assets/img/Process_Dummy_icon.png" /></div>
                  <p id="process_title">{item.name}</p>
                  <p className="text-end" style={{minWidth: '15%'}}>{item.time}</p>
                </div>
                <div>
                  <p id="process_des">{item.detail}</p>
                </div>
                <div>
                  <p id="process_comment">{item.comment}</p>
                </div>
              </div>)
              })}

            </div>
            <div style={{textAlign: 'center'}}><a className="btn btn-primary" role="button" id="process_timer_start" href="Brewing_Timer.html">เริ่มชงกาแฟ</a></div>
          </div>
        </div>
        <div className="col" style={{width: '100%', overflow: 'auto'}}>
          <div id="guide_container2">
            <p id="guide_con_title" /><textarea id="comment_guide_box" rows={9} readOnly defaultValue={""} />
            <div className="d-inline-flex justify-content-end" style={{minWidth: '100%', height: '50px'}}><img className="creator_avatar_icon" src="assets/img/AvatarIcon.jpg" />
              <p className="creator_avatar_name">Isara12345</p>
            </div>
            <hr style={{marginTop: '0px', background: '#ff9900', height: '2px'}} />
            <div id="Comment_container_div">
              <div id="Comment_display_box">
                <div className="row row-cols-2">
                  <div className="col d-sm-flex justify-content-xxl-start" style={{maxWidth: '65px'}}><img className="creator_avatar_icon" src="assets/img/AvatarIcon.jpg" style={{borderColor: '#955c18'}} /></div>
                  <div className="col" style={{width: '77%'}}>
                    <p id="Comment_display_name" style={{fontWeight: 'bold', fontSize: '15px', marginBottom: '7px', color: '#955c18'}}>Phichet wtf.</p>
                    <p id="Comment_display_comment">thid receip it Goowddddddddddddddddddddddddddddddddddddddddddddddddddd</p>
                  </div>
                </div>
                <hr style={{marginTop: '-10px'}} />
              </div>
              <div id="Comment_display_box">
                <div className="row row-cols-2">
                  <div className="col d-sm-flex justify-content-xxl-start" style={{maxWidth: '65px'}}><img className="creator_avatar_icon" src="assets/img/AvatarIcon.jpg" style={{borderColor: '#955c18'}} /></div>
                  <div className="col" style={{width: '77%'}}>
                    <p id="Comment_display_name" style={{fontWeight: 'bold', fontSize: '15px', marginBottom: '7px', color: '#955c18'}}>Nigga NTRman</p>
                    <p id="Comment_display_comment">bad one not hot</p>
                  </div>
                </div>
                <hr style={{marginTop: '-10px'}} />
              </div>
              <div id="Comment_display_box">
                <div className="row row-cols-2">
                  <div className="col d-sm-flex justify-content-xxl-start" style={{maxWidth: '65px'}}><img className="creator_avatar_icon" src="assets/img/AvatarIcon.jpg" style={{borderColor: '#955c18'}} /></div>
                  <div className="col" style={{width: '77%'}}>
                    <p id="Comment_display_name" style={{fontWeight: 'bold', fontSize: '15px', marginBottom: '7px', color: '#955c18'}}>GG</p>
                    <p id="Comment_display_comment">bad one not hot</p>
                  </div>
                </div>
                <hr style={{marginTop: '-10px'}} />
              </div>
              <div id="Comment_display_box">
                <div className="row row-cols-2">
                  <div className="col d-sm-flex justify-content-xxl-start" style={{maxWidth: '65px'}}><img className="creator_avatar_icon" src="assets/img/AvatarIcon.jpg" style={{borderColor: '#955c18'}} /></div>
                  <div className="col" style={{width: '77%'}}>
                    <p id="Comment_display_name" style={{fontWeight: 'bold', fontSize: '15px', marginBottom: '7px', color: '#955c18'}}>sggsgs</p>
                    <p id="Comment_display_comment">bad one not hot</p>
                  </div>
                </div>
                <hr style={{marginTop: '-10px'}} />
              </div>
              <div id="Comment_display_box">
                <div className="row row-cols-2">
                  <div className="col d-sm-flex justify-content-xxl-start" style={{maxWidth: '65px'}}><img className="creator_avatar_icon" src="assets/img/AvatarIcon.jpg" style={{borderColor: '#955c18'}} /></div>
                  <div className="col" style={{width: '77%'}}>
                    <p id="Comment_display_name" style={{fontWeight: 'bold', fontSize: '15px', marginBottom: '7px', color: '#955c18'}}>uwu</p>
                    <p id="Comment_display_comment">bad one not hohhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhht</p>
                  </div>
                </div>
                <hr style={{marginTop: '-10px'}} />
              </div>
            </div>
            <p style={{color: '#cb0c00', marginBottom: '10px', marginTop: '5px'}}>แสดงความคิดเห็นของคุณได้ที่นี่!</p>
            <form><textarea id="Post_comment_box" rows={1} oninput="auto_grow(this)" required defaultValue={""} />
              <div className="d-flex justify-content-end"><button className="btn btn-primary d-xxl-flex" id="post_comment_btn" type="submit">Post Review</button></div>
            </form>
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
