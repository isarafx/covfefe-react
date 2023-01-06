import React from 'react'

import "./styles/Login_Register.css"
import "./styles/Multiple-Input-Select-Pills.css"
import "./styles/Profile_page.css"
import "./styles/Round_switch.css"
import "./styles/styles.css"
import "./styles/Ultimate-Sidebar-Menu-BS5.css"
import "./styles/Features-Clean.css"
import axios from 'axios'

import { useTranslation } from 'react-i18next';
import { useState } from 'react'
import { Link, redirect } from 'react-router-dom'
import { Fetching } from '../method/fetchScripts'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '..'

import pic1 from "../assets/img/Picture1.png"
import pic3 from "../assets/img/CoffeeCactus.png"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export default function Login() {
  const [test, setTest] = useState("t")
  const { t, i18n } = useTranslation();
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [header, setHeader] = useState("")
  const [isLogged, setIsLogged] = useState(Boolean(localStorage.getItem('token')))
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal)

  const validateEmpty = () =>{
    if(username && password){ return true; }
    else if(username){MySwal.fire({ icon: 'error', title: 'Invalid Input', text: 'Please enter Password', allowEscapeKey: false, allowOutsideClick: false, })}
    else if(password){MySwal.fire({ icon: 'error', title: 'Invalid Input', text: 'Please enter Username', allowEscapeKey: false, allowOutsideClick: false, })}
    else{ MySwal.fire({ icon: 'error', title: 'Invalid Input', text: 'Please enter all field', allowEscapeKey: false, allowOutsideClick: false, }); return false; }
  }
  const LoggingIn = async () => {
    try {
        let header = btoa(`${username}:${password}`)
        setHeader(`Basic ${header}`)
        header = {
          headers: {
            'Authorization': `Basic ${header}`
          }
        }
        if(validateEmpty()){ }else{ return ; }
        MySwal.fire({ icon: 'info', title: 'Logging In', text: 'Logging In', allowEscapeKey: false, allowOutsideClick: false , showConfirmButton: false, timer: 2000})
        const result = await axios.post('https://q27z6n.deta.dev/token', {}, header)
        localStorage.setItem('token', result.data)
        navigate('/')
    } catch (error) {
      MySwal.fire({ icon: 'error', title: 'Login Failed', text: 'Login Failed', allowEscapeKey: false, allowOutsideClick: false })
      console.log(error.response.status)
    }
  };

  return (
    <body className='LoginBG'>
      <div className="d-flex align-items-center logdiv">
        <div className="container" id="Login_container">
          <div className="card LoginCard">
            <div className="card-body">
              <div className="d-flex Div1"><button className="btn btn-primary" id="Toplogin_buttonL" type="button">{t("Ltext01")}</button>
                <img className="pic1" src={pic1} />
                <Link to="/register" className="btn btn-primary" role="button" data-bss-hover-animate="pulse" id="Topregister_buttonL">{t("Ltext02")}</Link></div>
              <form>
                <div>
                  <p style={{ marginBottom: '5px', marginLeft: '10px' }}>{t("User99")}</p>
                </div>
                <div className="d-flex InputDiv1"><i className="fa fa-user icon" />
                  <input className="form-control Inputform" type="text" value={username} onChange={(e) => { setUsername(e.target.value) }} required /></div>
                <div>
                  <p style={{ marginBottom: '5px', marginLeft: '10px' }}>{t("Pass99")}</p>
                </div>
                <div className="d-flex InputDiv2"><i className="fa fa-lock icon" />
                  <input className="form-control Inputform" type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} required /></div>
                {/* <p style={{fontSize: '13px', textAlign: 'center', marginBottom: '8px'}}>{t("Ltext03")}</p> */}
                {/* <div style={{textAlign: 'center'}}><a href="https://www.google.com"><img className="pic2" src="assets/img/Picture3.png" /></a></div> */}
                <div className="d-flex SkipDiv">

                  <button onClick={(e) => { e.preventDefault(); LoggingIn(); }} className="btn btn-primary d-flex" data-bss-hover-animate="pulse" id="Confirm_Button" type="submit">{t("Ltext01")}</button>

                  <Link className="skiplog" to="/">{t("Ltext04")}</Link>
                </div>
              </form>
              <div style={{ textAlign: 'center' }}><img className="pic3" src={pic3} /></div>
            </div>
          </div>
        </div>
      </div>


    </body>
  )
}
