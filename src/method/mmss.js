import { useNavigate } from "react-router-dom"
import axios from "axios"
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
            return `Pour ${waterdisplay} ml water`
        }
    else{return `Pour ${waterdisplay} ml water slowly`}
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

export function localListUpdate(path, item){
    let old_item = JSON.parse(localStorage.getItem(path))
    if(old_item === [] || old_item === null){
        localStorage.setItem(path, JSON.stringify([item]))
    }else{
        if (old_item.includes(item)){
            
        }else{
          console.warn('update')
          localStorage.setItem(path, JSON.stringify([...old_item, item]))
        }
    }
}

export function localListObjectUpdate(path, item){
  let old_item = JSON.parse(localStorage.getItem(path))
  if(old_item === [] || old_item === null){
      localStorage.setItem(path, JSON.stringify([item]))
  }else{
      if (old_item.includes(item)){
          
      }else{
        let myArray = old_item.filter(function( obj ) {
          return obj.id !== item.key;
        });
        localStorage.setItem(path, JSON.stringify([...myArray, item]))
      }
  }
}

export function postAll(){
  let old_item = JSON.parse(localStorage.getItem('unfavorite'))
  if(old_item === [] || old_item === null){
      axios.all(old_item.map((endpoint) => axios.get(endpoint))).then(
        (data) => console.log(data),
      );
  }else{
  }
}