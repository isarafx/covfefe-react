import React from 'react'

export default function CommuCard({name="Recipe card", main_eq=1, comment="test", heart=0, star=0, comment_count=0, link="/", date=3}) {
  const source = {
    1:"Hario",
    2:"Aeropress",
    3:"French Press",
    4:"Moka Pot",
    5:"Chemex",
    

  }
  return (
    <div className="col"><a href="Community_detail.html">
          </a><div className="card Recipe_card"><a href="Community_detail.html">
            </a><div className="card-body"><a href="Community_detail.html">
                <div className="row" style={{textAlign: 'center'}}>
                  <div className="col"><img id="Result_mpic" src="assets/img/Sample.png" /></div>
                </div>
                <div className="row" id="Result_main">
                  <div className="col">
                    <h4 id="Result_title">{name}</h4>
                    <hr style={{marginTop: '5px', marginBottom: '10px'}} />
                    <p className="Result_description">comment:{comment}, date:{date}, type:{source[main_eq]}</p>
                  </div>
                </div>
              </a><div className="row" id="Result_interaction"><a href="Community_detail.html">
                </a><div className="col" style={{height: '40px'}}><a href="Community_detail.html">
                  </a>
                  <div className="btn-group" role="group"><a href="">
                    <button className="btn btn-primary" id="Interaction_button" type="button">
                      <i className="fa fa-heart" id="Interaction_icon" style={{paddingTop: '2px'}} />
                      </button><button className="btn btn-primary" id="Interaction_button" type="button">
                        <small style={{color: 'rgb(255,214,0)', paddingRight: '5px'}}>{star}</small>
                        <i className="fa fa-star" id="Interaction_icon" /></button></a>
                      <a className="btn btn-primary" role="button" id="Interaction_button" href="Community_detail.html#Comment_container_div">
                        <small style={{color: 'rgb(255,214,0)', paddingRight: '5px'}}>{comment_count}</small>
                      <i className="fa fa-comment" id="Interaction_icon" /></a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}
