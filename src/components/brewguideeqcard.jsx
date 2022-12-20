import React from 'react'
import { useEffect } from 'react'

export default function BrewGuideEQCard({name, pic="assets/img/Tools_5.png", detail="lorem"}) {
  const PicEQ = {
    "Coffee":"Tools_1",
    "Hario V60":"Tools_2",
    "Chemex":"Tools_3",
    "Moka Pot":"Tools_4",
    "AeroPress":"Tools_5",
    "French Press":"Tools_6",
    "Kettle":"Tools_7",
    "Scale":"Tools_8",
    "Grinder":"Tools_9",
    "Filter":"Tools_10",
    "Other":"Tools_11",
  }
  useEffect(()=>{
    console.log(name)
  }, [])
  return (
    <div className="d-flex align-items-center guide_toolbox">
                <div className="row g-0 row-cols-3 d-flex guide_toolr">
                  <div className="col d-flex align-items-center guide_toolc1">
                    <div className="guide_tool_border"><img id="guide_tool_icon" src={`assets/img/${PicEQ[pic]}.png`} /></div>
                  </div>
                  <div className="col guide_toolc2">
                    <p className="fw-normal" id="gtext">{detail}</p>
                  </div>
                </div>
              </div>
  )
}
