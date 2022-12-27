import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import imghario from "../assets/img/Hario_ICO.png"
import imgaeropress from "../assets/img/Aeropress_ICO.png"
import imgfrenchpress from "../assets/img/Frenchpress_ICO.png"
import imgmokapot from "../assets/img/Moka_ICO.png"
import imgchemex from "../assets/img/Chemex_ICO.png"
import { useParams } from 'react-router-dom'
export default function FavCard({name="lorem ipsum", link, brewer = 'hario' , id='', func }) {
  //'Hario', 'Chemex', 'Moka Pot', 'French Press', 'AeroPress'
  const tool = {
    "Hario":imghario,
    "AeroPress":imgaeropress,
    "French Press":imgfrenchpress,
    "Moka Pot":imgmokapot,
    "Chemex":imgchemex,
  }
  let url = `/brew-recipe/${brewer}/${link}`
  let potato = ';'

    
  return (
    <div id="method_result_card">
      <div className="row">
        <div className="col"><Link to={url}>
          <div className="card" style={{ height: '65px', background: 'rgba(255,255,255,0)', borderStyle: 'none' }}>
            <div className="card-body fcard_body">
              <div className="row">
                <div className="col d-flex justify-content-center method_result_col">
                  <div className="method_result_ico_border"><img className="method_result_ico" src={tool[brewer]} /></div>
                </div>
                <div className="col d-flex align-items-center" style={{ maxWidth: '550px', minWidth: '200px' }}>
                  <p className="recipe_title2">{name}<br /></p>
                </div>
              </div>
            </div>
          </div>
        </Link></div>
      </div>
      <div className="row">
        <div className="col">
          <div className="btn-group d-flex justify-content-end" role="group" style={{ width: '100%' }}>
            <button onClick={()=>{func(link)}} className="btn btn-primary" data-bss-hover-animate="jello" id="Fav_Tool_color" type="button"><i className="fas fa-heart-broken" id="Tool_Faved" /></button></div>
        </div>
      </div>
    </div>

  )
}
