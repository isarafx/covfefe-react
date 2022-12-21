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
import { storageAppendList } from '../method/localStorageMethod'
import RecipeAdminCard from '../components/recipecard_admin'
import Comment from '../components/comment'
export default function BrewRecipe() {
  const { brewer } = useParams();
  const { t } = useTranslation();
  const token = localStorage.getItem('token')
  let user = JSON.parse(atob(token.split('.')[1]));

  const [refresh, setRefresh] = useState(false)
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
  const commentList = 
  [
    {username:"Admin1", message:"This is so Good1!", created_date:"2022-12-13T08:06:38+00:00"},
    {username:"Admin2", message:"This is so Good2!", created_date:"2022-12-13T08:07:38+00:00"},
    {username:"Admin3", message:"This is so Good3!", created_date:"2022-12-13T08:08:38+00:00"},
    {username:"Admin4", message:"This is so Good4!", created_date:"2022-12-13T08:09:38+00:00"},
    {username:"Admin5", message:"This is so Good5!", created_date:"2022-12-13T08:10:38+00:00"},
    {username:"Admin2", message:"This is so Good6!", created_date:"2022-12-13T08:11:38+00:00"},
  ]
  const setOnline = () => {
    isOnline(true);
  };
  const setOffline = () => {
    isOnline(false);
  };
  useEffect(() => {
    window.addEventListener('offline', setOffline);
    window.addEventListener('online', setOnline);
    return () => {
      window.removeEventListener('offline', setOffline);
      window.removeEventListener('online', setOnline);
    }
  }, []);

    useEffect(() => {
      
      const fetchData  = async () => { 
          try{
          let url = "";
          if(!Boolean(token)){ // public
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
      // if(Boolean(localStorage.getItem('brew-recipe'))){
          
      //     if(Boolean(JSON.parse(localStorage.getItem('brew-recipe'))['items'])){
      //         setResult(JSON.parse(localStorage.getItem('brew-recipe'))['items'])
      //   }
      // }else{
      //   if(!online){
      //       navigate('/offline')
      //   }
      // }
      if(online){
          fetchData();
      }
      // console.log('i fire once');
    }, [refresh]);

    const deleteData = async (key) => { 
      try{
            // alert(key)
            if(token){
                if(online){
                  
                  const result = await axios.delete(`https://q27z6n.deta.dev/recipes/${key}`, {headers: {'Content-Type':'application/json','x-token':token}});
                  setRefresh(!refresh)
                }else{
                  storageAppendList('update_list',{'delete':key})
                }
            }
    }catch(error){
      console.log(error)
    }
};


    const [id, setID] = useState('')
    const [trigger, setTrigger] = useState(false)

    useEffect(() => {
      const Fav  = async () => { 
        try{
            // console.log(id)
            // console.log("fav")
            const result = await axios.post(`https://q27z6n.deta.dev/users/favorite/${id}`, '', { headers: {'x-token':token}})
            setRefresh(!refresh)
            // setTrigger(!trigger)
      } catch(error){
        console.log(error.response)
      }
    };
      Fav()
      }, [trigger]);

      function favorite(key){
          console.log('fav', key)
          setID(key)
          setTrigger(!trigger)
          
      }
    const [id2, setID2] = useState()
    const [trigger2, setTrigger2] = useState(false)
    useEffect(() => {
        const unFav  = async () => { 
          try{
              console.log('reach here')
              const result = await axios.delete(`https://q27z6n.deta.dev/users/favorite/${id2}`, { headers: {'x-token':token}})
              console.log('data here')
              console.log(result.data)
              setRefresh(!refresh)
              // setTrigger(!trigger)
        } catch(error){
          console.log(error.response)
        }
      };
        unFav()
        }, [trigger2]);
  
        function unfavorite(key){
            console.log('unfav')
            console.log(key)
            setID2(key)
            setTrigger2(!trigger2)
            
        }
    // const Favorite  = async (key) => { 
    //   try{
    //         // alert(key)
    //         if(token){
    //             if(online){
    //               const result = await axios.delete(`https://q27z6n.deta.dev/recipes/${key}`, {headers: {'accept': '*/*','x-token':token}});
    //             }else{
    //               storageAppendList('update_list',{'delete':key})
    //             }
    //         }
    //     }catch(error){
    //       console.log(error)
    //     }
    // };
    const commuShare = async (key) => { 
      try{
          if(token){
              if(online){
                  const result = await axios.delete(`https://q27z6n.deta.dev/recipes/${key}`, {headers: {'accept': '*/*','x-token':token}});
              }else{
                  storageAppendList('update_list',{'delete':key})
                }
            }
        }catch(error){
          console.log(error)
        }
    };
  return (
    <div>
  <BackButton />
  <div id="main_template">
    <div className="container" id="recipelist_container">
      {
        result === [] ? <h3>empty</h3>:result.map((item)=>{

        let shared = (item.public && item.owner!=="admin")
        if(item.brewer === tool[brewer]){
          return(<RecipeCard brewer={item.brewer} owner={item.owner} name={item.name} favorite={item.is_favorite} shared={shared} link={item.key} disabled={false} delfunc={deleteData} favfunc={favorite} unfavfunc={unfavorite}/>)}
          // return(<RecipeAdminCard name={item.name} favorite={item.favorite} shared={item.public} link={item.key} />)
        
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
