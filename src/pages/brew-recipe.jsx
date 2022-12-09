import React from 'react'
import { useState } from 'react'
import RecipeCard from '../components/recipecard'
import { useParams } from 'react-router-dom'
import "../styles/Multiple-Input-Select-Pills.css"
import "../styles/Profile_page.css"
import "../styles/Round_switch.css"
import "../styles/styles.css"
import "../styles/Ultimate-Sidebar-Menu-BS5.css"
import "../styles/Brewing_Guide.css"
import "../styles/Brewing_Guide2.css"
import "../styles/Brewing_Guide3.css"
import "../styles/Brewing_Guide4.css"
import "../styles/Features-Clean.css"
import BackButton from '../components/backbutton'

export default function BrewRecipe() {
  const { id } = useParams();
  const [recipeList, setRecipeList] = useState([{name:"Recipe 1", favorite:1, shared:1, link:"/"},
    {name:"Recipe 2", favorite:0, shared:1, link:"/"},
    {name:"Recipe 3", favorite:1, shared:0, link:"/"},
    {name:"Recipe 4", favorite:0, shared:0, link:"/"},
  ])

  // Header 
  const header_name = id
  return (
    <div>
  <BackButton />
  <div id="main_template">
    <div className="container" id="recipelist_container">
      
      {recipeList.map((item)=>{
        return (<RecipeCard name={item.name} favorite={item.favorite} shared={item.shared} link={item.link} />)
      })}
    </div>
  </div>
  <div className="d-flex" id="Header">
    <p id="header_paragraph">{header_name}</p>
  </div>
  <div className="d-flex" id="Footer" />
</div>


  )
}
