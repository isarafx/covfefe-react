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

export default function BrewRecipe() {
  return (
    <div>
  <div className="div_back"><a href="javascript:history.back()"><i className="icon ion-android-arrow-back" id="Back_icon" /></a></div>
  <div id="main_template">
    <div className="container" id="recipelist_container">
      <div id="method_result_card">
        <div className="row">
          <div className="col"><a href="Brewing_Guide.html">
              <div className="card" style={{height: '65px', background: 'rgba(255,255,255,0)', borderStyle: 'none'}}>
                <div className="card-body fcard_body">
                  <div className="row">
                    <div className="col d-flex justify-content-center method_result_col">
                      <div className="method_result_ico_border"><img className="method_result_ico" src="assets/img/Hario_ICO.png" /></div>
                    </div>
                    <div className="col d-flex align-items-center" style={{maxWidth: '550px', minWidth: '200px'}}>
                      <p className="recipe_title2">Recipe name<br /></p>
                    </div>
                  </div>
                </div>
              </div>
            </a></div>
        </div>
        <div className="row">
          <div className="col">
            <div className="btn-group d-flex" role="group" style={{width: '100%'}}><button className="btn btn-primary" data-bss-hover-animate="jello" id="Tool_color" type="button"><i className="fa fa-pencil" id="Tool_icon" /></button><a className="btn btn-primary" role="button" data-bss-hover-animate="jello" id="Tool_color" href="Community_shared.html"><i className="fas fa-share" id="Tool_Shared" /></a><button className="btn btn-primary" data-bss-hover-animate="jello" id="Tool_color" type="button"><i className="fas fa-heart" id="Tool_Faved" /></button><button className="btn btn-primary" data-bss-hover-animate="jello" id="Tool_color" type="button"><i className="fas fa-trash" id="Tool_icon" /></button></div>
          </div>
        </div>
      </div>
      <div id="method_result_card">
        <div className="row">
          <div className="col"><a href="Brewing_Guide.html">
              <div className="card" style={{height: '65px', background: 'rgba(255,255,255,0)', borderStyle: 'none'}}>
                <div className="card-body fcard_body">
                  <div className="row">
                    <div className="col d-flex justify-content-center method_result_col">
                      <div className="method_result_ico_border"><img className="method_result_ico" src="assets/img/Hario_ICO.png" /></div>
                    </div>
                    <div className="col d-flex align-items-center" style={{maxWidth: '550px', minWidth: '200px'}}>
                      <p className="recipe_title2">Recipe name&nbsp;</p>
                    </div>
                  </div>
                </div>
              </div>
            </a></div>
        </div>
        <div className="row">
          <div className="col">
            <div className="btn-group d-flex" role="group" style={{width: '100%'}}><button className="btn btn-primary" data-bss-hover-animate="jello" id="Tool_color" type="button"><i className="fa fa-pencil" id="Tool_icon" /></button><a className="btn btn-primary" role="button" data-bss-hover-animate="jello" id="Tool_color" href="Community_shared.html"><i className="fas fa-share" id="Tool_icon" /></a><button className="btn btn-primary" data-bss-hover-animate="jello" id="Tool_color" type="button"><i className="fas fa-heart" id="Tool_icon" /></button><button className="btn btn-primary" data-bss-hover-animate="jello" id="Tool_color" type="button"><i className="fas fa-trash" id="Tool_icon" /></button></div>
          </div>
        </div>
      </div>
      <div id="method_result_card">
        <div className="row">
          <div className="col"><a href="Brewing_Guide.html">
              <div className="card" style={{height: '65px', background: 'rgba(255,255,255,0)', borderStyle: 'none'}}>
                <div className="card-body fcard_body">
                  <div className="row">
                    <div className="col d-flex justify-content-center method_result_col">
                      <div className="method_result_ico_border"><img className="method_result_ico" src="assets/img/Hario_ICO.png" /></div>
                    </div>
                    <div className="col d-flex align-items-center" style={{maxWidth: '550px', minWidth: '200px'}}>
                      <p className="recipe_title2">Recipe name&nbsp;</p>
                    </div>
                  </div>
                </div>
              </div>
            </a></div>
        </div>
        <div className="row">
          <div className="col">
            <div className="btn-group d-flex" role="group" style={{width: '100%'}}><button className="btn btn-primary" data-bss-hover-animate="jello" id="Tool_color" type="button"><i className="fa fa-pencil" id="Tool_icon" /></button><a className="btn btn-primary" role="button" data-bss-hover-animate="jello" id="Tool_color" href="Community_shared.html"><i className="fas fa-share" id="Tool_icon" /></a><button className="btn btn-primary" data-bss-hover-animate="jello" id="Tool_color" type="button"><i className="fas fa-heart" id="Tool_icon" /></button><button className="btn btn-primary" data-bss-hover-animate="jello" id="Tool_color" type="button"><i className="fas fa-trash" id="Tool_icon" /></button></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="d-flex" id="Header">
    <p id="header_paragraph">%Method's Recipes%</p>
  </div>
  <div className="d-flex" id="Footer" />
</div>


  )
}
