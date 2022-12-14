import React from 'react'
import { AdminCheck, descParse, postAll } from '../method/mmss'
import "./styles/Multiple-Input-Select-Pills.css"
import "./styles/Profile_page.css"
import "./styles/Round_switch.css"
import "./styles/styles.css"
import "./styles/Ultimate-Sidebar-Menu-BS5.css"
import "./styles/Brewing_Guide.css"
import "./styles/Brewing_Guide2.css"
import "./styles/Brewing_Guide3.css"
import "./styles/Brewing_Guide4.css"
import "./styles/Features-Clean.css"
import BrewGuideProcessCard from '../components/brewguideprocesscard'
import BrewGuideEQCard from '../components/brewguideeqcard'
import BackButton from '../components/backbutton'
import Comment from '../components/comment'
import { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { mmss } from '../method/mmss'
import axios from 'axios'
import { useSearchParams } from 'react-router-dom'

import imgratio from "../assets/img/guide_ratio_ico.png"
import imgpack from "../assets/img/guide_pack_ico.png"
import imgwater from "../assets/img/guide_water_ico.png"
import imggrind from "../assets/img/guide_ratio_ico.png"
import imgheat from "../assets/img/guide_heat_ico.png"
import imgbean from "../assets/img/guide_bean_ico.png"
import imgcup from "../assets/img/Cup Icon.png"
import imgtimer from "../assets/img/guide_timer_ico.png"
import imgavatar from "../assets/img/AvatarIcon.jpg"

export default function BrewGuide() {
  const { brewer, id } = useParams();
  const [searchParams] = useSearchParams();
  const [cup, setCup] = useState(1)
  const { t, i18n } = useTranslation();
  const [isLogged, setIsLogged] = useState(Boolean(localStorage.getItem('token')) ? localStorage.getItem('token') : null)
  const [path, setPath] = useState(`/brew-recipe/${brewer}`)
  let editpath = `/brew-recipe/${brewer}/edit/${id}`
  const [comment, setComment] = useState('')
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
  let [online, isOnline] = useState(navigator.onLine);
  const [recipe, setRecipe] = useState()
  const [isOwner, setOwner] = useState(false)
  const [Public, setPublic] = useState(false)
  //offline detection
  const setOnline = () => { isOnline(true); };
  const setOffline = () => { isOnline(false); };
  useEffect(() => { window.addEventListener('offline', setOffline); window.addEventListener('online', setOnline); return () => { window.removeEventListener('offline', setOffline); window.removeEventListener('online', setOnline); } }, []);

  const [equipmentList, setEquipmentList] = useState(recipe && recipe.equipment != [] ? recipe.comments : null)
  const [commentList, setCommentList] = useState(recipe && recipe.comments != [] ? recipe.comments : null)
  // [
  //   {username:"Admin1", message:"This is so Good1!", created_date:"2022-12-13T08:06:38+00:00"},
  //   {username:"Admin2", message:"This is so Good2!", created_date:"2022-12-13T08:07:38+00:00"},
  //   {username:"Admin3", message:"This is so Good3!", created_date:"2022-12-13T08:08:38+00:00"},
  //   {username:"Admin4", message:"This is so Good4!", created_date:"2022-12-13T08:09:38+00:00"},
  //   {username:"Admin5", message:"This is so Good5!", created_date:"2022-12-13T08:10:38+00:00"},
  //   {username:"Admin2", message:"This is so Good6!", created_date:"2022-12-13T08:11:38+00:00"},
  // ]

  const totaltime = (recipe ? recipe.process.reduce((accumulator, object) => { return accumulator + object.time; }, 0) : null)
  const postComment = async (e) => {
    e.preventDefault()
    try {
      if (isLogged) {
        if (online) {
          let data = { "message": comment }
          setComment('')
          let token = localStorage.getItem('token')
          const result = await axios.post(`https://q27z6n.deta.dev/recipes/${id}/comment`, data, { headers: { 'x-token': token } });

          setCommentList(result.data.comments)
        }
      }
    } catch (error) {
      console.log(error.response)
    }
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(`https://q27z6n.deta.dev/recipes/${id}`);
        setRecipe(result.data);
        setEquipmentList(result.data.equipment)
        setCommentList(result.data.comments)
        setPublic(Boolean(result.data.public && Boolean(result.data.owner !== 'admin')))
        console.log(result)
        let user = JSON.parse(atob(localStorage.getItem('token').split('.')[1]))
        if (user.username === recipe.owner) { setOwner(true) }
        // localStorage.setItem('brew-recipe', JSON.stringify(result.data))
      } catch (error) {
        console.log(error)
      }
    }
    if (searchParams.get('community') == 1) {
      setPath('/community')
      editpath = `/`
    } else if (searchParams.get('favorite') == 1) {
      setPath('/favorite')
      editpath = `/`
    }
    if (online) {
      fetchData()
      // postAll()
    } else {
      setRecipe(JSON.parse(localStorage.getItem('brew-recipe'))['items'].filter((item) => { return item.key === id })[0]);
      setCommentList(JSON.parse(localStorage.getItem('brew-recipe'))['items'].filter((item) => { return item.key === id })[0].comments)
      setPublic(Boolean(JSON.parse(localStorage.getItem('brew-recipe'))['items'].filter((item) => { return item.key === id })[0].public && Boolean(JSON.parse(localStorage.getItem('brew-recipe'))['items'].filter((item) => { return item.key === id })[0].owner !== 'admin')))
      if (isLogged) {
        let user = JSON.parse(atob(localStorage.getItem('token').split('.')[1]))
        if (user.username === JSON.parse(localStorage.getItem('brew-recipe'))['items'].filter((item) => { return item.key === id })[0].owner) { setOwner(true) }
      }
    }
    document.title = t("Btext06")

  }, [])
  return (
    <div>
      <div className="div_back"><Link to={path} ><i className="icon ion-android-arrow-back" id="Back_icon" /></Link></div>
      {isOwner ? <div className="d-flex div_a" style={{ width: '80%', marginLeft: '20%' }}><Link to={editpath}><i className="fa fa-pencil Add_icon" style={{ fontSize: '25px' }} /></Link></div>
        : null}
      <div id="main_template">
        <div className="container" id="recipelist_container">
          <h1 id="guide_head">{recipe ? recipe.name : null}</h1>
          <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-2 row-cols-xxl-2" style={{ height: '385px' }}>
            <div className="col" style={{ height: '425px' }}>
              <div id="guide_container1">
                <p id="guide_con_title">{t("Btext07")}</p>
                <div className="d-inline-flex" id="guide_tool_bar">

                  {equipmentList ? 
                  equipmentList.map((item) => { return (<BrewGuideEQCard pic={item.name} detail={item.description?item.description:TextEQ[item.name]} />) }) 
                  : 
                  <p className="d-flex justify-content-center align-items-center notool_exception" style={{textAlign: 'center'}}>???????????????????????????????????? ????????????????????????????????????????????? ??? ??????????????????</p>
                  }
                </div>
                <div className="row row-cols-3" id="guide_row">
                  <div className="col d-flex justify-content-center" style={{ paddingLeft: '5px', paddingRight: '5px' }}>
                    <div id="guide_card"><img id="guide_icon" src={imgratio} />
                      <p id="guide_name">{t("Modaltext31")}</p>
                      <div className="input-group"><span className="d-flex justify-content-end input-group-text" id="guide_unit2">1&nbsp; :</span>
                        <input className="form-control" type="number" id="guide_input2" disabled value={recipe ? recipe.ratio : 15} /></div>
                    </div>
                  </div>
                  <div className="col d-flex justify-content-center" style={{ paddingLeft: '5px', paddingRight: '5px' }}>
                    <div id="guide_card"><img id="guide_icon" src={imgpack} />
                      <p id="guide_name">{t("Modaltext29")}</p>
                      <div className="input-group">
                        <input className="form-control" type="number" id="guide_input" disabled value={recipe ? recipe.coffee_weight * cup : 20} /><span className="input-group-text" id="guide_unit">g</span></div>
                    </div>
                  </div>
                  <div className="col d-flex justify-content-center" style={{ paddingLeft: '5px', paddingRight: '5px' }}>
                    <div id="guide_card"><img id="guide_icon" src={imgwater} />
                      <p id="guide_name">{t("Modaltext30")}</p>
                      <div className="input-group">
                        <input className="form-control" type="number" id="guide_input" disabled value={recipe ? recipe.water * cup : 300} /><span className="input-group-text" id="guide_unit">ml</span></div>
                    </div>
                  </div>
                </div>
                <hr className="guide_nline" />
                <div className="row row-cols-3" style={{ marginRight: '0px', marginLeft: '0px' }}>
                  <div className="col d-flex justify-content-center" style={{ paddingLeft: '5px', paddingRight: '5px' }}>
                    <div id="guide_card"><img id="guide_icon" src={imggrind} />
                      <p id="guide_name">{t("Modaltext32")}</p><select id="guide_option" disabled>
                        <option value={14} selected>{recipe ? recipe.grind_size : "Medium"}</option>
                        {/* <option value={13}>Fine</option>
                    <option value>Medium Fine</option>
                    <option value={12} selected>Medium</option>
                    <option value>Medium Coarse</option>
                    <option value={15}>Coarse</option> */}
                      </select>
                    </div>
                  </div>
                  <div className="col d-flex justify-content-center" style={{ paddingLeft: '5px', paddingRight: '5px' }}>
                    <div id="guide_card"><img id="guide_icon" src={imgheat} />
                      <p id="guide_name">{t("Modaltext33")}</p>
                      <div className="input-group d-sm-flex justify-content-center justify-content-xxl-center" style={{ width: '100%' }}>
                        <input className="form-control" type="text" id="guide_readonly" value={recipe ? recipe.temp : null} disabled /><span className="input-group-text" id="guide_unit">??C</span></div>
                    </div>
                  </div>
                  <div className="col d-flex justify-content-center" style={{ paddingLeft: '5px', paddingRight: '5px' }}>
                    <div id="guide_card" style={{ maxWidth: '150px', minWidth: '95px' }}><img id="guide_icon" src={imgbean} />
                      <p id="guide_name">{t("Modaltext34")}</p><select id="guide_option" disabled>
                        <option value={14} selected>{recipe ? recipe.roast_level : "Medium"}</option>
                        {/* <option value={13}>Medium</option>
                    <option value={12} selected>Dark</option> */}
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row row-cols-3 d-flex justify-content-center align-items-center" style={{ marginRight: '0px', marginLeft: '0px', width: '100%' }}>
                  <div className="col" style={{ width: '100%' }}>
                    <div className="d-inline-flex" style={{ width: '100%' }}>
                      <div id="cup_number_div"><img id="cup_number_icon" src={imgcup} /></div>
                      <input className="form-range" type="range" id="myRange" min={1} max={10} step={1} value={cup} onChange={(e) => { setCup(e.target.value) }} /><span id="demo" style={{ marginTop: '18px', paddingLeft: '10px' }}>{cup}</span>
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
                  <p style={{ textAlign: 'center', minWidth: '10%', paddingTop: '5px' }}>{totaltime ? mmss(totaltime) : mmss(0)}</p>
                </div>
                <div id="process_container">

                  {recipe ? recipe.process.map((item) => {
                    return (<BrewGuideProcessCard name={item.custom_name ? item.custom_name : TextProcess[item.name]} description={descParse(item.name,item.water)} comment={item.comment} time={item.time} water={item.water * cup} />)
                  }) : null}
                </div>
                <div style={{ textAlign: 'center' }}><Link to={`/brew-recipe/${brewer}/timer/${id}?cup=${cup}&owner=${recipe ? recipe.owner : null}`}><a className="btn btn-primary" role="button" id="process_timer_start" href="">{t("Modaltext36")}</a></Link></div>
              </div>
            </div>

            {isOwner || AdminCheck() ? <div className="col" style={{ height: '415px' }}>
              <div id="guide_container1" style={{ height: '407px' }}>
                <p id="guide_con_title">{t("Modaltext38")}</p><textarea id="comment_guide_box" rows={9} readOnly value={recipe ? recipe.note : null} />
                <p id="guide_con_title">{t("Btext19")}</p>
                <div className="d-inline-flex" style={{ minWidth: '100%' }}><i className="fa fa-star" id="comment_rating" style={{ width: '10%', fontSize: '30px', color: 'rgb(255,184,0)', marginLeft: '10px', marginTop: '-5px' }} />
                  <input className="form-range" type="range" id="ratingbar" min={1} max={10} step={1} value={recipe ? recipe.rate : null} style={{ width: '70%' }} disabled /><span id="score" style={{ paddingLeft: '10px' }} /><span>{recipe ? recipe.rate : 8}/10</span>
                </div>
              </div>
              <div className="col" style={{ width: '100%', overflow: 'auto' }}>
              </div>
            </div> : null}

            {Public && online ? <div className="col" style={{ width: '100%', overflow: 'auto' }}>
              <div id="guide_container2">
                <p id="guide_con_title">{t("Ctext14")}</p>
                <textarea id="comment_guide_box" rows={9} readOnly value={recipe ? recipe.description : null} />
                <div className="d-inline-flex justify-content-end" style={{ minWidth: '100%', height: '50px' }}><img className="creator_avatar_icon" src={imgavatar} />
                  <p className="creator_avatar_name">{recipe ? recipe.owner : null}</p>
                </div>
                <hr style={{ marginTop: '0px', background: '#ff9900', height: '2px' }} />
                <div id="Comment_container_div">
                  {commentList ? commentList.map((item) => {
                    return (<Comment name={item.username} message={item.message} />)
                  }) 
                  : 
                  <div id="Comment_container_div">
                      <div className="nocomment_exception">
                          <p className="nocomment_e1">No Review yet.</p>
                          <p className="nocomment_e2">Be the first to review!<br /></p>
                      </div>
                  </div>
                  }
                </div>
                <p style={{ color: '#cb0c00', marginBottom: '10px', marginTop: '5px' }}>{t("Ctext10")}</p>
                <form onSubmit={postComment}>
                  <textarea id="Post_comment_box" rows={1} oninput="auto_grow(this)" required value={comment} onChange={(e) => { setComment(e.target.value) }} />
                  <div className="d-flex justify-content-end"><button className="btn btn-primary d-xxl-flex" id="post_comment_btn" type="submit">{t("Ctext11")}</button>
                  </div>
                </form>
              </div>
            </div> : null}
            <div style={{ height: '60px', bottom: 0 }} />
          </div>
        </div>
      </div>
      <div className="d-flex" id="Header">
        <p id="header_paragraph">{t("Btext06")}</p>
      </div>
      <div className="d-flex" id="Footer" />
    </div>


  )
}
