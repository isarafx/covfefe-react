import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/Multiple-Input-Select-Pills.css"
import "../styles/Profile_page.css"
import "../styles/Round_switch.css"
import "../styles/styles.css"
import "../styles/Ultimate-Sidebar-Menu-BS5.css"
import "../styles/Brewing_Guide.css"
import "../styles/Brewing_Guide2.css"
import "../styles/Brewing_Guide3.css"
import "../styles/Brewing_Guide4.css"
import "../styles/Features-Clean.css"
import NavBar from '../components/navbar'
import { useEffect } from 'react'
import axios from 'axios'
import { useTranslation } from 'react-i18next';
import { useState } from 'react'
import FavCard from '../components/favCard'

export default function BrewFav() {
  const { t, i18n } = useTranslation();
  let [online, isOnline] = useState(navigator.onLine);
  let [result, setResult] = useState([]);
  const setOnline = () => {
    
    isOnline(true);
  };
  const setOffline = () => {
    console.log('We are offline!');
    isOnline(false);
  };

  // Register the event listeners
  // useEffect(() => {
  //   window.addEventListener('offline', setOffline);
  //   window.addEventListener('online', setOnline);
    
  //   // cleanup if we unmount
  //   return () => {
  //     window.removeEventListener('offline', setOffline);
  //     window.removeEventListener('online', setOnline);
  //   }
  // }, []);
  //    useEffect(() => {
  //     const fetchData  = async () => { 
  //       const result = await axios.get('https://q27z6n.deta.dev/recipes/public', {
  //         headers: {
  //             'accept': 'application/json'
  //         }
  //     });
  //     setResult(result.data['items']);
  //     localStorage.setItem('brew-recipe', JSON.stringify(result.data))
  //   };
  //     if(localStorage.getItem('brew-recipe') != null){
  //       setResult(JSON.parse(localStorage.getItem('brew-recipe'))['items'])
  //     }
  //     if(online){
  //     fetchData();
  //     }
  //   }, []);

  return (
    <div>
      <NavBar />
      <div className="d-flex div_a"><Link to="/brew-new"><a href=""><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-plus-circle Add_icon">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
      </svg></a></Link></div>
      <div id="main_template">
        <div className="container" id="search_contrainer">
          <div className="input-group"><input className="form-control" type="search" id="search_input" /><button className="btn btn-primary" data-bss-hover-animate="pulse" id="search_button" type="button"><i className="fa fa-search" id="Tool_icon" style={{ color: '#ffffff' }} /></button></div>
        </div>
        <div className="container" id="recipelist_container" style={{ marginTop: '-70px' }}>
        <FavCard key={''} brewer={''} name={''} commu={''} fav={''} />
        <FavCard key={''} brewer={''} name={''} commu={''} fav={''} />
        <FavCard key={''} brewer={''} name={''} commu={''} fav={''} />
        <FavCard key={''} brewer={''} name={''} commu={''} fav={''} />
        <FavCard key={''} brewer={''} name={''} commu={''} fav={''} />
        <FavCard key={''} brewer={''} name={''} commu={''} fav={''} />
        <FavCard key={''} brewer={''} name={''} commu={''} fav={''} />
        <FavCard key={''} brewer={''} name={''} commu={''} fav={''} />
        <FavCard key={''} brewer={''} name={''} commu={''} fav={''} />
        <FavCard key={''} brewer={''} name={''} commu={''} fav={''} />
        <FavCard key={''} brewer={''} name={''} commu={''} fav={''} />
          
        <div style={{height: '50px'}}></div>
        </div>

      </div>
      <div className="d-flex" id="Header">
        <p id="header_paragraph">{t("Btext02")}</p>
      </div>
      <div className="d-flex" id="Footer">
        <Link to="/"><a className="btn btn-primary" role="button" data-bss-hover-animate="pulse" id="fbrew_button" href="">
          <img src="assets/img/Cup%20Icon.png" style={{ width: '50px', marginTop: '-17px' }} /></a></Link>
        <button className="btn btn-primary disabled d-flex" data-bss-hover-animate="pulse" id="ffav_button" type="button" disabled>
          <img src="assets/img/Favorite%20Icon.png" style={{ width: '42px' }} /></button></div>
    </div>
  )
}
