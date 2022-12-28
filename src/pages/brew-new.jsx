import React from 'react'
import { useState } from 'react'
import BackButton from '../components/backbutton'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

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
import "../styles/assets/fonts/font-awesome.min.css"
import "../styles/assets/fonts/fontawesome-all.min.css"
import "../styles/assets/fonts/fontawesome5-overrides.min.css"
import "../styles/assets/fonts/ionicons.min.css"
import "../styles/assets/fonts/material-icons.min.css"

import imgmaineq1 from "../assets/img/Hario_ICO.png"
import imgmaineq2 from "../assets/img/Moka_ICO.png"
import imgmaineq3 from "../assets/img/Frenchpress_ICO.png"
import imgmaineq4 from "../assets/img/Aeropress_ICO.png"
import imgmaineq5 from "../assets/img/Chemex_ICO.png"

import imgeq1 from "../assets/img/Tools_1.png"
import imgeq2 from "../assets/img/Tools_2.png"
import imgeq3 from "../assets/img/Tools_3.png"
import imgeq4 from "../assets/img/Tools_4.png"
import imgeq5 from "../assets/img/Tools_5.png"
import imgeq6 from "../assets/img/Tools_6.png"
import imgeq7 from "../assets/img/Tools_7.png"
import imgeq8 from "../assets/img/Tools_8.png"
import imgeq9 from "../assets/img/Tools_9.png"
import imgeq10 from "../assets/img/Tools_10.png"
import imgeq11 from "../assets/img/Tools_11.png"

import imgratio from "../assets/img/guide_ratio_ico.png"
import imgpack from "../assets/img/guide_pack_ico.png"
import imgwater from "../assets/img/guide_water_ico.png"
import imggrind from "../assets/img/guide_ratio_ico.png"
import imgheat from "../assets/img/guide_heat_ico.png"
import imgbean from "../assets/img/guide_bean_ico.png"
import imgcup from "../assets/img/Cup Icon.png"
import imgtimer from "../assets/img/guide_timer_ico.png"
import imgavatar from "../assets/img/AvatarIcon.jpg"
import imgdummy from "../assets/img/Process_Dummy_icon.png"
import imgtool from "../assets/img/legend_tool.png"
import imgmodal1 from "../assets/img/legend_process.png"
import imgmodal2 from "../assets/img/legend_name.png"
import imgmodal3 from "../assets/img/legend_water.png"
import imgmodal4 from "../assets/img/legend_time.png"
import imgmodal5 from "../assets/img/legend_note.png"

