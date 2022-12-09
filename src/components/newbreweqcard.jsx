import React from 'react'

export default function NewBrewEQCard({pic="assets/img/Tools_5.png", detail="lorem", func={}}) {
  return (
    <div className="d-flex align-items-center guide_toolbox2">
            <div className="row g-0 row-cols-3 d-flex guide_toolr_edit">
              <div className="col d-flex align-items-center guide_toolc1_edit">
                <div className="guide_tool_border"><img id="guide_tool_icon" src={`assets/img/${pic}`} /></div>
              </div>
              <div className="col guide_toolc2_edit">
                <p className="fw-normal" id="gtext">{detail}</p>
              </div>
              <div className="col d-flex justify-content-center align-items-center guide_toolc3_edit">
                <button onClick={func} className="btn btn-primary" id="guide_tool_delete" type="button"><i className="fa fa-minus-square-o" /></button></div>
            </div>
          </div>
  )
}
