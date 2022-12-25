import React from 'react'

import "../styles/Multiple-Input-Select-Pills.css"
import "../styles/Profile_page.css"
import "../styles/Round_switch.css"
import "../styles/styles.css"
import "../styles/Ultimate-Sidebar-Menu-BS5.css"
import "../styles/Features-Clean.css"
import errorPic from "../assets/img/Error2.png"
import { useTranslation } from 'react-i18next';

export default function Offline() {
  const { t, i18n } = useTranslation();
  return (
    <div>
  <div id="main_template">
    <div className="container" id="recipelist_container">
      <div style={{textAlign: 'center'}}>
        <div className="d-flex justify-content-center">
          <div className="Error_div"><img className="img-fluid" src={errorPic} /></div>
        </div>
        <p className="Errormain">{t("Error01")}</p>
        <p className="Errorsub">{t("Error02")}</p><button className="btn btn-primary" id="back_main_btn2" type="button">{t("Error03")}</button>
      </div>
    </div>
  </div>
  <div className="d-flex" id="Header" />
  <div className="d-flex" id="Footer" />
</div>


  )
}
