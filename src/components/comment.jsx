import React from 'react'

export default function Comment({name="Anonymous", message="censored by chinese government", created_Date=""}) {
  return (
    <div id="Comment_display_box">
                <div className="row row-cols-2">
                  <div className="col d-sm-flex justify-content-xxl-start" style={{maxWidth: '65px'}}><img className="creator_avatar_icon" src="assets/img/AvatarIcon.jpg" style={{borderColor: '#955c18'}} /></div>
                  <div className="col" style={{width: '77%'}}>
                    <p id="Comment_display_name" style={{fontWeight: 'bold', fontSize: '15px', marginBottom: '7px', color: '#955c18'}}>{name}</p>
                    <p id="Comment_display_comment">{message}</p>
                </div>
            </div>
        <hr style={{marginTop: '-10px'}} />
    </div>
  )
}
