import LOGO from "../Assets/Logo.png"
import { Link } from "react-router-dom";
import UseNetworkStatus from "../Hooks/UseNetworkStatus";
const Header = () => {
    const Network = UseNetworkStatus();
    return <div className="flex justify-between relative to-100% items-center p-4 shadow-lg bg-green-100">
        <div className=" w-16">
            <img src={LOGO} />
        </div>
        <div className=" flex ">
            <ul className="flex justify-around">
                <li className=" p-4">Online Status:{Network === true ? "🟢" : "🔴"}</li>
                <li className=" p-4"><Link to="/">Home</Link></li>
                <li className=" p-4"><Link to="/about">About</Link></li>
                <li className=" p-4"><Link to="/contact">Contact</Link></li>
                <li className=" p-4">cart</li>
            </ul>
        </div>
    </div>
}

export default Header;