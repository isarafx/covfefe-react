import React from 'react'
import { useTranslation } from 'react-i18next';

import "../styles/Admin_page.css"
import "../styles/Multiple-Input-Select-Pills.css"
import "../styles/Profile_page.css"
import "../styles/Round_switch.css"
import "../styles/styles.css"
import "../styles/Ultimate-Sidebar-Menu-BS5.css"
import "../styles/Features-Clean.css"
import NavBar from '../components/navbar';
import { Link } from 'react-router-dom';
export default function Admin() {
  const { t, i18n } = useTranslation();
  const article = [
    {title:"article1", link:"/"},
    {title:"article2", link:"/"},
    {title:"article3", link:"/"},
    {title:"article4", link:"/"},
  ]
  return (
    <div>
  <NavBar />
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
                    <th className="text-center align-items-center" style={{width: '5%'}}><Link to="/article-new"><a href=""><i className="far fa-plus-square" id="square_add" /></a></Link></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Title1<br /></td>
                    <td className="text-end"><button className="btn btn-primary" id="pen_button" type="button"><i className="fa fa-pencil" /></button><button className="btn btn-primary" id="trash_button" type="button"><i className="fa fa-trash" /></button></td>
                  </tr>
                  {article.map((item)=>{
                    return(
                      <tr>
                          <td>{item.title} <br /></td>
                          <td className="text-end">
                            <Link to="/commu-"><button className="btn btn-primary" id="pen_button" type="button">
                              <i className="fa fa-pencil" /></button></Link>
                              <button className="btn btn-primary" id="trash_button" type="button">
                                <i className="fa fa-trash" />
                              </button>
                          </td>
                      </tr>
                    )
                  })}
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
                    <th className="text-center" style={{textAlign: 'right', width: '5%'}}><Link to="/brew-new"><a href=""><i className="far fa-plus-square" id="square_add" /></a></Link></th>
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
