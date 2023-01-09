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
import imghario from "../assets/img/Hario_ICO.png"
import imgaeropress from "../assets/img/Aeropress_ICO.png"
import imgfrenchpress from "../assets/img/Frenchpress_ICO.png"
import imgmokapot from "../assets/img/Moka_ICO.png"
import imgchemex from "../assets/img/Chemex_ICO.png"
import BackButton from '../components/backbutton'
import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'
import { Fetching } from '../method/fetchScripts'
import axios from 'axios';
import RecipeAdminCard from '../components/recipecard_admin'
import { LoginCheck, OwnerCheck, postAll, updateLocalList } from '../method/mmss'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export default function BrewRecipe() {
    const { brewer } = useParams();
    const { t } = useTranslation();
    const token = localStorage.getItem('token')
    const MySwal = withReactContent(Swal)

    const [refresh, setRefresh] = useState(false)
    const [recipe, setRecipe] = useState([])
    
    const tool = { "hario":"Hario", "aeropress":"AeroPress", "frenchpress":"French Press", "mokapot":"Moka Pot", "chemex":"Chemex" }
    const toolPic = {
      "hario":imghario,
      "aeropress":imgaeropress,
      "frenchpress":imgfrenchpress,
      "mokapot":imgmokapot,
      "chemex":imgchemex,
    }
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
                const res = await axios.get("https://q27z6n.deta.dev/recipes/public", { headers: { } });
                MySwal.close()  
                setResult(res.data['items']);
                // console.log(res)
                localStorage.setItem('brew-recipe', JSON.stringify(res.data))
            }else{
              console.log('logged in user')
              let user = (JSON.parse(atob(token.split('.')[1])));
              const res = await axios.get("https://q27z6n.deta.dev/recipes/users", { headers: { 'x-token':token } });
                MySwal.close()  
                setResult(res.data['items']);
                // console.log(result)
                localStorage.setItem('brew-recipe', JSON.stringify(res.data))
            }
          
        }catch(error){
          console.log(error)
        }
    };
      document.title = t("Btext05")
      if(online){
          MySwal.fire({ icon: 'info', title: 'Fetching', text: 'Load data', allowEscapeKey: false, allowOutsideClick: false , showConfirmButton: false})
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
                  setResult([...result].filter(item=>item.key!=key))
                  const res = await axios.delete(`https://q27z6n.deta.dev/recipes/${key}`, {headers: {'Content-Type':'application/json','x-token':token}});
                  // setRefresh(!refresh)
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
    const Favorite  = async (key, fav) => { 
        if(LoginCheck()){}else{navigate('/login')}
        try{
            if(online){
                
                if(!fav){
                    console.log('reach favorite')
                    setResult([...result].map((item)=>{
                        if(item.key === key){
                            return {...item, is_favorite:true}
                        }else{
                            return {...item}
                        }
                    }))
                    const res = await axios.post(`https://q27z6n.deta.dev/users/favorite/${key}`, '', { headers: {'x-token':token}})
                    console.log(res.data)
                }else{
                    console.log('reach unfavorite')
                    setResult([...result].map((item)=>{
                        if(item.key === key){
                            return {...item, is_favorite:false}
                        }else{
                            return {...item}
                        }
                    }))
                    const res = await axios.delete(`https://q27z6n.deta.dev/users/favorite/${key}`, { headers: {'x-token':token}})
                    console.log(res.data)
                }
                
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
                const res = await axios.delete(`https://q27z6n.deta.dev/users/favorite/${key}`, { headers: {'x-token':token}})
                console.log(res.data)
                // setRefresh(!refresh)
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
                    const res = await axios.delete(`https://q27z6n.deta.dev/recipes/${key}`, {headers: {'accept': '*/*','x-token':token}});
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
        result?
        result.map((item)=>{
          let path
          let share_id
          let disable
          let heart
          if(OwnerCheck(item.owner)){
              disable = "btn btn-primary"
          }else{
              disable = "btn btn-primary disabled"
          }
          if(item.public){
            path = ""
            share_id = "Tool_Shared"
          }else{
              path = `/brew-recipe/${brewer}/share/${item.key}`
              share_id = "Tool_icon"
          }
          if(item.is_favorite){
              heart = "Tool_Faved"

          }else{
              heart = "Tool_icon"
          }
          let edit_button = <Link to={`/brew-recipe/${brewer}/edit/${item.key}?recipe=1`} className={disable} role="button" data-bss-hover-animate="jello" id="Tool_color" ><i className="fa fa-pencil" id="Tool_icon"  /></Link>
          let share_button = <Link to={path} className={disable} role="button" data-bss-hover-animate="jello" id="Tool_color" > <i className="fas fa-share" id={share_id} /></Link>
          let fav_button = <button onClick={()=>{Favorite(item.key, item.is_favorite)}} className="btn btn-primary" data-bss-hover-animate="jello" id="Tool_color" type="button"><i className="fas fa-heart" id={heart} /></button>
          let del_button = <button onClick={()=>{deleteData(item.key)}} className={disable} data-bss-hover-animate="jello" id="Tool_color" type="button"><i className="fas fa-trash" id="Tool_icon" /></button>
          if (item.brewer === tool[brewer]){
            return(
            <>
              <div id="method_result_card" >
                  <div className="row">
                    <div className="col"><Link to={`/brew-recipe/${brewer}/${item.key}`}>
                        <div className="card" style={{height: '65px', background: 'rgba(255,255,255,0)', borderStyle: 'none'}}>
                          <div className="card-body fcard_body">
                            <div className="row">
                              <div className="col d-flex justify-content-center method_result_col">
                                <div className="method_result_ico_border">
                                  <img className="method_result_ico" src={toolPic[brewer]} /></div>
                              </div>
                              <div className="col d-flex align-items-center" style={{maxWidth: '550px', minWidth: '200px'}}>
                                <p className="recipe_title2">{item.name}&nbsp;</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link></div>
            </div>
                  <div className="row">
                    <div className="col">
                      <div className="btn-group d-flex" role="group" style={{width: '100%'}}>
                        {edit_button}
                        {share_button}
                        {fav_button}
                        {del_button}
                    </div>
                  </div>
              </div>
            </div>
            </>
            )}
          })
          
      :null
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
