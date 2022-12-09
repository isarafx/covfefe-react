import React from 'react'

import "../styles/Login_Register.css"
import "../styles/Multiple-Input-Select-Pills.css"
import "../styles/Profile_page.css"
import "../styles/Round_switch.css"
import "../styles/styles.css"
import "../styles/Ultimate-Sidebar-Menu-BS5.css"
import "../styles/Features-Clean.css"

import { useTranslation } from 'react-i18next';

export default function Login() {
  const { t, i18n } = useTranslation();
  return (
    <body className='LoginBG'>
      <div className="d-flex align-items-center logdiv">
  <div className="container" id="Login_container">
    <div className="card LoginCard">
      <div className="card-body">
        <div className="d-flex Div1"><button className="btn btn-primary" id="Toplogin_buttonL" type="button">{t("Ltext01")}</button><img className="pic1" src="assets/img/Picture1.png" /><a className="btn btn-primary" role="button" data-bss-hover-animate="pulse" id="Topregister_buttonL" href="Register.html">{t("Ltext02")}</a></div>
        <form>
          <div>
            <p style={{marginBottom: '5px', marginLeft: '10px'}}>{t("User99")}</p>
          </div>
          <div className="d-flex InputDiv1"><i className="fa fa-user icon" /><input className="form-control Inputform" type="text" required /></div>
          <div>
            <p style={{marginBottom: '5px', marginLeft: '10px'}}>{t("Pass99")}</p>
          </div>
          <div className="d-flex InputDiv2"><i className="fa fa-lock icon" /><input className="form-control Inputform" type="password" required /></div>
          <p style={{fontSize: '13px', textAlign: 'center', marginBottom: '8px'}}>{t("Ltext03")}</p>
          <div style={{textAlign: 'center'}}><a href="https://www.google.com"><img className="pic2" src="assets/img/Picture3.png" /></a></div>
          <div className="d-flex SkipDiv"><button className="btn btn-primary d-flex" data-bss-hover-animate="pulse" id="Confirm_Button" type="submit">{t("Ltext01")}</button><a className="skiplog" href="Brewing_Main.html">{t("Ltext04")}</a></div>
        </form>
        <div style={{textAlign: 'center'}}><img className="pic3" src="assets/img/CoffeeCactus.png" /></div>
      </div>
    </div>
  </div>
</div>


    </body>
  )
}
