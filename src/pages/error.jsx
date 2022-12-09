import React from 'react'
import "../styles/Error.css"
import "../styles/Multiple-Input-Select-Pills.css"
import "../styles/Profile_page.css"
import "../styles/Round_switch.css"
import "../styles/styles.css"
import "../styles/Ultimate-Sidebar-Menu-BS5.css"
import "../styles/Features-Clean.css"

import { useTranslation } from 'react-i18next';

export default function Error() {
  const { t, i18n } = useTranslation();
  return (
    <div>
  <div id="main_template">
    <div className="container" id="recipelist_container">
      <div style={{textAlign: 'center'}}>
        <div className="d-flex justify-content-center">
          <div className="Error_div"><img className="img-fluid" src="assets/img/Error1.png" /></div>
        </div>
        <p className="Errormain">{t("Error04")}</p>
        <p className="Errorsub">{t("Error05")}</p><a className="btn btn-primary" role="button" id="back_main_btn" href="Brewing_Main.html">{t("Error06")}</a>
      </div>
    </div>
  </div>
  <div className="d-flex" id="Header" />
  <div className="d-flex" id="Footer" />
</div>


  )
}
