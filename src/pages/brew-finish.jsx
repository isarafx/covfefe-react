import React from 'react'
import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
export default function BrewFinish() {
    const navigate = useNavigate()
    const [searchParams, setSearchParams] = useSearchParams();
    let brewer = searchParams.get("brewer")
    let id = searchParams.get("id")
    
    useEffect(()=>{
        const timeoutID = window.setTimeout(() => {
            navigate(`/brew-recipe/${brewer}/${id}`)
        }, 3000);
    
        return () => window.clearTimeout(timeoutID );
    }, [])
  return (
    <body>
        <div className="d-flex justify-content-center align-items-center" id="main_template2">
            <div className="row row-cols-1">
                <div className="col d-flex justify-content-center">
                <div className="d-flex justify-content-center"><img id="finished_Icon" src="assets/img/Finished_ICO1.gif" /></div>
                </div>
                <div className="col d-flex justify-content-center"><img id="finished_Text" src="assets/img/Finished_text.gif" /></div>
            </div>
        </div>
    </body>
  )
}
