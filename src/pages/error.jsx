import React from 'react'
import "../styles/Error.css"
import "../styles/Multiple-Input-Select-Pills.css"
import "../styles/Profile_page.css"
import "../styles/Round_switch.css"
import "../styles/styles.css"
import "../styles/Ultimate-Sidebar-Menu-BS5.css"
import "../styles/Features-Clean.css"

export default function Error() {
  return (
    <div>
  <div id="main_template">
    <div className="container" id="recipelist_container">
      <div style={{textAlign: 'center'}}>
        <div className="d-flex justify-content-center">
          <div className="Error_div"><img className="img-fluid" src="assets/img/Error1.png" /></div>
        </div>
        <p className="Errormain">Sorry!</p>
        <p className="Errorsub">We did not find the page you are requesting</p><a className="btn btn-primary" role="button" id="back_main_btn" href="Brewing_Main.html">Back to Main Page</a>
      </div>
    </div>
  </div>
  <div className="d-flex" id="Header" />
  <div className="d-flex" id="Footer" />
</div>


  )
}
