import React from 'react'
import { useState } from 'react'

export default function Test() {
    
    async function button_test(){
        let result = await fetch("https://q27z6n.deta.dev/recipes/public", {
            headers: {
                Accept: "application/json"
            },
            mode: 'cors'
        })
        const jsony = await result.json()
        console.log(jsony)
    }

  return (
    <div>
      <button onClick={()=>{}}>for test</button>
      {}
    </div>
  )
}
