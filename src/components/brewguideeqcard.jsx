import React from 'react'

export default function BrewGuideEQCard({pic="assets/img/Tools_5.png", detail="lorem"}) {
  return (
    <div className="d-flex align-items-center guide_toolbox">
                <div className="row g-0 row-cols-3 d-flex guide_toolr">
                  <div className="col d-flex align-items-center guide_toolc1">
                    <div className="guide_tool_border"><img id="guide_tool_icon" src={pic} /></div>
                  </div>
                  <div className="col guide_toolc2">
                    <p className="fw-normal" id="gtext">{detail}</p>
                  </div>
                </div>
              </div>
  )
}
