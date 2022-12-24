import React from 'react'
import { useState } from 'react'
import BackButton from '../components/backbutton'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import "../styles/assets/fonts/ionicons.min.css"
import "../styles/assets/fonts/material-icons.min.css"
import "../styles/assets/js/bs-init.js"
import "../styles/Multiple-Input-Select-Pills.css"
import "../styles/Round_switch.css"
import "../styles/styles.css"
import "../styles/Ultimate-Sidebar-Menu-BS5.css"
import "../styles/Brewing_Guide.css"
import "../styles/Brewing_Guide2.css"
import "../styles/Brewing_Guide3.css"
import "../styles/Brewing_Guide4.css"
import "../styles/Range_Slider.css"
import "../styles/Features-Clean.css"
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { AdminCheck, mmss, OwnerCheck } from '../method/mmss'
import { descParse } from '../method/mmss'
export default function BrewEdit() {
    const methodList = {
      "hario":["Pour Water", "Add Coffee", "Stir", "Bloom", "Wait", "Swirl", "Rinse Filter", "Custom"],
      "mokapot":["Pour Water", "Add Coffee", "Brew", "Custom"],
      "frenchpress":["Pour Water", "Add Coffee", "Stir", "Bloom", "Wait", "Swirl", "Press Plunger", "Place Plunger", "Remove Plunger", "Custom"],
      "aeropress":["Pour Water", "Add Coffee", "Stir", "Bloom", "Wait", "Swirl", "Rinse Filter", "Press Plunger", "Place Plunger", "Remove Plunger", "Invert", "Put the Lid on", "Custom"],
      "chemex":["Pour Water", "Add Coffee", "Stir", "Bloom", "Wait", "Swirl", "Rinse Filter", "Custom"]
    };
    const { brewer, id } = useParams();
    const recipe = (JSON.parse(localStorage.getItem('brew-recipe'))['items']).filter((item)=> item.key===id)[0]
    const [name, setName] = useState(recipe.name)
    const [note, setNote] = useState(recipe.note)
    const [score, setScore] = useState(recipe.score)
    const [coffee, setCoffee] = useState(recipe.coffee_weight)
    const [water, setWater] = useState(recipe.water)
    const [ratio, setRatio] = useState(recipe.ratio)
    const [coffee2, setCoffee2] = useState(recipe.coffee_weight)
    const [water2, setWater2] = useState(recipe.water)
    const [ratio2, setRatio2] = useState(recipe.ratio)
    const [refine, setRefine] = useState(recipe.grind_size)
    const [heat, setHeat] = useState(recipe.temp)
    const [roast, setRoast] = useState(recipe.roast_level)
    //data.id = `${processModalName}-${process.length+1}`
    const [process, setProcess] = useState(recipe.process.map((item, index)=>{return {...item, id:`${item.name}-${index+1}`}}))     //{name, custom_name, water, time, comment}
    const [oldprocess, setOldProcess] = useState()
    const [eqmodalname, setEqmodalname] = useState("Coffee")
    const [eqmodaldetail, setEqmodaldetail] = useState()
    const [equipment, setEquipment] = useState(recipe.equipment.map((item)=>{return { id:`eq${item.name}${item.description}` ,"name":item.name, "description":item.description}})) //{name, description}
    const [processMethod, setProcessMethod] = useState(methodList[brewer])
    const [processModal, setProcessModal] = useState([1, 0, 1, 1])
    const [processStep, setProcessStep] = useState("Pour Water")
    const [processModalName, setprocessModalName] = useState('Custom')
    const [processModalCustomName, setprocessModalCustomName] = useState()
    const [processModalWater, setProcessModalWater] = useState(1)
    const [processModaltime, setProcessModalTime] = useState()
    const [processModalComment, setProcessModalComment] = useState()
    const [remainWater, setRemainWater] = useState(recipe.process.reduce((accumulator, object) => { return accumulator + object.water; }, 0))
    const [remainTime, setRemainTime] = useState(recipe.process.reduce((accumulator, object) => { return accumulator + object.time; }, 0))
    const getInitialState = () => {
      const value = "";
      return value;
    };
    const token = localStorage.getItem('token')
    const user = JSON.parse(atob(localStorage.getItem('token').split('.')[1]))['username']
    const { t, i18 } = useTranslation()
    const PicEQ = {   //assets/img/${PicEQ[item.name]}.png
    "Coffee":"/assets/img/Tools_1.png",
    "Hario V60":"/assets/img/Tools_2.png",
    "Chemex":"/assets/img/Tools_3.png",
    "Moka Pot":"/assets/img/Tools_4.png",
    "AeroPress":"/assets/img/Tools_5.png",
    "French Press":"/assets/img/Tools_6.png",
    "Kettle":"/assets/img/Tools_7.png",
    "Scale":"/assets/img/Tools_8.png",
    "Grinder":"/assets/img/Tools_9.png",
    "Filter":"/assets/img/Tools_10.png",
    "Other":"/assets/img/Tools_11.png",
    }
    function clearProcessModal() {
      setprocessModalCustomName("")
      setProcessModalTime("")
      setProcessModalComment("")
    }
    const handleProcess = (item) => {                         //set show or hide input when add process
      // alert(JSON.stringify(item))
      setProcessModal([0,0,0,0])
      if (item === "Pour Water" || item === "Bloom") {
        setProcessModal([0, 1, 1, 1])
      } else if (item === "Add Coffee") {
        setProcessModal([0, 0, 1, 1])
      } else if (item === "Custom") {
        setProcessModal([1, 0, 1, 1])
      } else {
        setProcessModal([0, 0, 1, 1])
      }
      setprocessModalName(item)
      clearProcessModal()
    }
    function submitEQ(e){
      e.preventDefault()
      if(!Boolean(eqmodaldetail)){
          setEquipment([...equipment, {id:`${eqmodalname}-${eqmodaldetail}` ,name:eqmodalname, description:eqmodalname}])
      }else{
          setEquipment([...equipment, {id:`${eqmodalname}-${eqmodaldetail}` ,name:eqmodalname, description:eqmodaldetail}])
      }
      setEqmodalname('Hario V60')
      setEqmodaldetail('')
    }
    const submitProcess = () => {
        let data = {}
        if(!Boolean(processModaltime) || isNaN(processModaltime)){
            return ; //break function
        }
        if((processModalName === "Bloom")||(processModalName === "Pour Water")){
          data.water = processModalWater
          setRemainWater(remainWater-parseInt(processModalWater))
        }else if((processModalName === "Custom")){
            data.custom_name = processModalCustomName
        }
        
        
        data.id = `${processModalName}-${process.length+1}`
        data.name = processModalName
        data.time = parseInt(processModaltime)
        data.comment = processModalComment
            setProcess([...process, data])
            setRemainTime(remainTime+parseInt(data.time))
    }
    function deleteEquipment(id) {
      setEquipment(equipment.filter((item) => {
        return item.id != id
      }))
    }
    function deleteProcess(id, time, processname, water) {
      setRemainTime(remainTime-time)
      if((processname === "Bloom")||(processname === "Pour Water")){
        if(remainWater <= 0){
          setProcessMethod(["Pour Water", "Bloom", ...processMethod])
        }
        setRemainWater(remainWater+parseInt(water))
      }
      setProcess(process.filter((item) => {
        return item.id != id
      }))
    }
    const navigate = useNavigate();
    const [trigger, setTrigger] = useState(false)
    const header = {
        headers: {
            'x-token': token,
            'Content-Type': 'application/json'
        }
    }


    function submitEquipment(e) {
        e.preventDefault()
        console.log(e)
        // setEquipmentList([...equipmentList, { id: `${equipmentPic[modalEquipment]}${modalDetail}`, "pic": `${equipmentPic[modalEquipment]}.png`, "detail": temp }])
        // setModalDetail('')
      }

    const Record  = async () => { 
        let tempeq = (equipment.map((item)=>({name:item.name, description:item.description})))
        let tempProcess = ([...process].map((item)=> {
          let newprocess = {name:item.name, time:item.time, comment:item.comment};
          if(item.custom_name){
            newprocess.custom_name = item.custom_name
          }if(item.water){
            newprocess.water = item.water
          }else if(item.water == 0){
            alert('Recipe contain invalid water amount')
          }
          return newprocess
          }))
        let data ={
          name:name,
          coffee_weight:coffee,
          water:water,
          ratio:ratio,
          equipment: tempeq,
          note: note,
          process:tempProcess,
          grind_size:refine,
          temp:heat,
          roast_level:roast,
          rate:score
        }
        try{
          const result = await axios.patch(`https://q27z6n.deta.dev/recipes/${id}`, data, { headers: { 'x-token': token } });
          console.log(result)
          navigate(`/brew-recipe/${brewer}`)
        }catch(error){
          console.log(error.response)
        }
        // navigator.clipboard.writeText(JSON.stringify(data))
    }

    function changeRatio(type, value) {
        if(value>0 && !(Number.isNaN(value))){
            let multiplier = 1
            let total_process_water
            if (type === "ratio") {
              setWater(value * coffee)
              multiplier =(value * coffee)/water2
              total_process_water = value * coffee
            } else if (type === "coffee") {
              setWater(value * ratio)
              multiplier = (value * ratio)/water2
              total_process_water = value * ratio
            } else if (type === "water") {
              setCoffee(value / ratio)
              multiplier = water/water2
              total_process_water = value
            }
            
            setProcess([...process].map((item, index)=> {
              if(item.water){
                total_process_water = total_process_water - parseInt(item.water*multiplier)
                return {...item, water:item.water*multiplier}
              }
              return item
            }))
            setRemainWater(total_process_water)

        }else{
            if (type === "ratio") {
              setRatio(ratio2)
            } else if (type === "coffee") {
              setCoffee(coffee2)
            } else if (type === "water") {
              setWater(water2)
            }
        }
    }
    let [online, isOnline] = useState(navigator.onLine);
    const setOnline = () => {
      console.log('We are online!');
      isOnline(true);
    };
    const setOffline = () => {
      console.log('We are offline!');
      isOnline(false);
    };
    // Register the event listeners
    useEffect(() => {
      window.addEventListener('offline', setOffline);
      window.addEventListener('online', setOnline);
  
      // cleanup if we unmount
      return () => {
        window.removeEventListener('offline', setOffline);
        window.removeEventListener('online', setOnline);
      }
    }, []);
    useEffect(()=>{
      if(remainWater<=0){
          setProcessMethod(processMethod.filter(item=>(item!="Pour Water")&&(item!="Bloom")))
          setProcessStep("Wait")
          handleProcess("Wait")
      }
    }, [remainWater])
    
    useEffect(() => {
        const fetchData  = async () => { 
            try{
                
                const result = await axios.get(`https://q27z6n.deta.dev/recipes/${id}`, { headers: { 'accept': 'application/json' } });
                if(AdminCheck() || OwnerCheck(result.data['owner'])){
                  // setRemainWater(water - process.reduce((accumulator, object) => { return accumulator + object.water; }, 0))
                  console.log(result.data)
                }
                else{
                  navigate(`/brew-recipe/${brewer}`)
                }
              
            }catch(error){
              console.log(error)
            }
        };  
            if(online){
                fetchData();
            }else{
                // setRemainWater(water - process.reduce((accumulator, object) => { return accumulator + object.water; }, 0))
            }
            document.title = t("Btext08")
      }, []);



  return (
    <div>
      <div className="div_back"><Link to={`/brew-recipe/${brewer}/${id}`} ><i className="icon ion-android-arrow-back" id="Back_icon" /></Link></div>
      <div className="d-flex div_a" style={{ width: '80%', marginLeft: '20%' }}><button onClick={()=>{Record()}} className="btn" id="brew_save_btn" type="button"><i className="fas fa-save Add_icon" style={{ fontSize: '25px' }} /></button></div>
      <div id="main_template">
        <div className="container" id="recipelist_container">
          <input type="text" id="recipe_name_edit" placeholder="Enter Recipe Name Here" value={name} onChange={(e) => { setName(e.target.value) }} />
          {/* {remainWater} */}
          <i className="fa fa-pencil" style={{ color: '#7f502b' }} />
          <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-2 row-cols-xxl-2" style={{ height: '385px' }}>
            <div className="col" style={{ height: '425px' }}>
              <div id="guide_container1">
                <p id="guide_con_title">{t("Btext07")}</p>
                <div className="d-inline-flex" id="guide_tool_bar">
                  <div className="d-flex justify-content-center tool_add_box"><button className="btn btn-primary d-flex justify-content-center align-items-center" id="tool_add_btn" type="button" style={{ background: '#bc000000' }} data-bs-target="#Modal_tool" data-bs-toggle="modal"><i className="fas fa-plus tool_add_icon" /></button></div>
                  
                  {equipment.map((item)=>{
                      return(
                      <div className="d-flex align-items-center guide_toolbox2">
                      <div className="row g-0 row-cols-3 d-flex guide_toolr_edit">
                        <div className="col d-flex align-items-center guide_toolc1_edit">
                          <div className="guide_tool_border"><img id="guide_tool_icon" src={`${PicEQ[item.name]}`} /></div>
                        </div>
                        <div className="col guide_toolc2_edit">
                          <p className="fw-normal" id="gtext">{item.description}</p>
                        </div>
                        <div className="col d-flex justify-content-center align-items-center guide_toolc3_edit">
                          <button onClick={()=>{deleteEquipment(item.id)}} className="btn btn-primary" id="guide_tool_delete" type="button"><i className="fa fa-minus-square-o" /></button></div>
                      </div>
                    </div>
                    )
                  })}
                </div>
                <div className="row row-cols-3" id="guide_row">
                  <div className="col d-flex justify-content-center" style={{ paddingLeft: '5px', paddingRight: '5px' }}>
                    <div id="guide_card"><img id="guide_icon" src="assets/img/guide_ratio_ico.png" />
                      <p id="guide_name">{t("Modaltext31")}</p>
                      <div className="input-group"><span className="d-flex justify-content-end input-group-text" id="guide_unit2">1&nbsp; :</span>
                        <input className="form-control" type="number" id="guide_input2" value={ratio} onBlur={(e)=>{changeRatio("ratio", e.target.value)}} onChange={(e)=>{setRatio(e.target.value)}} onFocus={(e)=>{setWater2(water);setRatio2(e.target.value)}}  /></div>
                    </div>
                  </div>
                  <div className="col d-flex justify-content-center" style={{ paddingLeft: '5px', paddingRight: '5px' }}>
                    <div id="guide_card"><img id="guide_icon" src="assets/img/guide_pack_ico.png" />
                      <p id="guide_name">{t("Modaltext29")}</p>
                      <div className="input-group">
                        <input className="form-control" type="number" id="guide_input" value={coffee} onBlur={(e)=>{changeRatio("coffee", e.target.value)}} onChange={(e)=>{setCoffee(e.target.value)}} onFocus={(e)=>{setWater2(water);setCoffee2(e.target.value)}}  /><span className="input-group-text" id="guide_unit">g</span></div>
                    </div>
                  </div>
                  <div className="col d-flex justify-content-center" style={{ paddingLeft: '5px', paddingRight: '5px' }}>
                    <div id="guide_card"><img id="guide_icon" src="assets/img/guide_water_ico.png" />
                      <p id="guide_name">{t("Modaltext30")}</p>
                      <div className="input-group">
                        <input className="form-control" type="number" id="guide_input" value={water} onBlur={(e)=>{changeRatio('water', e.target.value)}} onChange={(e)=>{setWater(e.target.value)}} onFocus={(e)=>{setWater2(e.target.value)}} /><span className="input-group-text" id="guide_unit">ml</span></div>
                    </div>
                  </div>
                </div>
                <hr className="guide_nline" />
                <div className="row row-cols-3" style={{ marginRight: '0px', marginLeft: '0px' }}>
                  <div className="col d-flex justify-content-center" style={{ paddingLeft: '5px', paddingRight: '5px' }}>
                    <div id="guide_card"><img id="guide_icon" src="assets/img/guide_grind_ico.png" />
                      <p id="guide_name">{t("Modaltext32")}</p>
                      <select id="guide_option" onChange={(e) => { setRefine(e.target.value) }}>
                          <option value="Extra Fine">Extra Fine</option>
                          <option value="Fine">Fine</option>
                          <option value="Medium Fine">Medium Fine</option>
                          <option value="Medium" selected>Medium</option>
                          <option value="Medium Coarse">Medium Coarse</option>
                          <option value="Coarse">Coarse</option>
                      </select>
                    </div>
                  </div>
                  <div className="col d-flex justify-content-center" style={{ paddingLeft: '5px', paddingRight: '5px' }}>
                    <div id="guide_card"><img id="guide_icon" src="assets/img/guide_heat_ico.png" />
                      <p id="guide_name">{t("Modaltext33")}</p>
                      <div className="input-group d-sm-flex justify-content-center justify-content-xxl-center" style={{ width: '100%' }}>
                        <input className="form-control" type="text" id="guide_readonly" placeholder value={heat} onChange={(e)=>{setHeat(e.target.value)}} />
                        <span className="input-group-text" id="guide_unit">°C</span></div>
                    </div>
                  </div>
                  <div className="col d-flex justify-content-center" style={{ paddingLeft: '5px', paddingRight: '5px' }}>
                    <div id="guide_card" style={{ maxWidth: '150px', minWidth: '95px' }}><img id="guide_icon" src="assets/img/guide_bean_ico.png" />
                      <p id="guide_name">{t("Modaltext34")}</p>
                      <select id="guide_option" onChange={(e) => { setRoast(e.target.value) }}>
                        <option value="Light">Light</option>
                        <option value="Medium">Medium</option>
                        <option value="Dark" selected>Dark</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col" style={{ height: '425px' }}>
              <div id="guide_container1">
                <div className="d-inline-flex" style={{ minWidth: '100%' }}>
                  <p id="guide_con_title" style={{ width: '80%' }}>{t("Modaltext35")}</p>
                  <div style={{ minWidth: '10%' }}><img src="assets/img/guide_timer_ico.png" style={{ width: '30px', height: '30px' }} /></div>
                  <p style={{ textAlign: 'center', minWidth: '10%', paddingTop: '5px' }}>{mmss(remainTime)}</p>
                </div>
                <div id="process_container">
                  {
                    process.map((item)=>{
                      return(
                        <div className="d-inline-flex" id="Process_edit_card" style={{ width: '100%' }}>
                    <div className="process_card2">
                      <div className="d-inline-flex" style={{ minWidth: '100%' }}>
                        <div style={{ minWidth: '15%' }}><img id="process_pic" src="assets/img/Process_Dummy_icon.png" /></div>
                        <p id="process_title">{item.custom_name?item.custom_name:item.name}</p>
                        <p className="text-end" style={{ minWidth: '15%' }}>{mmss(item.time)}</p>
                      </div>
                      <div>
                        <p id="process_des">{descParse(item.name, item.water)}</p>
                      </div>
                      <div>
                        <p id="process_comment">{item.comment}</p>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center process_delete_box">
                      <button onClick={()=>{deleteProcess(item.id, item.time, item.name, item.water)}} className="btn btn-primary" id="process_timer_delete" type="button"><i className="fa fa-minus-square-o" style={{ fontSize: '20px' }} /></button></div>
                  </div>
                      )
                    })
                  }
                  
                </div>
                <div style={{ textAlign: 'center' }}><button className="btn btn-primary" id="process_timer_add" type="button" data-bs-target="#Modal_step" data-bs-toggle="modal"><i className="fas fa-plus" />&nbsp;{t("Btext09")}</button></div>
              </div>
            </div>
            <div className="col" style={{ height: '415px' }}>
              <div id="guide_container1" style={{ height: '407px' }}>
                <p id="guide_con_title">{t("Modaltext38")}</p><textarea id="comment_guide_box" rows={9} value={note} onChange={(e) => { setNote(e.target.value) }} />
                <p id="guide_con_title">{t("Btext19")}</p>
                <div className="d-inline-flex" style={{ minWidth: '100%' }}>
                  <i className="fa fa-star" id="comment_rating" style={{ width: '10%', fontSize: '30px', color: 'rgb(255,184,0)', marginLeft: '10px', marginTop: '-5px' }} />
                  <input className="form-range" type="range" id="ratingbar" min={1} max={10} step={1} value={score} onChange={(e) => { setScore(e.target.value) }} style={{ width: '70%' }} />
                  <span id="score" style={{ paddingLeft: '10px' }} /><span>{score}/10</span></div>
              </div>
              <div style={{ height: '60px', bottom: 0 }} />
            </div>
          </div>
        </div>
        <div className="modal fade" role="dialog" tabIndex={-1} id="Modal_tool">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header modal_header"><button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" /></div>
              

                <div className="modal-body modal_body">
                  <div className="row" style={{ textAlign: 'center', marginBottom: '20px' }}>
                    <div className="col">
                      <div className="tools_card">
                        <div className="d-inline-flex" style={{ width: '100%', marginTop: '5px' }}><img className="ae_legend" src="assets/img/legend_tool.png" />
                          <p id="Etitle">{t("Modaltext01")}</p>
                        </div>
                        <div className="d-inline-flex" style={{ width: '100%' }}>
                        <img id="t_preview" className="tools_image" src={`${PicEQ[eqmodalname]}`} />
                        <select className="form-select tools_switch" onChange={(e) => { setEqmodalname(e.target.value) }}>
                          <option value="Coffee" selected>{t("Modaltext02")}</option>
                          <option value="Hario V60">Hario V60</option>
                          <option value="Chemex">Chemex</option>
                          <option value="Moka Pot">Moka Pot</option>
                          <option value="AeroPress">Aeropress</option>
                          <option value="French Press">French Press</option>
                          <option value="Kettle">{t("Modaltext03")}</option>
                          <option value="Scale">{t("Modaltext04")}</option>
                          <option value="Grinder">{t("Modaltext05")}</option>
                          <option value="Filter">{t("Modaltext06")}</option>
                          <option value="Other">{t("Modaltext07")}</option>
                        </select></div>
                      </div>
                    </div>
                  </div>
                  <div className="row" style={{ marginBottom: '10px' }}>
                    <div className="col">
                      <div className="tools_card">
                        <div className="d-inline-flex" style={{ width: '100%', marginTop: '5px' }}><img className="ae_legend" src="assets/img/legend_name.png" />
                          <p id="Etitle">{t("Modaltext08")}<br /></p>
                        </div>
                        <input className="form-control ae_input" type="text" value={eqmodaldetail} onChange={(e)=>{setEqmodaldetail(e.target.value)}} required placeholder="eg. Moka pot 6-Cup, Timemore grinder" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer d-flex justify-content-center modal_footer">
              <button onClick={submitEQ} data-bs-dismiss="modal" className="btn btn-primary modal_summit" id="Modal_summit" type="submit">{t("Confirm99")}</button></div>

            </div>
          </div>
        </div>
        <div className="modal fade" role="dialog" tabIndex={-1} id="Modal_step">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header modal_header"><button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" /></div>

                <div className="modal-body modal_body">
                  <div className="row" style={{ marginBottom: '10px' }}>
                    <div className="col">
                      <div className="tools_card">
                        <div className="d-inline-flex" style={{ width: '100%', marginTop: '5px' }}><img className="ae_legend" src="assets/img/legend_process.png" />
                          <p id="Etitle">{t("Modaltext09")}</p>
                        </div><select value={processModalName} className="form-select tools_switch" style={{ marginLeft: '0px', marginTop: '0px' }} onChange={(e) => { handleProcess(e.target.value) }}>
                            {processMethod.map((item, index) => (<option key={item} value={item}>{item}</option>))}
                        </select>
                      </div>
                    </div>
                  </div>
                  {processModal[0] ?
                  <div className="row" style={{ marginBottom: '10px' }}>
                    <div className="col">
                      <div className="tools_card">
                        <div className="d-inline-flex" style={{ width: '100%', marginTop: '5px' }}><img className="ae_legend" src="assets/img/legend_name.png" />
                          <p id="Etitle">{t("Modaltext10")}</p>
                        </div><input className="form-control ae_input" type="text" placeholder="step name" value={processModalCustomName} onChange={(e)=>{setprocessModalCustomName(e.target.value)}} />
                      </div>
                    </div>
                  </div>:null}
                  {processModal[1] ?
                  <div className="row" style={{ marginBottom: '10px' }}>
                    <div className="col">
                      <div className="tools_card">
                        <div className="d-inline-flex" style={{ width: '100%', marginTop: '5px' }}><img className="ae_legend" src="assets/img/legend_water.png" />
                          <p id="Etitle">{t("Modaltext11")}</p>
                        </div>
                        <div className="row" style={{ minWidth: '100%' }}>
                          <div className="col" style={{ minWidth: '80%' }}>
                            <input min={1} max={remainWater} step={1} value={processModalWater} onChange={(e)=>{setProcessModalWater(e.target.value)}} className="form-range form-control" type="range" id="Water_Slider" /></div>
                          <div className="col" style={{ textAlign: 'center', minWidth: '10%' }}>
                            <p>{processModalWater}</p>
                          </div>
                          <div className="col" style={{ textAlign: 'center', minWidth: '10%' }}>
                            <p>ml</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>:null}
                  { processModal[2] ?
                  <div className="row" style={{ marginBottom: '10px' }}>
                    <div className="col">
                      <div className="tools_card">
                        <div className="d-inline-flex" style={{ width: '100%', marginTop: '5px' }}><img className="ae_legend" src="assets/img/legend_time.png" />
                          <p id="Etitle">{t("Modaltext13")}&nbsp;</p>
                        </div><input className="form-control ae_input" type="text" placeholder="seconds" value={processModaltime} onChange={(e)=>{setProcessModalTime(e.target.value)}} />
                      </div>
                    </div>
                  </div>
                  :null}
                  { processModal[3] ?
                  <div className="row" style={{ marginBottom: '10px' }}>
                    <div className="col">
                      <div className="tools_card">
                        <div className="d-inline-flex" style={{ width: '100%', marginTop: '5px' }}><img className="ae_legend" src="assets/img/legend_note.png" />
                          <p id="Etitle">{t("Btext18")}</p>
                        </div><input className="form-control" type="text" style={{ borderStyle: 'solid', borderColor: 'rgb(253,200,137)', borderRadius: '15px' }} placeholder={t("Modaltext28")} value={processModalComment} onChange={(e)=>{setProcessModalComment(e.target.value)}} />
                      </div>
                    </div>
                  </div>
                  :null}
                </div>
                <div className="modal-footer d-flex justify-content-center modal_footer">
                  <button onClick={()=>{submitProcess()}} data-bs-dismiss="modal"  className="btn btn-primary modal_summit" id="Modal_summit" type="submit">{t("Confirm99")}</button></div>

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
