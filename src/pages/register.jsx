import React from 'react'



import "../styles/Multiple-Input-Select-Pills.css"
import "../styles/Profile_page.css"
import "../styles/Round_switch.css"
import "../styles/styles.css"
import "../styles/Ultimate-Sidebar-Menu-BS5.css"
import "../styles/Features-Clean.css"
import "../styles/Login_Register.css"

import { useTranslation } from 'react-i18next';
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Fetching } from '../method/fetchScripts'
export default function Register() {
  const { t, i18n } = useTranslation();

  const [ username, setUsername ] = useState();
  const [ email, setEmail ] = useState();
  const [ password, setPassword ] = useState();
  const [ confirmPassword, setConfirmPassword ] = useState();

  function register(e){
    e.preventDefault()
    if(password != confirmPassword){
      alert('password not match')
    }
    else{
    let data = {
      "username": username,
      "email": email,
      "password": password
    }
    console.log(JSON.stringify(data))
    console.log(Fetching("/token", "https://q27z6n.deta.dev/users", "POST", JSON.stringify(data), {accept: "application/json", "Content-Type": "application/json"}, true))
    }}

  return (<body className="LoginBG">
    <div className="d-flex align-items-center logdiv">
  <div className="container d-flex align-items-center" id="Login_container">
    <div className="card LoginCard">
      <div className="card-body">
        <div className="d-flex Div1">
          <Link to="/login"><a className="btn btn-primary" role="button" data-bss-hover-animate="pulse" id="Toplogin_buttonR" href="">{t("Ltext01")}</a></Link>
          <img className="pic1" src="assets/img/Picture1.png" />
          <button className="btn btn-primary" id="Topregister_buttonR" type="button">{t("Ltext02")}</button></div>
        <form>
          <div>
            <p style={{marginBottom: '5px', marginLeft: '10px'}}>{t("User99")}</p>
          </div>
          <div className="d-flex InputDiv1"><i className="fa fa-user icon" />
          <input className="form-control Inputform" value={username} onChange={(e)=>{setUsername(e.target.value)}} type="text" required /></div>
          <div>
            <p style={{marginBottom: '5px', marginLeft: '10px'}}>{t("Ltext05")}</p>
          </div>
          <div className="d-flex InputDiv1"><i className="fa fa-envelope icon" />
          <input className="form-control Inputform" value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" required /></div>
          <div>
            <p style={{marginBottom: '5px', marginLeft: '10px'}}>{t("Pass99")}</p>
          </div>
          <div className="d-flex InputDiv1"><i className="fa fa-lock icon" />
          <input className="form-control Inputform" value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" required /></div>
          <div>
            <p style={{marginBottom: '5px', marginLeft: '10px'}}>{t("Ltext06")}</p>
          </div>
          <div className="d-flex InputDiv2"><i className="fa fa-lock icon" />
          <input className="form-control Inputform" value={confirmPassword} onChange={(e)=>{setConfirmPassword(e.target.value)}} type="password" required /></div>
          <div className="d-flex SkipDiv2">
            <button className="btn btn-primary d-flex" data-bss-hover-animate="pulse" id="Confirm_Button" onClick={(e)=>{register(e)}} type="submit">{t("Ltext07")}</button>
          <Link to="/"><a className="skiplog" href="">{t("Ltext04")}</a></Link></div>
        </form>
        <div style={{textAlign: 'center'}}><img className="pic3" src="assets/img/CoffeeCactus.png" /></div>
      </div>
    </div>
  </div>
</div>
</body>

  )
}
