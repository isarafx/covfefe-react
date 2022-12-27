import React from 'react'
import { useEffect } from 'react'
import tool1 from "../assets/img/Tools_1.png"
import tool2 from "../assets/img/Tools_2.png"
import tool3 from "../assets/img/Tools_3.png"
import tool4 from "../assets/img/Tools_4.png"
import tool5 from "../assets/img/Tools_5.png"
import tool6 from "../assets/img/Tools_6.png"
import tool7 from "../assets/img/Tools_7.png"
import tool8 from "../assets/img/Tools_8.png"
import tool9 from "../assets/img/Tools_9.png"
import tool10 from "../assets/img/Tools_10.png"
import tool11 from "../assets/img/Tools_11.png"
export default function BrewGuideEQCard({name, pic=tool1, detail="lorem"}) {
  const PicEQ = {
    "Coffee":tool1,
    "Hario V60":tool2,
    "Chemex":tool3,
    "Moka Pot":tool4,
    "AeroPress":tool5,
    "French Press":tool6,
    "Kettle":tool7,
    "Scale":tool8,
    "Grinder":tool9,
    "Filter":tool10,
    "Other":tool11,
  }
  useEffect(()=>{
    console.log(name)
  }, [])
  return (
    <div className="d-flex align-items-center guide_toolbox">
                <div className="row g-0 row-cols-3 d-flex guide_toolr">
                  <div className="col d-flex align-items-center guide_toolc1">
                    <div className="guide_tool_border"><img id="guide_tool_icon" src={PicEQ[pic]} /></div>
                  </div>
                  <div className="col guide_toolc2">
                    <p className="fw-normal" id="gtext">{detail}</p>
                  </div>
                </div>
              </div>
  )
}
