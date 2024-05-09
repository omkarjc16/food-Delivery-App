import LOGO from "../Assets/Logo.png"; 
import { Link } from "react-router-dom";
import UseNetworkStatus from "../Hooks/UseNetworkStatus";
import { useSelector } from "react-redux";
import React, { useState } from "react";

const Header = () => {
    const storeData = useSelector((store) => store.cart.items);
    const Network = UseNetworkStatus();
    const [selectedItem, setSelectedItem] = useState(null);

    const handleItemClick = (index) => {
        setSelectedItem(index);
    };

    // Array of link details
    const links = [
        { to: "/", text: "Home" },
        { to: "https://omkarjc16.github.io/onkarchavan.github.io/", text: "About" },
        { to: "/contact", text: "Contact" },
        { to: "/cart", text: `cart(${storeData.length})` }
    ];

    return (
        <div className="flex justify-between relative to-100% items-center p-4 shadow-lg bg-green-100">
            <div className="w-20">
                <img src={LOGO} alt="Logo"/>       
            </div>
            <div className="flex">
                <ul className="flex justify-around">
                    <li className="p-2 m-2">Online Status: {Network === true ? "🟢" : "🔴"}</li>
                    {/* Dynamically render list items */}
                    {links.map((link, index) => (
                        <ListItem
                            key={index}
                            to={link.to}
                            text={link.text}
                            isSelected={selectedItem === index}
                            onItemClick={() => handleItemClick(index)}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
}

// Reusable list item component
const ListItem = ({ to, text, isSelected, onItemClick }) => {
    return (
        <li className={`p-2 m-2 ${isSelected ? 'bg-green-600 rounded-lg text-white' : 'bg-green-100 rounded-lg'}`} onClick={onItemClick}>
            <Link to={to}>{text}</Link>
        </li>
    );
}

export default Header;
