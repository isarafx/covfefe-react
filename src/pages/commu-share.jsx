//update share to localstorage
import React, { useState } from 'react'

import "../styles/Community.css"
import "../styles/Multiple-Input-Select-Pills.css"
import "../styles/Profile_page.css"
import "../styles/Round_switch.css"
import "../styles/styles.css"
import "../styles/Ultimate-Sidebar-Menu-BS5.css"
import "../styles/Features-Clean.css"

import { useSSR, useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom'
import BackButton from '../components/backbutton'
import { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import namepic from "../assets/img/legend_name.png"
import notepic from "../assets/img/legend_note.png"
import imgtool1 from "../assets/img/Hario_ICO.png"
import imgtool2 from "../assets/img/Aeropress_ICO.png"
import imgtool3 from "../assets/img/Frenchpress_ICO.png"
import imgtool4 from "../assets/img/Moka_ICO.png"
import imgtool5 from "../assets/img/Chemex_ICO.png"


export default function CommuShare() {
  const { brewer, id } = useParams()
  const [description, setDescription] = useState('')
  const [exData, setEXDATA] = useState('')
  const tool = {
    "hario": imgtool1,
    "aeropress": imgtool2,
    "frenchpress": imgtool3,
    "mokapot": imgtool4,
    "chemex": imgtool5,
  }
  const { t, i18n } = useTranslation();
  const recipe = JSON.parse(localStorage.getItem('brew-recipe'))['items'].filter((item) => item.key === id)[0]



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

  const [trigger, setTrigger] = useState(false)
  const [recordData, setRecordData] = useState(false)
  let token = localStorage.getItem('token')
  const header = {
    headers: {
      'accept': 'application/json',
      'x-token': token,
      'Content-Type': 'application/json'
    }
  }
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (trigger) {
          const result = await axios.patch(`https://q27z6n.deta.dev/recipes/${id}`, { public: "true", description: description }, header)
          setTrigger(false)
          navigate(`/brew-recipe/${brewer}`)
        }
      } catch (error) {
        console.log(error.response)
      }
    };
    fetchData()
  }, [trigger]);

  return (
    <div>
      <div className="div_back"><Link to={`/brew-recipe/${brewer}/`} ><i className="icon ion-android-arrow-back" id="Back_icon" /></Link></div>
      <div id="main_template">
        <div className="container profile_container">
          <form id="Shared_card">
            <div className="row" style={{ textAlign: 'center', marginBottom: '20px' }}>
              <div className="col d-flex justify-content-center">
                <div className="Shared_icon_border"><img id="Shared_icon" src={tool[brewer]} /></div>
              </div>
            </div>
            <div className="row" style={{ marginBottom: '10px' }}>
              <div className="col">
                <div className="Ecard" style={{ height: '92px' }}>
                  <div className="d-inline-flex" style={{ width: '100%', marginTop: '5px' }}><img className="ae_legend" src={namepic} />
                    <p id="Etitle">{t("Ctext02")}</p>
                  </div><input className="form-control-plaintext" type="text" id="Shared_title" defaultValue={recipe.name} readOnly />
                </div>
              </div>
            </div>
            <div className="row" style={{ marginBottom: '10px' }}>
              <div className="col">
                <div className="Ecard" style={{ height: '214px' }}>
                  <div className="d-inline-flex" style={{ width: '100%', marginTop: '5px' }}><img className="ae_legend" src={notepic} />
                    <p id="Etitle">{t("Ctext03")}</p>
                  </div><textarea className="form-control" id="Shared_com_field" rows={6} value={description} onChange={(e) => { setDescription(e.target.value) }} />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col" style={{ textAlign: 'center' }}><Link to={`/brew-recipe/${brewer}`} className="btn btn-primary" role="button" id="Ecancel">{t("Cancel99")}</Link>
                <button onClick={(e) => { e.preventDefault(); setTrigger(!trigger) }} className="btn btn-primary" id="Esubmit" type="submit">{t("Confirm99")}</button></div>
            </div>
          </form>
        </div>
      </div>
      <div className="d-flex" id="Header">
        <p id="header_paragraph">{t("Ctext01")}</p>
      </div>
      <div className="d-flex" id="Footer" />
    </div>


  )
}
