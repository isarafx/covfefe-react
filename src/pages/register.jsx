import React from 'react'

import "./styles/Multiple-Input-Select-Pills.css"
import "./styles/Profile_page.css"
import "./styles/Round_switch.css"
import "./styles/styles.css"
import "./styles/Ultimate-Sidebar-Menu-BS5.css"
import "./styles/Features-Clean.css"
import "./styles/Login_Register.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import { useState } from 'react'
import { Link } from 'react-router-dom'
import pic1 from "../assets/img/Picture1.png"
import pic3 from "../assets/img/CoffeeCactus.png"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export default function Register() {
  const { t, i18n } = useTranslation();

  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal)
  function validatePassword (pw1, pw2){
    if (pw1 === pw2) {
      return true;
    } else {
      MySwal.fire({ icon: 'error', title: 'Password Not Matched', text: 'Password Not Matched', allowEscapeKey: false, allowOutsideClick: false, })
      return false;
    }
  }
  function validateEmail (mail){
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(mail.match(validRegex)){
        return true
    }else{
        MySwal.fire({ icon: 'error', title: 'Email Invalid', text: 'Email Invalid', allowEscapeKey: false, allowOutsideClick: false, })
        return false
    }
  }
  function validateEmpty(){
    if(username && email && password && confirmPassword){
        return true;
    }else{
        MySwal.fire({ icon: 'error', title: 'Invalid Format', text: 'Please enter all field', allowEscapeKey: false, allowOutsideClick: false, })
        return false;
    }
  }
  const Register = async () => {
    try {
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
        if(validateEmpty()){}else{ return ; }
        if(validateEmail(email)){}else{ return ; }
        if(validatePassword(password, confirmPassword)){}else{ return ; }
        MySwal.fire({ icon: 'info', title: 'Registering', text: 'Registering', allowEscapeKey: false, allowOutsideClick: false , showConfirmButton: false, timer: 2000})
        MySwal.showLoading()
        const result = await axios.post('https://q27z6n.deta.dev/users', body, header)
        // console.log(JSON.stringify(result.data))
        // alert('register success')
        MySwal.fire({ icon: 'success', title: 'Register Successfully', text: 'Register Successfully', allowEscapeKey: false, allowOutsideClick: false , showConfirmButton: false, timer: 2000})
        navigate('/login')
    } catch (error) {
      console.log(error)
      MySwal.fire({ icon: 'error', title: 'Register Failed', text: 'Register Failed', allowEscapeKey: false, allowOutsideClick: false, })
    }
  };


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
                <button className="btn btn-primary d-flex" data-bss-hover-animate="pulse" id="Confirm_Button" onClick={(e) => { e.preventDefault(); Register()  }} type="submit">{t("Ltext07")}</button>
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
