import React from 'react'

import "../styles/Community.css"
import "../styles/Multiple-Input-Select-Pills.css"
import "../styles/Profile_page.css"
import "../styles/Round_switch.css"
import "../styles/styles.css"
import "../styles/Ultimate-Sidebar-Menu-BS5.css"
import "../styles/Features-Clean.css"

export default function CommuShop() {
  return (
    <div>
  <div id="Navbar"><a className="btn btn-primary btn-customized open-menu" role="button" style={{background: 'rgba(243,91,63,0)', fontSize: '16px', paddingLeft: '15px', paddingRight: '10px'}}><i className="fa fa-navicon" style={{fontSize: '22px', color: 'rgba(107,62,30,0.85)'}} />&nbsp;</a>
    <div className="sidebar">
      <div className="dismiss"><i className="fa fa-caret-left" /></div>
      <div className="brand"><a className="navbar-brand">Coffee Cup</a></div>
      <nav className="navbar navbar-dark navbar-expand">
        <div className="container-fluid">
          <ul className="navbar-nav flex-column me-auto">
            <li className="nav-item"><a className="nav-link" href="Article_main.html" style={{fontSize: '19px', marginBottom: '5px'}}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" style={{color: 'rgba(255,255,255,0.55)', fontSize: '24px'}}>
                  <path d="M12 6.25278V19.2528M12 6.25278C10.8321 5.47686 9.24649 5 7.5 5C5.75351 5 4.16789 5.47686 3 6.25278V19.2528C4.16789 18.4769 5.75351 18 7.5 18C9.24649 18 10.8321 18.4769 12 19.2528M12 6.25278C13.1679 5.47686 14.7535 5 16.5 5C18.2465 5 19.8321 5.47686 21 6.25278V19.2528C19.8321 18.4769 18.2465 18 16.5 18C14.7535 18 13.1679 18.4769 12 19.2528" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                </svg>&nbsp;Coffee Article<br /></a></li>
            <li className="nav-item"><a className="nav-link" href="Brewing_Main.html" style={{fontSize: '19px', marginBottom: '5px'}}><i className="fas fa-coffee" />&nbsp;Brewing Guide</a></li>
            <li className="nav-item"><a className="nav-link" href="Community_main.html" style={{fontSize: '19px', marginBottom: '5px'}}><i className="fas fa-globe" />&nbsp; Community</a></li>
            <li className="nav-item"><a className="nav-link" href="Profile.html" style={{fontSize: '19px', marginBottom: '5px'}}><i className="fas fa-user-cog" />&nbsp;Profile</a></li>
            <li className="nav-item"><a className="nav-link" href="Admin_site.html" style={{fontSize: '19px', marginBottom: '5px'}}><i className="fas fa-user-tie" />&nbsp; Admin</a></li>
          </ul>
        </div>
      </nav>
    </div>
    <div className="overlay" />
  </div>
  <div id="main_template">
    <div className="container" id="search_contrainer">
      <div className="input-group"><span className="input-group-text" id="search_filter2">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span><input className="form-control" type="search" id="search_input2" /><button className="btn btn-primary" data-bss-hover-animate="pulse" id="search_button2" type="button"><i className="fas fa-search" id="Tool_icon" style={{color: '#ffffff'}} /></button></div>
      <div className="d-flex justify-content-center Page_Head" style={{marginBottom: '20px'}}>
        <p id="Page_Head_text">ค้นหาผลิตภัณฑ์กาแฟ</p>
      </div>
    </div>
    <div className="container" id="shop_container">
      <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-2 row-cols-xxl-2" style={{marginBottom: '10px'}}>
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
        <div className="col">
          <div className="card Recipe_card">
            <div className="card-body">
              <div className="row" style={{textAlign: 'center'}}>
                <div className="col"><img id="Result_spic" src="assets/img/Shop_Dummy.png" /></div>
              </div>
              <div className="row" id="Result_smain">
                <div className="col">
                  <h4 id="Result_shead">Item name</h4>
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
        <div className="col">
          <div className="card Recipe_card">
            <div className="card-body">
              <div className="row" style={{textAlign: 'center'}}>
                <div className="col"><img id="Result_spic" src="assets/img/Shop_Dummy.png" /></div>
              </div>
              <div className="row" id="Result_smain">
                <div className="col">
                  <h4 id="Result_shead">Item name</h4>
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
        <div className="col">
          <div className="card Recipe_card">
            <div className="card-body">
              <div className="row" style={{textAlign: 'center'}}>
                <div className="col"><img id="Result_spic" src="assets/img/Shop_Dummy.png" /></div>
              </div>
              <div className="row" id="Result_smain">
                <div className="col">
                  <h4 id="Result_shead">Item name</h4>
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
        <div className="col">
          <div className="card Recipe_card">
            <div className="card-body">
              <div className="row" style={{textAlign: 'center'}}>
                <div className="col"><img id="Result_spic" src="assets/img/Shop_Dummy.png" /></div>
              </div>
              <div className="row" id="Result_smain">
                <div className="col">
                  <h4 id="Result_shead">Item name</h4>
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
        <div className="col">
          <div className="card Recipe_card">
            <div className="card-body">
              <div className="row" style={{textAlign: 'center'}}>
                <div className="col"><img id="Result_spic" src="assets/img/Shop_Dummy.png" /></div>
              </div>
              <div className="row" id="Result_smain">
                <div className="col">
                  <h4 id="Result_shead">Item name</h4>
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
      </div>
    </div>
  </div>
  <div className="d-flex" id="Header">
    <p id="header_paragraph">ชุมชน</p>
  </div>
  <div className="d-flex" id="Footer"><a className="btn btn-primary" role="button" data-bss-hover-animate="pulse" id="findex_button" href="Community_main.html"><img src="assets/img/Mug%20icon.png" style={{width: '35px', marginTop: '-8px'}} /></a><button className="btn btn-primary disabled d-flex justify-content-center align-items-center" data-bss-hover-animate="pulse" id="fshop_button" type="button" disabled><img src="assets/img/Shop%20Icon.png" style={{width: '34px'}} /></button></div>
</div>


  )
}
