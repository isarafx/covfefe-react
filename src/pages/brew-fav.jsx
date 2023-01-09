import React from 'react'
import { Link } from 'react-router-dom'
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
import NavBar from '../components/navbar'
import { useEffect } from 'react'
import axios from 'axios'
import { useTranslation } from 'react-i18next';
import { useState } from 'react'
import FavCard from '../components/favCard'
import { useNavigate } from 'react-router-dom'
import imgcup from "../assets/img/Cup Icon.png"
import imgfav from "../assets/img/Favorite Icon.png"
import { updateLocalList } from '../method/mmss'
import { postAll } from '../method/mmss'

export default function BrewFav() {
  const { t, i18n } = useTranslation();
  let [online, isOnline] = useState(navigator.onLine);
  let [result, setResult] = useState([]);
  const token = localStorage.getItem('token')
  const navigate = useNavigate();

  const setOnline = () => { isOnline(true) };
  const setOffline = () => { console.log('We are offline!'); isOnline(false); };
  useEffect(() => { window.addEventListener('offline', setOffline); window.addEventListener('online', setOnline); return () => { window.removeEventListener('offline', setOffline); window.removeEventListener('online', setOnline); } }, []);
  const [refresh, setRefresh] = useState(false)



  useEffect(() => {

    const fetchData = async () => {

      try {

        const result = await axios.get("https://q27z6n.deta.dev/favorite", { headers: { 'accept': 'application/json', 'x-token': token } });
        // setResult(result.data['items']);
        // console.log(result.data['items'])
        localStorage.setItem('favorite', JSON.stringify(result.data))
        setResult(result.data['items'])
        setDisplayList(result.data['items'])
      } catch (error) {
        if (error.response.status == 404) {
          localStorage.setItem('favorite', JSON.stringify({ items: [] }))
          setResult([])
        }
        console.log(error)
      }
    };
    if (online) {
      fetchData();
    } else {
      // console.log('test')
      // console.log(JSON.parse(localStorage.getItem('favorite'))['items'])
      // console.log('here')
      try {
        setResult(JSON.parse(localStorage.getItem('favorite'))['items'])
        setDisplayList(JSON.parse(localStorage.getItem('favorite'))['items'])
      } catch (error) {
        setResult([])
        setDisplayList([])
      }
    }
    document.title = t("Btext02")
  }, [refresh]);

  useEffect(() => { // temporaly fix unload offline
    if (true) {
      let timer1 = setTimeout(() => setRefresh(!refresh), 1000);
      return () => {
        clearTimeout(timer1);
      };
    }
    // if (online) {
    //   postAll()
    // }
  }, [])
  const unfavorite = async (key) => {
    try {
      if (online) {
        setDisplayList([...displayList].filter((item) => item.key != key))
        // console.log(`https://q27z6n.deta.dev/users/favorite/${id2}`)
        const result = await axios.delete(`https://q27z6n.deta.dev/users/favorite/${key}`, { headers: { 'x-token': token } })
        console.log('data here')
        console.log(result.data)
        setRefresh(!refresh)
        // setTrigger(!trigger)
      } else {
        let newlist = JSON.parse(localStorage.getItem('favorite'))['items'].filter(item => item.key != key)
        setDisplayList([...displayList].filter((item) => item.key != key))
        localStorage.setItem('favorite', JSON.stringify({ count: 99, items: [...result].filter((item) => item.key != key) }))
        let allitem = JSON.parse(localStorage.getItem('brew-recipe'))['items'].filter(item => item.key != key)
        let item = JSON.parse(localStorage.getItem('brew-recipe'))['items'].filter(item => item.key === key)[0]
        item = { ...item, is_favorite: false }
        item = [...allitem, item]
        localStorage.setItem('brew-recipe', JSON.stringify({ count: 99, items: item }))
        let off_record = { method: "unfav", key: key }

        try {
          updateLocalList('update', off_record)
        } catch {

        }
      }
    } catch (error) {
      console.log(error.response)
    }
  };

  const [searchText, setSearchText] = useState("")
  const [displayList, setDisplayList] = useState(result);
  useEffect(() => {
    let temp = []
    for (let i = 0; i < result.length; i++) {
      if (result[i]['name'].toLowerCase().includes(searchText.toLowerCase())) {
        // result.push(data[i]);
        temp.push(result[i]);
      }
    }
    setDisplayList(temp)
  }, [searchText]);
    let favlist = displayList.map((item) => { return (<FavCard key={`fav${item.key}`} link={item.key} name={item.name} brewer={item.brewer} func={unfavorite}></FavCard>); })
  return (
    <div>
      <NavBar />
      <div className="d-flex div_a"><Link to="/brew-recipe/new"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-plus-circle Add_icon">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
      </svg></Link></div>
      <div id="main_template">
        <div className="container" id="search_contrainer">
          <div className="input-group">
            <input className="form-control" type="search" id="search_input" value={searchText} onChange={(e) => { setSearchText(e.target.value) }} />
            <span className="input-group-text" id="search_button">
              <i className="fa fa-search" id="Tool_icon" style={{ color: '#ffffff' }} /></span></div>
        </div>
        


          { displayList.length > 0 ?
            <div className="container" id="recipelist_container" style={{ marginTop: '-70px' }}>
                {favlist}
                <div style={{ height: '50px' }}></div>
            </div>
            : 
            <div style={{ marginTop: "20%"}}>
                <p className="nocomment_e1">No Favorite Recipe.</p>
                <p className="nocomment_e2">Heart a recipe to see it here!<br /></p>
            </div>
          }
          {/* {JSON.stringify(result)} */}

          

      </div>
      <div className="d-flex" id="Header">
        <p id="header_paragraph">{t("Btext02")}</p>
      </div>
      <div className="d-flex" id="Footer">
        <Link to="/" className="btn btn-primary" role="button" data-bss-hover-animate="pulse" id="fbrew_button">
          <img src={imgcup} style={{ width: '50px', marginTop: '-17px' }} /></Link>
        <button className="btn btn-primary disabled d-flex" data-bss-hover-animate="pulse" id="ffav_button" type="button" disabled>
          <img src={imgfav} style={{ width: '42px' }} /></button></div>
    </div>
  )
}
