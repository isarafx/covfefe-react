import React from 'react'
import { useState } from 'react'
import RecipeCard from '../components/recipecard'
import { useParams } from 'react-router-dom'
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
import BackButton from '../components/backbutton'
import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'
import { Fetching } from '../method/fetchScripts'
export default function BrewRecipe() {
  const { brewer } = useParams();
  const { t } = useTranslation();

  const tool = {
    "hario":"Hario",
    "aeropress":"Aero Press",
    "frenchpress":"FrenchPress",
    "mokapot":"Moka Pot",
    "chemex":"Chemex",
  }

  // let [display, setDisplay] = useState(JSON.parse(localStorage.getItem('brew-recipe'))['items'])
  let [online, isOnline] = useState(navigator.onLine);
  let [result, setResult] = useState("");
  const setOnline = () => {
    
    isOnline(true);
  };
  const setOffline = () => {
    console.log('We are offline!');
    isOnline(false);
  };

  // Register the event listeners
  useEffect(() => {
    window.addEventListener('offline', setOffline);
    window.addEventListener('online', setOnline);
    
    // cleanup if we unmount
    return () => {
      window.removeEventListener('offline', setOffline);
      window.removeEventListener('online', setOnline);
    }
  }, []);
   useEffect(()=>{
       console.log(Fetching("", "https://q27z6n.deta.dev/brew-recipe", "GET", {},
       {Accept: "application/json", "X-Token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIn0.xxMLezVa5jtc7hSBVJ8vEPvqesEQNu0CIQNK2pw5sZc"}
       , online))
     },[online])
  return (
    <div>
  <BackButton />
  <div id="main_template">
    <div className="container" id="recipelist_container">
      
      {/* {display.map((item)=>{
        if(item.brewer === tool[brewer] ){
          return(<RecipeCard name={item.name} favorite={item.favorite} shared={item.shared} link={item.Lid} />)
        }
      })} */}
    </div>
  </div>
  <div className="d-flex" id="Header">
    <p id="header_paragraph">{t("Btext05")}</p>
  </div>
  <div className="d-flex" id="Footer" />
</div>


  )
}
