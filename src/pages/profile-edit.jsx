import React from 'react'

import "../styles/Profile_page.css"
import "../styles/Multiple-Input-Select-Pills.css"
import "../styles/Profile_page.css"
import "../styles/Round_switch.css"
import "../styles/styles.css"
import "../styles/Ultimate-Sidebar-Menu-BS5.css"
import "../styles/Features-Clean.css"
import { useState } from 'react'
import axios from 'axios'
import { Link, Navigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import BackButton from '../components/backbutton'
import { useNavigate } from 'react-router-dom'
export default function ProfileEdit() {
  const { t, i18n } = useTranslation();
  const token = localStorage.getItem('token')
  const [file, setFile] = useState(null);
  const navigate = useNavigate()
  const [imgurl, setimgurl] = useState()


  const handleChange = (event) => {
    setFile(event.target.files[0]);
    setimgurl(URL.createObjectURL(event.target.files[0]))
  }
  const handleSubmit = (event) => {
    event.preventDefault();
  
    const formData = new FormData();
    
    formData.append('file', file);
    formData.append('token', token)
    axios.post('https://q27z6n.deta.dev/users/images', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then((response) => {
        console.log(response.data);
        navigate('/profile')
      })
      .catch((error) => {
        console.log(error);
      });
    
    
  }


  return (
    <div>
      <BackButton />
      <div id="main_template">
        <div className="container profile_container">
          <form id="Eprofile_card" onSubmit={handleSubmit}>
            <div className="row" style={{ textAlign: 'center', marginBottom: '20px' }}>
              <div className="col d-flex justify-content-center">
                <div className="Eavarta_icon_border"><img id="Eavarta_icon" src={imgurl?imgurl:"assets/img/AvatarIcon.jpg"} /></div>
              </div>
            </div>
            <div className="row" style={{ marginBottom: '10px' }}>
              <div className="col">
                <div className="Ecard" style={{ height: '92px' }}>
                  <div className="d-inline-flex" style={{ width: '100%', marginTop: '5px' }}><img className="ae_legend" src="assets/img/legend_picture.png"  />
                    <p id="Etitle">{t("PEtext01")}</p>
                  </div>
                    <input className="form-control pAvarta_input" type="file" name="file" accept="image/png, image/jpeg" onChange={handleChange} />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col" style={{ textAlign: 'center', marginTop: '30px' }}>
                <Link className="btn btn-primary" role="button" id="Ecancel" to="/profile">{t("Cancel99")}</Link>
                <button className="btn btn-primary" id="Esubmit" type="submit">{t("Confirm99")}</button></div>
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

