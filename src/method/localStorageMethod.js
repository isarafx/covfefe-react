// every value store as {'items':[]} or 
export const storageAppendList = (key, value) =>{
    try{
        let list = localStorage.getItem(key, value)
        list = JSON.parse(list)['items']
        localStorage.setItem(key, JSON.stringify({"items":[...list]}))
    }catch(error){
        console.log('eror')
    }
}
export const getToken = () =>{
    return localStorage.getItem('token')
    
}