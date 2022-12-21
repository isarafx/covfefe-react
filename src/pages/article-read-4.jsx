import React from 'react'
import { useParams } from 'react-router';

import "../styles/Coffee_Article.css"
import "../styles/Multiple-Input-Select-Pills.css"
import "../styles/Profile_page.css"
import "../styles/Round_switch.css"
import "../styles/styles.css"
import "../styles/Ultimate-Sidebar-Menu-BS5.css"
import "../styles/Features-Clean.css"
import "../styles/content-styles.css"
import BackButton from '../components/backbutton';
export default function ArticleReadFour() {
  const { id } = useParams();
  return (
<div>
  <div className="div_back"><a href="javascript:history.back()"><i className="icon ion-android-arrow-back" id="Back_icon" /></a></div>
  <div id="main_template">
    <div className="container article_container">
      <section style={{marginTop: '20px'}}>
        <article>
          <h2 style={{textAlign: 'center'}}>Moka Pot เพลิดเพลินกับกาแฟเอสเปรสโซ่ได้อย่างง่ายดาย</h2>
          <div style={{width: '100%', textAlign: 'center', marginTop: '25px', marginBottom: '25px'}}>
            <img src="assets/img/Article4_1.png" style={{maxWidth: '90%'}} /></div>
          <div className="d-flex justify-content-center" style={{width: '100%'}}><p style={{textAlign: 'justify', width: '90%', marginBottom: '30px'}}>
              <span><b>ที่มา</b><br />
                โมก้าพ็อตได้รับการพัฒนาขึ้นเมื่อปี 1933 โดยอัลฟอนโซ บิอาเล็ตติ (Alfonso Bialetti) ผู้ทำธุรกิจโรงงานอะลูมิเนียม ในประเทศอิตาลี ซึ่งเป็นประเทศเจ้าตำรับกาแฟเอสเปรสโซ่ โมก้าพ็อตถือเป็นอุปกรณ์สกัดกาแฟเอสเปรสโซ่ในครัวเรือน ที่ได้รับความนิยมมากถึงขนาดมีทุกบ้าน หลักการสกัดคือสกัดอย่างรวดเร็วด้วยการให้ความร้อนโดยตรงที่ตัวอุปกรณ์ เพื่อสร้างแรงดันไอน้ำภายใน ในการสกัดเอสเปรสโซ่<br /><br />
                <b>กาแฟที่ได้</b> วิธีนี้จะได้กาแฟที่แรงและมีความเข้มข้นใกล้เคียงกับเอสเปรสโซ่<br /><br />
                <b>เวลาที่ใช้</b> 5 - 8 นาที<br /><br />
                <b>อุณหภูมิแนะนำ</b> 99C<br /><br />
                <b>ขนาดการบดแนะน</b> Fine, Medium-fine<br /><br />
                <b>ส่วนประกอบ</b></span></p></div>
          <div style={{width: '100%', textAlign: 'center', marginTop: '25px', marginBottom: '25px'}}>
            <img src="%PUBLIC_URL%/../arimg/Article4_2.png" style={{maxWidth: '60%'}} /></div>
          <div className="d-flex justify-content-center" style={{width: '100%'}}><p style={{textAlign: 'justify', width: '90%', marginBottom: '30px'}}>
              <span>01 ฝา<br />
                02 มือจับ<br />
                มือจับของบีอาเล็ตติโมก้าพ็อต ผลิตจากพลาสติก เมื่อสัมผัสความร้อนอาจทำให้รูปทรงบิดเบี้ยวได้<br />
                03 เหยือก<br />
                เป็นจุดใส่กาแฟซึ่งสกัดจากส่วนบนของโมก้าพ็อต ประกอบด้วย<br />
                1 ที่สกัด จุดที่กาแฟถูกปล่อยออกมาด้านนอก บางเครื่องมีการติดตั้งอุปกรณ์ปรับแรงดันไว้ตรงจุดนี้ ทำให้สามารถสกัดกาแฟด้วยแรงดันที่สูงกว่าโมก้าพ็อตทั่วไปจนเกิดเครมาที่สมบูรณ์ได้<br />
                2 แผ่นฟิลเตอร์ เป็นแผ่นฟิลเตอร์ที่อยู่ใต้เหยือก ทำหน้าที่กรองกาแฟ<br />
                3 วงแหวนยาง วงแหวนยางช่วยรักษาระดับแรงดันในโมก้าพ็อต<br />
                04 ตะกร้าใส่ผงกาแฟ<br />
                ช่องสำหรับใส่ผงกาแฟ<br />
                05 หม้อต้มน้ำ<br />
                ส่วนล่างของโมก้าพ็อตเป็นจุดที่ใช้ใส่น้ำ โดยมีวาล์วแรงดัน อุปกรณ์ที่ใช้ควบคุมแรงดันในหม้อต้มไม่ให้เกินระดับที่เหมาะสม</span></p></div>
        </article>
      </section>
    </div>
  </div>
  <div style={{height: '40px'}} />
  <div className="d-flex" id="Header">
    <p id="header_paragraph">%Article Title%</p>
  </div>
  <div className="d-flex" id="Footer" />
</div>

  
  )
}
