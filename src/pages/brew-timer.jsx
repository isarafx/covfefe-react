import React from 'react'
import soundSRC from "../assets/Untitled Project.wav"
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
import { useState } from 'react'
import BackButton from '../components/backbutton'
import { useEffect } from 'react'
import { mmss } from '../method/mmss'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'
import { descParse } from '../method/mmss'
import axios from 'axios'

import pausepic from "../assets/img/Timer_pause_ico.png"
import playpic from "../assets/img/Timer_play_ico.png"
import subtimerpic from "../assets/img/guide_timer_ico.png"
import processdummy from "../assets/img/Process_Dummy_icon.png"
export default function BrewTimer() {
  let [online, isOnline] = useState(navigator.onLine);
  const setOnline = () => { console.log('We are online!'); isOnline(true); };
  const setOffline = () => { console.log('We are offline!'); isOnline(false); };
  const navigate = useNavigate()
  useEffect(() => { window.addEventListener('offline', setOffline); window.addEventListener('online', setOnline); return () => { window.removeEventListener('offline', setOffline); window.removeEventListener('online', setOnline); } }, []);
  

  const { brewer, id } = useParams();
  const { t, i18n } = useTranslation();
  const [searchParams] = useSearchParams();
  const [cup, setCup] = useState(1)

  const TextProcess = {
    "Pour Water":t("Modaltext14"),
    "Add Coffee":t("Modaltext15"),
    "Stir":t("Modaltext16"),
    "Bloom":t("Modaltext17"),
    "Wait":t("Modaltext18"),
    "Swirl":t("Modaltext19"),
    "Rinse Filter":t("Modaltext20"),
    "Brew":t("Modaltext21"),
    "Press Plunger":t("Modaltext22"),
    "Place Plunger":t("Modaltext23"),
    "Remove Plunger":t("Modaltext24"),
    "Invert":t("Modaltext25"),
    "Put the Lid on":t("Modaltext26"),
    "Custom":t("Modaltext27")
  }
  // const processList = JSON.parse(localStorage.getItem('recipe'))['item'].filter((item)=>{return item.Lid===id})[0]['process']
  // const name = JSON.parse(localStorage.getItem('brew-recipe'))['items'].filter((item)=>{return item.key===id})[0]['name']
  // const processList = JSON.parse(localStorage.getItem('brew-recipe'))['items'].filter((item)=>{return item.key===id})[0]['process']
  const [processList, setProcessList] = useState([])
  const [name, setName] =useState("")
  const [overallTime, setOverallTime] = useState(0)   //overall = total time - total = total time but decrease when timer on
  const [runTime, setRunTime] = useState(0)           //total time since timer start
  const [totaltime, setTotalTime] = useState(0)
  const [processTime, setProcessTime] = useState(0)
  const [state, setState] = useState(0) // if true> clock start
  const [index, setIndex] = useState(1)
  const token = localStorage.getItem('token')
  const [brewed, setBrewed] = useState(()=>{
    if(localStorage.getItem('brewed') == null){
        return 0
    }else{
      return parseInt(localStorage.getItem('brewed'))
    }
  });

  function skipMethod(){
    setProcessTime(parseInt(processList[index].time))
    setIndex(index+1)
    let time = 0
    processList.map((item, i)=>{
      if(i>= index){
      time += parseInt(item.time)}
    })
    setTotalTime(time)
    stop()
  }
  function test(){
    if(state==false){
      setState(true)
    }else if(state==true){
      setState(false)
    }
  }

  function play(){
    if(Boolean(localStorage.getItem('sound')) && localStorage.getItem('sound') !== '0'){
        var audio = document.getElementById('a1');
        console.log('here')
        audio.play()
    }
  }
  function stop(){
    var audio = document.getElementById('a1');
    audio.pause()
    audio.currentTime = 0;
  }

  useEffect( ()=>{
    if(state){
      const interval = setInterval(() => {
        if(processTime<=0 && totaltime<=0){ //finish case
          setState(false)
          // startCondition()
          localStorage.setItem('brewcount', (brewed+1))
          sendBrewed()
          
          navigate(`/brew-recipe/finish?brewer=${brewer}&id=${id}`)
          //post brew total to server
          //set localstorage to push to server
        }
        else if(processTime==0 && totaltime>0){ //finish current process move to next process
          console.log('next')
          setProcessTime(parseInt(processList[index].time))
          setIndex(index+1)
          
          

        }else if(processTime>0 && totaltime>0){ //run this case every 1000ms
          if(processTime == 3){play()}
          console.log('1s')
          setProcessTime(processTime-1)
          setTotalTime(totaltime-1)
          setRunTime(runTime+1)
        }
      },1000);
      return () => clearInterval(interval);
    }
  }, [processTime, state])
  useEffect(()=>{
    const getBrewed = async () => { 
      try{
            if(token){
                if(online){
                    try{
                      console.log(processList)
                      let user = JSON.parse(atob(localStorage.getItem('token').split('.')[1]))['username']
                      console.log(user)
                      const picture = await axios.get(`https://q27z6n.deta.dev/users/${user}`, { headers: {'x-token': token} })
                      console.log(picture.data['brewed'])
                      setBrewed(parseInt(picture.data['brewed']))
                    }catch(error){
                      console.log(error.response)
                      setBrewed(0)
                    }
                }else{
                }
            }
    }catch(error){
      console.log(error)
    }
  };
    setCup(parseInt(searchParams.get('cup')))
    getBrewed()
    document.title = t('Timer01')
  },[])
  const getname = () => {
    try{
      if(processList[index-1].custom_name){
        return processList[index-1].custom_name
      }else{
        return TextProcess[processList[index-1].name]
      }
      }catch(error){
        return error
      }
  }
  const sendBrewed = async () => { 
      try{
            // alert(key)
            if(token){
                let user = JSON.parse(atob(localStorage.getItem('token').split('.')[1]))
                if(online){
                  console.log('reach here')
                  console.log(token)
                  const result = await axios.patch(`https://q27z6n.deta.dev/users`, {"brewed":brewed+1}, {headers: {'x-token':token}});
                  console.log(result)
                  console.warn('reach here')
                }else{
                  //offline implement
                }
            }
      }catch(error){
        console.log(error.response)
      }
  };
  useEffect(()=>{
    const FetchData = async () => { 
      try{
        
        if(online){
            try{
              const recipee = await axios.get(`https://q27z6n.deta.dev/recipes/${id}`)
              setProcessList(recipee.data['process'])
              let time = 0
              recipee.data['process'].map((item)=>{
                time += parseInt(item.time)
              })
              setTotalTime(time)
              setOverallTime(time)
              setProcessTime(recipee.data['process'][0].time)
            }catch(error){
              console.log(error)
            }
        }else{
        }
    }catch(error){
      console.log(error)
    }
  };
    // console.log(processList)
      if(online){
          FetchData()
      }else{
          let owner = (searchParams.get('owner'))
          let recipee = JSON.parse(localStorage.getItem('brew-recipe'))['items'].filter((item)=>item.key===id)[0]
          
          setProcessList(recipee['process'])
          let time = 0
          recipee['process'].map((item)=>{
            time += parseInt(item.time)
          })
          setTotalTime(time)
          setOverallTime(time)
          setProcessTime(recipee['process'][0].time)
      }
  }, [])

  return (
    <div>
  <div className="div_back"><Link to={`/brew-recipe/${brewer}/${id}`} ><i className="icon ion-android-arrow-back" id="Back_icon" /></Link></div>
  <div id="main_template">
    <div className="container" id="recipelist_container2" style={{position: 'relative'}}>
      <div className="d-flex justify-content-center" id="Timer_container1"><button onClick={()=> {test()}} className="btn btn-primary" id="Timer_PP_button" type="button" />
        <div className="Main_timer" />
        <p className="Main_timer_text">{t("Btext10")}</p>
        <audio id='a1'><source src={soundSRC} type='audio/mpeg' /></audio>
        {/* <button onClick={(e)=>{test()}}>test</button> */}
        <p className="Main_timer_num">{mmss(processTime)}</p><img className="timer_control_icon" src={state ? pausepic:playpic} />
        <div className="d-inline-flex Sub_timer"><img className="Sub_timer_icon" src={subtimerpic} />
          <p style={{fontSize: '14px'}}>{mmss(totaltime)}</p>
        </div><button onClick={()=>{skipMethod()}} className="btn btn-primary d-flex justify-content-center align-items-center" id="Timer_Skip_button" type="button"><img className="timer_skip_icon" src="../../assets/img/Timer_skip_ico.png" /></button>
      </div>
      <div id="Timer_container2"> 
        <div id="Current_method_box">
          <div id="process_card2">
            <div className="d-inline-flex" style={{minWidth: '100%'}}>
              <div style={{minWidth: '15%'}}><img id="process_pic" src={processdummy} /></div>
              {/* <p id="process_title" style={{color: '#dc6c62'}}>{processList.length > 0?processList[index-1].name:null}</p> */}
              <p id="process_title" style={{color: '#dc6c62'}}>{processList.length > 0?getname():null}</p>
            </div>
            <div>
              <p id="process_des">{processList.length >0?descParse(processList[index-1].name,processList[index-1].water,cup,brewer):null}</p>
            </div>
            <div>
              <p id="process_comment">{processList.length >0?processList[index-1].comment:null}<br /></p>
            </div>
          </div>
        </div>
        <hr className="Current_method_line" style={{background: 'rgb(127, 80, 43)'}} />
      </div>
      <div id="Timer_container3">
        <div className="d-flex d-sm-flex justify-content-center justify-content-sm-center" style={{height: '14px', background: '#ffffff', marginTop: '-7px'}}>
          <p className="Nextstep_text">{t("Btext11")}</p>
        </div>
        <div className="Nextstep_box">
          {processList.map((item, itemIndex)=>{
            if(itemIndex+1 > index){
              return(<div id="process_card3">
              <div className="d-inline-flex" style={{minWidth: '100%'}}>
                <div style={{minWidth: '15%'}}><img id="process_pic" src={processdummy} /></div>
                <p id="process_title" style={{color: 'rgb(80,80,80)'}}>{item.custom_name?item.custom_name:TextProcess[item.name]}</p>
                <p className="text-end" style={{minWidth: '15%'}}>{mmss(parseInt(item.time))}</p>
              </div>
              <div>
                <p id="process_des">{descParse(item.name, item.water, cup, brewer)}</p>
              </div>
              <div>
                <p id="process_comment">{item.comment}</p>
              </div>
            </div>)
            }
          })}
        </div>
      </div>
    </div>
  </div>
  <div className="d-flex" id="Header">
    <p id="header_paragraph">{t('Timer01')}</p>
  </div>
  <div className="d-flex" id="Footer" />
</div>


  )
}