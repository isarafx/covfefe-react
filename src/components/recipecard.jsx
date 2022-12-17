import React from 'react'
import { Link } from 'react-router-dom'
import { UpdateFav } from '../method/updateFav'
export default function RecipeCard({name="Recipe Name", link="/", disabled=false, shared=0, favorite=0}) {
    if(shared){shared="Tool_Shared"}else{shared="Tool_icon"}
    if(favorite){favorite="Tool_Faved"}else{favorite="Tool_icon"}
  function updatefavorite(){
    UpdateFav(link)
  }

  return (
    <div id="method_result_card">
        <div className="row">
          <div className="col"><Link to={`/brew-guide/${link}`}><a href="">
              <div className="card" style={{height: '65px', background: 'rgba(255,255,255,0)', borderStyle: 'none'}}>
                <div className="card-body fcard_body">
                  <div className="row">
                    <div className="col d-flex justify-content-center method_result_col">
                      <div className="method_result_ico_border"><img className="method_result_ico" src="../assets/img/Hario_ICO.png" /></div>
                    </div>
                    <div className="col d-flex align-items-center" style={{maxWidth: '550px', minWidth: '200px'}}>
                      <p className="recipe_title2">{name}&nbsp;</p>
                    </div>
                  </div>
                </div>
              </div>
            </a></Link></div>
        </div>

        <div className="row">
          <div className="col">
            <div className="btn-group d-flex" role="group" style={{width: '100%'}}>
            { !disabled &&<><button className="btn btn-primary" data-bss-hover-animate="jello" id="Tool_color" type="button">
                    <i className="fa fa-pencil" id="Tool_icon" /></button>
                    <a className="btn btn-primary" role="button" data-bss-hover-animate="jello" id="Tool_color" href="">
                    <i className="fas fa-share" id={shared} /></a>
                    
                    <button onClick={()=>{UpdateFav(link)}} className="btn btn-primary" data-bss-hover-animate="jello" id="Tool_color" type="button">
                    <i className="fas fa-heart" id={favorite} /></button>
                    
                    <button className="btn btn-primary" data-bss-hover-animate="jello" id="Tool_color" type="button">
                    <i className="fas fa-trash" id="Tool_icon" /></button></>}
</div>
          </div>
        </div>
    </div>
  )
}
