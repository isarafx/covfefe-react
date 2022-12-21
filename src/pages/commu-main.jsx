import React from 'react'
import NavBar from '../components/navbar'
import CommuCard from '../components/commucard'
import "../styles/Community.css"
import "../styles/Multiple-Input-Select-Pills.css"
import "../styles/Profile_page.css"
import "../styles/Round_switch.css"
import "../styles/styles.css"
import "../styles/Ultimate-Sidebar-Menu-BS5.css"
import "../styles/Features-Clean.css"
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react'
import { storageAppendList } from '../method/localStorageMethod'
import { useNavigate } from 'react-router-dom'
export default function CommuMain() {
  
  const { t, i18n } = useTranslation();
  let [online, isOnline] = useState(navigator.onLine);
  const token = localStorage.getItem('token')
  const [data, setData] = useState([])
  const [sort, setSort] = useState(0)
  const [all, setAll] = useState(1)
  const navigate = useNavigate()
  const setOnline = () => {
    console.log('We are online!');
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
          const result = await axios.get("https://q27z6n.deta.dev/recipes/community", { headers: { 'content-type': 'application/json', 'x-token': token } })
            // storageAppendList('community', result.data['items'])
          // alert('here')
            localStorage.setItem('community', JSON.stringify(result.data['items']))
          console.log(result.data)
          setData(result.data['items'])
          setDisplayList(result.data['items'])

      }catch(error){
        console.log(error)
      }
    };
    if(!online){
        navigate('/offline')
    }
  if(online){
  fetchData();
  }
    // console.log('i fire once');
  }, []);

  const [searchText, setSearchText] = useState("")
  const [displayList, setDisplayList] = useState(data);
  useEffect(()=>{
    let temp = []
    for (let i = 0; i < data.length; i++) {
      if (data[i]['name'].toLowerCase().includes(searchText.toLowerCase())) {
          // result.push(data[i]);
          temp.push(data[i]);
      }
    }
    setDisplayList(temp)
  }, [searchText]);

  const Fav = async (key) => { 
      try{
            // alert(key)
            if(token){
                if(online){
                  const result = await axios.post(`https://q27z6n.deta.dev/favorite/${key}`, {headers: {'Content-Type':'application/json','x-token':token}});
                  console.log('favorite')
                  // setRefresh(!refresh)
                }else{
                  storageAppendList('update_list',{'delete':key})
                }
            }
    }catch(error){
      console.log(error)
    }
  };
  const Unfav = async (key) => { 
      try{
            // alert(key)
            if(token){
                if(online){
                  const result = await axios.delete(`https://q27z6n.deta.dev/favorite/${key}`, {headers: {'Content-Type':'application/json','x-token':token}});
                  console.log('unfav')
                  // setRefresh(!refresh)
                }else{
                  storageAppendList('update_list',{'delete':key})
                }
            }
    }catch(error){
      console.log(error)
    }
  };
  const Star = async (key) => { 
      try{
            // alert(key)
            if(token){
                if(online){
                  const result = await axios.post(`https://q27z6n.deta.dev/recipes/${key}/star`, {headers: {'Content-Type':'application/json','x-token':token}});
                  console.log('star')
                  // setRefresh(!refresh)
                }else{
                  storageAppendList('update_list',{'delete':key})
                }
            }
    }catch(error){
      console.log(error)
    }
  };
  const UnStar = async (key) => { 
    try{
          // alert(key)
          if(token){
              if(online){
                const result = await axios.delete(`https://q27z6n.deta.dev/recipes/${key}/star`, {headers: {'Content-Type':'application/json','x-token':token}});
                console.log('unstar')
                // setRefresh(!refresh)
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
      <NavBar />
  <div id="main_template">
    <div className="container" id="search_contrainer">
      <div className="input-group">
        <div className="dropdown"><button className="rounded-0 rounded-start btn btn-primary dropdown-toggle" aria-expanded="false" data-bs-toggle="dropdown" data-bss-hover-animate="pulse" id="search_filter2" type="button"><i className="fas fa-filter" style={{fontSize: '20px', fontWeight: 'bold'}} /></button>
          <div className="dropdown-menu">
          <Link className="dropdown-item">{t("Ctext06")}</Link>
          <Link className="dropdown-item" >{t("Ctext07")}</Link></div>
        </div><input value={searchText} onChange={(e)=>{setSearchText(e.target.value)}} className="form-control" type="search" id="search_input2" /><button className="btn btn-primary" data-bss-hover-animate="pulse" id="search_button2" type="button"><i className="fas fa-search" id="Tool_icon" style={{color: '#ffffff'}} /></button>
      </div>
      <div className="d-flex d-sm-flex d-md-flex d-lg-flex d-xl-flex d-xxl-flex justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-center justify-content-xl-center justify-content-xxl-center Page_Head">
        <p id="Page_Head_text">{t("Ctext08")}</p>
      </div>
    </div>
    <div className="container d-flex justify-content-start align-items-center justify-content-sm-center" id="method_bar">
      <div className="d-flex justify-content-center align-items-center" id="Method_selectorbox">
        <div className="form-check d-flex align-items-center method_box">
          <button onClick={()=>{setAll(1)}} className="form-check-input" type="radio" id="Radio_button" name="coffee" /><label className="form-check-label" htmlFor="Radio_button"><img className="Method_pic" src="assets/img/ALL_ICO.png" /></label></div>
      </div>
      <div className="d-flex justify-content-center align-items-center" id="Method_selectorbox">
        <div className="form-check d-flex align-items-center method_box">
          <button onClick={()=>{setAll(0);setSort("Hario")}} className="form-check-input" type="radio" id="Radio_button" name="coffee" /><label className="form-check-label" htmlFor="Radio_button"><img className="Method_pic" src="assets/img/Hario_ICO.png" /></label></div>
      </div>
      <div className="d-flex justify-content-center align-items-center" id="Method_selectorbox">
        <div className="form-check d-flex align-items-center method_box">
          <button onClick={()=>{setAll(0);setSort("AeroPress")}} className="form-check-input" type="radio" id="Radio_button" name="coffee" /><label className="form-check-label" htmlFor="Radio_button"><img className="Method_pic" src="assets/img/Aeropress_ICO.png" /></label></div>
      </div>
      <div className="d-flex justify-content-center align-items-center" id="Method_selectorbox">
        <div className="form-check d-flex align-items-center method_box">
          <button onClick={()=>{setAll(0);setSort("Moka Pot")}} className="form-check-input" type="radio" id="Radio_button" name="coffee" /><label className="form-check-label" htmlFor="Radio_button"><img className="Method_pic" src="assets/img/Moka_ICO.png" /></label></div>
      </div>
      <div className="d-flex justify-content-center align-items-center" id="Method_selectorbox">
        <div className="form-check d-flex align-items-center method_box">
          <button onClick={()=>{setAll(0);setSort("French Press")}} className="form-check-input" type="radio" id="Radio_button" name="coffee" /><label className="form-check-label" htmlFor="Radio_button"><img className="Method_pic" src="assets/img/Frenchpress_ICO.png" /></label></div>
      </div>
      <div className="d-flex justify-content-center align-items-center" id="Method_selectorbox">
        <div className="form-check d-flex align-items-center method_box">
          <button onClick={()=>{setAll(0);setSort("Chemex")}} className="form-check-input" type="radio" id="Radio_button" name="coffee" /><label className="form-check-label" htmlFor="Radio_button"><img className="Method_pic" src="assets/img/Chemex_ICO.png" /></label></div>
      </div>
    </div>
    <div className="container" id="results_container">
      <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-2 row-cols-xxl-2" style={{marginBottom: '10px'}}>
        {
          displayList?
          displayList.map((item)=>{
            return (    <div className="col">
            <div className="card Recipe_card"><Link to={`/brew-recipe/${item.brewer}/${item.key}`}>
              <div className="card-body">
                  <div className="row" style={{textAlign: 'center'}}>
                    <div className="col"><img id="Result_mpic" src="assets/img/Sample.png" /></div>
                  </div>
                  <div className="row" id="Result_main">
                    <div className="col">
                      <h4 id="Result_title">{item.name}</h4>
                      <hr style={{marginTop: '5px', marginBottom: '10px'}} />
                      <p className="Result_description">comment:{item.comment}, date:{item.created_date.slice(0,17)}, type:{item.brewer}</p>
                    </div>
                  </div>
                <div className="row" id="Result_interaction">
                  <div className="col" style={{height: '40px'}}>
                    
                    <div className="btn-group" role="group">
                      <button className="btn btn-primary" id="Interaction_button" type="button">
                        <i className="fa fa-heart" id="Interaction_icon" style={{paddingTop: '2px'}} />
                        </button><button className="btn btn-primary" id="Interaction_button" type="button">
                          <small style={{color: 'rgb(255,214,0)', paddingRight: '5px'}}>{item.star}</small>
                          <i className="fa fa-star" id="Interaction_icon" /></button>
                        <a className="btn btn-primary" role="button" id="Interaction_button" href="">
                          <small style={{color: 'rgb(255,214,0)', paddingRight: '5px'}}>{item.comments.length}</small></a>
                        <i className="fa fa-comment" id="Interaction_icon" /></div>
                  </div>
                </div>
              </div>
              </Link></div>
          </div>)
          })
          :null
        }

      </div>
    </div>
  </div>
  <div className="d-flex" id="Header">
    <p id="header_paragraph">{t("Ctext04")}</p>
  </div>
  <div className="d-flex" id="Footer">

    </div>
</div>


  )
}
