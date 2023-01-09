import { useNavigate } from "react-router-dom"
import axios from "axios"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export function mmss(second) {
    return (
        new Date(parseInt(second) * 1000).toISOString().substring(14, 19)
    )
}

export function descParse(name, water=0,cup=1, brewer="coffee"){
    let waterdisplay = parseInt(water)*cup
    if(isNaN(waterdisplay)){waterdisplay = 0}
  
    if(name === "Pour Water" || name === "Bloom"){
        if(brewer==="mokapot"){
            if(localStorage.getItem('i18nextLng') === "en"){
                return `Pour ${waterdisplay} ml water`
            }else if(localStorage.getItem('i18nextLng') === "th"){
                return `เทน้ำ ${waterdisplay} มิลลิลิตร`
            }
        }
    else{
        if(localStorage.getItem('i18nextLng') === "en"){
            return `Pour ${waterdisplay} ml water slowly`
        }else if(localStorage.getItem('i18nextLng') === "th"){
            return `เทน้ำอย่างช้าๆ  ${waterdisplay} มิลลิลิตร`
        }
    }
  }
}

export function LoginCheck(){
    try{
        let token = localStorage.getItem('token')
        let user = JSON.parse(atob(localStorage.getItem('token').split('.')[1]))['username']
        if(token && user){
          return user
        }else{
            return false
        }
    }catch(error){
      return false
    }
}
export function OwnerCheck(owner){
    try{
        let token = localStorage.getItem('token')
        let user = JSON.parse(atob(localStorage.getItem('token').split('.')[1]))['username']
        if(user===owner){
          return true
        }else{
            return false
        }
    }catch(error){
      return false
    }
}
export function AdminCheck(){
    try{
        let token = localStorage.getItem('token')
        let user = JSON.parse(atob(localStorage.getItem('token').split('.')[1]))['username']
        if(user==='admin'){
          return true
        }else{
            return false
        }
    }catch(error){
      return false
    }
}

export function updateLocalList(path, item){
 
        if(localStorage.getItem(path) == null){
            localStorage.setItem(path, JSON.stringify([item]))
        }else if(localStorage.getItem(path) == "[]"){
            localStorage.setItem(path, JSON.stringify([item]))
        }else if(JSON.parse(localStorage.getItem(path))){
            localStorage.setItem(path, JSON.stringify([...JSON.parse(localStorage.getItem(path)), item]))
        }
}

export function addEdit(item){
    let olditem = localStorage.getItem('update')
    if(item === null){
        localStorage.setItem('update', JSON.stringify([{favorite:item}]))
    }else if(item === '[]'){
        localStorage.setItem('update', JSON.stringify([{favorite:item}]))
    }
    try{
        olditem = JSON.parse(olditem)
        olditem.forEach((listItem)=>{
            if(listItem.key === item.key){
                if(listItem.method === "new"){
                    //edit in new
                }else if(listItem.method === "edit"){
                    //edit replace edit
                }
            }
        })


    }catch(error){
        console.error('unsupported type')
    }
}
export function addFav(item){
    let olditem = localStorage.getItem('update')
    if(item === null){
        localStorage.setItem('update', JSON.stringify([{favorite:item}]))
    }else if(item === '[]'){
        localStorage.setItem('update', JSON.stringify([{favorite:item}]))
    }
    try{
        olditem = JSON.parse(olditem)
        olditem = olditem.filter(listItem=>listItem.key===item.key) // check if item with same key exist
        if(olditem === []){
            //append to list
        }else{
        }
    }catch(error){
        console.error('unsupported type')
    }
}
export function addUnFav(item){
    let olditem = localStorage.getItem('update')
    if(item === null){
        localStorage.setItem('update', JSON.stringify([{favorite:item}]))
    }else if(item === '[]'){
        localStorage.setItem('update', JSON.stringify([{favorite:item}]))
    }
    try{
        olditem = JSON.parse(olditem)
        olditem.forEach((listItem)=>{
            if(listItem.key === item.key){
                if(listItem.method === "favorite"){

                }else if(listItem.method === "unfav"){

                }
            }
        })
    }catch(error){
        console.error('unsupported type')
    }
}
export function addDel(item){
    let olditem = localStorage.getItem('update')
    if(item === null){
        localStorage.setItem('delete', JSON.stringify([item]))
    }else if(item === '[]'){
        localStorage.setItem('delete', JSON.stringify([item]))
    }
    try{
        olditem = JSON.parse(olditem)
        olditem = olditem.filter(listItem=>listItem.key!=item.key)
        olditem.push(item)
        //set olditem to update_localstorage
    }catch(error){
        console.error('unsupported type')
    }
}
export const postAll = async _ =>{
    
    if(localStorage.getItem('update') == null){
        return ;
    }else if(localStorage.getItem('update') == "[]"){
        return ;
    }else if(JSON.parse(localStorage.getItem('update'))){
        var fetchList = JSON.parse(localStorage.getItem('update'))
        const token = localStorage.getItem('token')
        const responses = [];
        let timerInterval
        const MySwal = withReactContent(Swal)
        MySwal.fire({
            icon: 'info',
            title: 'Syncing',
            text: 'Fetching Data',
            allowEscapeKey: false,
            allowOutsideClick: false,
            showConfirmButton: false,
        })
        for (let i = 0; i < fetchList.length; i++) {
            try {
                console.log(`run ${fetchList[i]['key']} met:${fetchList[i]['method']} -at ${String(Date.now())}`)
                if(fetchList[i]['method'] == "new"){
                    try{    
                    const res = await axios.post(`https://q27z6n.deta.dev/recipes`, fetchList[i]['data'], { headers: { 'x-token': token } })
                    console.log(res.data)
                    responses.push(res)
                    }catch(error){
                        console.log(error)
                    }finally{
                        
                    }
                }else if(fetchList[i]['method'] == "edit"){
                    try{
                    const res = await axios.patch(`https://q27z6n.deta.dev/recipes/${fetchList[i]['key']}`, fetchList[i]['data'], { headers: { 'x-token': token } })
                    console.log(res.data)
                    responses.push(res)
                    }catch(error){
                        console.log(error)
                    }finally{

                    }
                }else if(fetchList[i]['method'] == "unfav"){
                    try{
                    const res = await axios.delete(`https://q27z6n.deta.dev/users/favorite/${fetchList[i]['key']}`, { headers: {'x-token':token}})
                    console.log(res.data)
                    responses.push(res)
                    }catch(error){
                        console.log(error)
                    }finally{

                    }
                }else if(fetchList[i]['method'] == "fav"){
                    try{
                     const res = await axios.post(`https://q27z6n.deta.dev/users/favorite/${fetchList[i]['key']}`, '', { headers: {'x-token':token}})
                     console.log(res.data)
                     responses.push(res)
                    }catch(error){
                        console.log(error)
                    }finally{

                    }
                    }
                else if(fetchList[i]['method'] == "del"){
                    try{
                    const res = await axios.delete(`https://q27z6n.deta.dev/recipes/${fetchList[i]['key']}`, {headers: {'Content-Type':'application/json','x-token':token}});
                    console.log(res.data)
                    }catch(error){
                        console.log(error)
                    }finally{

                    }
                }
            }catch (error) {
                console.error(error);
            }finally{
            }
            
        }
        console.log('finish')
        MySwal.close()
        localStorage.setItem('update', '[]')
        // console.log(responses)
        return ;
    }
}
// input: number only - output: int or 2 digit float
export function parseNum(num){
    num = parseFloat(num)
    if(num %1 === 0){
        return parseInt(num)
    }else{
        return parseFloat(num.toFixed(2))
    }
    return null;
}

