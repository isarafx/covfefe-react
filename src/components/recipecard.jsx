import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'
import { UpdateFav } from '../method/updateFav'
import imghario from "../assets/img/Hario_ICO.png"
import imgaeropress from "../assets/img/Aeropress_ICO.png"
import imgfrenchpress from "../assets/img/Frenchpress_ICO.png"
import imgmokapot from "../assets/img/Moka_ICO.png"
import imgchemex from "../assets/img/Chemex_ICO.png"
export default function RecipeCard({owner, editable, delfunc, favfunc, unfavfunc, name="Recipe Name", link="/", disabled=false, shared=0, favorite=0}) {
    // disabled=false 
    const { brewer } = useParams();
    let tempfav = Boolean(favorite)
    if(shared){shared="Tool_Shared"}else{shared="Tool_icon"}
    
    const token = localStorage.getItem('token')
    const [isOwner, setIsOwner] = useState(editable === owner)
    const [favid, setFavorite] = useState(favorite?"Tool_Faved":"Tool_icon")
    const tool = {
      "hario":imghario,
      "aeropress":imgaeropress,
      "frenchpress":imgfrenchpress,
      "mokapot":imgmokapot,
      "chemex":imgchemex,
    }
  return (
    <div id="method_result_card">
        <div className="row">
          <div className="col"><Link to={`/brew-recipe/${brewer}/${link}`}>
              <div className="card" style={{height: '65px', background: 'rgba(255,255,255,0)', borderStyle: 'none'}}>
                <div className="card-body fcard_body">
                  <div className="row">
                    <div className="col d-flex justify-content-center method_result_col">
                      <div className="method_result_ico_border"><img className="method_result_ico" src={tool[brewer]} /></div>
                    </div>
                    <div className="col d-flex align-items-center" style={{maxWidth: '550px', minWidth: '200px'}}>
                      <p className="recipe_title2">{name}&nbsp;</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link></div>
        </div>

        <div className="row">
          <div className="col">
            
            <div className="btn-group d-flex" role="group" style={{width: '100%'}}>
                    { isOwner ?
                    <Link to={`/brew-recipe/${brewer}/edit/${link}`} className="btn btn-primary" role="button" data-bss-hover-animate="jello" id="Tool_color" >
                    <i className="fa fa-pencil" id="Tool_icon"  />
                    </Link>
                    :
                    <Link to={`/brew-recipe/${brewer}/edit/${link}`} className="btn btn-primary disabled"  role="button" data-bss-hover-animate="jello" id="Tool_color" >
                    <i className="fa fa-pencil" id="Tool_icon"  />
                    </Link>
                    }

                    { isOwner ?
                    <Link to={`/brew-recipe/${brewer}/share/${link}`} className="btn btn-primary"  role="button" data-bss-hover-animate="jello" id="Tool_color" >
                    <i className="fas fa-share" id={shared} />
                    </Link>
                    :
                    <Link to={`/brew-recipe/${brewer}/share/${link}`} className="btn btn-primary disabled" role="button" data-bss-hover-animate="jello" id="Tool_color" >
                    <i className="fas fa-share" id={shared} />
                    </Link>
                    }
                    
                    { tempfav ?
                    <button onClick={()=>{setFavorite("Tool_icon");unfavfunc(link)}} className="btn btn-primary" data-bss-hover-animate="jello" id="Tool_color" type="button">
                    <i className="fas fa-heart" id={favid} />
                    </button>
                    :
                    <button onClick={()=>{setFavorite("Tool_Faved");favfunc(link)}} className="btn btn-primary" data-bss-hover-animate="jello" id="Tool_color" type="button">
                    <i className="fas fa-heart" id={favid} />
                    </button>
                    }

                    { isOwner ?
                    <button onClick={()=>{delfunc(link)}} className="btn btn-primary" data-bss-hover-animate="jello" id="Tool_color" type="button">
                    <i className="fas fa-trash" id="Tool_icon" />
                    </button>
                    :
                    <button onClick={()=>{delfunc(link)}} className="btn btn-primary disabled" data-bss-hover-animate="jello" id="Tool_color" type="button">
                    <i className="fas fa-trash" id="Tool_icon" />
                    </button>
                    }
          </div>
          </div>
        </div>
    </div>
  )
}
