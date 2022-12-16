export function Fetching(path, url, method, data, token, header={Accept: "application/json"}, online){

    if(online){
        if(data === {}){
        fetch(url, {
        method: method,
        headers: header
      })
      .then(response =>{
        console.log(response)
        return response
    })


        }else{
            fetch(url, {
                method: method,
                body: data,
                headers: header
              })
              .then(response =>{
                console.log(response)
                return response
            }).catch((error)=> console.log(error))
        }
    }else{
        // return localStorage.getItem(path)
    }
}