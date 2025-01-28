import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import {NavLink} from "react-router-dom";

function Dropdown({ title, links }) {
    const [isOpen, setIsOpen] = useState(false);
    const [hoverTimeout, setHoverTimeout] = useState(null);

    const handleMouseEnter = () => {
        clearTimeout(hoverTimeout); // Clear any pending timeout
        setIsOpen(true); // Open the dropdown immediately
    };

    const handleMouseLeave = () => {
        // Delay closing the dropdown for 200ms
        const timeout = setTimeout(() => {
            setIsOpen(false);
        }, 200);

        setHoverTimeout(timeout); // Save the timeout to clear it if needed
    };

    return (
        <div
            className="relative group"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* Dropdown Trigger */}
            <div className="flex items-center space-x-1 cursor-pointer">
                <NavLink to="/" className="text-[17px] text-[#555555]">
                    {title}
                </NavLink>
                {isOpen ? (
                    <ChevronUp size={16} className="text-slate-500 text-lg" />
                ) : (
                    <ChevronDown size={16} className="text-slate-500 text-lg" />
                )}
            </div>

            {/* Dropdown Menu */}
            {isOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg w-48 py-2 z-10">
                    {links.map((link, index) => (
                        <NavLink
                            key={index}
                            to="/"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                            {link}
                        </NavLink>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Dropdown;
