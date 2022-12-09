import React from 'react'
import { useState } from 'react'
import "../styles/Multiple-Input-Select-Pills.css"
import "../styles/Round_switch.css"
import "../styles/styles.css"
import "../styles/Ultimate-Sidebar-Menu-BS5.css"
import "../styles/Brewing_Guide.css"
import "../styles/Brewing_Guide2.css"
import "../styles/Brewing_Guide3.css"
import "../styles/Brewing_Guide4.css"
import "../styles/Features-Clean.css"
import BackButton from '../components/backbutton'
import NewBrewProcessCard from '../components/newbrewprocesscard'
import NewBrewEQCard from '../components/newbreweqcard'
import { mmss } from '../method/mmss'
export default function BrewNew() {

  const [mainEquipment, setMainEquipment] = useState("Hario")

  const [name, setName] = useState("")
  const [note, setNote] = useState("")
  const [score, setScore] = useState(1)
  const [coffee, setCoffee] = useState(16)
  const [water, setWater] = useState(160)
  const [ratio, setRatio] = useState(10)
  const [refine, setRefine] = useState('Medium')
  const [heat, setHeat] = useState(80)
  const [roast, setRoast] = useState('Medium')

  const [equipmentList, setEquipmentList] = useState([])
  const [modalEquipment, setModalEquipment] = useState('Coffee')
  const [modalDetail, setModalDetail] = useState('')

  const [processMethod, setProcessMethod] = useState(["Pour Water", "Add Coffee", "Stir", "Bloom", "Wait", "Swirl", "Rinse Filter", "Custom"])
  // const [processModal, setProcessModal] = useState([1,1,1,1,1])
  const [processModal, setProcessModal] = useState([0,0,0,0,0])
  const [processList, setProcessList] = useState([])
  const [processStep, setProcessStep] = useState("")
  const [processName, setProcessName] = useState("")
  const [processWater, setProcessWater] = useState("")
  const [processCoffee, setProcessCoffee] = useState("")
  const [processDuration, setProcessDuration] = useState("")
  const [processNote, setProcessNote] = useState("")

  const toolList = ["Hario", "Moka Pot", "French Press", "Aeropress", "Chemex"] //do not change order!

  const submitTool = (tool) => {
    if(tool === toolList[0]){
      setProcessMethod(["Pour Water", "Add Coffee", "Stir", "Bloom", "Wait", "Swirl", "Rinse Filter", "Custom"])
    }else if(tool === toolList[1]){
      setProcessMethod(["Pour Water", "Add Coffee", "Brew", "Custom"])
    }else if(tool === toolList[2]){
      setProcessMethod(["Pour Water", "Add Coffee", "Stir", "Bloom", "Wait", "Swirl", "Press", "Place Plunger", "Remove Plunger", "Custom"])
    }else if(tool === toolList[3]){
      setProcessMethod(["Pour Water", "Add Coffee", "Stir", "Bloom", "Wait", "Swirl", "Rinse Filter", "Press", "Place Plunger", "Remove Plunger", "Invert", "Put the Lid on", "Custom"])
    }else if(tool === toolList[4]){
      setProcessMethod(["Pour Water", "Add Coffee", "Stir", "Bloom", "Wait", "Swirl", "Rinse Filter", "Custom"])
    }
  }

  const handleProcess = (item) => {                         //set show or hide input when add process
    if(item === "Pour Water" || item === "Bloom"){
      setProcessModal([0,1,0,1,1])
    }else if(item === "Add Coffee"){
      setProcessModal([0,0,1,1,1])
    }else if(item === "Custom"){
      setProcessModal([1,0,0,1,1])
    }else{
      setProcessModal([0,0,0,1,1])
    }
    setProcessStep(item)
    clearProcessModal()
  }

  const submitProcess = () =>{
    let data = {}
    data.processStep = processStep
    if(processModal[0]){
      data.name = processName
    }if(processModal[1]){
      data.water = processWater
    }if(processModal[2]){
      data.coffee = processCoffee
    }if(processModal[3]){
      data.duration = processDuration
    }if(processModal[4]){
      data.note = processNote
    }
    clearProcessModal()
    alert(data)
    setProcessList([...processList, data])
  }

  const equipmentPic = {
    "Coffee":"Tools_1",
    "Hario V60":"Tools_2",
    "Chemex":"Tools_3",
    "Moka Pot":"Tools_4",
    "Aeropress":"Tools_5",
    "French Press":"Tools_6",
    "Kattle":"Tools_7",
    "Scale":"Tools_8",
    "Grinder":"Tools_9",
    "Filter":"Tools_10",
    "Other":"Tools_11",
  }
  function clearProcessModal(){
    setProcessName("")
    setProcessWater("")
    setProcessCoffee("")
    setProcessDuration("")
    setProcessNote("")

  }
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

  function submitEquipment(type, comment){
    //update list
    setEquipmentList([...equipmentList, {id:`${equipmentPic[modalEquipment]}${modalDetail}`, "pic":`${equipmentPic[modalEquipment]}.png` , "detail":modalDetail}])
    setModalDetail('')
  }
  function deleteEquipment(id){
    setEquipmentList(equipmentList.filter((item)=>{
      return item.id != id
    }))
  }
  function deleteProcess(id){
    setProcessList(processList.filter((item)=>{
      return item.id != id
    }))
  }
  
  return (
    <div>
  <BackButton />
  <div className="d-flex div_a" style={{width: '80%', marginLeft: '20%'}}><button className="btn" id="brew_save_btn" type="button"><i className="fas fa-save Add_icon" style={{fontSize: '25px'}} /></button></div>
  <div id="main_template">
    <div className="container profile_container">
      <div id="guide_container3" style={{marginBottom: '10px'}}>
        <p className="newbrew_title">1.{t("Btext13")}</p>
        <div className="text-center d-flex justify-content-center align-items-center">
          <div className="newbrew_preview_border">
            <img id="brew_preview" className="newbrew_preview" src={`assets/img/${mainEquipment}_ICO.png`} /></div>
            <select className="newbrew_selector" onChange={(e)=>{setMainEquipment(e.target.value); submitTool(e.target.value)}}>&gt;
            <option value="Hario" selected>Hario V60</option>
            <option value="Chemex">Chemex</option>
            <option value="Moka">Moka Pot</option>
            <option value="Frenchpress">French Press</option>
            <option value="Aeropress">Aero Press</option>
          </select>
        </div>
        <p className="newbrew_title" style={{marginTop: '5px'}}>2.{t("Btext14")}</p>
        <div className="d-inline-flex" id="guide_tool_bar">
          <div className="d-flex justify-content-center tool_add_box">
            <button className="btn btn-primary d-flex justify-content-center align-items-center" id="tool_add_btn" type="button" style={{background: '#bc000000'}} data-bs-target="#Modal_tool" data-bs-toggle="modal"><i className="fas fa-plus tool_add_icon" /></button></div>
          {equipmentList.map((item)=>{
            return(
            // <NewBrewEQCard key={item.id} pic={item.pic} detail={item.detail} func={()=>{deleteEquipment(item.id)}}/>
            <div className="d-flex align-items-center guide_toolbox2" key={item.id}>
            <div className="row g-0 row-cols-3 d-flex guide_toolr_edit">
              <div className="col d-flex align-items-center guide_toolc1_edit">
                <div className="guide_tool_border"><img id="guide_tool_icon" src={`assets/img/${item.pic}`} /></div>
              </div>
              <div className="col guide_toolc2_edit">
                <p className="fw-normal" id="gtext">{item.detail}</p>
              </div>
              <div className="col d-flex justify-content-center align-items-center guide_toolc3_edit">
                <button onClick={()=>{deleteEquipment(item.id)}} className="btn btn-primary" id="guide_tool_delete" type="button"><i className="fa fa-minus-square-o" /></button></div>
            </div>
          </div>
            )
          })}
        </div>
        <p className="newbrew_title" style={{marginBottom: '20px'}}>3.{t("Btext15")}</p>
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
              <div className="input-group">
                <input className="form-control" type="number" id="guide_input" value={water} onChange={(e)=>{changeRatio("water", e.target.value)}} /><span className="input-group-text" id="guide_unit">ml</span></div>
            </div>
          </div>
        </div>
        <hr className="guide_nline" />
        <div className="row row-cols-3" style={{marginRight: '0px', marginLeft: '0px', marginBottom: '15px'}}>
          <div className="col d-flex justify-content-center" style={{paddingLeft: '5px', paddingRight: '5px'}}>
            <div id="guide_card"><img id="guide_icon" src="assets/img/guide_grind_ico.png" />
              <p id="guide_name">{t("Modaltext32")}</p>
              <select id="guide_option" onChange={(e)=>{setRefine(e.target.value)}}>
                <option value="Extra Fine">Extra Fine</option>
                <option value="Fine">Fine</option>
                <option value="Medium Fine">Medium Fine</option>
                <option value="Medium" selected>Medium</option>
                <option value="Medium Coarse">Medium Coarse</option>
                <option value="Coarse">Coarse</option>
              </select>
            </div>
          </div>
          <div className="col d-flex justify-content-center" style={{paddingLeft: '5px', paddingRight: '5px'}}>
            <div id="guide_card"><img id="guide_icon" src="assets/img/guide_heat_ico.png" />
              <p id="guide_name">{t("Modaltext33")}</p>
              <div className="input-group d-sm-flex justify-content-center justify-content-xxl-center" style={{width: '100%'}}>
                <input className="form-control" type="text" id="guide_readonly" value={heat} onChange={(e)=>{setHeat(e.target.value)}} /><span className="input-group-text" id="guide_unit">°C</span></div>
            </div>
          </div>
          <div className="col d-flex justify-content-center" style={{paddingLeft: '5px', paddingRight: '5px'}}>
            <div id="guide_card" style={{maxWidth: '150px', minWidth: '95px'}}><img id="guide_icon" src="assets/img/guide_bean_ico.png" />
              <p id="guide_name">{t("Modaltext34")}</p>
              <select id="guide_option" onChange={(e)=>{setRoast(e.target.value)}}>
                <option value="Light">Light</option>
                <option value="Medium">Medium</option>
                <option value="Dark" selected>Dark</option>
              </select>
            </div>
          </div>
        </div>
        <div className="d-inline-flex" style={{minWidth: '100%'}}>
          <p className="newbrew_title" style={{width: '80%'}}>4.{t("Btext16")}</p>
          <div style={{minWidth: '10%'}}><img src="assets/img/guide_timer_ico.png" style={{width: '30px', height: '30px'}} /></div>
          <p style={{textAlign: 'center', minWidth: '10%', paddingTop: '5px'}}>00:00</p>
        </div>
        <div id="process_container">
          {processList.map((item, index)=>{
            return(
            // <NewBrewProcessCard key={`${item.processStep}${index}`} name={item.processStep} comment={item.processNote} time={item.processDuration} func={deleteProcess} param={item.id} />
            <div className="d-inline-flex" id="Process_edit_card" style={{width: '100%'}}>
            <div className="process_card2">
              <div className="d-inline-flex" style={{minWidth: '100%'}}>
                <div style={{minWidth: '15%'}}><img id="process_pic" src="assets/img/Process_Dummy_icon.png" /></div>
                <p id="process_title">{item.processName && item.processStep}</p>
                <p className="text-end" style={{minWidth: '15%'}}>{mmss(item.duration)}</p>
              </div>
              <div>
                <p id="process_des">{item.note}</p>
              </div>
              <div>
                <p id="process_comment">{item.comment}</p>
              </div>
            </div>
            <div className="d-flex justify-content-center align-items-center process_delete_box">
              <button onClick={()=>{deleteProcess(item.id)}} className="btn btn-primary" id="process_timer_delete" type="button"><i className="fa fa-minus-square-o" style={{fontSize: '20px'}} /></button></div>
          </div>
            )
          })}
          
          
        </div>
        <div style={{textAlign: 'center'}}>
          <button className="btn btn-primary" id="process_timer_add" type="button" data-bs-target="#Modal_step" data-bs-toggle="modal">
            <i className="fas fa-plus" />&nbsp;เพิ่มขั้นตอนใหม่</button></div>
      </div>
      <div id="guide_container1" style={{height: '450px'}}>
        <p className="newbrew_title">5.{t("Btext17")}</p>
        <div style={{width: '100%'}}>
          <input type="text" className="ae_input" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="recipe name" style={{width: '100%', height: '35px', marginBottom: '10px', paddingLeft: '10px'}} /></div>
        <p className="newbrew_title">6.{t("Btext18")}</p>
        <textarea id="comment_guide_box" rows={9} value={note} onChange={(e)=>{setNote(e.target.value)}} />
        <p id="guide_con_title">{t("Btext19")}</p>
        <div className="d-inline-flex" style={{minWidth: '100%'}}>
          <i className="fa fa-star" id="comment_rating" style={{width: '10%', fontSize: '30px', color: 'rgb(255,184,0)', marginLeft: '10px', marginTop: '-5px'}} />
          <input className="form-range" type="range" id="ratingbar" min={1} max={10} step={1} value={score} onChange={(e)=>{setScore(e.target.value)}} style={{width: '70%'}} />
          <span id="score" style={{paddingLeft: '10px'}} /><span>{score}/10</span></div>
      </div>
      <div style={{height: '60px', bottom: 0}} />
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
                      <div className="d-inline-flex" style={{width: '100%'}}>
                        <img id="t_preview" className="tools_image" src={`assets/img/${equipmentPic[modalEquipment]}.png`} />
                        <select className="form-select tools_switch" onChange={(e)=>{setModalEquipment(e.target.value)}}>
                          <option value="Coffee" selected>{t("Modaltext02")}</option>
                          <option value="Hario V60">Hario V60</option>
                          <option value="Chemex">Chemex</option>
                          <option value="Moka Pot">Moka Pot</option>
                          <option value="Aeropress">Aeropress</option>
                          <option value="French Press">French Press</option>
                          <option value="Kattle">{t("Modaltext03")}</option>
                          <option value="Scale">{t("Modaltext04")}</option>
                          <option value="Grinder">{t("Modaltext05")}</option>
                          <option value="Filter">{t("Modaltext06")}</option>
                          <option value="Other">{t("Modaltext07")}</option>
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
                      <input className="form-control ae_input" type="text" required placeholder="eg. Moka pot 6-Cup, Timemore grinder" value={modalDetail} onChange={(e)=>{setModalDetail(e.target.value)}} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer d-flex justify-content-center modal_footer">
                <button onClick={()=>{submitEquipment(modalEquipment, modalDetail)}} className="btn btn-primary modal_summit" data-bs-dismiss="modal" id="Modal_summit" type="submit">{t("Confirm99")}</button></div>
            </form>
          </div>
        </div>
      </div>
      <div className="modal fade" role="dialog" tabIndex={-1} id="Modal_step">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header modal_header"><button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" /></div>
              <div className="modal-body modal_body">
                <div className="row" style={{marginBottom: '10px'}}>
                  <div className="col">
                    <div className="tools_card">
                      <div className="d-inline-flex" style={{width: '100%', marginTop: '5px'}}><img className="ae_legend" src="assets/img/legend_process.png" />
                        <p id="Etitle">{t("Modaltext09")}</p>
                      </div>
                      <select className="form-select tools_switch" style={{marginLeft: '0px', marginTop: '0px'}} onChange={(e)=>{handleProcess(e.target.value)}}>
<<<<<<< Updated upstream
                        {processMethod.map((item, index)=>(<option key={item} value={item}>{item}</option>))}
=======
                        <option value="Pour Water" selected>{t("Modaltext14")}</option>
                        <option value="Add Coffee">{t("Modaltext15")}</option>
                        <option value="Stir">{t("Modaltext16")}</option>
                        <option value="Bloom">{t("Modaltext17")}</option>
                        <option value="Wait">{t("Modaltext18")}</option>
                        <option value="Swirl">Swirl</option>
                        <option value="Rinse Filter">Rinse Filter</option>
                        <option value="Brew">Brew</option>
                        <option value="Press">Press</option>
                        <option value="Place Plunger">Place Plunger</option>
                        <option value="Remove Plunger">Remove Plunger</option>
                        <option value="Invert">Invert</option>
                        <option value="Put the Lid on">Put the Lid on</option>
                        <option value="Custom">Custom</option>
>>>>>>> Stashed changes
                      </select>
                    </div>
                  </div>
                </div>
                {processModal[0]>0 && <div className="row" style={{marginBottom: '10px'}}>
                  <div className="col">
                    <div className="tools_card">
                      <div className="d-inline-flex" style={{width: '100%', marginTop: '5px'}}><img className="ae_legend" src="assets/img/legend_name.png" />
                        <p id="Etitle">Enter Step Name</p>
                      </div><input className="form-control ae_input" type="text" placeholder="step name" value={processName} onChange={(e)=>{setProcessName(e.target.value)}} />
                    </div>
                  </div>
                </div>}
                {processModal[1]>0&&<div className="row" style={{marginBottom: '10px'}}>
                  <div className="col">
                    <div className="tools_card">
                      <div className="d-inline-flex" style={{width: '100%', marginTop: '5px'}}><img className="ae_legend" src="assets/img/legend_water.png" />
                        <p id="Etitle">Enter Water Amount</p>
                      </div><input className="form-control ae_input" type="text" placeholder="milliliter" value={processWater} onChange={(e)=>{setProcessWater(e.target.value)}}/>
                    </div>
                  </div>
                </div>}
                {processModal[2]>0 &&<div className="row" style={{marginBottom: '10px'}}>
                  <div className="col">
                    <div className="tools_card">
                      <div className="d-inline-flex" style={{width: '100%', marginTop: '5px'}}><img className="ae_legend" src="assets/img/legend_bean.png" />
                        <p id="Etitle">Enter Coffee Amount</p>
                      </div><input className="form-control ae_input" type="text" placeholder="gram" value={processCoffee} onChange={(e)=>{setProcessCoffee(e.target.value)}}/>
                    </div>
                  </div>
                </div>}
                {processModal[3]>0 &&<div className="row" style={{marginBottom: '10px'}}>
                  <div className="col">
                    <div className="tools_card">
                      <div className="d-inline-flex" style={{width: '100%', marginTop: '5px'}}><img className="ae_legend" src="assets/img/legend_time.png" />
                        <p id="Etitle">Enter Duration&nbsp;</p>
                      </div><input className="form-control ae_input" type="text" placeholder="seconds" value={processDuration} onChange={(e)=>{setProcessDuration(e.target.value)}}/>
                    </div>
                  </div>
                </div>}
                {processModal[4]>0 && <div className="row" style={{marginBottom: '10px'}}>
                  <div className="col">
                    <div className="tools_card">
                      <div className="d-inline-flex" style={{width: '100%', marginTop: '5px'}}><img className="ae_legend" src="assets/img/legend_note.png" />
                        <p id="Etitle">Add Note</p>
                      </div>
                      <input className="form-control" type="text" style={{borderStyle: 'solid', borderColor: 'rgb(253,200,137)', borderRadius: '15px'}} placeholder="note something" value={processNote} onChange={(e)=>{setProcessNote(e.target.value)}} />
                    </div>
                  </div>
                </div>}
              </div>
              <div className="modal-footer d-flex justify-content-center modal_footer">
                <button onClick={()=>{submitProcess()}} className="btn btn-primary " id="Modal_summit" type="submit" data-bs-dismiss="modal">ยืนยัน</button></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="d-flex" id="Header">
    <p id="header_paragraph">{t("Btext12")}</p>
  </div>
  <div className="d-flex" id="Footer" />
</div>


  )
}
