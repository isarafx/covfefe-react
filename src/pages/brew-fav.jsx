import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/Multiple-Input-Select-Pills.css"
import "../styles/Profile_page.css"
import "../styles/Round_switch.css"
import "../styles/styles.css"
import "../styles/Ultimate-Sidebar-Menu-BS5.css"
import "../styles/Brewing_Guide.css"
import "../styles/Brewing_Guide2.css"
import "../styles/Brewing_Guide3.css"
import "../styles/Brewing_Guide4.css"
import "../styles/Features-Clean.css"
import NavBar from '../components/navbar'

import { useTranslation } from 'react-i18next';
import { useState } from 'react'

export default function BrewFav() {
  const { t, i18n } = useTranslation();
  const [data, setData] = useState([
    {"brewer":"Hario","name":"Basic V60","coffee_weight":"25","water":375,"ratio":"15","equipment":[{"id":"Tools_10Hario","pic":"Tools_10.png","detail":"Hario"},{"id":"Tools_8","pic":"Tools_8.png","detail":""},{"id":"Tools_2","pic":"Tools_2.png","detail":""},{"id":"Tools_7","pic":"Tools_7.png","detail":""}],"note":"สูตรการชง V60 เบื้องต้น ถ้ารสชาติที่ได้ไม่ตรงความต้องการหรือระยะเวลาการชงไม่ตรง คุณสามารถปรับขนาดการบดใหม่แล้วลองอีกครั้ง","public":false,"process":[{"id":"Rinse Filter-1","stepname":"Rinse Filter","duration":"10","comment":"เพื่อล้างสิ่งสกปรกและอุ่นภาชนะให้ร้อนหลังจากนั้นเทน้ำทิ้ง"},{"coffee":"25","detail":"Add 25 g of coffee","id":"Add Coffee-2","stepname":"Add Coffee","duration":"5","comment":""},{"water":"75","detail":"Pour 75 ml water","id":"Bloom-3","stepname":"Bloom","duration":"30","comment":""},{"water":"300","detail":"Pour 300 ml water","id":"Pour Water-4","stepname":"Pour Water","duration":"60","comment":"ค่อยๆ เทน้ำร้อนวนให้ทั่วกาแฟอย่างต่อเนื่อง"},{"id":"Wait-5","stepname":"Wait","duration":"60","comment":""},{"name":"นำดริปเปอร์ออก พร้อมเสริฟ","id":"Custom-6","stepname":"Custom","duration":"5","comment":""}],"grind_size":"Medium Fine","temp":"94","roast_level":"Light"},
    {"brewer":"Hario","name":"Scott Rao V60","coffee_weight":"22","water":352,"ratio":"16","equipment":[{"id":"Tools_2","pic":"Tools_2.png","detail":""},{"id":"Tools_8","pic":"Tools_8.png","detail":""},{"id":"Tools_7","pic":"Tools_7.png","detail":""},{"id":"Tools_11ช้อนคน","pic":"Tools_11.png","detail":"ช้อนคน"}],"note":"ถ้ารสชาติที่ได้ไม่ตรงความต้องการหรือระยะเวลาการชงไม่ตรง คุณสามารถปรับขนาดการบดใหม่แล้วลองอีกครั้ง","public":false,"process":[{"water":"66","detail":"Pour 66 ml water","id":"Pour Water-1","stepname":"Pour Water","duration":"10","comment":""},{"id":"Stir-2","stepname":"Stir","duration":"5","comment":"ใช้ช้อนคนกาแฟประมาณ 3 ครั้ง"},{"id":"Wait-3","stepname":"Wait","duration":"30","comment":"รอให้กาแฟบลูม"},{"water":"286","detail":"Pour 286 ml water","id":"Pour Water-4","stepname":"Pour Water","duration":"60","comment":"ค่อยๆ เทน้ำร้อนวนให้ทั่วกาแฟอย่างต่อเนื่อง"},{"id":"Swirl-5","stepname":"Swirl","duration":"5","comment":"จับดริปเปอร์แกว่งหรือหมุนเบาๆ"},{"id":"Wait-6","stepname":"Wait","duration":"70","comment":"รอให้การชงเสร็จสิ้น"},{"name":"นำดริปเปอร์ออก พร้อมเส","id":"Custom-7","stepname":"Custom","duration":"5","comment":""}],"grind_size":"Medium Fine","temp":"94","roast_level":"Light"},
    {"brewer":"Hario","name":"Tetsu Kasuya 4:6","coffee_weight":"20","water":300,"ratio":"15","equipment":[{"id":"Tools_10Hario","pic":"Tools_10.png","detail":"Hario"},{"id":"Tools_8","pic":"Tools_8.png","detail":""},{"id":"Tools_7","pic":"Tools_7.png","detail":""},{"id":"Tools_2","pic":"Tools_2.png","detail":""}],"note":"ถ้ารสชาติที่ได้ไม่ตรงความต้องการหรือระยะเวลาการชงไม่ตรง คุณสามารถปรับขนาดการบดใหม่แล้วลองอีกครั้ง","public":false,"process":[{"water":"50","detail":"Pour 50 ml water","id":"Bloom-1","stepname":"Bloom","duration":"45","comment":"รอให้กาแฟบลูม"},{"water":"70","detail":"Pour 70 ml water","id":"Pour Water-2","stepname":"Pour Water","duration":"7","comment":""},{"id":"Wait-3","stepname":"Wait","duration":"38","comment":""},{"water":"60","detail":"Pour 60 ml water","id":"Pour Water-4","stepname":"Pour Water","duration":"5","comment":""},{"id":"Wait-5","stepname":"Wait","duration":"35","comment":""},{"water":"60","detail":"Pour 60 ml water","id":"Pour Water-6","stepname":"Pour Water","duration":"5","comment":""},{"id":"Wait-7","stepname":"Wait","duration":"30","comment":""},{"water":"60","detail":"Pour 60 ml water","id":"Pour Water-8","stepname":"Pour Water","duration":"5","comment":""},{"id":"Wait-9","stepname":"Wait","duration":"25","comment":""},{"name":"นำดริปเปอร์ออก พร้อมเสริฟ","id":"Custom-10","stepname":"Custom","duration":"5","comment":""}],"grind_size":"Coarse","temp":"94","roast_level":"Light"},
    {"brewer":"Moka","name":"Basic Moka Pot","coffee_weight":"30","water":240,"ratio":"8","equipment":[{"id":"Tools_4","pic":"Tools_4.png","detail":""}],"note":"สูตรการชง Moka เบื้องต้น (Moka Pot ขนาด 6 Cup)","public":false,"process":[{"coffee":"30","detail":"Add 30 g of coffee","id":"Add Coffee-1","stepname":"Add Coffee","duration":"10","comment":"นำผงเมล็ดกาแฟที่ได้มาใส่ลงไปในกรวยใส่ผงกาแฟจนเต็ม จากนั้นเกลี่ยให้ผิวหน้าของผงกาแฟเรียบ"},{"water":"240","detail":"Pour 240 ml water","id":"Pour Water-2","stepname":"Pour Water","duration":"30","comment":"เติมน้ำเปล่าลงไปในส่วนล่างล่างสุดของหม้อ โดยเติมน้ำเปล่าให้มีปริมาณไม่เกินตัวเซฟตี้วาล์ว"},{"id":"Brew-3","stepname":"Brew","duration":"360","comment":"ประกอบตัวหม้อ Moka Pot แล้วนำไปตั้งบนเตาไฟโดยใช้ไฟปานกลางในการต้ม รอจนกว่าน้ำกาแฟก็จะเริ่มไหลออกมาจากท่อส่งกาแฟ"},{"name":"Finish","id":"Custom-4","stepname":"Custom","duration":"5","comment":""}],"grind_size":"Fine","temp":"99","roast_level":"Medium"},
    {"brewer":"Moka","name":"Iced latte","coffee_weight":"30","water":240,"ratio":"8","equipment":[{"id":"Tools_4","pic":"Tools_4.png","detail":""},{"id":"Tools_11น้ำแข็ง","pic":"Tools_11.png","detail":"น้ำแข็ง"},{"id":"Tools_11นมจืด","pic":"Tools_11.png","detail":"นมจืด"}],"note":"สูตรการทำลาเต้เย็น (Moka Pot ขนาด 6 Cup)","public":false,"process":[{"coffee":"30","detail":"Add 30 g of coffee","id":"Add Coffee-1","stepname":"Add Coffee","duration":"10","comment":"นำผงเมล็ดกาแฟที่ได้มาใส่ลงไปในกรวยใส่ผงกาแฟจนเต็ม จากนั้นเกลี่ยให้ผิวหน้าของผงกาแฟเรียบ"},{"water":"240","detail":"Pour 240 ml water","id":"Pour Water-2","stepname":"Pour Water","duration":"30","comment":"เติมน้ำเปล่าลงไปในส่วนล่างล่างสุดของหม้อ โดยเติมน้ำเปล่าให้มีปริมาณไม่เกินตัวเซฟตี้วาล์ว"},{"id":"Brew-3","stepname":"Brew","duration":"360","comment":"ประกอบตัวหม้อ Moka Pot แล้วนำไปตั้งบนเตาไฟโดยใช้ไฟปานกลางในการต้ม รอจนกว่าน้ำกาแฟก็จะเริ่มไหลออกมาจากท่อส่งกาแฟ"},{"name":"เตรียมนมสด+น้ำแข็งใส่แก้ว","id":"Custom-4","stepname":"Custom","duration":"10","comment":""},{"name":"เทกาแฟ","id":"Custom-5","stepname":"Custom","duration":"10","comment":"เทน้ำกาแฟจากหม้อไปที่แก้วกาแฟ"},{"name":"เสร็จสิ้น","id":"Custom-6","stepname":"Custom","duration":"5","comment":""}],"grind_size":"Fine","temp":"99","roast_level":"Medium"},
    {"brewer":"Aeropress","name":"Basic AeroPress","coffee_weight":"15","water":240,"ratio":"16","equipment":[{"id":"Tools_7","pic":"Tools_7.png","detail":""},{"id":"Tools_8","pic":"Tools_8.png","detail":""},{"id":"Tools_11ถ้วยกาแฟ","pic":"Tools_11.png","detail":"ถ้วยกาแฟ"}],"note":"สูตรการชง AeroPress แบบดั่งเดิมเบื้องต้น ถ้ารสชาติที่ได้ไม่ตรงความต้องการหรือระยะเวลาการชงไม่ตรง คุณสามารถปรับขนาดการบดใหม่แล้วลองอีกครั้ง","public":false,"process":[{"id":"Put the Lid on-1","stepname":"Put the Lid on","duration":"5","comment":"ใส่แผ่นกรองลงในฝาครอบและประกอบกับ AeroPress"},{"coffee":"15","detail":"Add 15 g of coffee","id":"Add Coffee-2","stepname":"Add Coffee","duration":"5","comment":""},{"water":"30","detail":"Pour 30 ml water","id":"Pour Water-3","stepname":"Pour Water","duration":"10","comment":""},{"id":"Stir-4","stepname":"Stir","duration":"5","comment":"คนเพื่อให้แน่ใจว่ากาแฟทั้งหมดแช่อย่างทั่วถึง"},{"id":"Wait-5","stepname":"Wait","duration":"15","comment":"รอให้กาแฟบลูม"},{"water":"210","detail":"Pour 210 ml water","id":"Pour Water-6","stepname":"Pour Water","duration":"30","comment":"ค่อยๆ เทน้ำร้อนวนให้ทั่วอย่างต่อเนื่อง"},{"id":"Place Plunger-7","stepname":"Place Plunger","duration":"5","comment":"ประกอบ Plunger กับตัว Aeropress"},{"id":"Wait-8","stepname":"Wait","duration":"30","comment":"รอกาแฟสกัด"},{"id":"Press-9","stepname":"Press","duration":"20","comment":"ค่อยๆกด Plunger ลงอย่างช้าๆ"}],"grind_size":"Fine","temp":"90","roast_level":"Light"},
    {"brewer":"Aeropress","name":"Basic Inverted AeroPress","coffee_weight":"15","water":240,"ratio":"16","equipment":[{"id":"Tools_5Aeropress","pic":"Tools_5.png","detail":"Aeropress"},{"id":"Tools_7","pic":"Tools_7.png","detail":""},{"id":"Tools_8","pic":"Tools_8.png","detail":""},{"id":"Tools_11ถ้วยกาแฟ","pic":"Tools_11.png","detail":"ถ้วยกาแฟ"}],"note":"สูตรการชง AeroPress แบบกลับด้าน (Inverted) เบื้องต้น ถ้ารสชาติที่ได้ไม่ตรงความต้องการหรือระยะเวลาการชงไม่ตรง คุณสามารถปรับขนาดการบดใหม่แล้วลองอีกครั้ง","public":false,"process":[{"id":"Place Plunger-1","stepname":"Place Plunger","duration":"5","comment":"ใส่ Plunger แล้วหงายกระบอกขึ้นข้างบน"},{"coffee":"15","detail":"Add 15 g of coffee","id":"Add Coffee-2","stepname":"Add Coffee","duration":"5","comment":""},{"water":"30","detail":"Pour 30 ml water","id":"Pour Water-3","stepname":"Pour Water","duration":"10","comment":""},{"id":"Stir-4","stepname":"Stir","duration":"5","comment":"คนเพื่อให้แน่ใจว่ากาแฟทั้งหมดแช่อย่างทั่วถึง"},{"id":"Wait-5","stepname":"Wait","duration":"15","comment":"รอให้กาแฟบลูม"},{"water":"210","detail":"Pour 210 ml water","id":"Pour Water-6","stepname":"Pour Water","duration":"30","comment":"ค่อยๆ เทน้ำร้อนวนให้ทั่วอย่างต่อเนื่อง"},{"id":"Wait-7","stepname":"Wait","duration":"30","comment":"รอกาแฟสกัด"},{"id":"Place Plunger-8","stepname":"Place Plunger","duration":"5","comment":"ใส่แผ่นกรองลงในฝาครอบและประกอบกับ AeroPress"},{"id":"Invert-9","stepname":"Invert","duration":"5","comment":"พลิก AeroPress ให้กลับหัวลง"},{"id":"Press-10","stepname":"Press","duration":"20","comment":"ค่อยๆกด Plunger ลงอย่างช้าๆ"}],"grind_size":"Fine","temp":"90","roast_level":"Light"},
    {"brewer":"Aeropress","name":"2018 Follow Up - Inverted","coffee_weight":"30","water":219,"ratio":"7.3","equipment":[{"id":"Tools_7","pic":"Tools_7.png","detail":""},{"id":"Tools_8","pic":"Tools_8.png","detail":""},{"id":"Tools_5","pic":"Tools_5.png","detail":""}],"note":"WAC 2018 Runner-Up โดย Clay Zhang\nถ้ารสชาติที่ได้ไม่ตรงความต้องการหรือระยะเวลาการชงไม่ตรง คุณสามารถปรับขนาดการบดใหม่แล้วลองอีกครั้ง\n\n","public":false,"process":[{"water":"100","detail":"Pour 100 ml water","id":"Pour Water-1","stepname":"Pour Water","duration":"13","comment":""},{"id":"Stir-2","stepname":"Stir","duration":"15","comment":""},{"water":"70","detail":"Pour 70 ml water","id":"Pour Water-3","stepname":"Pour Water","duration":"7","comment":""},{"id":"Place Plunger-4","stepname":"Place Plunger","duration":"5","comment":""},{"id":"Invert-5","stepname":"Invert","duration":"5","comment":"กลับด้าน AeroPress อย่างรวดเร็ว"},{"id":"Press-6","stepname":"Press","duration":"25","comment":""},{"water":"49","detail":"Pour 49 ml water","id":"Pour Water-7","stepname":"Pour Water","duration":"50","comment":"เทน้ำเพิ่มในแก้ว"}],"grind_size":"Coarse","temp":80,"roast_level":"Light"},
    {"brewer":"Frenchpress","name":"Basic French Press","coffee_weight":"30.1","water":500,"ratio":"16.6","equipment":[{"id":"Tools_6","pic":"Tools_6.png","detail":""},{"id":"Tools_11ช้อน 2 คัน","pic":"Tools_11.png","detail":"ช้อน 2 คัน"},{"id":"Tools_11ถ้วยเล็ก","pic":"Tools_11.png","detail":"ถ้วยเล็ก"},{"id":"Tools_7","pic":"Tools_7.png","detail":""},{"id":"Tools_8","pic":"Tools_8.png","detail":""}],"note":"สูตรการชง French Press เบื้องต้น \n1.ถ้ารสชาติที่ได้ไม่ตรงความต้องการหรือระยะเวลาการชงไม่ตรง คุณสามารถปรับขนาดการบดใหม่แล้วลองอีกครั้ง\n2.ถ้ามีกากกาแฟปนออกมาขณะเสริฟมากเกินไปควรบดให้หยาบขึ้น\n","public":false,"process":[{"water":"500","detail":"Pour 500 ml water","id":"Pour Water-1","stepname":"Pour Water","duration":"10","comment":"เทน้ำวนเป็นวงกลมให้ท่วมผงกาแฟ"},{"id":"Wait-2","stepname":"Wait","duration":"240","comment":"รอกาแฟสกัด"},{"id":"Place Plunger-3","stepname":"Place Plunger","duration":"5","comment":"ใส่ Plunger เข้ากับ French Press"},{"id":"Press-4","stepname":"Press","duration":"15","comment":"กด Plunger"},{"name":"เสร็จสิ้น","id":"Custom-5","stepname":"Custom","duration":"5","comment":""}],"grind_size":"Coarse","temp":"93","roast_level":"Medium"},
    {"brewer":"Frenchpress","name":"Hoffmann French Press","coffee_weight":"30","water":480,"ratio":"16","equipment":[{"id":"Tools_6","pic":"Tools_6.png","detail":""},{"id":"Tools_11ช้อน 2 คัน","pic":"Tools_11.png","detail":"ช้อน 2 คัน"},{"id":"Tools_11ถ้วยเล็ก","pic":"Tools_11.png","detail":"ถ้วยเล็ก"},{"id":"Tools_11กาน้ำ","pic":"Tools_11.png","detail":"กาน้ำ"},{"id":"Tools_8","pic":"Tools_8.png","detail":""}],"note":"ถ้ารสชาติที่ได้ไม่ตรงความต้องการหรือระยะเวลาการชงไม่ตรง คุณสามารถปรับขนาดการบดใหม่แล้วลองอีกครั้ง","public":false,"process":[{"water":"480","detail":"Pour 480 ml water","id":"Pour Water-1","stepname":"Pour Water","duration":"10","comment":"เทน้ำวนเป็นวงกลมให้ท่วมผงกาแฟ"},{"id":"Wait-2","stepname":"Wait","duration":"300","comment":"รอกาแฟสกัด"},{"id":"Stir-3","stepname":"Stir","duration":"10","comment":"คนเบาๆหน้าผิว 2-3 ครั้ง"},{"name":"ตักโฟมที่ลอยที่ผิวออก","id":"Custom-4","stepname":"Custom","duration":"15","comment":"ใช้ช้อนตักโฟมที่ลอยบนผิวออกให้ได้มากที่สุด"},{"id":"Wait-5","stepname":"Wait","duration":"300","comment":""},{"id":"Place Plunger-6","stepname":"Place Plunger","duration":"5","comment":""},{"id":"Press-7","stepname":"Press","duration":"20","comment":"กดก้านกรองกากกาแฟจนถึงแค่ผิวน้ำ ไม่ต้องกดจนสุด"}],"grind_size":"Medium Coarse","temp":"99","roast_level":"Medium"},
    {"brewer":"Frenchpress","name":"Crema.co French Press","coffee_weight":"27","water":399,"ratio":"14.8","equipment":[{"id":"Tools_6","pic":"Tools_6.png","detail":""},{"id":"Tools_11ช้อน 2 คัน","pic":"Tools_11.png","detail":"ช้อน 2 คัน"},{"id":"Tools_11ถ้วยเล็ก","pic":"Tools_11.png","detail":"ถ้วยเล็ก"},{"id":"Tools_7","pic":"Tools_7.png","detail":""},{"id":"Tools_8","pic":"Tools_8.png","detail":""}],"note":"ถ้ารสชาติที่ได้ไม่ตรงความต้องการหรือระยะเวลาการชงไม่ตรง คุณสามารถปรับขนาดการบดใหม่แล้วลองอีกครั้ง","public":false,"process":[{"water":"200","detail":"Pour 200 ml water","id":"Pour Water-1","stepname":"Pour Water","duration":"40","comment":"เทน้ำวนเป็นวงกลมให้ท่วมผงกาแฟ"},{"id":"Stir-2","stepname":"Stir","duration":"10","comment":"คนกาแฟเบาๆ 5 – 8 ครั้ง"},{"water":"199","detail":"Pour 199 ml water","id":"Pour Water-3","stepname":"Pour Water","duration":"20","comment":""},{"id":"Place Plunger-4","stepname":"Place Plunger","duration":"5","comment":""},{"id":"Wait-5","stepname":"Wait","duration":"165","comment":"รอกาแฟสกัด"},{"id":"Press-6","stepname":"Press","duration":"15","comment":"กดตัวกรองลงช้าๆ"}],"grind_size":"Coarse","temp":"99","roast_level":"Medium"},
    {"brewer":"Chemex","name":"Basic Chemex ","coffee_weight":"35","water":525,"ratio":"15","equipment":[{"id":"Tools_11Chemex 6 cup","pic":"Tools_11.png","detail":"Chemex 6 cup"},{"id":"Tools_10Chemex Filter","pic":"Tools_10.png","detail":"Chemex Filter"},{"id":"Tools_7","pic":"Tools_7.png","detail":""},{"id":"Tools_8","pic":"Tools_8.png","detail":""}],"note":"สูตรการชง Chemex เบื้องต้น ถ้ารสชาติที่ได้ไม่ตรงความต้องการหรือระยะเวลาการชงไม่ตรง คุณสามารถปรับขนาดการบดใหม่แล้วลองอีกครั้ง","public":false,"process":[{"id":"Rinse Filter-1","stepname":"Rinse Filter","duration":"10","comment":"เพื่อล้างสิ่งสกปรกและอุ่นภาชนะให้ร้อนหลังจากนั้นเทน้ำทิ้ง"},{"coffee":"35","detail":"Add 35 g of coffee","id":"Add Coffee-2","stepname":"Add Coffee","duration":"5","comment":""},{"water":"60","detail":"Pour 60 ml water","id":"Bloom-3","stepname":"Bloom","duration":"30","comment":""},{"water":"465","detail":"Pour 465 ml water","id":"Pour Water-4","stepname":"Pour Water","duration":"120","comment":"ค่อยๆ เทน้ำร้อนวนให้ทั่วกาแฟอย่างต่อเนื่อง"},{"id":"Wait-5","stepname":"Wait","duration":"90","comment":"รอให้การชงเสร็จสิ้น"}],"grind_size":"Coarse","temp":"96","roast_level":"Light"},
    {"brewer":"Chemex","name":"Scott Rao Chemex","coffee_weight":"32","water":499,"ratio":"15.6","equipment":[{"id":"Tools_3Chemex","pic":"Tools_3.png","detail":"Chemex"},{"id":"Tools_10Chemex Filter","pic":"Tools_10.png","detail":"Chemex Filter"},{"id":"Tools_7","pic":"Tools_7.png","detail":""},{"id":"Tools_8","pic":"Tools_8.png","detail":""}],"note":"ถ้ารสชาติที่ได้ไม่ตรงความต้องการหรือระยะเวลาการชงไม่ตรง คุณสามารถปรับขนาดการบดใหม่แล้วลองอีกครั้ง\n\n","public":false,"process":[{"water":"60","detail":"Pour 60 ml water","id":"Bloom-1","stepname":"Bloom","duration":"20","comment":"รอให้กาแฟบลูม"},{"id":"Stir-2","stepname":"Stir","duration":"10","comment":""},{"water":"110","detail":"Pour 110 ml water","id":"Pour Water-3","stepname":"Pour Water","duration":"20","comment":"ค่อยๆ เทน้ำร้อนวนให้ทั่วกาแฟอย่างต่อเนื่อง"},{"id":"Stir-4","stepname":"Stir","duration":"10","comment":""},{"water":"110","detail":"Pour 110 ml water","id":"Pour Water-5","stepname":"Pour Water","duration":"20","comment":"ค่อยๆ เทน้ำร้อนวนให้ทั่วกาแฟอย่างต่อเนื่อง"},{"id":"Stir-6","stepname":"Stir","duration":"10","comment":""},{"water":"110","detail":"Pour 110 ml water","id":"Pour Water-7","stepname":"Pour Water","duration":"20","comment":"ค่อยๆ เทน้ำร้อนวนให้ทั่วกาแฟอย่างต่อเนื่อง"}],"grind_size":"Medium","temp":"96","roast_level":"Medium"},
    {"brewer":"Chemex","name":"Barefoot Chemex","coffee_weight":"50","water":750,"ratio":"15","equipment":[{"id":"Tools_3","pic":"Tools_3.png","detail":""},{"id":"Tools_10Chemex Filter","pic":"Tools_10.png","detail":"Chemex Filter"},{"id":"Tools_7","pic":"Tools_7.png","detail":""},{"id":"Tools_8","pic":"Tools_8.png","detail":""}],"note":"ถ้ารสชาติที่ได้ไม่ตรงความต้องการหรือระยะเวลาการชงไม่ตรง คุณสามารถปรับขนาดการบดใหม่แล้วลองอีกครั้ง","public":false,"process":[{"water":"70","detail":"Pour 70 ml water","id":"Bloom-1","stepname":"Bloom","duration":"20","comment":"รอให้กาแฟบลูม"},{"id":"Swirl-2","stepname":"Swirl","duration":"10","comment":"หมุนโถ Chemex หรือเขย่าเล็กน้อย"},{"water":"680","detail":"Pour 680 ml water","id":"Pour Water-3","stepname":"Pour Water","duration":"180","comment":"ค่อยๆ เทน้ำอย่างสม่ำเสมอ"},{"id":"Stir-4","stepname":"Stir","duration":"10","comment":""},{"id":"Wait-5","stepname":"Wait","duration":"20","comment":"รอจนกว่าการสกัดจะเสร็จสิ้น"}],"grind_size":"Medium","temp":"96","roast_level":"Light"},
  ])

  const [user, setUser] = useState([
    {},
    {},
    {},
  ])

  return (
    <div>
      <NavBar />
      <div className="d-flex div_a"><Link to="/brew-new"><a href=""><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-plus-circle Add_icon">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
      </svg></a></Link></div>
      <div id="main_template">
        <div className="container" id="search_contrainer">
          <div className="input-group"><input className="form-control" type="search" id="search_input" /><button className="btn btn-primary" data-bss-hover-animate="pulse" id="search_button" type="button"><i className="fa fa-search" id="Tool_icon" style={{ color: '#ffffff' }} /></button></div>
        </div>
        <div className="container" id="recipelist_container" style={{ marginTop: '-70px' }}>
          <div id="method_result_card">
            <div className="row">
              <div className="col"><a href="Brewing_Guide.html">
                <div className="card" style={{ height: '65px', background: 'rgba(255,255,255,0)', borderStyle: 'none' }}>
                  <div className="card-body fcard_body">
                    <div className="row">
                      <div className="col d-flex justify-content-center method_result_col">
                        <div className="method_result_ico_border"><img className="method_result_ico" src="assets/img/Hario_ICO.png" /></div>
                      </div>
                      <div className="col d-flex align-items-center" style={{ maxWidth: '550px', minWidth: '200px' }}>
                        <p className="recipe_title2">Recipe name<br /></p>
                      </div>
                    </div>
                  </div>
                </div>
              </a></div>
            </div>
            <div className="row">
              <div className="col">
                <div className="btn-group d-flex" role="group" style={{ width: '100%' }}><button className="btn btn-primary" data-bss-hover-animate="jello" id="Tool_color" type="button"><i className="fa fa-pencil" id="Tool_icon" /></button><a className="btn btn-primary" role="button" data-bss-hover-animate="jello" id="Tool_color" href="Community_shared.html"><i className="fas fa-share" id="Tool_Shared" /></a><button className="btn btn-primary" data-bss-hover-animate="jello" id="Tool_color" type="button"><i className="fas fa-heart-broken" id="Tool_Faved" /></button><button className="btn btn-primary" data-bss-hover-animate="jello" id="Tool_color" type="button"><i className="fas fa-trash" id="Tool_icon" /></button></div>
              </div>
            </div>
          </div>
          <div id="method_result_card">
            <div className="row">
              <div className="col"><a href="Brewing_Guide.html">
                <div className="card" style={{ height: '65px', background: 'rgba(255,255,255,0)', borderStyle: 'none' }}>
                  <div className="card-body fcard_body">
                    <div className="row">
                      <div className="col d-flex justify-content-center method_result_col">
                        <div className="method_result_ico_border"><img className="method_result_ico" src="assets/img/Frenchpress_ICO.png" /></div>
                      </div>
                      <div className="col d-flex align-items-center" style={{ maxWidth: '550px', minWidth: '200px' }}>
                        <p className="recipe_title2">Recipe name&nbsp;</p>
                      </div>
                    </div>
                  </div>
                </div>
              </a></div>
            </div>
            <div className="row">
              <div className="col">
                <div className="btn-group d-flex" role="group" style={{ width: '100%' }}><button className="btn btn-primary" data-bss-hover-animate="jello" id="Tool_color" type="button"><i className="fa fa-pencil" id="Tool_icon" /></button><a className="btn btn-primary" role="button" data-bss-hover-animate="jello" id="Tool_color" href="Community_shared.html"><i className="fas fa-share" id="Tool_icon" /></a><button className="btn btn-primary" data-bss-hover-animate="jello" id="Tool_color" type="button"><i className="fas fa-heart-broken" id="Tool_Faved" /></button><button className="btn btn-primary" data-bss-hover-animate="jello" id="Tool_color" type="button"><i className="fas fa-trash" id="Tool_icon" /></button></div>
              </div>
            </div>
          </div>
          <div id="method_result_card">
            <div className="row">
              <div className="col"><a href="Brewing_Guide.html">
                <div className="card" style={{ height: '65px', background: 'rgba(255,255,255,0)', borderStyle: 'none' }}>
                  <div className="card-body fcard_body">
                    <div className="row">
                      <div className="col d-flex justify-content-center method_result_col">
                        <div className="method_result_ico_border"><img className="method_result_ico" src="assets/img/Chemex_ICO.png" /></div>
                      </div>
                      <div className="col d-flex align-items-center" style={{ maxWidth: '550px', minWidth: '200px' }}>
                        <p className="recipe_title2">Recipe name&nbsp;</p>
                      </div>
                    </div>
                  </div>
                </div>
              </a></div>
            </div>
            <div className="row">
              <div className="col">
                <div className="btn-group d-flex" role="group" style={{ width: '100%' }}><button className="btn btn-primary" data-bss-hover-animate="jello" id="Tool_color" type="button"><i className="fa fa-pencil" id="Tool_icon" /></button><a className="btn btn-primary" role="button" data-bss-hover-animate="jello" id="Tool_color" href="Community_shared.html"><i className="fas fa-share" id="Tool_icon" /></a><button className="btn btn-primary" data-bss-hover-animate="jello" id="Tool_color" type="button"><i className="fas fa-heart-broken" id="Tool_Faved" /></button><button className="btn btn-primary" data-bss-hover-animate="jello" id="Tool_color" type="button"><i className="fas fa-trash" id="Tool_icon" /></button></div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="d-flex" id="Header">
        <p id="header_paragraph">{t("Btext02")}</p>
      </div>
      <div className="d-flex" id="Footer">
        <Link to="/"><a className="btn btn-primary" role="button" data-bss-hover-animate="pulse" id="fbrew_button" href="">
          <img src="assets/img/Cup%20Icon.png" style={{ width: '50px', marginTop: '-17px' }} /></a></Link>
        <button className="btn btn-primary disabled d-flex" data-bss-hover-animate="pulse" id="ffav_button" type="button" disabled>
          <img src="assets/img/Favorite%20Icon.png" style={{ width: '42px' }} /></button></div>
    </div>
  )
}
