export function mmss(second) {
  
  return (
    new Date(parseInt(second) * 1000).toISOString().substring(14, 19)
  )
}

export function descParse(name, water=0,cup=1, brewer="coffee"){
  let waterdisplay = parseInt(water)*cup
  if(isNaN(waterdisplay)){waterdisplay = 0}
  if(brewer==="mokapot"){
    return `Pour ${waterdisplay} ml water`
  }else if(name === "Pour Water" || name === "Bloom"){
    return `Pour ${waterdisplay} ml water slowly`
  }
}