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

export function updateLocalList(path, item){
 
        if(localStorage.getItem(path) == null){
            localStorage.setItem(path, JSON.stringify([item]))
        }else if(localStorage.getItem(path) == "[]"){
            localStorage.setItem(path, JSON.stringify([item]))
        }else if(JSON.parse(localStorage.getItem(path))){
            localStorage.setItem(path, JSON.stringify([...JSON.parse(localStorage.getItem(path)), item]))
        }
        
}

export function testloop(){
    console.log('enter testloop');
    return ;
}
export async function postAll(){
    if(localStorage.getItem('update') == null){
        return ;
    }else if(localStorage.getItem('update') == "[]"){
        return ;
    }else if(JSON.parse(localStorage.getItem('update'))){
        var fetchList = JSON.parse(localStorage.getItem('update'))
        const promises = [];
        const token = localStorage.getItem('token')
        let errorindex = [];
        for (var i=0; i<fetchList.length; i++) {
            try{
                if(fetchList[i]['method'] == "new"){
                    console.log(`${JSON.stringify(fetchList[i])}`)
                    const result = axios.post(`https://q27z6n.deta.dev/recipes`, fetchList[i]['data'], { headers: { 'x-token': token } });
                    promises.push(result);
                }else if(fetchList[i]['method'] == "edit"){
                    console.log(`${console.log(fetchList[i]['key'])}`)
                    const result = axios.patch(`https://q27z6n.deta.dev/recipes/${fetchList[i]['key']}`, fetchList[i]['data'], { headers: { 'x-token': token } });
                    promises.push(result);
                }else if(fetchList[i]['method'] == "unfav"){
                    console.log(`${console.log(fetchList[i]['key'])}`)
                    const result = axios.delete(`https://q27z6n.deta.dev/users/favorite/${fetchList[i]['key']}`, { headers: {'x-token':token}})
                    promises.push(result);
                }else if(fetchList[i]['method'] == "fav"){
                    console.log(`${console.log(fetchList[i]['key'])}`)
                    const result = axios.post(`https://q27z6n.deta.dev/users/favorite/${fetchList[i]['key']}`, '', { headers: {'x-token':token}})
                    promises.push(result);
                }
              }catch(error){
                  errorindex.push(i)
              }
        }
        try{
            const results = await Promise.all(promises);
            localStorage.setItem('update', '[]')
            console.log(results)
        }catch(error){
            localStorage.setItem('update', '[]')
        }
        

      
      // for (var i=0; i<results.length; i++) {
      //     console.log(results[i].status)  
      // }
    }
}

// post new const result = await axios.post(`https://q27z6n.deta.dev/recipes`, data, { headers: { 'x-token': token } });
//  const result = await axios.patch(`https://q27z6n.deta.dev/recipes/${id}`, data, { headers: { 'x-token': token } });
// fav const result = await axios.delete(`https://q27z6n.deta.dev/users/favorite/${key}`, { headers: {'x-token':token}})
// const result = await axios.post(`https://q27z6n.deta.dev/users/favorite/${key}`, '', { headers: {'x-token':token}})
// update	[{"method":"new","data":{"key":"1672312765283","brewer":"Chemex","name":"test","coffee_weight":20,"water":300,"ratio":15,"equipment":[{"name":"Coffee","description":"Coffee"}],"note":"test","process":[{"name":"Wait","time":23,"comment":""},{"name":"Stir","time":35,"comment":""}],"grind_size":"Coarse","temp":90,"roast_level":"Dark","rate":"8","description":"","public":false,"owner":"Phichet123","is_favorite":false}}]