import {BsDot} from "react-icons/bs";
import {BiKey} from "react-icons/bi";
import logo from "../sai.png"
const RightSide=()=>{
        return(
            <div className="rightside">
                <div className="top">
                    <p className="blue">LinkedIn News</p>
                    <p><BsDot/>Disney in ABC sale talks</p>
                    <p><BsDot/>Johnson & Johnson debuts new logo</p>
                    <p><BsDot/>Arm beats expectations in IPO</p>
                    <p><BsDot/>Car costs fuel inflation rise</p>
                    <p><BsDot/>Fuel prices spike,causing pain</p>
                    <p className="blue">Show More ....</p>
                </div>
                <div className="bottom">
                    <p>Sai Sandeep, unlock your full potential with</p>
                    <p className="blue">LinkedIn Premium</p>
                    <img src={logo} alt=""/>
                    <BiKey size="70" color="blue"/>
                </div>
            </div>
                        
        )
    }



export default RightSide;