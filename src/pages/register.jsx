import React from 'react'

import "../styles/Multiple-Input-Select-Pills.css"
import "../styles/Profile_page.css"
import "../styles/Round_switch.css"
import "../styles/styles.css"
import "../styles/Ultimate-Sidebar-Menu-BS5.css"
import "../styles/Features-Clean.css"
import "../styles/Login_Register.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import { useState } from 'react'
import { Link } from 'react-router-dom'
import pic1 from "../assets/img/Picture1.png"
import pic3 from "../assets/img/CoffeeCactus.png"
export default function Register() {
  const { t, i18n } = useTranslation();

  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();


  const [trigger, setTrigger] = useState(false)
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (trigger) {
          let body = {
            'username': username,
            'email': email,
            'password': password
          }
          let header = {
            headers: {
              'Content-Type': 'application/json',
            }
          }
          if (password === confirmPassword) {
          } else {
            return;
          }
          const result = await axios.post('https://q27z6n.deta.dev/users', body, header)
          setTrigger(false)
          // console.log(JSON.stringify(result.data))
          alert('register success')
          navigate('/login')
        }
      } catch (error) {
        // alert(error.response.status)
        alert("register failed")
      }
    };
    fetchData()
  }, [trigger]);

  return (<body className="LoginBG">
    <div className="d-flex align-items-center logdiv">
      <div className="container d-flex align-items-center" id="Login_container">
        <div className="card LoginCard">
          <div className="card-body">
            <div className="d-flex Div1">
              <Link to="/login" className="btn btn-primary" role="button" data-bss-hover-animate="pulse" id="Toplogin_buttonR">{t("Ltext01")}</Link>
              <img className="pic1" src={pic1} />
              <button className="btn btn-primary" id="Topregister_buttonR" type="button">{t("Ltext02")}</button></div>
            <form>
              <div>
                <p style={{ marginBottom: '5px', marginLeft: '10px' }}>{t("User99")}</p>
              </div>
              <div className="d-flex InputDiv1"><i className="fa fa-user icon" />
                <input className="form-control Inputform" value={username} onChange={(e) => { setUsername(e.target.value) }} type="text" required /></div>
              <div>
                <p style={{ marginBottom: '5px', marginLeft: '10px' }}>{t("Ltext05")}</p>
              </div>
              <div className="d-flex InputDiv1"><i className="fa fa-envelope icon" />
                <input className="form-control Inputform" value={email} onChange={(e) => { setEmail(e.target.value) }} type="email" required /></div>
              <div>
                <p style={{ marginBottom: '5px', marginLeft: '10px' }}>{t("Pass99")}</p>
              </div>
              <div className="d-flex InputDiv1"><i className="fa fa-lock icon" />
                <input className="form-control Inputform" value={password} onChange={(e) => { setPassword(e.target.value) }} type="password" required /></div>
              <div>
                <p style={{ marginBottom: '5px', marginLeft: '10px' }}>{t("Ltext06")}</p>
              </div>
              <div className="d-flex InputDiv2"><i className="fa fa-lock icon" />
                <input className="form-control Inputform" value={confirmPassword} onChange={(e) => { setConfirmPassword(e.target.value) }} type="password" required /></div>
              <div className="d-flex SkipDiv2">
                <button className="btn btn-primary d-flex" data-bss-hover-animate="pulse" id="Confirm_Button" onClick={(e) => { e.preventDefault(); setTrigger(!trigger) }} type="submit">{t("Ltext07")}</button>
                <Link className="skiplog" to="/">{t("Ltext04")}</Link></div>
            </form>
            <div style={{ textAlign: 'center' }}><img className="pic3" src={pic3} /></div>
          </div>
        </div>
      </div>
    </div>
  </body>

  )
}
