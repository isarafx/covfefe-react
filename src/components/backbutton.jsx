import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
export default function BackButton(){
    let navigate = useNavigate();
    return(
        <div className="div_back"><Link onClick={(e) => {e.preventDefault();navigate(-1)}} ><i className="icon ion-android-arrow-back" id="Back_icon" /></Link></div>
    )
}