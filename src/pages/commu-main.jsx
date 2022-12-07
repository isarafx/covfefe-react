import React from 'react'

import "../styles/Community.css"
import "../styles/Multiple-Input-Select-Pills.css"
import "../styles/Profile_page.css"
import "../styles/Round_switch.css"
import "../styles/styles.css"
import "../styles/Ultimate-Sidebar-Menu-BS5.css"
import "../styles/Features-Clean.css"

export default function CommuMain() {
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
      <div className="input-group">
        <div className="dropdown"><button className="rounded-0 rounded-start btn btn-primary dropdown-toggle" aria-expanded="false" data-bs-toggle="dropdown" data-bss-hover-animate="pulse" id="search_filter2" type="button"><i className="fas fa-filter" style={{fontSize: '20px', fontWeight: 'bold'}} /></button>
          <div className="dropdown-menu"><a className="dropdown-item" href="#">เรียงโดย-ไม่มี</a><a className="dropdown-item" href="#">เรียงโดย-ตามนิยมมากสุด</a><a className="dropdown-item" href="#">เรียงโดย-ใหม่ล่าสุด</a></div>
        </div><input className="form-control" type="search" id="search_input2" /><button className="btn btn-primary" data-bss-hover-animate="pulse" id="search_button2" type="button"><i className="fas fa-search" id="Tool_icon" style={{color: '#ffffff'}} /></button>
      </div>
      <div className="d-flex d-sm-flex d-md-flex d-lg-flex d-xl-flex d-xxl-flex justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-center justify-content-xl-center justify-content-xxl-center Page_Head">
        <p id="Page_Head_text">ค้นหาไอเดียใหม่ๆจากชุมชน</p>
      </div>
    </div>
    <div className="container d-flex justify-content-start align-items-center justify-content-sm-center" id="method_bar">
      <div className="d-flex justify-content-center align-items-center" id="Method_selectorbox">
        <div className="form-check d-flex align-items-center method_box"><input className="form-check-input" type="radio" id="Radio_button" name="coffee" /><label className="form-check-label" htmlFor="Radio_button"><img className="Method_pic" src="assets/img/ALL_ICO.png" /></label></div>
      </div>
      <div className="d-flex justify-content-center align-items-center" id="Method_selectorbox">
        <div className="form-check d-flex align-items-center method_box"><input className="form-check-input" type="radio" id="Radio_button" name="coffee" /><label className="form-check-label" htmlFor="Radio_button"><img className="Method_pic" src="assets/img/Hario_ICO.png" /></label></div>
      </div>
      <div className="d-flex justify-content-center align-items-center" id="Method_selectorbox">
        <div className="form-check d-flex align-items-center method_box"><input className="form-check-input" type="radio" id="Radio_button" name="coffee" /><label className="form-check-label" htmlFor="Radio_button"><img className="Method_pic" src="assets/img/Aeropress_ICO.png" /></label></div>
      </div>
      <div className="d-flex justify-content-center align-items-center" id="Method_selectorbox">
        <div className="form-check d-flex align-items-center method_box"><input className="form-check-input" type="radio" id="Radio_button" name="coffee" /><label className="form-check-label" htmlFor="Radio_button"><img className="Method_pic" src="assets/img/Moka_ICO.png" /></label></div>
      </div>
      <div className="d-flex justify-content-center align-items-center" id="Method_selectorbox">
        <div className="form-check d-flex align-items-center method_box"><input className="form-check-input" type="radio" id="Radio_button" name="coffee" /><label className="form-check-label" htmlFor="Radio_button"><img className="Method_pic" src="assets/img/Frenchpress_ICO.png" /></label></div>
      </div>
      <div className="d-flex justify-content-center align-items-center" id="Method_selectorbox">
        <div className="form-check d-flex align-items-center method_box"><input className="form-check-input" type="radio" id="Radio_button" name="coffee" /><label className="form-check-label" htmlFor="Radio_button"><img className="Method_pic" src="assets/img/Chemex_ICO.png" /></label></div>
      </div>
    </div>
    <div className="container" id="results_container">
      <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-2 row-cols-xxl-2" style={{marginBottom: '10px'}}>
        <div className="col"><a href="Community_detail.html">
          </a><div className="card Recipe_card"><a href="Community_detail.html">
            </a><div className="card-body"><a href="Community_detail.html">
                <div className="row" style={{textAlign: 'center'}}>
                  <div className="col"><img id="Result_mpic" src="assets/img/Sample.png" /></div>
                </div>
                <div className="row" id="Result_main">
                  <div className="col">
                    <h4 id="Result_title">Recipe name<br /></h4>
                    <hr style={{marginTop: '5px', marginBottom: '10px'}} />
                    <p className="Result_description">===comment===<br /></p>
                  </div>
                </div>
              </a><div className="row" id="Result_interaction"><a href="Community_detail.html">
                </a><div className="col" style={{height: '40px'}}><a href="Community_detail.html">
                  </a><div className="btn-group" role="group"><a href="Community_detail.html"><button className="btn btn-primary" id="Interaction_button" type="button"><i className="fa fa-heart" id="Interaction_icon" style={{paddingTop: '2px'}} /></button><button className="btn btn-primary" id="Interaction_button" type="button"><small style={{color: 'rgb(255,214,0)', paddingRight: '5px'}}>0</small><i className="fa fa-star" id="Interaction_icon" /></button></a><a className="btn btn-primary" role="button" id="Interaction_button" href="Community_detail.html#Comment_container_div"><small style={{color: 'rgb(255,214,0)', paddingRight: '5px'}}>0</small><i className="fa fa-comment" id="Interaction_icon" /></a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col"><a href="Community_detail.html">
          </a><div className="card Recipe_card"><a href="Community_detail.html">
            </a><div className="card-body"><a href="Community_detail.html">
                <div className="row" style={{textAlign: 'center'}}>
                  <div className="col"><img id="Result_mpic" src="assets/img/Sample.png" /></div>
                </div>
                <div className="row" id="Result_main">
                  <div className="col">
                    <h4 id="Result_title">Recipe name</h4>
                    <hr style={{marginTop: '5px', marginBottom: '10px'}} />
                    <p className="Result_description">===comment===</p>
                  </div>
                </div>
              </a><div className="row" id="Result_interaction"><a href="Community_detail.html">
                </a><div className="col" style={{height: '40px'}}><a href="Community_detail.html">
                  </a><div className="btn-group" role="group"><a href="Community_detail.html"><button className="btn btn-primary" id="Interaction_button" type="button"><i className="fa fa-heart" id="Interaction_like_checked" style={{paddingTop: '2px'}} /></button><button className="btn btn-primary" id="Interaction_button" type="button"><small style={{color: 'rgb(255,214,0)', paddingRight: '5px'}}>0</small><i className="fa fa-star" id="Interaction_star_checked" /></button></a><a className="btn btn-primary" role="button" id="Interaction_button" href="Community_detail-1.html#Comment_container_div"><small style={{color: 'rgb(255,214,0)', paddingRight: '5px'}}>0</small><i className="fa fa-comment" id="Interaction_icon" /></a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col"><a href="Community_detail.html">
          </a><div className="card Recipe_card"><a href="Community_detail.html">
            </a><div className="card-body"><a href="Community_detail.html">
                <div className="row" style={{textAlign: 'center'}}>
                  <div className="col"><img id="Result_mpic" src="assets/img/Sample.png" /></div>
                </div>
                <div className="row" id="Result_main">
                  <div className="col">
                    <h4 id="Result_title">Recipe name</h4>
                    <hr style={{marginTop: '5px', marginBottom: '10px'}} />
                    <p className="Result_description">===comment===</p>
                  </div>
                </div>
              </a><div className="row" id="Result_interaction"><a href="Community_detail.html">
                </a><div className="col" style={{height: '40px'}}><a href="Community_detail.html">
                  </a><div className="btn-group" role="group"><a href="Community_detail.html"><button className="btn btn-primary" id="Interaction_button" type="button"><i className="fa fa-heart" id="Interaction_icon" style={{paddingTop: '2px'}} /></button><button className="btn btn-primary" id="Interaction_button" type="button"><small style={{color: 'rgb(255,214,0)', paddingRight: '5px'}}>0</small><i className="fa fa-star" id="Interaction_icon" /></button></a><a className="btn btn-primary" role="button" id="Interaction_button" href="Community_detail.html#Comment_container_div"><small style={{color: 'rgb(255,214,0)', paddingRight: '5px'}}>0</small><i className="fa fa-comment" id="Interaction_icon" /></a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col"><a href="Community_detail.html">
          </a><div className="card Recipe_card"><a href="Community_detail.html">
            </a><div className="card-body"><a href="Community_detail.html">
                <div className="row" style={{textAlign: 'center'}}>
                  <div className="col"><img id="Result_mpic" src="assets/img/Sample.png" /></div>
                </div>
                <div className="row" id="Result_main">
                  <div className="col">
                    <h4 id="Result_title">Recipe name</h4>
                    <hr style={{marginTop: '5px', marginBottom: '10px'}} />
                    <p className="Result_description">===comment===</p>
                  </div>
                </div>
              </a><div className="row" id="Result_interaction"><a href="Community_detail.html">
                </a><div className="col" style={{height: '40px'}}><a href="Community_detail.html">
                  </a><div className="btn-group" role="group"><a href="Community_detail.html"><button className="btn btn-primary" id="Interaction_button" type="button"><i className="fa fa-heart" id="Interaction_icon" style={{paddingTop: '2px'}} /></button><button className="btn btn-primary" id="Interaction_button" type="button"><small style={{color: 'rgb(255,214,0)', paddingRight: '5px'}}>0</small><i className="fa fa-star" id="Interaction_icon" /></button></a><a className="btn btn-primary" role="button" id="Interaction_button" href="Community_detail.html#Comment_container_div"><small style={{color: 'rgb(255,214,0)', paddingRight: '5px'}}>0</small><i className="fa fa-comment" id="Interaction_icon" /></a></div>
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
  <div className="d-flex" id="Footer"><button className="btn btn-primary disabled" data-bss-hover-animate="pulse" id="index_button" type="button" disabled><img src="assets/img/Mug%20icon.png" style={{width: '35px', marginTop: '-8px'}} /></button><a className="btn btn-primary d-flex justify-content-center align-items-center" role="button" data-bss-hover-animate="pulse" id="shop_button" href="Community_shop.html"><img src="assets/img/Shop%20Icon.png" style={{width: '34px'}} /></a></div>
</div>


  )
}
