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
export default function RecipeCard({key, owner, online, editable, delfunc, favfunc, unfavfunc, name="Recipe Name", link="/", disabled=false, shared=0, favorite=0}) {
    // disabled=false 
    const { brewer } = useParams();
    let tempfav = Boolean(favorite)
    // if(shared){shared="Tool_Shared"}else{shared="Tool_icon"}
    let shareButton;
    //shared-user-admin
    if(shared && owner != "admin"){
      shareButton = <Link className="btn btn-primary" role="button" data-bss-hover-animate="jello" id="Tool_color" > <i className="fas fa-share" id="Tool_Shared" /></Link>
    }else if(!shared && owner != "admin"){
        shareButton = <Link to={`/brew-recipe/${brewer}/share/${link}`} className="btn btn-primary" role="button" data-bss-hover-animate="jello" id="Tool_color" > <i className="fas fa-share" id="Tool_icon" /></Link>
    }else if(owner === "admin" || online===false ){
        shareButton = <Link to={`/brew-recipe/${brewer}/share/${link}`} className="btn btn-primary disabled" role="button" data-bss-hover-animate="jello" id="Tool_color" > <i className="fas fa-share" id="Tool_icon" /></Link>
    }
    // if(){}else{}
    const token = localStorage.getItem('token')
    const [isOwner, setIsOwner] = useState(editable === owner)
    const [favid, setFavorite] = useState(favorite?"Tool_Faved":"Tool_icon")
    const [shareable, setShareable] = useState(Boolean())
    const tool = {
      "hario":imghario,
      "aeropress":imgaeropress,
      "frenchpress":imgfrenchpress,
      "mokapot":imgmokapot,
      "chemex":imgchemex,
    }

    const postFav = (link) => {
        if(favid === "Tool_icon"){
            favfunc(link)
        }else if(favid === "Tool_Faved"){
            unfavfunc(link)
        }

    }

  return (
    <div id="method_result_card" key={`${key}${favorite}`}>
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

                   
                    {/* <Link to={`/brew-recipe/${brewer}/share/${link}`} className="btn btn-primary disabled" role="button" data-bss-hover-animate="jello" id="Tool_color" >
                    <i className="fas fa-share" id={shared} />
                    </Link> */}
                    {shareButton}
                    
                    { tempfav ?
                    <button onClick={()=>{postFav(link);setFavorite("Tool_icon")}} className="btn btn-primary" data-bss-hover-animate="jello" id="Tool_color" type="button">
                    <i className="fas fa-heart" id={favid} />
                    </button>
                    :
                    <button onClick={()=>{postFav(link);setFavorite("Tool_Faved")}} className="btn btn-primary" data-bss-hover-animate="jello" id="Tool_color" type="button">
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
