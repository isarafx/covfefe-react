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

export default function BrewTimer() {
  const { t, i18n } = useTranslation();
  const processList = [
    {name:"process1", description:"do 500ml", comment:"comment_dummy", time:9},
    {name:"process2", description:"do 500ml", comment:"comment_dummy", time:7},
    {name:"process3", description:"do 500ml", comment:"comment_dummy", time:8},
    {name:"process4", description:"do 500ml", comment:"comment_dummy", time:8},
  ]
  const [overallTime, setOverallTime] = useState(0)   //overall = total time - total = total time but decrease when timer on
  const [runTime, setRunTime] = useState(0)           //total time since timer start
  const [totaltime, setTotalTime] = useState(0)
  const [processTime, setProcessTime] = useState(0)
  const [state, setState] = useState(0) // if true> clock start
  const [index, setIndex] = useState(1)
  function startCondition(){
    let time = 0
    processList.map((item)=>{
      time += item.time
    })
    setTotalTime(time)
    setOverallTime(time)
    setProcessTime(processList[0].time)
  }
  
  function skipMethod(){
    setProcessTime(processList[index].time)
    setIndex(index+1)
    let time = 0
    processList.map((item, i)=>{
      if(i>= index){
      time += item.time}
    })
    setTotalTime(time)
    stop()
  }
  function test(){
    startCondition()
    setState(true)
  }

  function play(){
    var audio = document.getElementById('a1');
    audio.play()
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
        }
        else if(processTime==0 && totaltime>0){ //finish current process move to next process
          console.log('next')
          setProcessTime(processList[index].time)
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
  return (
    <div>
  <BackButton />
  <div id="main_template">
    <div className="container" id="recipelist_container2" style={{position: 'relative'}}>
      <div className="d-flex justify-content-center" id="Timer_container1"><button onClick={()=> {test()}} className="btn btn-primary" id="Timer_PP_button" type="button" />
        <div className="Main_timer" />
        <p className="Main_timer_text">{t("Btext10")}</p>
        <audio id='a1'><source src='/sound/5sec.mp3' type='audio/mpeg' /></audio>
        {/* <button onClick={(e)=>{test()}}>test</button> */}
        <p className="Main_timer_num">{mmss(processTime)}</p><img className="timer_control_icon" src="../assets/img/Timer_play_ico.png" />
        <div className="d-inline-flex Sub_timer"><img className="Sub_timer_icon" src="../assets/img/guide_timer_ico.png" />
          <p style={{fontSize: '14px'}}>{mmss(totaltime)}</p>
        </div><button onClick={()=>{skipMethod()}} className="btn btn-primary d-flex justify-content-center align-items-center" id="Timer_Skip_button" type="button"><img className="timer_skip_icon" src="../assets/img/Timer_skip_ico.png" /></button>
      </div>
      <div id="Timer_container2">
        <div id="Current_method_box">
          <div id="process_card2">
            <div className="d-inline-flex" style={{minWidth: '100%'}}>
              <div style={{minWidth: '15%'}}><img id="process_pic" src="../assets/img/Process_Dummy_icon.png" /></div>
              <p id="process_title" style={{color: '#dc6c62'}}>{processList[index-1].name}</p>
            </div>
            <div>
              <p id="process_des">{processList[index-1].description}</p>
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
                <div style={{minWidth: '15%'}}><img id="process_pic" src="../assets/img/Process_Dummy_icon.png" /></div>
                <p id="process_title" style={{color: 'rgb(80,80,80)'}}>{item.name}</p>
                <p className="text-end" style={{minWidth: '15%'}}>{mmss(item.time)}</p>
              </div>
              <div>
                <p id="process_des">{item.description}</p>
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
    <p id="header_paragraph">Recipe Name</p>
  </div>
  <div className="d-flex" id="Footer" />
</div>


  )
}


