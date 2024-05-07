import LOGO from "../Assets/Logo.png";
import { Link } from "react-router-dom";
import UseNetworkStatus from "../Hooks/UseNetworkStatus";
import { useSelector } from "react-redux";
const Header = () => {
    const storeData = useSelector((store) => store.cart.items);
    console.log(storeData);
    const Network = UseNetworkStatus();
    return <div className="flex justify-between relative to-100% items-center p-4 shadow-lg bg-green-100">
        <div className=" w-20">
            <img src={LOGO} />
        </div>
        <div className=" flex ">
            <ul className="flex justify-around">
                <li className=" p-4">Online Status:{Network === true ? "🟢" : "🔴"}</li>
                <li className=" p-4"><Link to="/">Home</Link></li>
                <li className=" p-4"><Link to="https://omkarjc16.github.io/onkarchavan.github.io/">About</Link></li>
                <li className=" p-4"><Link to="/contact">Contact</Link></li>
                <li className=" p-4">
                    <Link to="/cart">cart({storeData.length})</Link>
                </li>
            </ul>
        </div>
    </div>
}

export default Header;