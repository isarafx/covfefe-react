import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
export default function BackButton(path="/"){
    let navigate = useNavigate();
    return(
        <div className="div_back"><Link to="/" ><i className="icon ion-android-arrow-back" id="Back_icon" /></Link></div>
    )
}