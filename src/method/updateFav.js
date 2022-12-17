export function UpdateFav(key){
    let favlist = localStorage.getItem('favorite')
    if(favlist == null){
        localStorage.setItem('favorite', '{"items":[]}')
        favlist = '{"items":[]}'
    }
    let newlist = JSON.parse(favlist)['items']
    if(newlist.includes(key)){
        newlist = newlist.filter(e => e != key)
    }else{
        newlist = [...newlist, key]
    }
    localStorage.setItem('favorite', JSON.stringify({"items":newlist}))
    console.log(newlist)
}