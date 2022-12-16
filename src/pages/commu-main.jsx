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

import { useTranslation } from 'react-i18next';
import { useEffect } from 'react'

export default function CommuMain() {
  const { t, i18n } = useTranslation();
  const [data, setData] = useState([    //don't forget to add display when fetch
    {recipe_name:"recipe 1", note:"", fav:0, star:20, comment:0, date:10, main_eq:1, display:1},
    {recipe_name:"recipe 2", note:"", fav:1, star:40, comment:0, date:25, main_eq:1, display:1},
    {recipe_name:"recipe 3", note:"", fav:0, star:5, comment:0, date:80, main_eq:2, display:1},
    {recipe_name:"recipe 4", note:"", fav:1, star:300, comment:0, date:46, main_eq:3, display:1},
    {recipe_name:"recipe 5", note:"", fav:0, star:17, comment:0, date:52, main_eq:3, display:1},
  ])
  let [online, isOnline] = useState(navigator.onLine);

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
  
  const [mockData , setMockData] = useState(data)

  const [type, setType] = useState(0)
  const [filter, setFilter] = useState(0)
  const sorting = () => { //by star
    if(filter === 0){
      setMockData([...mockData].sort((a,b)=> (a.star > b.star ? 1 : -1)))
    }else if(filter === 1){ //by date
      setMockData([...mockData].sort((a,b)=> (a.date > b.date ? 1 : -1)))
    }
  }

  const filtering = (fil) => {
    if(fil === 0){
      setMockData([...data].sort((a,b)=> (a.date > b.date ? 1 : -1)))
    }else if(fil === 1){
      setMockData([...data].filter((item)=>(item.brewer===1)))
    }else if(fil === 2){
      setMockData([...data].filter((item)=>(item.brewer===2)))
    }else if(fil === 3){
      setMockData([...data].filter((item)=>(item.brewer===3)))
    }else if(fil === 4){
      setMockData([...data].filter((item)=>(item.brewer===4)))
    }else if(fil === 5){
      setMockData([...data].filter((item)=>(item.brewer===5)))
    }
  }

  return (
    <div>
      <NavBar />
  <div id="main_template">
    <div className="container" id="search_contrainer">
      <div className="input-group">
        <div className="dropdown"><button className="rounded-0 rounded-start btn btn-primary dropdown-toggle" aria-expanded="false" data-bs-toggle="dropdown" data-bss-hover-animate="pulse" id="search_filter2" type="button"><i className="fas fa-filter" style={{fontSize: '20px', fontWeight: 'bold'}} /></button>
          <div className="dropdown-menu">
          <a onClick={()=>{setFilter(0); sorting()}} className="dropdown-item" href="#">{t("Ctext06")}</a>
          <a onClick={()=>{setFilter(1); sorting()}} className="dropdown-item" href="#">{t("Ctext07")}</a></div>
        </div><input className="form-control" type="search" id="search_input2" /><button className="btn btn-primary" data-bss-hover-animate="pulse" id="search_button2" type="button"><i className="fas fa-search" id="Tool_icon" style={{color: '#ffffff'}} /></button>
      </div>
      <div className="d-flex d-sm-flex d-md-flex d-lg-flex d-xl-flex d-xxl-flex justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-center justify-content-xl-center justify-content-xxl-center Page_Head">
        <p id="Page_Head_text">{t("Ctext08")} {type}</p>
      </div>
    </div>
    <div className="container d-flex justify-content-start align-items-center justify-content-sm-center" id="method_bar">
      <div className="d-flex justify-content-center align-items-center" id="Method_selectorbox">
        <div className="form-check d-flex align-items-center method_box">
          <button onClick={()=>{filtering(0)}} className="form-check-input" type="radio" id="Radio_button" name="coffee" /><label className="form-check-label" htmlFor="Radio_button"><img className="Method_pic" src="assets/img/ALL_ICO.png" /></label></div>
      </div>
      <div className="d-flex justify-content-center align-items-center" id="Method_selectorbox">
        <div className="form-check d-flex align-items-center method_box">
          <button onClick={()=>{filtering(1)}} className="form-check-input" type="radio" id="Radio_button" name="coffee" /><label className="form-check-label" htmlFor="Radio_button"><img className="Method_pic" src="assets/img/Hario_ICO.png" /></label></div>
      </div>
      <div className="d-flex justify-content-center align-items-center" id="Method_selectorbox">
        <div className="form-check d-flex align-items-center method_box">
          <button onClick={()=>{filtering(2)}} className="form-check-input" type="radio" id="Radio_button" name="coffee" /><label className="form-check-label" htmlFor="Radio_button"><img className="Method_pic" src="assets/img/Aeropress_ICO.png" /></label></div>
      </div>
      <div className="d-flex justify-content-center align-items-center" id="Method_selectorbox">
        <div className="form-check d-flex align-items-center method_box">
          <button onClick={()=>{filtering(3)}} className="form-check-input" type="radio" id="Radio_button" name="coffee" /><label className="form-check-label" htmlFor="Radio_button"><img className="Method_pic" src="assets/img/Moka_ICO.png" /></label></div>
      </div>
      <div className="d-flex justify-content-center align-items-center" id="Method_selectorbox">
        <div className="form-check d-flex align-items-center method_box">
          <button onClick={()=>{filtering(4)}} className="form-check-input" type="radio" id="Radio_button" name="coffee" /><label className="form-check-label" htmlFor="Radio_button"><img className="Method_pic" src="assets/img/Frenchpress_ICO.png" /></label></div>
      </div>
      <div className="d-flex justify-content-center align-items-center" id="Method_selectorbox">
        <div className="form-check d-flex align-items-center method_box">
          <button onClick={()=>{filtering(5)}} className="form-check-input" type="radio" id="Radio_button" name="coffee" /><label className="form-check-label" htmlFor="Radio_button"><img className="Method_pic" src="assets/img/Chemex_ICO.png" /></label></div>
      </div>
    </div>
    <div className="container" id="results_container">
      <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-2 row-cols-xxl-2" style={{marginBottom: '10px'}}>
        
        {mockData.map((item, index) => {
            return(item.display==1 && <CommuCard key={`${item.name}-${item.date}`} main_eq={item.main_eq} name={item.name} comment={item.note} heart={item.fav} star={item.star} comment_count={item.comment} date={item.date} />)
        })}
      </div>
    </div>
  </div>
  <div className="d-flex" id="Header">
    <p id="header_paragraph">{t("Ctext04")}</p>
  </div>
  <div className="d-flex" id="Footer"><button className="btn btn-primary disabled" data-bss-hover-animate="pulse" id="index_button" type="button" disabled>
    <img src="assets/img/Mug%20icon.png" style={{width: '35px', marginTop: '-8px'}} /></button>
    <Link to="/commu-shop"><a className="btn btn-primary d-flex justify-content-center align-items-center" role="button" data-bss-hover-animate="pulse" id="shop_button" href="">
      <img src="assets/img/Shop%20Icon.png" style={{width: '34px'}} /></a></Link></div>
</div>


  )
}
