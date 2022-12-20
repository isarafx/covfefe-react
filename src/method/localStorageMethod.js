// every value store as {'items':[]} or 


export const storageAppendList = (key, value) =>{
    try{
        let list = localStorage.getItem(key, value)
        if(!Boolean(list)){
            localStorage.setItem(key, "{'items':[]}")
            list = []
            localStorage.setItem(key, JSON.stringify({"items":[JSON.stringify(value)]}))
        }else{
            list = JSON.parse(list)['items']
            localStorage.setItem(key, JSON.stringify({"items":[...list, JSON.stringify(value)]}))
        }
        
    }catch(error){
        console.log('error')
    }
}
// every value store as {'items':[]} or 
export const storageDeleteList = (key, value) =>{
    try{
        let list = localStorage.getItem(key, value)
        if(!Boolean(list)){
            localStorage.setItem(key, "{'items':[]}")
        }
        list = JSON.parse(list)['items'].filter(e => e !== 'value')
        localStorage.setItem(key, JSON.stringify({"items":list}))
    }catch(error){
        console.log('error')
    }
}

export const getToken = () =>{
    return localStorage.getItem('token')
    
}