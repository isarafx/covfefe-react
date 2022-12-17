import React from 'react'
import { useState } from 'react'
import RecipeCard from '../components/recipecard'
import { useNavigate, useParams } from 'react-router-dom'
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
import axios from 'axios';
export default function BrewRecipe() {
  const { brewer } = useParams();
  const { t } = useTranslation();
  const token = localStorage.getItem('token')
  const [recipe, setRecipe] = useState([])
  const tool = {
    "hario":"Hario",
    "aeropress":"AeroPress",
    "frenchpress":"French Press",
    "mokapot":"Moka Pot",
    "chemex":"Chemex",
  }
  // let [display, setDisplay] = useState(JSON.parse(localStorage.getItem('brew-recipe'))['items'])
  let [online, isOnline] = useState(navigator.onLine);
  let [result, setResult] = useState([]);
  const navigate = useNavigate()
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

     useEffect(() => {
      
      const fetchData  = async () => { 
          try{
          let url = "";
          if(token === null){ // public
            // alert('here anon')
            const result = await axios.get("https://q27z6n.deta.dev/recipes/public", {
              headers: {
                  'accept': 'application/json'
              }
              
          });
              setResult(result.data['items']);
              console.log(result)
              localStorage.setItem('brew-recipe', JSON.stringify(result.data))
          }else{
            const result = await axios.get("https://q27z6n.deta.dev/recipes/users", {
              headers: {
                  'accept': 'application/json',
                  'x-token':token
              }
          });
              
              setResult(result.data['items']);
              console.log(result)
              localStorage.setItem('brew-recipe', JSON.stringify(result.data))
          }
          
        }catch(error){
          console.log(error)
        }
    };
      if(localStorage.getItem('brew-recipe') !== ""){
          
          if(JSON.parse(localStorage.getItem('brew-recipe'))['items'] !== []){
              setResult(JSON.parse(localStorage.getItem('brew-recipe'))['items'])
        }
      }else{
        if(!online){
            navigate('/offline')
        }
      }
      if(online){
      fetchData();
      }
      // console.log('i fire once');
    }, []);
  return (
    <div>
  <BackButton />
  <div id="main_template">
    <div className="container" id="recipelist_container">
      {/* {JSON.stringify(result)} */}
      {/* {/* <p>{typeof result}</p> */}
      {/* <p>{JSON.stringify(result)}</p> */} 
      {
        result === [] ? <h3>empty</h3>:result.map((item)=>{
          let admin = false
        if(item.owner === "admin"){admin=true}
        if(item.brewer === tool[brewer]){
          return(<RecipeCard name={item.name} favorite={item.favorite} shared={item.shared} link={item.key} disabled={admin}/>)
          
        }
      })
      }
      <div style={{height: '50px'}}></div>
    </div>
  </div>
  <div className="d-flex" id="Header">
    <p id="header_paragraph">{t("Btext05")}</p>
  </div>
  <div className="d-flex" id="Footer" />
</div>


  )
}
