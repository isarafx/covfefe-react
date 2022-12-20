import React from 'react'
import { useState } from 'react'
import "../styles/Profile_page.css"
import "../styles/Multiple-Input-Select-Pills.css"
import "../styles/Profile_page.css"
import "../styles/Round_switch.css"
import "../styles/styles.css"
import "../styles/Ultimate-Sidebar-Menu-BS5.css"
import "../styles/Features-Clean.css"
import NavBar from '../components/navbar'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'
import { useAuth } from '..'
import { useEffect } from 'react'
import axios from 'axios'
export default function Profile() {
  const { t, i18n } = useTranslation()
  const token = localStorage.getItem('token')
  const [isLogged, setIslogged] = useState(Boolean(localStorage.getItem('token')))
  const [sound, setSound] = useState(Boolean(localStorage.getItem('sound')) && localStorage.getItem('sound') !== '0' ? true : false);
  const [totalRecipe, setTotalRecipe] = useState(0)
  const [brewCount, setBrewCount] = useState(0)

  let user = JSON.parse(atob(token.split('.')[1]));
  function changeLanguage() {
    if (i18n.language === "en") {
      i18n.changeLanguage('th')
      localStorage.setItem('i18nextLng', 'th')
    } else {
      i18n.changeLanguage('en')
      localStorage.setItem('i18nextLng', 'en')
    }
  }
  function changeSound() {
    if (sound) {
      localStorage.setItem('sound', '0')
    }else {
      localStorage.setItem('sound', '1')
    }
  }
  const lang = localStorage.getItem('i18nextLng')
  const [checker, setChecker] = useState(lang === 'en' ? true : false);
  

  // const { value } = useAuth()


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
    const fetchData  = async () => { 
      try{
        // console.log(user)
        // alert(token)
          const result = await axios.get('https://q27z6n.deta.dev/recipes/users', { headers: {'x-token': token} })
          let count = result.data['items'].filter((item)=>{return item.owner == user['username']}).length
          setTotalRecipe(count)
          localStorage.setItem('totalrecipe', count)
          // console.log(result.data['items'].filter((item)=>{return item.owner == user['username']}).length)

          //counting in server
    } catch(error){
      console.log(error.response)
      // console.log(exData)
    }
  };
      if(online){
        fetchData()}
      else{
        setTotalRecipe(localStorage.getItem('totalrecipe'))
        
      }
  }, [])

  return (
    <div>
      <NavBar />
      <div id="main_template">
        <div className="container profile_container">
          <div className="row profile_card">
            <div className="col profile_section">
              <div className="row prow">
                <div className="col" style={{ textAlign: 'center' }}>
                  <div className="d-flex justify-content-center">
                    <div className="avatar_icon_border"><img id="avatar_icon" src="assets/img/AvatarIcon.jpg" /></div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <p id="avatar_name" style={{ fontSize: '17px' }}>{ isLogged ? JSON.parse(atob(token.split('.')[1]))['username']:'username'}<Link to="/profile-edit"><a href=""><i className="fa fa-edit" style={{ color: '#515151', paddingLeft: '10px' }} /></a></Link></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row prow" data-bss-hover-animate="pulse">
                {isLogged ? 
                <div className="col"><a onClick={()=>{localStorage.setItem('token','')}} className="btn btn-primary" role="button" style={{ background: '#d35151' }} href="">{t("Ltext10")}</a></div>
                :
                <div className="col"><Link to="/login"><a className="btn btn-primary" role="button" style={{ background: '#d35151' }} href="">{t("Ltext01")}</a></Link></div>}
                
              </div>
            </div>
            <div className="col profile_section">
              <div className="row statistics_card">
                <div className="col">
                  <div>
                    <p className="statistics_num">{brewCount}</p>
                  </div>
                  <div>
                    <p className="statistics_label">{t("Ptext02")}</p>
                  </div>
                </div>
              </div>
              <div className="row statistics_card">
                <div className="col">
                  <div>
                    <p className="statistics_num">{totalRecipe}</p>
                  </div>
                  <div>
                    <p className="statistics_label">{t("Ptext03")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row srow">
            <div className="col setting_card">
              <div>
                <p className="d-flex justify-content-center setting_title">{t("Ptext05")}</p>
              </div>
              <div className="d-flex justify-content-center">
                <div className="col" style={{ width: '40.4px', maxWidth: '100%', textAlign: 'center' }}>
                  <p className="setting_label">{t("Ptext08")}</p>
                </div>
                <div className="col" style={{ maxWidth: '100%', width: '70px', textAlign: 'center', minWidth: '60px' }}><label className="switch">
                  {/* <input type="checkbox" /> */}
                  {sound?
                  <input type="checkbox" checked onClick={()=>{setSound(!sound);changeSound()}}/>
                  :<input type="checkbox" onClick={()=>{setSound(!sound);changeSound()}} />}
                  <span className="slider round" />
                </label></div>
                <div className="col" style={{ width: '40.4px', maxWidth: '100%', textAlign: 'center' }}>
                  <p className="setting_label">&nbsp;{t("Ptext07")}</p>
                </div>
              </div>
            </div>
            <div className="col setting_card">
              <div>
                <p className="d-flex justify-content-center setting_title">{t("Ptext06")}</p>
              </div>
              <div className="d-flex justify-content-center">
                <div className="col" style={{ width: '40.4px', maxWidth: '100%', textAlign: 'center' }}>
                  <p className="setting_label2">{t("Ptext09")}</p>
                </div>
                <div className="col" style={{ maxWidth: '100%', width: '70px', textAlign: 'center', minWidth: '60px' }}><label className="switch">
                  {checker?
                  <input type="checkbox" checked onClick={()=>{setChecker(!checker);changeLanguage()}}/>
                  :<input type="checkbox" onClick={()=>{setChecker(!checker);changeLanguage()}} />}
                  <span className="slider round" />
                </label></div>
                <div className="col" style={{ width: '40.4px', maxWidth: '100%', textAlign: 'center' }}>
                  <p className="setting_label2">&nbsp;{t("Ptext10")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex" id="Header">
        <p id="header_paragraph">{t("Ptext01")}</p>
      </div>
      <div className="d-flex" id="Footer" />
    </div>



  )
}
