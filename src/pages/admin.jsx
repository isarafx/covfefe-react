import React from 'react'
import { useTranslation } from 'react-i18next';

import "../styles/Admin_page.css"
import "../styles/Multiple-Input-Select-Pills.css"
import "../styles/Profile_page.css"
import "../styles/Round_switch.css"
import "../styles/styles.css"
import "../styles/Ultimate-Sidebar-Menu-BS5.css"
import "../styles/Features-Clean.css"

export default function Admin() {
  const { t, i18n } = useTranslation();
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
                </svg>&nbsp;Coffee Article</a></li>
            <li className="nav-item"><a className="nav-link" href="Brewing_Main.html" style={{fontSize: '19px', marginBottom: '5px'}}><i className="fas fa-coffee" />&nbsp;Brewing Guide</a></li>
            <li className="nav-item"><a className="nav-link" href="Community_main.html" style={{fontSize: '19px', marginBottom: '5px'}}><i className="fas fa-globe" />&nbsp; Community</a></li>
            <li className="nav-item"><a className="nav-link" href="Profile.html" style={{fontSize: '19px', marginBottom: '5px'}}><i className="fas fa-user-cog" />&nbsp;Profile</a></li>
            <li className="nav-item"><a className="nav-link" style={{fontSize: '19px', marginBottom: '5px'}} href="Admin_site.html"><i className="fas fa-user-tie" />&nbsp; Admin</a></li>
          </ul>
        </div>
      </nav>
    </div>
    <div className="overlay" />
  </div>
  <div className="container Contentm_container">
    <div className="row justify-content-center">
      <div className="col-md-6 Contentm_column">
        <div className="d-grid"><a className="btn btn-primary d-md-none d-lg-none d-xl-none d-xxl-none" data-bs-toggle="collapse" aria-expanded="true" aria-controls="collapse-1" href="#collapse-1" role="button" id="Collapse_button1">Show/Hide Content</a>
          <div className="collapse show" id="collapse-1">
            <div className="table-responsive">
              <table className="table table-fixed">
                <thead>
                  <tr style={{background: '#ffecdb', borderWidth: '2px', borderColor: 'rgb(255,176,132)'}}>
                    <th style={{color: 'rgb(136,88,49)', width: '95%', borderRightWidth: '1px', borderRightColor: 'rgb(160,80,8)'}}>{t('test')}</th>
                    <th className="text-center align-items-center" style={{width: '5%'}}><a href="#"><i className="far fa-plus-square" id="square_add" /></a></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Title1<br /></td>
                    <td className="text-end"><button className="btn btn-primary" id="pen_button" type="button"><i className="fa fa-pencil" /></button><button className="btn btn-primary" id="trash_button" type="button"><i className="fa fa-trash" /></button></td>
                  </tr>
                  <tr>
                    <td>Title2<br /></td>
                    <td className="text-end"><button className="btn btn-primary" id="pen_button" type="button"><i className="fa fa-pencil" /></button><button className="btn btn-primary" id="trash_button" type="button"><i className="fa fa-trash" /></button></td>
                  </tr>
                  <tr>
                    <td>Title3<br /></td>
                    <td className="text-end"><button className="btn btn-primary" id="pen_button" type="button"><i className="fa fa-pencil" /></button><button className="btn btn-primary" id="trash_button" type="button"><i className="fa fa-trash" /></button></td>
                  </tr>
                  <tr>
                    <td>Title4<br /></td>
                    <td className="text-end"><button className="btn btn-primary" id="pen_button" type="button"><i className="fa fa-pencil" /></button><button className="btn btn-primary" id="trash_button" type="button"><i className="fa fa-trash" /></button></td>
                  </tr>
                  <tr>
                    <td>Title5<br /></td>
                    <td className="text-end"><button className="btn btn-primary" id="pen_button" type="button"><i className="fa fa-pencil" /></button><button className="btn btn-primary" id="trash_button" type="button"><i className="fa fa-trash" /></button></td>
                  </tr>
                  <tr>
                    <td>Title6<br /></td>
                    <td className="text-end"><button className="btn btn-primary" id="pen_button" type="button"><i className="fa fa-pencil" /></button><button className="btn btn-primary" id="trash_button" type="button"><i className="fa fa-trash" /></button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 Contentm_column">
        <div className="d-grid"><a className="btn btn-primary d-md-none d-lg-none d-xl-none d-xxl-none" data-bs-toggle="collapse" aria-expanded="true" aria-controls="collapse-2" href="#collapse-2" role="button" id="Collapse_button2">Show/Hide Content</a>
          <div className="collapse show" id="collapse-2">
            <div className="table-responsive table-fixed">
              <table className="table">
                <thead>
                  <tr style={{background: '#ffd2d2', borderWidth: '2px', borderColor: 'rgb(255,102,185)'}}>
                    <th style={{color: 'rgb(127,80,43)', width: '70%', borderRightWidth: '1px', borderRightColor: 'rgb(117,0,63)'}}>การจัดการสูตรการชง</th>
                    <th style={{color: 'rgb(127,80,43)', width: '25%', borderRightWidth: '1px', borderRightColor: 'rgb(58,0,31)', fontSize: '16px', textAlign: 'center'}}>วิธีการ</th>
                    <th className="text-center" style={{textAlign: 'right', width: '5%'}}><a href="#"><i className="far fa-plus-square" id="square_add" /></a></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Recipe Name 1</td>
                    <td>Hario V60</td>
                    <td className="text-end"><button className="btn btn-primary" id="pen_button" type="button"><i className="fa fa-pencil" /></button><button className="btn btn-primary" id="trash_button" type="button"><i className="fa fa-trash" /></button></td>
                  </tr>
                  <tr>
                    <td>Recipe Name 2</td>
                    <td>French Press</td>
                    <td className="text-end"><button className="btn btn-primary" id="pen_button" type="button"><i className="fa fa-pencil" /></button><button className="btn btn-primary" id="trash_button" type="button"><i className="fa fa-trash" /></button></td>
                  </tr>
                  <tr>
                    <td>Recipe Name 3</td>
                    <td>French Press<br /></td>
                    <td className="text-end"><button className="btn btn-primary" id="pen_button" type="button"><i className="fa fa-pencil" /></button><button className="btn btn-primary" id="trash_button" type="button"><i className="fa fa-trash" /></button></td>
                  </tr>
                  <tr>
                    <td>Recipe Name 4</td>
                    <td>AeroPress</td>
                    <td className="text-end"><button className="btn btn-primary" id="pen_button" type="button"><i className="fa fa-pencil" /></button><button className="btn btn-primary" id="trash_button" type="button"><i className="fa fa-trash" /></button></td>
                  </tr>
                  <tr>
                    <td>Recipe Name 5</td>
                    <td>Hario V60</td>
                    <td className="text-end"><button className="btn btn-primary" id="pen_button" type="button"><i className="fa fa-pencil" /></button><button className="btn btn-primary" id="trash_button" type="button"><i className="fa fa-trash" /></button></td>
                  </tr>
                  <tr>
                    <td>Recipe Name 6</td>
                    <td>Hario V60</td>
                    <td className="text-end"><button className="btn btn-primary" id="pen_button" type="button"><i className="fa fa-pencil" /></button><button className="btn btn-primary" id="trash_button" type="button"><i className="fa fa-trash" /></button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container d-flex justify-content-center" style={{marginTop: '22px'}}>
    <div style={{marginBottom: '121px'}}><button className="btn btn-primary" type="button">เพิ่มบัญชีร้านค้า via Lazada</button></div>
  </div>
  <div className="d-flex" id="Header">
    <p id="header_paragraph">Admin Site</p>
  </div>
  <div className="d-flex" id="Footer" />
</div>
  )
}
