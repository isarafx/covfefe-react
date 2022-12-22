import React from 'react'

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
import { useState } from 'react'
import BackButton from '../components/backbutton'
import { useEffect } from 'react'
import { mmss } from '../method/mmss'

import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'
import { descParse } from '../method/mmss'
import axios from 'axios'
export default function BrewTimer() {
  let [online, isOnline] = useState(navigator.onLine);
  const setOnline = () => { console.log('We are online!'); isOnline(true); };
  const setOffline = () => { console.log('We are offline!'); isOnline(false); };
  useEffect(() => { window.addEventListener('offline', setOffline); window.addEventListener('online', setOnline); return () => { window.removeEventListener('offline', setOffline); window.removeEventListener('online', setOnline); } }, []);
  

  const { brewer, id } = useParams();
  const { t, i18n } = useTranslation();
  const [searchParams] = useSearchParams();
  const [cup, setCup] = useState(1)


  // const processList = JSON.parse(localStorage.getItem('recipe'))['item'].filter((item)=>{return item.Lid===id})[0]['process']
  const name = JSON.parse(localStorage.getItem('brew-recipe'))['items'].filter((item)=>{return item.key===id})[0]['name']
  const processList = JSON.parse(localStorage.getItem('brew-recipe'))['items'].filter((item)=>{return item.key===id})[0]['process']
  const [overallTime, setOverallTime] = useState(0)   //overall = total time - total = total time but decrease when timer on
  const [runTime, setRunTime] = useState(0)           //total time since timer start
  const [totaltime, setTotalTime] = useState(0)
  const [processTime, setProcessTime] = useState(0)
  const [state, setState] = useState(0) // if true> clock start
  const [index, setIndex] = useState(1)
  const token = localStorage.getItem('token')
  const [brewed, setBrewed] = useState()
  function startCondition(){
    let time = 0
    processList.map((item)=>{
      time += parseInt(item.time)
    })
    setTotalTime(time)
    setOverallTime(time)
    setProcessTime(parseInt(processList[0].time))
  }
  
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
          alert('finish')
          startCondition()
          localStorage.setItem('brewcount', (brewed+1))
          sendBrewed()
          //post brew total to server
          //set localstorage to push to server
        }
        else if(processTime==0 && totaltime>0){ //finish current process move to next process
          console.log('next')
          setProcessTime(parseInt(processList[index].time))
          setIndex(index+1)
          
          

        }else if(processTime>0 && totaltime>0){ //run this case every 1000ms
          if(processTime == 7){play()}
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
    startCondition()
    setCup(parseInt(searchParams.get('cup')))
    getBrewed()
  },[])

  const sendBrewed = async () => { 
      try{
            // alert(key)
            if(token){
                let user = JSON.parse(atob(localStorage.getItem('token').split('.')[1]))
                if(online){
                  const result = await axios.patch(`https://q27z6n.deta.dev/users`, {"brewed":(brewed+1)}, {headers: {'x-token':token}});
                  console.log(result)
                }else{
                  //offline implement
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
    <div className="container" id="recipelist_container2" style={{position: 'relative'}}>
      <div className="d-flex justify-content-center" id="Timer_container1"><button onClick={()=> {test()}} className="btn btn-primary" id="Timer_PP_button" type="button" />
        <div className="Main_timer" />
        <p className="Main_timer_text">{t("Btext10")}</p>
        <audio id='a1'><source src="%PUBLIC_URL%/../assets/img/5sec.mp3" type='audio/mpeg' /></audio>
        {/* <button onClick={(e)=>{test()}}>test</button> */}
        <p className="Main_timer_num">{mmss(processTime)}</p><img className="timer_control_icon" src={state ? "../../assets/img/Timer_pause_ico.png":"../../assets/img/Timer_play_ico.png"} />
        <div className="d-inline-flex Sub_timer"><img className="Sub_timer_icon" src="%PUBLIC_URL%/../assets/img/guide_timer_ico.png" />
          <p style={{fontSize: '14px'}}>{mmss(totaltime)}</p>
        </div><button onClick={()=>{skipMethod()}} className="btn btn-primary d-flex justify-content-center align-items-center" id="Timer_Skip_button" type="button"><img className="timer_skip_icon" src="../../assets/img/Timer_skip_ico.png" /></button>
      </div>
      <div id="Timer_container2">
        <div id="Current_method_box">
          <div id="process_card2">
            <div className="d-inline-flex" style={{minWidth: '100%'}}>
              <div style={{minWidth: '15%'}}><img id="process_pic" src="../../assets/img/Process_Dummy_icon.png" /></div>
              <p id="process_title" style={{color: '#dc6c62'}}>{processList[index-1].name}</p>
            </div>
            <div>
              <p id="process_des">{descParse(processList[index-1].name,processList[index-1].water,cup,brewer)}</p>
            </div>
            <div>
              <p id="process_comment">{processList[index-1].comment}<br /></p>
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
                <div style={{minWidth: '15%'}}><img id="process_pic" src="../../assets/img/Process_Dummy_icon.png" /></div>
                <p id="process_title" style={{color: 'rgb(80,80,80)'}}>{item.name}</p>
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
    <p id="header_paragraph">{name}</p>
  </div>
  <div className="d-flex" id="Footer" />
</div>


  )
}