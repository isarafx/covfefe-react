import React from 'react'
import { useState } from 'react'
import BackButton from '../components/backbutton'

import "../styles/Multiple-Input-Select-Pills.css"
import "../styles/Round_switch.css"
import "../styles/styles.css"
import "../styles/Ultimate-Sidebar-Menu-BS5.css"
import "../styles/Brewing_Guide.css"
import "../styles/Brewing_Guide2.css"
import "../styles/Brewing_Guide3.css"
import "../styles/Brewing_Guide4.css"
import "../styles/Features-Clean.css"

export default function BrewEdit() {
  const [name, setName] = useState("")
  const [note, setNote] = useState("")
  const [score, setScore] = useState(1)
  const [coffee, setCoffee] = useState(16)
  const [water, setWater] = useState(160)
  const [ratio, setRatio] = useState(10)
  const [refine, setRefine] = useState('Medium')
  const [heat, setHeat] = useState(80)
  const [roast, setRoast] = useState('Medium')

  function changeRatio(type, value){
    if(type==="ratio"){
      console.log('test')
      setRatio(value)
      setWater(value*coffee)
    }else if(type==="coffee"){
      setCoffee(value)
      setWater(value*ratio)
    }else if(type==="water"){
      setCoffee(value/ratio)
      setWater(value)
    }
  }
  return (
    <div>
  <BackButton />
  <div className="d-flex div_a" style={{width: '80%', marginLeft: '20%'}}><button className="btn" id="brew_save_btn" type="button"><i className="fas fa-save Add_icon" style={{fontSize: '25px'}} /></button></div>
  <div id="main_template">
    <div className="container" id="recipelist_container">
      <input type="text" id="recipe_name_edit" placeholder="Enter Recipe Name Here" value={name} onChange={(e)=>{setName(e.target.value)}} />
    <i className="fa fa-pencil" style={{color: '#7f502b'}} />
      <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-2 row-cols-xxl-2" style={{height: '385px'}}>
        <div className="col" style={{height: '425px'}}>
          <div id="guide_container1">
            <p id="guide_con_title">{t("Btext07")}</p>
            <div className="d-inline-flex" id="guide_tool_bar">
              <div className="d-flex justify-content-center tool_add_box"><button className="btn btn-primary d-flex justify-content-center align-items-center" id="tool_add_btn" type="button" style={{background: '#bc000000'}} data-bs-target="#Modal_tool" data-bs-toggle="modal"><i className="fas fa-plus tool_add_icon" /></button></div>
              <div className="d-flex align-items-center guide_toolbox2">
                <div className="row g-0 row-cols-3 d-flex guide_toolr_edit">
                  <div className="col d-flex align-items-center guide_toolc1_edit">
                    <div className="guide_tool_border"><img id="guide_tool_icon" src="assets/img/Tools_5.png" /></div>
                  </div>
                  <div className="col guide_toolc2_edit">
                    <p className="fw-normal" id="gtext">Aeropress</p>
                  </div>
                  <div className="col d-flex justify-content-center align-items-center guide_toolc3_edit"><button className="btn btn-primary" id="guide_tool_delete" type="button"><i className="fa fa-minus-square-o" /></button></div>
                </div>
              </div>
              <div className="d-flex align-items-center guide_toolbox2">
                <div className="row g-0 row-cols-3 d-flex guide_toolr_edit">
                  <div className="col d-flex align-items-center guide_toolc1_edit">
                    <div className="guide_tool_border"><img id="guide_tool_icon" src="assets/img/Tools_5.png" /></div>
                  </div>
                  <div className="col guide_toolc2_edit">
                    <p className="fw-normal" id="gtext">Aeropress</p>
                  </div>
                  <div className="col d-flex justify-content-center align-items-center guide_toolc3_edit"><button className="btn btn-primary" id="guide_tool_delete" type="button"><i className="fa fa-minus-square-o" /></button></div>
                </div>
              </div>
            </div>
            <div className="row row-cols-3" id="guide_row">
              <div className="col d-flex justify-content-center" style={{paddingLeft: '5px', paddingRight: '5px'}}>
                <div id="guide_card"><img id="guide_icon" src="assets/img/guide_ratio_ico.png" />
                  <p id="guide_name">{t("Modaltext31")}</p>
                  <div className="input-group"><span className="d-flex justify-content-end input-group-text" id="guide_unit2">1&nbsp; :</span>
                  <input className="form-control" type="number" id="guide_input2" value={ratio} onChange={(e)=>{changeRatio("ratio", e.target.value)}} /></div>
                </div>
              </div>
              <div className="col d-flex justify-content-center" style={{paddingLeft: '5px', paddingRight: '5px'}}>
                <div id="guide_card"><img id="guide_icon" src="assets/img/guide_pack_ico.png" />
                  <p id="guide_name">{t("Modaltext29")}</p>
                  <div className="input-group">
                    <input className="form-control" type="number" id="guide_input" value={coffee} onChange={(e)=>{changeRatio("coffee", e.target.value)}} /><span className="input-group-text" id="guide_unit">g</span></div>
                </div>
              </div>
              <div className="col d-flex justify-content-center" style={{paddingLeft: '5px', paddingRight: '5px'}}>
                <div id="guide_card"><img id="guide_icon" src="assets/img/guide_water_ico.png" />
                  <p id="guide_name">{t("Modaltext30")}</p>
                  <div className="input-group"><input className="form-control" type="number" id="guide_input" value={water} onChange={(e)=>{}} /><span className="input-group-text" id="guide_unit">ml</span></div>
                </div>
              </div>
            </div>
            <hr className="guide_nline" />
            <div className="row row-cols-3" style={{marginRight: '0px', marginLeft: '0px'}}>
              <div className="col d-flex justify-content-center" style={{paddingLeft: '5px', paddingRight: '5px'}}>
                <div id="guide_card"><img id="guide_icon" src="assets/img/guide_grind_ico.png" />
                  <p id="guide_name">{t("Modaltext32")}</p><select id="guide_option">
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
                  <p id="guide_name">{t("Modaltext33")}</p>
                  <div className="input-group d-sm-flex justify-content-center justify-content-xxl-center" style={{width: '100%'}}><input className="form-control" type="text" id="guide_readonly" placeholder defaultValue={80} /><span className="input-group-text" id="guide_unit">°C</span></div>
                </div>
              </div>
              <div className="col d-flex justify-content-center" style={{paddingLeft: '5px', paddingRight: '5px'}}>
                <div id="guide_card" style={{maxWidth: '150px', minWidth: '95px'}}><img id="guide_icon" src="assets/img/guide_bean_ico.png" />
                  <p id="guide_name">{t("Modaltext34")}</p><select id="guide_option">
                    <option value={14}>Light</option>
                    <option value={13}>Medium</option>
                    <option value={12} selected>Dark</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col" style={{height: '425px'}}>
          <div id="guide_container1">
            <div className="d-inline-flex" style={{minWidth: '100%'}}>
              <p id="guide_con_title" style={{width: '80%'}}>{t("Modaltext35")}</p>
              <div style={{minWidth: '10%'}}><img src="assets/img/guide_timer_ico.png" style={{width: '30px', height: '30px'}} /></div>
              <p style={{textAlign: 'center', minWidth: '10%', paddingTop: '5px'}}>00:00</p>
            </div>
            <div id="process_container">
              <div className="d-inline-flex" id="Process_edit_card" style={{width: '100%'}}>
                <div className="process_card2">
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
                <div className="d-flex justify-content-center align-items-center process_delete_box"><button className="btn btn-primary" id="process_timer_delete" type="button"><i className="fa fa-minus-square-o" style={{fontSize: '20px'}} /></button></div>
              </div>
              <div className="d-inline-flex" id="Process_edit_card" style={{width: '100%'}}>
                <div className="process_card2">
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
                <div className="d-flex justify-content-center align-items-center process_delete_box"><button className="btn btn-primary" id="process_timer_delete" type="button"><i className="fa fa-minus-square-o" style={{fontSize: '20px'}} /></button></div>
              </div>
              <div className="d-inline-flex" id="Process_edit_card" style={{width: '100%'}}>
                <div className="process_card2">
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
                <div className="d-flex justify-content-center align-items-center process_delete_box"><button className="btn btn-primary" id="process_timer_delete" type="button"><i className="fa fa-minus-square-o" style={{fontSize: '20px'}} /></button></div>
              </div>
            </div>
            <div style={{textAlign: 'center'}}><button className="btn btn-primary" id="process_timer_add" type="button" data-bs-target="#Modal_step" data-bs-toggle="modal"><i className="fas fa-plus" />&nbsp;{t("Btext09")}</button></div>
          </div>
        </div>
        <div className="col" style={{height: '415px'}}>
          <div id="guide_container1" style={{height: '407px'}}>
            <p id="guide_con_title">{t("Modaltext38")}</p><textarea id="comment_guide_box" rows={9} value={note} onChange={(e)=>{setNote(e.target.value)}} />
            <p id="guide_con_title">{t("Btext19")}</p>
            <div className="d-inline-flex" style={{minWidth: '100%'}}>
              <i className="fa fa-star" id="comment_rating" style={{width: '10%', fontSize: '30px', color: 'rgb(255,184,0)', marginLeft: '10px', marginTop: '-5px'}} />
              <input className="form-range" type="range" id="ratingbar" min={1} max={10} step={1} value={score} onChange={(e)=>{setScore(e.target.value)}} style={{width: '70%'}} />
            <span id="score" style={{paddingLeft: '10px'}} /><span>/10</span></div>
          </div>
          <div style={{height: '60px', bottom: 0}} />
        </div>
      </div>
    </div>
    <div className="modal fade" role="dialog" tabIndex={-1} id="Modal_tool">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header modal_header"><button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" /></div>
          <form>
            <div className="modal-body modal_body">
              <div className="row" style={{textAlign: 'center', marginBottom: '20px'}}>
                <div className="col">
                  <div className="tools_card">
                    <div className="d-inline-flex" style={{width: '100%', marginTop: '5px'}}><img className="ae_legend" src="assets/img/legend_tool.png" />
                      <p id="Etitle">{t("Modaltext01")}</p>
                    </div>
                    <div className="d-inline-flex" style={{width: '100%'}}><img id="t_preview" className="tools_image" src="assets/img/Tools_1.png" /><select className="form-select tools_switch" onchange="document.getElementById('t_preview').src = (this.value)+'.png'">
                        <option value="Tools_1" selected>{t("Modaltext02")}</option>
                        <option value="Tools_2">Hario V60</option>
                        <option value="Tools_3">Chemex</option>
                        <option value="Tools_4">Moka Pot</option>
                        <option value="Tools_5">Aeropress</option>
                        <option value="Tools_6">French Press</option>
                        <option value="Tools_7">{t("Modaltext03")}</option>
                        <option value="Tools_8">{t("Modaltext04")}</option>
                        <option value="Tools_9">{t("Modaltext05")}</option>
                        <option value="Tools_10">{t("Modaltext06")}</option>
                        <option value="Tools_11">{t("Modaltext07")}</option>
                      </select></div>
                  </div>
                </div>
              </div>
              <div className="row" style={{marginBottom: '10px'}}>
                <div className="col">
                  <div className="tools_card">
                    <div className="d-inline-flex" style={{width: '100%', marginTop: '5px'}}><img className="ae_legend" src="assets/img/legend_name.png" />
                      <p id="Etitle"><strong>{t("Modaltext08")}</strong><br /></p>
                    </div>
                    <input className="form-control ae_input" type="text" required placeholder="eg. Moka pot 6-Cup, Timemore grinder" />
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer d-flex justify-content-center modal_footer"><button className="btn btn-primary modal_summit" id="Modal_summit" type="submit">{t("Confirm99")}</button></div>
          </form>
        </div>
      </div>
    </div>
    <div className="modal fade" role="dialog" tabIndex={-1} id="Modal_step">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header modal_header"><button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" /></div>
          <form>
            <div className="modal-body modal_body">
              <div className="row" style={{marginBottom: '10px'}}>
                <div className="col">
                  <div className="tools_card">
                    <div className="d-inline-flex" style={{width: '100%', marginTop: '5px'}}><img className="ae_legend" src="assets/img/legend_process.png" />
                      <p id="Etitle">{t("Modaltext09")}</p>
                    </div><select className="form-select tools_switch" style={{marginLeft: '0px', marginTop: '0px'}}>
                      <option value={12} selected>{t("Modaltext14")}</option>
                      <option value>{t("Modaltext15")}</option>
                      <option value>{t("Modaltext16")}</option>
                      <option value>{t("Modaltext17")}</option>
                      <option value>{t("Modaltext18")}</option>
                      <option value>{t("Modaltext19")}</option>
                      <option value>{t("Modaltext20")}</option>
                      <option value>{t("Modaltext21")}</option>
                      <option value>{t("Modaltext22")}</option>
                      <option value>{t("Modaltext23")}</option>
                      <option value>{t("Modaltext24")}</option>
                      <option value>{t("Modaltext25")}</option>
                      <option value>{t("Modaltext26")}</option>
                      <option value>{t("Modaltext27")}</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row" style={{marginBottom: '10px'}}>
                <div className="col">
                  <div className="tools_card">
                    <div className="d-inline-flex" style={{width: '100%', marginTop: '5px'}}><img className="ae_legend" src="assets/img/legend_name.png" />
                      <p id="Etitle">{t("Modaltext10")}</p>
                    </div><input className="form-control ae_input" type="text" placeholder="step name" />
                  </div>
                </div>
              </div>
              <div className="row" style={{marginBottom: '10px'}}>
                <div className="col">
                  <div className="tools_card">
                    <div className="d-inline-flex" style={{width: '100%', marginTop: '5px'}}><img className="ae_legend" src="assets/img/legend_water.png" />
                      <p id="Etitle">{t("Modaltext11")}</p>
                    </div><input className="form-control ae_input" type="text" placeholder="milliliter" />
                  </div>
                </div>
              </div>
              <div className="row" style={{marginBottom: '10px'}}>
                <div className="col">
                  <div className="tools_card">
                    <div className="d-inline-flex" style={{width: '100%', marginTop: '5px'}}><img className="ae_legend" src="assets/img/legend_bean.png" />
                      <p id="Etitle">{t("Modaltext12")}</p>
                    </div><input className="form-control ae_input" type="text" placeholder="gram" />
                  </div>
                </div>
              </div>
              <div className="row" style={{marginBottom: '10px'}}>
                <div className="col">
                  <div className="tools_card">
                    <div className="d-inline-flex" style={{width: '100%', marginTop: '5px'}}><img className="ae_legend" src="assets/img/legend_time.png" />
                      <p id="Etitle">{t("Modaltext13")}&nbsp;</p>
                    </div><input className="form-control ae_input" type="text" placeholder="seconds" />
                  </div>
                </div>
              </div>
              <div className="row" style={{marginBottom: '10px'}}>
                <div className="col">
                  <div className="tools_card">
                    <div className="d-inline-flex" style={{width: '100%', marginTop: '5px'}}><img className="ae_legend" src="assets/img/legend_note.png" />
                      <p id="Etitle">{t("Btext18")}</p>
                    </div><input className="form-control" type="text" style={{borderStyle: 'solid', borderColor: 'rgb(253,200,137)', borderRadius: '15px'}} placeholder={t("Modaltext28")} />
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer d-flex justify-content-center modal_footer"><button className="btn btn-primary modal_summit" id="Modal_summit" type="submit">{t("Confirm99")}</button></div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <div className="d-flex" id="Header">
    <p id="header_paragraph">{t("Btext08")}</p>
  </div>
  <div className="d-flex" id="Footer" />
</div>


  )
}
