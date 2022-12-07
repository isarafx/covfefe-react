import React from 'react'

import "../styles/Multiple-Input-Select-Pills.css"
import "../styles/Profile_page.css"
import "../styles/Round_switch.css"
import "../styles/styles.css"
import "../styles/Ultimate-Sidebar-Menu-BS5.css"
import "../styles/Features-Clean.css"

export default function Offline() {
  return (
    <div>
  <div id="main_template">
    <div className="container" id="recipelist_container">
      <div style={{textAlign: 'center'}}>
        <div className="d-flex justify-content-center">
          <div className="Error_div"><img className="img-fluid" src="assets/img/Error2.png" /></div>
        </div>
        <p className="Errormain">No internet connection</p>
        <p className="Errorsub">Check your internet connection and try again</p><button className="btn btn-primary" id="back_main_btn2" type="button">Retry</button>
      </div>
    </div>
  </div>
  <div className="d-flex" id="Header" />
  <div className="d-flex" id="Footer" />
</div>


  )
}
