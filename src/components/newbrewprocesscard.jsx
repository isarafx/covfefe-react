import React from 'react'
import { mmss } from '../method/mmss'
import imgdummy from "../assets/img/Process_Dummy_icon.png"

export default function NewBrewProcessCard({name="process_dummy", description="desc", comment="comment", time=0, func={}, param="id"}) {
  return (
    <div className="d-inline-flex" id="Process_edit_card" style={{width: '100%'}}>
            <div className="process_card2">
              <div className="d-inline-flex" style={{minWidth: '100%'}}>
                <div style={{minWidth: '15%'}}><img id="process_pic" src={imgdummy} /></div>
                <p id="process_title">{name}</p>
                <p className="text-end" style={{minWidth: '15%'}}>{mmss(time)}</p>
              </div>
              <div>
                <p id="process_des">{description}</p>
              </div>
              <div>
                <p id="process_comment">{comment}</p>
              </div>
            </div>
            <div className="d-flex justify-content-center align-items-center process_delete_box">
              <button onClick={()=>{func(param)}} className="btn btn-primary" id="process_timer_delete" type="button"><i className="fa fa-minus-square-o" style={{fontSize: '20px'}} /></button></div>
          </div>
  )
}
