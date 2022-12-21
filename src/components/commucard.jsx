import React from 'react'
import { Link } from 'react-router-dom'
export default function CommuCard({name="Recipe card", main_eq=1, comment="test", heart=0, star=0, comment_count=0, link="/", date=3, brewer}) {
  const source = {
    1:"Hario",
    2:"Aeropress",
    3:"French Press",
    4:"Moka Pot",
    5:"Chemex",
    

  }
  return (
    <div className="col">
          <div className="card Recipe_card"><Link to={`/brew-recipe/${brewer}/${link}`}>
            <div className="card-body">
                <div className="row" style={{textAlign: 'center'}}>
                  <div className="col"><img id="Result_mpic" src="assets/img/Sample.png" /></div>
                </div>
                <div className="row" id="Result_main">
                  <div className="col">
                    <h4 id="Result_title">{name}</h4>
                    <hr style={{marginTop: '5px', marginBottom: '10px'}} />
                    <p className="Result_description">comment:{comment}, date:{date.slice(0,17)}, type:{source[main_eq]}</p>
                  </div>
                </div>
              <div className="row" id="Result_interaction">
                <div className="col" style={{height: '40px'}}>
                  
                  <div className="btn-group" role="group">
                    <button className="btn btn-primary" id="Interaction_button" type="button">
                      <i className="fa fa-heart" id="Interaction_icon" style={{paddingTop: '2px'}} />
                      </button><button className="btn btn-primary" id="Interaction_button" type="button">
                        <small style={{color: 'rgb(255,214,0)', paddingRight: '5px'}}>{star}</small>
                        <i className="fa fa-star" id="Interaction_icon" /></button>
                      <a className="btn btn-primary" role="button" id="Interaction_button" href="">
                        <small style={{color: 'rgb(255,214,0)', paddingRight: '5px'}}>{comment_count}</small></a>
                      <i className="fa fa-comment" id="Interaction_icon" /></div>
                </div>
              </div>
            </div>
            </Link></div>
        </div>
  )
}
