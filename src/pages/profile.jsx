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
import { LoginCheck } from '../method/mmss'
import defaultpic from"../assets/img/AvatarIcon.jpg"
export default function Profile() {
  const { t, i18n } = useTranslation()
  const [isLogged, setIslogged] = useState(Boolean(localStorage.getItem('token')))
  const [sound, setSound] = useState(Boolean(localStorage.getItem('sound')) && localStorage.getItem('sound') !== '0' ? true : false);
  const [totalRecipe, setTotalRecipe] = useState(0)
  const [brewCount, setBrewCount] = useState(0)


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
    } else {
      localStorage.setItem('sound', '1')
    }
  }
  const lang = localStorage.getItem('i18nextLng')
  const [checker, setChecker] = useState(lang === 'en' ? true : false);
  const [profile, setProfile] = useState([defaultpic])

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

  useEffect(() => {
    window.addEventListener('offline', setOffline);
    window.addEventListener('online', setOnline);

    return () => {
      window.removeEventListener('offline', setOffline);
      window.removeEventListener('online', setOnline);
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // console.log(user)
        // alert(token)
        if (LoginCheck()) {
            if(online){
                console.log('reach here')
                let token = localStorage.getItem('token')
                let user = JSON.parse(atob(localStorage.getItem('token').split('.')[1]))['username']
                console.log(user)
                const result = await axios.get('https://q27z6n.deta.dev/recipes/users', { headers: { 'x-token': token } })
                const picture = await axios.get(`https://q27z6n.deta.dev/users/${user}`, { headers: { 'x-token': token } })
                let count = result.data['items'].filter((item) => { return item.owner == user }).length
                setTotalRecipe(count)
                console.log('https://q27z6n.deta.dev'.concat(picture.data['image']))
                // let a = ('https://q27z6n.deta.dev'.concat(picture.data['image']))
                // setProfile(''JSON.stringify(picture.data['image']))
                // console.log(typeof profile)
                // console.log(typeof 'https://play-lh.googleusercontent.com/A26UUWOc_l_aPp2GRurp3sG0kaxjm8ArbFHtX5GQZ9x9QztmE_noNmHBE2fbTa855sZu')
                setProfile(['https://q27z6n.deta.dev'.concat(picture.data['image'])])
                if (Boolean(picture.data['brewed'])) {
                  setBrewCount(picture.data['brewed'])
                } else {
                  setBrewCount(0)
                }
                if (picture.data['image'] == undefined) { setProfile(defaultpic) }
                // console.log(a)
                localStorage.setItem('totalrecipe', count)
                localStorage.setItem('profileImage', 'https://q27z6n.deta.dev'.concat(picture.data['image']))
            }else{
                setProfile([defaultpic])
                setBrewCount(0)
                setTotalRecipe(0)
            }
              // console.log(picture.data['image'])
        }
        // console.log(result.data['items'].filter((item)=>{return item.owner == user['username']}).length)

        //counting in server
      } catch (error) {
        console.log(error.response)
        // console.log(exData)
      }
    };
    document.title = t("Ptext01")
    if (online) {
      fetchData()
    }
    else {
      // setTotalRecipe(localStorage.getItem('totalrecipe'))
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
                    <div className="avatar_icon_border"><img id="avatar_icon" src={profile[0]} /></div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <div className='d-inline-flex'>
                        <p id="avatar_name">{isLogged ? JSON.parse(atob(localStorage.getItem('token').split('.')[1]))['username'] : 'Guest'}</p>
                        { online?
                        <Link to="/profile-edit"><i className="fa fa-edit" style={{ color: '#515151', paddingLeft: '10px' }} /></Link>
                        :
                        <Link to="/profile-edit"><i className="fa fa-edit" style={{ color: '#515151', paddingLeft: '10px' }} /></Link>
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row prow" data-bss-hover-animate="pulse">
                {isLogged ?
                  <div className="col"><Link onClick={() => { setIslogged(false); localStorage.setItem('token', ''); setBrewCount(0); setTotalRecipe(0); setProfile(defaultpic) }} className="btn btn-primary" role="button" style={{ background: '#d35151' }} >{t("Ltext10")}</Link></div>
                  :
                  <div className="col"><Link to="/login" className="btn btn-primary" role="button" style={{ background: '#d35151' }}>{t("Ltext01")}</Link></div>}

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
                  {sound ?
                    <input type="checkbox" checked onClick={() => { setSound(!sound); changeSound() }} />
                    : <input type="checkbox" onClick={() => { setSound(!sound); changeSound() }} />}
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
                  {checker ?
                    <input type="checkbox" checked onClick={() => { setChecker(!checker); changeLanguage() }} />
                    : <input type="checkbox" onClick={() => { setChecker(!checker); changeLanguage() }} />}
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
