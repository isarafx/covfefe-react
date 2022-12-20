import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function FavCard({name="lorem ipsum", brewer = 'hario' , commu = 0, id='', func }) {

  const tool = {
    "Hario":"Hario",
    "AeroPress":"AeroPress",
    "French Press":"Frenchpress",
    "Moka Pot":"Moka",
    "Chemex":"Chemex",
  }
  let url = "/"
  if(!commu){
      url="/commu-detail/${key}"
  }else{
      url="/brew-recipe/${key}"
    }


    
  return (
    <div id="method_result_card" onClick={()=>{func(id)}}>
      <div className="row">
        <div className="col"><Link to={url}><a href="">
          <div className="card" style={{ height: '65px', background: 'rgba(255,255,255,0)', borderStyle: 'none' }}>
            <div className="card-body fcard_body">
              <div className="row">
                <div className="col d-flex justify-content-center method_result_col">
                  <div className="method_result_ico_border"><img className="method_result_ico" src={`../assets/img/${tool[brewer]}_ICO.png`} /></div>
                </div>
                <div className="col d-flex align-items-center" style={{ maxWidth: '550px', minWidth: '200px' }}>
                  <p className="recipe_title2">{name}<br /></p>
                </div>
              </div>
            </div>
          </div>
        </a></Link></div>
      </div>
      <div className="row">
        <div className="col">
          <div className="btn-group d-flex justify-content-end" role="group" style={{ width: '100%' }}><button className="btn btn-primary" data-bss-hover-animate="jello" id="Fav_Tool_color" type="button"><i className="fas fa-heart-broken" id="Tool_Faved" /></button></div>
        </div>
      </div>
    </div>

  )
}