export default function BrewNew() {
    const mainEQList = {
      "Hario":imgmaineq1,
      "Moka":imgmaineq2,
      "Frenchpress":imgmaineq3,
      "Aeropress":imgmaineq4,
      "Chemex":imgmaineq5
    }
    const methodList = {
      "hario":["Pour Water", "Add Coffee", "Stir", "Bloom", "Wait", "Swirl", "Rinse Filter", "Custom"],
      "mokapot":["Pour Water", "Add Coffee", "Brew", "Custom"],
      "frenchpress":["Pour Water", "Add Coffee", "Stir", "Bloom", "Wait", "Swirl", "Press Plunger", "Place Plunger", "Remove Plunger", "Custom"],
      "aeropress":["Pour Water", "Add Coffee", "Stir", "Bloom", "Wait", "Swirl", "Rinse Filter", "Press Plunger", "Place Plunger", "Remove Plunger", "Invert", "Put the Lid on", "Custom"],
      "chemex":["Pour Water", "Add Coffee", "Stir", "Bloom", "Wait", "Swirl", "Rinse Filter", "Custom"]
    };
    const nameList = {
      "Hario":"Hario",
      "Moka":"Moka Pot",
      "Frenchpress":"French Press",
      "Aeropress":"AeroPress",
      "Chemex":"Chemex"
    };
    const PicEQ = {   //assets/img/${PicEQ[item.name]}.png
      "Coffee":imgeq1,
      "Hario V60":imgeq2,
      "Chemex":imgeq3,
      "Moka Pot":imgeq4,
      "AeroPress":imgeq5,
      "French Press":imgeq6,
      "Kettle":imgeq7,
      "Scale":imgeq8,
      "Grinder":imgeq9,
      "Filter":imgeq10,
      "Other":imgeq11
      }
    const [focus, setFocus] = useState(false)
    const [mainEquipment, setMainEquipment] = useState("Hario")
    const [name, setName] = useState("")
    const [note, setNote] = useState("")
    const [score, setScore] = useState(8)
    const [coffee, setCoffee] = useState(20)
    const [water, setWater] = useState(300)
    const [ratio, setRatio] = useState(15)
    const [coffee2, setCoffee2] = useState(coffee)
    const [waterLimit, setwaterLimit] = useState(false)
    const [water2, setWater2] = useState(water)
    const [ratio2, setRatio2] = useState(ratio)
    const [refine, setRefine] = useState("Coarse")
    const [heat, setHeat] = useState(90)
    const [roast, setRoast] = useState("Dark")
    //data.id = `${processModalName}-${process.length+1}`
    const [process, setProcess] = useState([])     //{name, custom_name, water, time, comment}
    const [eqmodalname, setEqmodalname] = useState("Coffee")
    const [eqmodaldetail, setEqmodaldetail] = useState("")
    const [equipment, setEquipment] = useState([]) //{name, description}
    const [processMethod, setProcessMethod] = useState([methodList[mainEquipment]])

    const [processModal, setProcessModal] = useState([0, 1, 1, 1])
    const [processStep, setProcessStep] = useState("Pour Water")
    const [processModalName, setprocessModalName] = useState('Pour Water')
    const [processModalCustomName, setprocessModalCustomName] = useState()
    const [processModalWater, setProcessModalWater] = useState(1)
    const [processModaltime, setProcessModalTime] = useState()
    const [processModalComment, setProcessModalComment] = useState()
    const [remainWater, setRemainWater] = useState(300)
    const [remainTime, setRemainTime] = useState(0)
    const getInitialState = () => {
      const value = "";
      return value;
    };
    const { t, i18 } = useTranslation()
    
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
      }else if (item === "Custom") {
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
        setProcessStep("Wait")
        handleProcess("Wait")
    }
    function deleteEquipment(id) {
      setEquipment(equipment.filter((item) => {
        return item.id != id
      }))
    }
    function deleteProcess(id, time, processname, water) {
      setRemainTime(remainTime-time)
      if((processname === "Bloom")||(processname === "Pour Water")){
        setRemainWater(remainWater+parseInt(water))
      }
      setProcess(process.filter((item) => {
        return item.id != id
      }))
    }
    const navigate = useNavigate();
    const [trigger, setTrigger] = useState(false)
    // const header = {
    //     headers: {
    //         'x-token': token,
    //         'Content-Type': 'application/json'
    //     }
    // }


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
          brewer:nameList[mainEquipment],
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
          if(online){
            let token = localStorage.getItem('token')
            const result = await axios.post(`https://q27z6n.deta.dev/recipes`, data, { headers: { 'x-token': token } });
            console.log(result)
            navigate(`/`)}
          else{
            data = {...data, key:String(Date.now()), description:"", public:false, owner:"offline"}
            let list_recipe = JSON.parse(localStorage.getItem('brew-recipe'))
            let numcount = list_recipe['count']
            list_recipe = [...list_recipe['items'], data]
            let newitem = {count:numcount+1, items:list_recipe}
            localStorage.setItem('brew-recipe', JSON.stringify(newitem))
            console.log(newitem)
          }
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
            console.log(`type-${type}rat${ratio}cof-${coffee}wat-${water}mul-${multiplier}wat2-${water2}rem-${remainWater}`)
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
    const setOnline = () => { console.log('We are online!'); isOnline(true); };
    const setOffline = () => { console.log('We are offline!'); isOnline(false); };
    useEffect(() => { document.title = t("Btext08"); window.addEventListener('offline', setOffline); window.addEventListener('online', setOnline); return () => { window.removeEventListener('offline', setOffline); window.removeEventListener('online', setOnline); } }, []);
    useEffect(()=>{
      console.log('test')
      if(remainWater<=0 && processMethod!=undefined){
          setProcessMethod(processMethod.filter(item=>(item!="Pour Water")&&(item!="Bloom")))
          setProcessStep("Wait")
          handleProcess("Wait")
          setwaterLimit(true)
      }else if(remainWater >=0 && waterLimit){
        setProcessMethod(["Pour Water", "Bloom", ...processMethod])
        setProcessStep("Wait")
        handleProcess("Wait")
        setwaterLimit(false)
        console.warn(remainWater)
          
      }
    }, [remainWater])
  
    useEffect(()=>{
      if (mainEquipment === "Hario") {
      setProcessMethod(["Pour Water", "Add Coffee", "Stir", "Bloom", "Wait", "Swirl", "Rinse Filter", "Custom"])
    } else if (mainEquipment === "Moka") {
      setProcessMethod(["Pour Water", "Add Coffee", "Brew", "Custom"])
    } else if (mainEquipment === "Frenchpress") {
      setProcessMethod(["Pour Water", "Add Coffee", "Stir", "Bloom", "Wait", "Swirl", "Press Plunger", "Place Plunger", "Remove Plunger", "Custom"])
    } else if (mainEquipment === "Aeropress") {
      setProcessMethod(["Pour Water", "Add Coffee", "Stir", "Bloom", "Wait", "Swirl", "Rinse Filter", "Press Plunger", "Place Plunger", "Remove Plunger", "Invert", "Put the Lid on", "Custom"])
    } else if (mainEquipment === "Chemex") {
      setProcessMethod(["Pour Water", "Add Coffee", "Stir", "Bloom", "Wait", "Swirl", "Rinse Filter", "Custom"])
    }
    setRemainWater(water)
    setProcess([])
    setProcessStep("Wait")
    handleProcess("Wait")
    }, [mainEquipment])
    // useEffect(()=>{
    //     console.log(mainEquipment)
    // }, [remainWater])

  return (
    <div>
      <div className="div_back"><Link to="/" ><i className="icon ion-android-arrow-back" id="Back_icon" /></Link></div>
      <div className="d-flex div_a" style={{ width: '80%', marginLeft: '20%' }}>
          <button onClick={()=>{Record()}} className="btn" id="brew_save_btn" type="button"><i className="fas fa-save Add_icon" style={{ fontSize: '25px' }} /></button>
      </div>
      <div id="main_template">
        <div className="container profile_container">
          <div id="guide_container3" style={{ marginBottom: '10px' }}>
            <p className="newbrew_title">1.{t("Btext13")}</p>
            <div className="text-center d-flex justify-content-center align-items-center">
              <div className="newbrew_preview_border">
                <img id="brew_preview" className="newbrew_preview" src={mainEQList[mainEquipment]} /></div>
              <select className="newbrew_selector" onChange={(e) => { console.log(e.target.value);setMainEquipment(e.target.value) }}>&gt;
                <option value="Hario" selected>Hario V60</option>
                <option value="Chemex">Chemex</option>
                <option value="Moka">Moka Pot</option>
                <option value="Frenchpress">French Press</option>
                <option value="Aeropress">Aero Press</option>
              </select>
            </div>
            <p className="newbrew_title" style={{ marginTop: '5px' }}>2.{t("Btext14")}</p>
            <div className="d-inline-flex" id="guide_tool_bar">
              <div className="d-flex justify-content-center tool_add_box">
                <button className="btn btn-primary d-flex justify-content-center align-items-center" id="tool_add_btn" type="button" style={{ background: '#bc000000' }} data-bs-target="#Modal_tool" data-bs-toggle="modal"><i className="fas fa-plus tool_add_icon" /></button></div>
              {equipment.map((item) => {
                return (
                  // <NewBrewEQCard key={item.id} pic={item.pic} detail={item.detail} func={()=>{deleteEquipment(item.id)}}/>
                  <div className="d-flex align-items-center guide_toolbox2" key={item.id}>
                    <div className="row g-0 row-cols-3 d-flex guide_toolr_edit">
                      <div className="col d-flex align-items-center guide_toolc1_edit">
                        <div className="guide_tool_border"><img id="guide_tool_icon" src={PicEQ[item.name]} /></div>
                      </div>
                      <div className="col guide_toolc2_edit">
                        <p className="fw-normal" id="gtext">{item.description}</p>
                      </div>
                      <div className="col d-flex justify-content-center align-items-center guide_toolc3_edit">
                        <button onClick={() => { deleteEquipment(item.id) }} className="btn btn-primary" id="guide_tool_delete" type="button"><i className="fa fa-minus-square-o" /></button></div>
                    </div>
                  </div>
                )
              })}
            </div>
            <p className="newbrew_title" style={{ marginBottom: '20px' }}>3.{t("Btext15")}</p>
            <div className="row row-cols-3" id="guide_row">
              <div className="col d-flex justify-content-center" style={{ paddingLeft: '5px', paddingRight: '5px' }}>
                <div id="guide_card"><img id="guide_icon" src={imgratio} />
                  <p id="guide_name">{t("Modaltext31")}</p>
                  <div className="input-group"><span className="d-flex justify-content-end input-group-text" id="guide_unit2">1&nbsp; :</span>
                    <input className="form-control" type="number" min={1} max={25} step={0.1} id="guide_input2" value={ratio} 
                    onBlur={(e)=>{changeRatio("ratio", e.target.value);setFocus(false)}} 
                    onChange={(e)=>{setRatio(e.target.value)}} 
                    onFocus={(e)=>{if(focus){e.preventDefault()}else{setFocus(true);setRatio2(e.target.value);setWater2(water);setCoffee2(coffee)}}} /></div>
                </div>
              </div>
              <div className="col d-flex justify-content-center" style={{ paddingLeft: '5px', paddingRight: '5px' }}>
                <div id="guide_card"><img id="guide_icon" src={imgpack} />
                  <p id="guide_name">{t("Modaltext29")}</p>
                  <div className="input-group">
                    <input className="form-control" type="number" id="guide_input" min={1} max={200} step={0.1} value={coffee} 
                    onBlur={(e)=>{changeRatio("coffee", e.target.value);setFocus(false)}} 
                    onChange={(e)=>{setCoffee(e.target.value)}} 
                    onFocus={(e)=>{if(focus){e.preventDefault()}else{setFocus(true);setCoffee2(e.target.value);setWater2(water);setRatio2(ratio)}}}  /><span className="input-group-text" id="guide_unit">g</span></div>
                </div>
              </div>
              <div className="col d-flex justify-content-center" style={{ paddingLeft: '5px', paddingRight: '5px' }}>
                <div id="guide_card"><img id="guide_icon" src={imgwater} />
                  <p id="guide_name">{t("Modaltext30")}</p>
                  <div className="input-group">
                    <input className="form-control" type="number" id="guide_input" value={water} min={1} max={5000} step={0.1} 
                    onBlur={(e)=>{changeRatio('water', e.target.value);setFocus(false)}} 
                    onChange={(e)=>{setWater(e.target.value)}} 
                    onFocus={(e)=>{if(focus){e.preventDefault()}else{setFocus(true);setWater2(e.target.value);setCoffee2(coffee);setRatio2(ratio)}}}  /><span className="input-group-text" id="guide_unit">ml</span></div>
                </div>
              </div>
            </div>
            <hr className="guide_nline" />
            <div className="row row-cols-3" style={{ marginRight: '0px', marginLeft: '0px', marginBottom: '15px' }}>
              <div className="col d-flex justify-content-center" style={{ paddingLeft: '5px', paddingRight: '5px' }}>
                <div id="guide_card"><img id="guide_icon" src={imggrind} />
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
                <div id="guide_card"><img id="guide_icon" src={imgheat} />
                  <p id="guide_name">{t("Modaltext33")}</p>
                  <div className="input-group d-sm-flex justify-content-center justify-content-xxl-center" style={{ width: '100%' }}>
                    <input className="form-control" type="text" id="guide_readonly" value={heat} onChange={(e) => { setHeat(e.target.value) }} /><span className="input-group-text" id="guide_unit">°C</span></div>
                </div>
              </div>
              <div className="col d-flex justify-content-center" style={{ paddingLeft: '5px', paddingRight: '5px' }}>
                <div id="guide_card" style={{ maxWidth: '150px', minWidth: '95px' }}><img id="guide_icon" src={imgbean} />
                  <p id="guide_name">{t("Modaltext34")}</p>
                  <select id="guide_option" onChange={(e) => { setRoast(e.target.value) }}>
                    <option value="Light">Light</option>
                    <option value="Medium">Medium</option>
                    <option value="Dark" selected>Dark</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="d-inline-flex" style={{ minWidth: '100%' }}>
              <p className="newbrew_title" style={{ width: '80%' }}>4.{t("Btext16")}</p>
              <div style={{ minWidth: '10%' }}><img src={imgtimer} style={{ width: '30px', height: '30px' }} /></div>
              <p style={{ textAlign: 'center', minWidth: '10%', paddingTop: '5px' }}>{mmss(remainTime)}</p>
            </div>
            <div id="process_container">
              {process.map((item) => {
                return (
                  <div className="d-inline-flex" id="Process_edit_card" style={{ width: '100%' }} >
                    <div className="process_card2">
                      <div className="d-inline-flex" style={{ minWidth: '100%' }}>
                        <div style={{ minWidth: '15%' }}><img id="process_pic" src={imgdummy} /></div>
                        <p id="process_title">{item.custom_name ? item.custom_name : item.name}</p>
                        <p className="text-end" style={{ minWidth: '15%' }}>{mmss(item.time)}</p>
                      </div>
                      <div>
                        <p id="process_des">{descParse(item.name, item.water )}</p>
                      </div>
                      <div>
                        <p id="process_comment">{item.comment}</p>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center process_delete_box">
                      <button onClick={() => { deleteProcess(item.id, item.time, item.name, item.water) }} className="btn btn-primary" id="process_timer_delete" type="button"><i className="fa fa-minus-square-o" style={{ fontSize: '20px' }} /></button></div>
                  </div>
                )
              })}


            </div>
            <div style={{ textAlign: 'center' }}>
              <button className="btn btn-primary" id="process_timer_add" type="button" data-bs-target="#Modal_step" data-bs-toggle="modal">
                <i className="fas fa-plus" />&nbsp;เพิ่มขั้นตอนใหม่</button></div>
          </div>
          <div id="guide_container1" style={{ height: '450px' }}>
            <p className="newbrew_title">5.{t("Btext17")}</p>
            <div style={{ width: '100%' }}>
              <input type="text" className="ae_input" value={name} onChange={(e) => { setName(e.target.value) }} placeholder="recipe name" style={{ width: '100%', height: '35px', marginBottom: '10px', paddingLeft: '10px' }} /></div>
            <p className="newbrew_title">6.{t("Btext18")}</p>
            <textarea id="comment_guide_box" rows={9} value={note} onChange={(e) => { setNote(e.target.value) }} />
            <p id="guide_con_title">{t("Btext19")}</p>
            <div className="d-inline-flex" style={{ minWidth: '100%' }}>
              <i className="fa fa-star" id="comment_rating" style={{ width: '10%', fontSize: '30px', color: 'rgb(255,184,0)', marginLeft: '10px', marginTop: '-5px' }} />
              <input className="form-range" type="range" id="ratingbar" min={1} max={10} step={1} value={score} onChange={(e) => { setScore(e.target.value) }} style={{ width: '70%' }} />
              <span id="score" style={{ paddingLeft: '10px' }} /><span>{score}/10</span></div>
          </div>
          <div style={{ height: '60px', bottom: 0 }} />
          <div className="modal fade" role="dialog" tabIndex={-1} id="Modal_tool">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header modal_header"><button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" /></div>
                <form id="brewNew">
                  <div className="modal-body modal_body">
                    <div className="row" style={{ textAlign: 'center', marginBottom: '20px' }}>
                      <div className="col">
                        <div className="tools_card">
                          <div className="d-inline-flex" style={{ width: '100%', marginTop: '5px' }}><img className="ae_legend" src={imgtool} />
                            <p id="Etitle">{t("Modaltext01")}</p>
                          </div>
                          <div className="d-inline-flex" style={{ width: '100%' }}>
                            <img id="t_preview" className="tools_image" src={PicEQ[eqmodalname]} />
                            <select className="form-select tools_switch" onChange={(e) => { setEqmodalname(e.target.value) }} >
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
                          <div className="d-inline-flex" style={{ width: '100%', marginTop: '5px' }}><img className="ae_legend" src={imgmodal2} />
                            <p id="Etitle">{t("Modaltext08")}<br /></p>
                          </div>
                          <input className="form-control ae_input" type="text" required placeholder="eg. Moka pot 6-Cup, Timemore grinder" value={eqmodaldetail} onChange={(e)=>{setEqmodaldetail(e.target.value)}} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer d-flex justify-content-center modal_footer">
                    <button onClick={submitEQ} className="btn btn-primary modal_summit" data-bs-dismiss="modal" id="Modal_summit" type="submit">{t("Confirm99")}</button></div>
                </form>
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
                        <div className="d-inline-flex" style={{ width: '100%', marginTop: '5px' }}><img className="ae_legend" src={imgmodal1} />
                          <p id="Etitle">{t("Modaltext09")}</p>
                        </div>
                        <select value={processStep} className="form-select tools_switch" style={{ marginLeft: '0px', marginTop: '0px' }} onChange={(e) => { setProcessStep(e.target.value);handleProcess(e.target.value) }}>
                          {processMethod.map((item, index) => (<option key={item} value={item}>{item}</option>))}
                        </select>
                      </div>
                    </div>
                  </div>
                  {processModal[0] > 0 && <div className="row" style={{ marginBottom: '10px' }}>
                    <div className="col">
                      <div className="tools_card">
                        <div className="d-inline-flex" style={{ width: '100%', marginTop: '5px' }}><img className="ae_legend" src={imgmodal2} />
                          <p id="Etitle">{t("Modaltext10")}</p>
                        </div><input className="form-control ae_input" type="text" placeholder="step name" value={processModalCustomName} onChange={(e) => { setprocessModalCustomName(e.target.value) }} />
                      </div>
                    </div>
                  </div>}
                  {processModal[1] ? <div className="row" style={{ marginBottom: '10px' }}>
                    <div className="col">
                      <div className="tools_card">
                        <div className="d-inline-flex" style={{ width: '100%', marginTop: '5px' }}><img className="ae_legend" src={imgmodal3} />
                          <p id="Etitle">{t("Modaltext11")}</p>
                        </div>
                        <div className="row" style={{ minWidth: '100%' }}>
                          <div className="col" style={{ minWidth: '80%' }}>
                            <input className="form-range form-control" type="range" id="Water_Slider" min={1} max={remainWater} step={1} value={processModalWater} onChange={(e)=>{setProcessModalWater(e.target.value)}} /></div>
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
                  {processModal[2] ? <div className="row" style={{ marginBottom: '10px' }}>
                    <div className="col">
                      <div className="tools_card">
                        <div className="d-inline-flex" style={{ width: '100%', marginTop: '5px' }}><img className="ae_legend" src={imgmodal4} />
                          <p id="Etitle">{t("Modaltext13")}&nbsp;</p>
                        </div>
                        <input className="form-control ae_input" type="text" placeholder="seconds" value={processModaltime} onChange={(e) => { setProcessModalTime(e.target.value) }} />
                      </div>
                    </div>
                  </div>:null}
                  {processModal[3] ? <div className="row" style={{ marginBottom: '10px' }}>
                    <div className="col">
                      <div className="tools_card">
                        <div className="d-inline-flex" style={{ width: '100%', marginTop: '5px' }}><img className="ae_legend" src={imgmodal5} />
                          <p id="Etitle">{t("Btext18")}</p>
                        </div>
                        <input className="form-control" type="text" style={{ borderStyle: 'solid', borderColor: 'rgb(253,200,137)', borderRadius: '15px' }} placeholder={t("Modaltext28")} value={processModalComment} onChange={(e) => { setProcessModalComment(e.target.value) }} />
                      </div>
                    </div>
                  </div>:null}
                </div>
                <div className="modal-footer d-flex justify-content-center modal_footer">
                  <button onClick={() => { submitProcess() }} className="btn btn-primary " id="Modal_summit" type="submit" data-bs-dismiss="modal">{t("Confirm99")}</button></div>
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
