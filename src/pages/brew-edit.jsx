import React from 'react'
import { useState } from 'react'
import BackButton from '../components/backbutton'
import { parseNum } from '../method/mmss';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./styles/assets/fonts/font-awesome.min.css"
import "./styles/assets/fonts/fontawesome-all.min.css"
import "./styles/assets/fonts/fontawesome5-overrides.min.css"
import "./styles/assets/fonts/ionicons.min.css"
import "./styles/assets/fonts/material-icons.min.css"
import "./styles/assets/js/bs-init.js"
import "./styles/Multiple-Input-Select-Pills.css"
import "./styles/Round_switch.css"
import "./styles/styles.css"
import "./styles/Ultimate-Sidebar-Menu-BS5.css"
import "./styles/Brewing_Guide.css"
import "./styles/Brewing_Guide2.css"
import "./styles/Brewing_Guide3.css"
import "./styles/Brewing_Guide4.css"
import "./styles/Range_Slider.css"
import "./styles/Features-Clean.css"
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { AdminCheck, mmss, OwnerCheck, updateLocalList } from '../method/mmss'
import { descParse } from '../method/mmss'

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

export default function BrewEdit() {
  const [searchParams] = useSearchParams();
  const methodList = {
    "hario": ["Pour Water", "Add Coffee", "Stir", "Bloom", "Wait", "Swirl", "Rinse Filter", "Custom"],
    "mokapot": ["Pour Water", "Add Coffee", "Brew", "Custom"],
    "frenchpress": ["Pour Water", "Add Coffee", "Stir", "Bloom", "Wait", "Swirl", "Press Plunger", "Place Plunger", "Remove Plunger", "Custom"],
    "aeropress": ["Pour Water", "Add Coffee", "Stir", "Bloom", "Wait", "Swirl", "Rinse Filter", "Press Plunger", "Place Plunger", "Remove Plunger", "Invert", "Put the Lid on", "Custom"],
    "chemex": ["Pour Water", "Add Coffee", "Stir", "Bloom", "Wait", "Swirl", "Rinse Filter", "Custom"]
  };
  const { brewer, id } = useParams();
  const recipe = (JSON.parse(localStorage.getItem('brew-recipe'))['items']).filter((item) => item.key === id)[0]
  const [name, setName] = useState(recipe.name)
  const [note, setNote] = useState(recipe.note)
  const [score, setScore] = useState(recipe.rate)
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
  const [process, setProcess] = useState(recipe.process.map((item, index) => { return { ...item, id: `${item.name}-${index + 1}` } }))     //{name, custom_name, water, time, comment}
  const [oldprocess, setOldProcess] = useState()
  const [eqmodalname, setEqmodalname] = useState("Coffee")
  const [eqmodaldetail, setEqmodaldetail] = useState()
  const [equipment, setEquipment] = useState(recipe.equipment.map((item, index) => { return { id: `eq${item.name}${item.description}${index}`, "name": item.name, "description": item.description } })) //{name, description}
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
  const [waterLimit, setwaterLimit] = useState(false)
  const getInitialState = () => {
    const value = "";
    return value;
  };
  const [focus, setFocus] = useState(false)
  const token = localStorage.getItem('token')
  const user = JSON.parse(atob(localStorage.getItem('token').split('.')[1]))['username']
  const [path, setPath] = useState('/')
  const { t, i18 } = useTranslation()
  const PicEQ = {   //assets/img/${PicEQ[item.name]}.png
    "Coffee": imgeq1,
    "Hario V60": imgeq2,
    "Chemex": imgeq3,
    "Moka Pot": imgeq4,
    "AeroPress": imgeq5,
    "French Press": imgeq6,
    "Kettle": imgeq7,
    "Scale": imgeq8,
    "Grinder": imgeq9,
    "Filter": imgeq10,
    "Other": imgeq11
  }
  const TextEQ = {   //assets/img/${PicEQ[item.name]}.png
    "Coffee":t('Modaltext02'),
    "Hario V60":t('Eqmain01'),
    "Chemex":t('Eqmain02'),
    "Moka Pot":t('Eqmain03'),
    "AeroPress":t('Eqmain04'),
    "French Press":t('Eqmain05'),
    "Kettle":t('Modaltext03'),
    "Scale":t('Modaltext04'),
    "Grinder":t('Modaltext05'),
    "Filter":t('Modaltext06'),
    "Other":t('Modaltext07'),
    }
  const TextProcess = {
    "Pour Water":t("Modaltext14"),
    "Add Coffee":t("Modaltext15"),
    "Stir":t("Modaltext16"),
    "Bloom":t("Modaltext17"),
    "Wait":t("Modaltext18"),
    "Swirl":t("Modaltext19"),
    "Rinse Filter":t("Modaltext20"),
    "Brew":t("Modaltext21"),
    "Press Plunger":t("Modaltext22"),
    "Place Plunger":t("Modaltext23"),
    "Remove Plunger":t("Modaltext24"),
    "Invert":t("Modaltext25"),
    "Put the Lid on":t("Modaltext26"),
    "Custom":t("Modaltext27")
  }

  function clearProcessModal() {
    setprocessModalCustomName("")
    setProcessModalTime("")
    setProcessModalComment("")
  }
  const handleProcess = (item) => {                         //set show or hide input when add process
    // alert(JSON.stringify(item))
    setProcessModal([0, 0, 0, 0])
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
  function submitEQ(e) {
    e.preventDefault()
    setEquipment([...equipment, { id: `${String(Date.now())}`, name: eqmodalname, description: eqmodaldetail }])
    setEqmodaldetail('')
  }
  const submitProcess = () => {
    let data = {}
    if (!Boolean(processModaltime) || isNaN(processModaltime)) {
      return; //break function
    }
    if ((processModalName === "Bloom") || (processModalName === "Pour Water")) {
      data.water = processModalWater
      setRemainWater(remainWater - parseInt(processModalWater))
    } else if ((processModalName === "Custom")) {
      data.custom_name = processModalCustomName
    }


    data.id = `${processModalName}-${process.length + 1}`
    data.name = processModalName
    data.time = parseInt(processModaltime)
    data.comment = processModalComment
    setProcess([...process, data])
    setRemainTime(remainTime + parseInt(data.time))
  }
  function deleteEquipment(id) {
    setEquipment(equipment.filter((item) => {
      return item.id != id
    }))
  }
  function deleteProcess(id, time, processname, water) {
    setRemainTime(remainTime - time)
    if ((processname === "Bloom") || (processname === "Pour Water")) {
      setRemainWater(remainWater + parseInt(water))
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
    }
  }


  function submitEquipment(e) {
    e.preventDefault()
    console.log(e)
    // setEquipmentList([...equipmentList, { id: `${equipmentPic[modalEquipment]}${modalDetail}`, "pic": `${equipmentPic[modalEquipment]}.png`, "detail": temp }])
    // setModalDetail('')
  }

  const Record = async () => {
    try {
      let tempeq = (equipment.map((item) => ({ name: item.name, description: item.description })))
      let tempProcess = ([...process].map((item) => {
        let newprocess = { name: item.name, time: item.time, comment: item.comment };
        if (item.custom_name) {
          newprocess.custom_name = item.custom_name
        } if (item.water) {
          newprocess.water = item.water
        } else if (item.water == 0) {
          alert('Recipe contain invalid water amount')
        }
        return newprocess
      }))
      let data = {
        brewer: recipe.brewer,
        name: name,
        coffee_weight: parseNum(coffee),
        water: parseNum(water),
        ratio: parseNum(ratio),
        equipment: tempeq,
        note: note,
        process: tempProcess,
        grind_size: refine,
        temp: parseNum(heat),
        roast_level: roast,
        rate: score
      }
      if (online) {
        console.log(remainWater)
        const result = await axios.patch(`https://q27z6n.deta.dev/recipes/${id}`, data, { headers: { 'x-token': token } });
        console.log(result)
        navigate(`/brew-recipe/${brewer}`)
      } else {
        let olddata = data
        let _ = require('lodash');
        let user = JSON.parse(atob(localStorage.getItem('token').split('.')[1]))['username']
        let list_recipe = JSON.parse(localStorage.getItem('brew-recipe'))
        let numcount = list_recipe['count']
        list_recipe = [...(list_recipe['items'].filter((item) => item.key != id)), _.merge(recipe, data)]
        console.log(_.merge(recipe, data))
        let newitem = { count: numcount, items: list_recipe }
        localStorage.setItem('brew-recipe', JSON.stringify(newitem))
        console.log(newitem)
        let off_record = { method: "edit", key: recipe.key, data: data }

        try {
          updateLocalList('update', off_record)
        } catch {

        }
        navigate(`/brew-recipe/${brewer}`)
      }
    } catch (error) {
      console.log(error)
      console.log('error')

    }
    // navigator.clipboard.writeText(JSON.stringify(data))
  }

  function changeRatio(type, value) {
        
    if(value>0 && !(Number.isNaN(value))){
        let multiplier = 1
        let total_process_water
        if (type === "ratio") {
          value = parseNum(value)
          setRatio(value)
          setWater(parseInt(value * coffee))
          multiplier =parseInt(value * coffee)/water2
          total_process_water = parseInt(value * coffee)
        } else if (type === "coffee") {
          value = parseNum(value)
          setCoffee(value)
          setWater(parseInt(value * ratio))
          multiplier = parseInt(value * ratio)/water2
          total_process_water = parseInt(value * ratio)
        } else if (type === "water") {
          value = parseInt(value)
          setWater(value)
          setCoffee(parseNum(value / ratio))
          multiplier = parseNum(water/water2)
          total_process_water = parseInt(value)
        }
        // console.log(`type-${type}rat${ratio}cof-${coffee}wat-${water}mul-${multiplier}wat2-${water2}rem-${remainWater}`)
        setProcess([...process].map((item, index)=> {
          if(item.water){
            total_process_water = total_process_water - parseInt(item.water*multiplier)
            return {...item, water:parseInt(item.water*multiplier)}
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
  useEffect(() => { window.addEventListener('offline', setOffline); window.addEventListener('online', setOnline); return () => { window.removeEventListener('offline', setOffline); window.removeEventListener('online', setOnline); } }, []);
  useEffect(() => {
    console.log('test')
    if (remainWater <= 0 && processMethod != undefined) {
      setProcessMethod(processMethod.filter(item => (item != "Pour Water") && (item != "Bloom")))
      setProcessStep("Wait")
      handleProcess("Wait")
      setwaterLimit(true)
    } else if (remainWater >= 0 && waterLimit) {
      setProcessMethod(["Pour Water", "Bloom", ...processMethod])
      setProcessStep("Wait")
      handleProcess("Wait")
      setwaterLimit(false)
      console.warn(remainWater)

    }
  }, [remainWater])

  useEffect(() => {
    const fetchData = async () => {
      try {

        const result = await axios.get(`https://q27z6n.deta.dev/recipes/${id}`, { headers: { 'accept': 'application/json' } });
        let total_process_water = water
        for (const element of process) {
          if (element.water) {
            total_process_water = total_process_water - element.water
          }
        }
        setRemainWater(total_process_water)
        if (AdminCheck() || OwnerCheck(result.data['owner'])) {
          console.log(result.data)
        }
        else {
          navigate(`/brew-recipe/${brewer}`)
        }

      } catch (error) {
        console.log(error)
      }
    };
    if (searchParams.get('recipe') == 1) {
      setPath(`/brew-recipe/${brewer}`)
    } else{
      setPath(`/brew-recipe/${brewer}/${id}`)
    }
    if (online) {
      fetchData();
    } else {
      // setRemainWater(water - process.reduce((accumulator, object) => { return accumulator + object.water; }, 0))
    }
    document.title = t("Btext08")
  }, []);


  return (
    <div>
      <div className="div_back"><Link to={path} ><i className="icon ion-android-arrow-back" id="Back_icon" /></Link></div>
      <div className="d-flex div_a" style={{ width: '80%', marginLeft: '20%' }}>
        <button onClick={() => { Record() }} className="btn" id="brew_save_btn" type="button"><i className="fas fa-save Add_icon" style={{ fontSize: '25px' }} /></button></div>
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

                  {equipment ? equipment.map((item) => {
                    return (
                      <div className="d-flex align-items-center guide_toolbox2" key={item.id}>
                        <div className="row g-0 row-cols-3 d-flex guide_toolr_edit">
                          <div className="col d-flex align-items-center guide_toolc1_edit">
                            <div className="guide_tool_border"><img id="guide_tool_icon" src={PicEQ[item.name]} /></div>
                          </div>
                          <div className="col guide_toolc2_edit">
                            <p className="fw-normal" id="gtext">{item.description?item.description:TextEQ[item.name]}</p>
                          </div>
                          <div className="col d-flex justify-content-center align-items-center guide_toolc3_edit">
                            <button onClick={() => { deleteEquipment(item.id) }} className="btn btn-primary" id="guide_tool_delete" type="button"><i className="fa fa-minus-square-o" /></button></div>
                        </div>
                      </div>
                    )
                  }) : null}
                </div>
                <div className="row row-cols-3" id="guide_row">
                  <div className="col d-flex justify-content-center" style={{ paddingLeft: '5px', paddingRight: '5px' }}>
                    <div id="guide_card"><img id="guide_icon" src={imgratio} />
                      <p id="guide_name">{t("Modaltext31")}</p>
                      <div className="input-group"><span className="d-flex justify-content-end input-group-text" id="guide_unit2">1&nbsp; :</span>
                        <input className="form-control" type="number" id="guide_input2" value={ratio}
                          onBlur={(e) => { changeRatio("ratio", e.target.value); setFocus(false) }}
                          onChange={(e) => { setRatio(e.target.value) }}
                          onFocus={(e) => { setWater2(water); setRatio2(e.target.value) }} /></div>
                    </div>
                  </div>
                  <div className="col d-flex justify-content-center" style={{ paddingLeft: '5px', paddingRight: '5px' }}>
                    <div id="guide_card"><img id="guide_icon" src={imgpack} />
                      <p id="guide_name">{t("Modaltext29")}</p>
                      <div className="input-group">
                        <input className="form-control" type="number" id="guide_input" value={coffee}
                          onBlur={(e) => { changeRatio("coffee", e.target.value); setFocus(false) }}
                          onChange={(e) => { setCoffee(e.target.value) }}
                          onFocus={(e) => { setWater2(water); setCoffee2(e.target.value) }} /><span className="input-group-text" id="guide_unit">g</span></div>
                    </div>
                  </div>
                  <div className="col d-flex justify-content-center" style={{ paddingLeft: '5px', paddingRight: '5px' }}>
                    <div id="guide_card"><img id="guide_icon" src={imgwater} />
                      <p id="guide_name">{t("Modaltext30")}</p>
                      <div className="input-group">
                        <input className="form-control" type="number" id="guide_input" value={water}
                          onBlur={(e) => { changeRatio('water', e.target.value); setFocus(false) }}
                          onChange={(e) => { setWater(e.target.value) }}
                          onFocus={(e) => { if (focus) { e.preventDefault() } else { setFocus(true); setWater2(e.target.value); setCoffee2(coffee); setRatio2(ratio) } }} /><span className="input-group-text" id="guide_unit">ml</span></div>
                    </div>
                  </div>
                </div>
                <hr className="guide_nline" />
                <div className="row row-cols-3" style={{ marginRight: '0px', marginLeft: '0px' }}>
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
                        <input className="form-control" type="text" id="guide_readonly" placeholder value={heat} onChange={(e) => { setHeat(e.target.value) }} />
                        <span className="input-group-text" id="guide_unit">??C</span></div>
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
              </div>
            </div>
            <div className="col" style={{ height: '425px' }}>
              <div id="guide_container1">
                <div className="d-inline-flex" style={{ minWidth: '100%' }}>
                  <p id="guide_con_title" style={{ width: '80%' }}>{t("Modaltext35")}</p>
                  <div style={{ minWidth: '10%' }}><img src={imgtimer} style={{ width: '30px', height: '30px' }} /></div>
                  <p style={{ textAlign: 'center', minWidth: '10%', paddingTop: '5px' }}>{mmss(remainTime)}</p>
                </div>
                <div id="process_container">
                  {
                    process ? process.map((item) => {
                      return (
                        <div className="d-inline-flex" id="Process_edit_card" style={{ width: '100%' }}>
                          <div className="process_card2">
                            <div className="d-inline-flex" style={{ minWidth: '100%' }}>
                              <div style={{ minWidth: '15%' }}><img id="process_pic" src={imgdummy} /></div>
                              <p id="process_title">{item.custom_name ? item.custom_name : TextProcess[item.name]}</p>
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
                            <button onClick={() => { deleteProcess(item.id, item.time, item.name, item.water) }} className="btn btn-primary" id="process_timer_delete" type="button"><i className="fa fa-minus-square-o" style={{ fontSize: '20px' }} /></button></div>
                        </div>
                      )
                    })
                      : null}

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
                      <div className="d-inline-flex" style={{ width: '100%', marginTop: '5px' }}><img className="ae_legend" src={imgtool} />
                        <p id="Etitle">{t("Modaltext01")}</p>
                      </div>
                      <div className="d-inline-flex" style={{ width: '100%' }}>
                        <img id="t_preview" className="tools_image" src={PicEQ[eqmodalname]} />
                        <select className="form-select tools_switch" onChange={(e) => { setEqmodalname(e.target.value) }}>
                              <option value="Coffee" selected>{t("Modaltext02")}</option>
                              <option value="Hario V60">{t("Eqmain01")}</option>
                              <option value="Chemex">{t("Eqmain02")}</option>
                              <option value="Moka Pot">{t("Eqmain03")}</option>
                              <option value="AeroPress">{t("Eqmain04")}</option>
                              <option value="French Press">{t("Eqmain05")}</option>
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
                      <input className="form-control ae_input" type="text" value={eqmodaldetail} onChange={(e) => { setEqmodaldetail(e.target.value) }} required placeholder="eg. Moka pot 6-Cup, Timemore grinder" />
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
                      <div className="d-inline-flex" style={{ width: '100%', marginTop: '5px' }}><img className="ae_legend" src={imgmodal1} />
                        <p id="Etitle">{t("Modaltext09")}</p>
                      </div><select value={processModalName} className="form-select tools_switch" style={{ marginLeft: '0px', marginTop: '0px' }} onChange={(e) => { handleProcess(e.target.value) }}>
                        {processMethod ? processMethod.map((item, index) => (<option key={item} value={item}>{TextProcess[item]}</option>)) : null}
                      </select>
                    </div>
                  </div>
                </div>
                {processModal[0] ?
                  <div className="row" style={{ marginBottom: '10px' }}>
                    <div className="col">
                      <div className="tools_card">
                        <div className="d-inline-flex" style={{ width: '100%', marginTop: '5px' }}><img className="ae_legend" src={imgmodal2} />
                          <p id="Etitle">{t("Modaltext10")}</p>
                        </div><input className="form-control ae_input" type="text" placeholder="step name" value={processModalCustomName} onChange={(e) => { setprocessModalCustomName(e.target.value) }} />
                      </div>
                    </div>
                  </div> : null}
                {processModal[1] ?
                  <div className="row" style={{ marginBottom: '10px' }}>
                    <div className="col">
                      <div className="tools_card">
                        <div className="d-inline-flex" style={{ width: '100%', marginTop: '5px' }}><img className="ae_legend" src={imgmodal3} />
                          <p id="Etitle">{t("Modaltext11")}</p>
                        </div>
                        <div className="row" style={{ minWidth: '100%' }}>
                          <div className="col" style={{ minWidth: '80%' }}>
                            <input min={1} max={remainWater} step={1} value={processModalWater} onChange={(e) => { setProcessModalWater(e.target.value) }} className="form-range form-control" type="range" id="Water_Slider" /></div>
                          <div className="col" style={{ textAlign: 'center', minWidth: '10%' }}>
                            <p>{processModalWater}</p>
                          </div>
                          <div className="col" style={{ textAlign: 'center', minWidth: '10%' }}>
                            <p>ml</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> : null}
                {processModal[2] ?
                  <div className="row" style={{ marginBottom: '10px' }}>
                    <div className="col">
                      <div className="tools_card">
                        <div className="d-inline-flex" style={{ width: '100%', marginTop: '5px' }}><img className="ae_legend" src={imgmodal4} />
                          <p id="Etitle">{t("Modaltext13")}&nbsp;</p>
                        </div><input className="form-control ae_input" type="text" placeholder="seconds" value={processModaltime} onChange={(e) => { setProcessModalTime(e.target.value) }} />
                      </div>
                    </div>
                  </div>
                  : null}
                {processModal[3] ?
                  <div className="row" style={{ marginBottom: '10px' }}>
                    <div className="col">
                      <div className="tools_card">
                        <div className="d-inline-flex" style={{ width: '100%', marginTop: '5px' }}><img className="ae_legend" src={imgmodal5} />
                          <p id="Etitle">{t("Btext18")}</p>
                        </div><input className="form-control" type="text" style={{ borderStyle: 'solid', borderColor: 'rgb(253,200,137)', borderRadius: '15px' }} placeholder={t("Modaltext28")} value={processModalComment} onChange={(e) => { setProcessModalComment(e.target.value) }} />
                      </div>
                    </div>
                  </div>
                  : null}
              </div>
              <div className="modal-footer d-flex justify-content-center modal_footer">
                <button onClick={() => { submitProcess() }} data-bs-dismiss="modal" className="btn btn-primary modal_summit" id="Modal_summit" type="submit">{t("Confirm99")}</button></div>

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
