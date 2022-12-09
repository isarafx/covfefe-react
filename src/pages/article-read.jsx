import React from 'react'
import { useParams } from 'react-router';

import "../styles/Coffee_Article.css"
import "../styles/Multiple-Input-Select-Pills.css"
import "../styles/Profile_page.css"
import "../styles/Round_switch.css"
import "../styles/styles.css"
import "../styles/Ultimate-Sidebar-Menu-BS5.css"
import "../styles/Features-Clean.css"
export default function ArticleRead() {
  const { id } = useParams();
  return (
    <div>
      <h1>{id} test</h1>
    </div>
  )
}
