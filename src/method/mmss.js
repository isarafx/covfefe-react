import { useNavigate } from "react-router-dom"
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