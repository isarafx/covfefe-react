import React from 'react'
import { useState } from 'react'
import RecipeCard from '../components/recipecard'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import "./styles/Multiple-Input-Select-Pills.css"
import "./styles/Profile_page.css"
import "./styles/Round_switch.css"
import "./styles/styles.css"
import "./styles/Ultimate-Sidebar-Menu-BS5.css"
import "./styles/Brewing_Guide.css"
import "./styles/Brewing_Guide2.css"
import "./styles/Brewing_Guide3.css"
import "./styles/Brewing_Guide4.css"
import "./styles/Features-Clean.css"
import BackButton from '../components/backbutton'
import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'
import { Fetching } from '../method/fetchScripts'
import axios from 'axios';
import RecipeAdminCard from '../components/recipecard_admin'
import { LoginCheck, postAll, updateLocalList } from '../method/mmss'
import { Link } from 'react-router-dom'
export default function BrewRecipe() {
    const { brewer } = useParams();
    const { t } = useTranslation();
    const token = localStorage.getItem('token')
    

    const [refresh, setRefresh] = useState(false)
    const [recipe, setRecipe] = useState([])
    
    const tool = { "hario":"Hario", "aeropress":"AeroPress", "frenchpress":"French Press", "mokapot":"Moka Pot", "chemex":"Chemex" }
    // let [display, setDisplay] = useState(JSON.parse(localStorage.getItem('brew-recipe'))['items'])
    let [online, isOnline] = useState(navigator.onLine);
    let [result, setResult] = useState([]);
    const navigate = useNavigate()
    const setOnline = () => { console.log('online'); isOnline(true);postAll(); };
    const setOffline = () => { console.log('offline'); isOnline(false); };
    useEffect(() => { window.addEventListener('offline', setOffline); window.addEventListener('online', setOnline); return () => { window.removeEventListener('offline', setOffline); window.removeEventListener('online', setOnline); } }, []);
    
    useEffect(() => {
      const fetchData  = async () => { 
        try{
            let url = "";
            if(!Boolean(token)){ // public
              console.log('public user')
              const result = await axios.get("https://q27z6n.deta.dev/recipes/public", {
                headers: {
                }
                
            });
                setResult(result.data['items']);
                // console.log(result)
                localStorage.setItem('brew-recipe', JSON.stringify(result.data))
            }else{
              console.log('logged in user')
              let user = (JSON.parse(atob(token.split('.')[1])));
              const result = await axios.get("https://q27z6n.deta.dev/recipes/users", {
                headers: {
                    'x-token':token
                }
            });
                
                setResult(result.data['items']);
                // console.log(result)
                localStorage.setItem('brew-recipe', JSON.stringify(result.data))
            }
          
        }catch(error){
          console.log(error)
        }
    };
      document.title = t("Btext05")
      if(online){
          fetchData();
          postAll();
      }else{
          setResult(JSON.parse(localStorage.getItem('brew-recipe'))['items']);
      }
    }, [refresh]);

    const deleteData = async (key) => { 
        if(LoginCheck()){}else{navigate('/login')}
        try{
            // alert(key)
            if(token){
                if(online){
                  // setResult([...result]);
                  const result = await axios.delete(`https://q27z6n.deta.dev/recipes/${key}`, {headers: {'Content-Type':'application/json','x-token':token}});
                  setRefresh(!refresh)
                }else{
                  let newlist = JSON.parse(localStorage.getItem('brew-recipe'))['items'].filter((item)=>item.key != key)
                  let list_recipe = JSON.parse(localStorage.getItem('brew-recipe'))
                  let numcount = list_recipe['count']
                  let newitem = {count:numcount+1, items:newlist}
                  localStorage.setItem('brew-recipe', JSON.stringify(newitem))
                  // console.log(newitem)
                  setRefresh(!refresh)
                  try{
                    let off_record = {method:"del", key:key}
                    updateLocalList('update',off_record)
                  }catch{
                  }
                }
            }
        }catch(error){
          console.log(error)
        }
    };
    const Favorite  = async (key) => { 
        if(LoginCheck()){}else{navigate('/login')}
        try{
            if(online){
                console.log('reach unfavorite')
                const result = await axios.post(`https://q27z6n.deta.dev/users/favorite/${key}`, '', { headers: {'x-token':token}})
                console.log(result.data)
                setRefresh(!refresh)
            }else{
                console.warn('fav')
                let allitem = JSON.parse(localStorage.getItem('brew-recipe'))['items'].filter(item=>item.key!=key)
                let item = JSON.parse(localStorage.getItem('brew-recipe'))['items'].filter(item=>item.key===key)[0]
                item = {...item, is_favorite:true}
                item = [...allitem, item]
                localStorage.setItem('brew-recipe', JSON.stringify({count:99, items:item}))
                setRefresh(!refresh)
                localStorage.setItem('favorite', JSON.stringify({count:99, items:item.filter(item=>item.is_favorite === true)}))
                let off_record = {method:"fav", key:key}
                try{
                  updateLocalList('update', off_record)
                }catch{
                }
            }
        }catch(error){
            console.log(error.response)
        }
    }
    const UnFavorite  = async (key) => { 
        if(LoginCheck()){}else{navigate('/login')}
        try{
            if(online){
                console.log('reach unfavorite')
                const result = await axios.delete(`https://q27z6n.deta.dev/users/favorite/${key}`, { headers: {'x-token':token}})
                console.log(result.data)
                setRefresh(!refresh)
            }else{
                console.warn('unfav')
                let allitem = JSON.parse(localStorage.getItem('brew-recipe'))['items'].filter(item=>item.key!=key)
                let item = JSON.parse(localStorage.getItem('brew-recipe'))['items'].filter(item=>item.key===key)[0]
                item = {...item, is_favorite:false}
                item = [...allitem, item]
                localStorage.setItem('brew-recipe', JSON.stringify({count:99, items:item}))
                setRefresh(!refresh)
                localStorage.setItem('favorite', JSON.stringify({count:99, items:item.filter(item=>item.is_favorite === true)}))
                let off_record = {method:"unfav", key:key}
                try{
                  updateLocalList('update', off_record)
                }catch{
                
                }
            }
        }catch(error){
            console.log(error.response)
        }
    }
    const commuShare = async (key) => { 
        if(LoginCheck()){}else{navigate('/')}
        try{
            if(token){
                if(online){
                    const result = await axios.delete(`https://q27z6n.deta.dev/recipes/${key}`, {headers: {'accept': '*/*','x-token':token}});
                }else{
                    // storageAppendList('update_list',{'delete':key})
                  }
              }
        }catch(error){
          console.log(error)
        }
    };
  return (
    <div>
  <div className="div_back"><Link to={`/`} ><i className="icon ion-android-arrow-back" id="Back_icon" /></Link></div>
  <div id="main_template">
    <div className="container" id="recipelist_container">
      {
        result?result.map((item)=>{

        let shared = (item.public ? item.owner!=="admin":false)
        let edit = LoginCheck()
        if(item.brewer === tool[brewer]){
          return(<RecipeCard key={item.key} brewer={item.brewer} editable={edit} owner={item.owner} name={item.name} favorite={item.is_favorite} shared={shared} link={item.key} disabled={false} delfunc={deleteData} favfunc={Favorite} unfavfunc={UnFavorite}/>)}
          // return(<RecipeAdminCard name={item.name} favorite={item.favorite} shared={item.public} link={item.key} />)
        
      })
      :null}
           
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
