import React from 'react'

export default function CommuShopCard({name="", price="", picture="", star=""}) {
  return (
    <div className="col">
          <div className="card Recipe_card">
            <div className="card-body">
              <div className="row" style={{textAlign: 'center'}}>
                <div className="col"><img id="Result_spic" src="assets/img/Shop_Dummy.png" /></div>
              </div>
              <div className="row" id="Result_smain">
                <div className="col">
                  <h4 id="Result_shead">Item name<br /></h4>
                  <hr style={{marginTop: '5px', marginBottom: '5px'}} /><span className="pricetag">฿00.00</span>
                  <hr style={{marginTop: '5px', marginBottom: '10px'}} />
                </div>
              </div>
              <div className="row" id="Result_interaction">
                <div className="col">
                  <div><i className="fas fa-star star_check" /><i className="fas fa-star star_check" /><i className="fas fa-star star_check" /><i className="fas fa-star star_check" /><i className="fas fa-star star_uncheck" /><span id="Result_rating">4.2</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>


  )
}
