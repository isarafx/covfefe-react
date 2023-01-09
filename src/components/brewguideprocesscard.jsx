import React from 'react'
import { descParse, mmss } from '../method/mmss'

import imgdummy from "../assets/img/Process_Dummy_icon.png"

export default function BrewGuideProcessCard({name="process_dummy", description="desc", comment=" ", time=0, water}) {
  const picture={
    
  }
  return (
    <div id="process_card">
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

  )
}
