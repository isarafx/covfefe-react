import React from 'react'



import "../styles/Multiple-Input-Select-Pills.css"
import "../styles/Profile_page.css"
import "../styles/Round_switch.css"
import "../styles/styles.css"
import "../styles/Ultimate-Sidebar-Menu-BS5.css"
import "../styles/Features-Clean.css"
import "../styles/Login_Register.css"

import { useTranslation } from 'react-i18next';

export default function Register() {
  const { t, i18n } = useTranslation();
  return (<body className="LoginBG">
    <div className="d-flex align-items-center logdiv">
  <div className="container d-flex align-items-center" id="Login_container">
    <div className="card LoginCard">
      <div className="card-body">
        <div className="d-flex Div1"><a className="btn btn-primary" role="button" data-bss-hover-animate="pulse" id="Toplogin_buttonR" href="Login.html">{t("Ltext01")}</a><img className="pic1" src="assets/img/Picture1.png" /><button className="btn btn-primary" id="Topregister_buttonR" type="button">{t("Ltext02")}</button></div>
        <form>
          <div>
            <p style={{marginBottom: '5px', marginLeft: '10px'}}>{t("User99")}</p>
          </div>
          <div className="d-flex InputDiv1"><i className="fa fa-user icon" /><input className="form-control Inputform" type="text" required /></div>
          <div>
            <p style={{marginBottom: '5px', marginLeft: '10px'}}>{t("Ltext05")}</p>
          </div>
          <div className="d-flex InputDiv1"><i className="fa fa-envelope icon" /><input className="form-control Inputform" type="email" required /></div>
          <div>
            <p style={{marginBottom: '5px', marginLeft: '10px'}}>{t("Pass99")}</p>
          </div>
          <div className="d-flex InputDiv1"><i className="fa fa-lock icon" /><input className="form-control Inputform" type="password" required /></div>
          <div>
            <p style={{marginBottom: '5px', marginLeft: '10px'}}>{t("Ltext06")}</p>
          </div>
          <div className="d-flex InputDiv2"><i className="fa fa-lock icon" /><input className="form-control Inputform" type="password" required /></div>
          <div className="d-flex SkipDiv2"><button className="btn btn-primary d-flex" data-bss-hover-animate="pulse" id="Confirm_Button" type="submit">{t("Ltext07")}</button><a className="skiplog" href="Brewing_Main.html">{t("Ltext04")}</a></div>
        </form>
        <div style={{textAlign: 'center'}}><img className="pic3" src="assets/img/CoffeeCactus.png" /></div>
      </div>
    </div>
  </div>
</div>
</body>

  )
}
