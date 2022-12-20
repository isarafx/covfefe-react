import React from 'react'

import "../styles/Profile_page.css"
import "../styles/Multiple-Input-Select-Pills.css"
import "../styles/Profile_page.css"
import "../styles/Round_switch.css"
import "../styles/styles.css"
import "../styles/Ultimate-Sidebar-Menu-BS5.css"
import "../styles/Features-Clean.css"

import { useTranslation } from 'react-i18next';
import BackButton from '../components/backbutton'

export default function ProfileEdit() {
  const { t, i18n } = useTranslation();
  const token = localStorage.getItem('token')

  const handleSubmit = (e) =>{
      e.preventDefault()
      console.log(e.target.value)
  }

  return (
    <div>
      <BackButton />
      <div id="main_template">
        <div className="container profile_container">
          <form id="Eprofile_card" method="post" action="https://q27z6n.deta.dev/users/images" enctype="multipart/form-data" onSubmit={handleSubmit}>
            <div className="row" style={{ textAlign: 'center', marginBottom: '20px' }}>
              <div className="col d-flex justify-content-center">
                <div className="Eavarta_icon_border"><img id="Eavarta_icon" src="assets/img/AvatarIcon.jpg" /></div>
              </div>
            </div>
            <div className="row" style={{ marginBottom: '10px' }}>
              <div className="col">
                <div className="Ecard" style={{ height: '92px' }}>
                  <div className="d-inline-flex" style={{ width: '100%', marginTop: '5px' }}><img className="ae_legend" src="assets/img/legend_picture.png" />
                    <p id="Etitle">{t("PEtext01")}</p>
                  </div>
                    <input type="hidden" name="token" value={token} />
                    <input className="form-control pAvarta_input" type="file" name="file" accept="image/png, image/jpeg" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col" style={{ textAlign: 'center', marginTop: '30px' }}><a className="btn btn-primary" role="button" id="Ecancel" href="">{t("Cancel99")}</a><button className="btn btn-primary" id="Esubmit" type="submit">{t("Confirm99")}</button></div>
            </div>
          </form>
        </div>
      </div>
      <div className="d-flex" id="Header">
        <p id="header_paragraph">{t("Ptext01")}</p>
      </div>
      <div className="d-flex" id="Footer" />
    </div>


  )
}
