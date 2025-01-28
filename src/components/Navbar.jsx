import React, { useState } from "react";
import logo from "../assets/images/Tatu1.png";
import { NavLink } from "react-router-dom";
import Dropdown from "./NavbarDropdown.jsx";
import { Menu, X } from "lucide-react";

const menuItems = [
    {
        title: "Faoliyat",
        links: ["O'quv faoliyati", "Ilmiy faoliyati", "Xalqaro faoliyati", "Ijtimoiy faoliyati"],
    },
    {
        title: "Reyting",
        links: ["Milliy reyting", "Xalqaro Reyting"],
    },
    {
        title: "Talabalarga",
        links: ["Iqtidorli talabalarimiz", "Stipendiyalar va grantlar", "TATU karyera markazi", "Almashinuv dasturi","So'rovnomalar"],
    },
    {
        title: "Abituriyent",
        links: ["Qabul komissiyasi", "Ko'rsatmalar", "Test topshiradigan fanlar majmuasi", "O'tish ballari","Bakalavriat","Magistratura","Ikkinchi oliy ta'lim","Magistratura","Xorijiy fuqarolar qabuli","Texnikum bitiruvchilari qabuli ","O'qishni ko'chirish va tiklash ","To'lov-kontrakt miqdori",],
    },
    {
        title: "Faxrlarimiz",
        links: ["Bitiruvchilarimiz", "Faxrli ustozlarimiz", "TATU yulduzlari ", "Bizning bo'lajak olimlarimiz"],
    },
];

export default function Navbar() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className="navbar py-5 bg-slate-100">
            {/* Desktop Navbar */}
            <div className="max-w-[1440px] mx-auto hidden md:flex items-center justify-between">
                {/* Logo */}
                <div className="max-w-[350px]">
                    <NavLink className="flex items-center space-x-4" to="/">
                        <img className="max-w-[50px]" src={logo} alt="TATU Logo" />
                        <p className="text-[14px]">
                            Muhammad al-Xorazmiy nomidagi Toshkent Axborot texnologiyalari universiteti AKT sohasida kasb ta’limi
                            fakulteti
                        </p>
                    </NavLink>
                </div>

                {/* Menu Items */}
                <div className="flex items-center space-x-8">

                    {menuItems.map((menu, index) => (
                        <Dropdown key={index} title={menu.title} links={menu.links} />
                    ))}
                    <NavLink to="/contact" className="text-[17px] text-[#555555]">
                        Contact
                    </NavLink>

                </div>
            </div>

            {/* Mobile Navbar */}
            <div className="px-5 md:hidden">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="max-w-[200px]">
                        <NavLink className="flex items-center space-x-4" to="/">
                            <img className="max-w-[50px]" src={logo} alt="TATU Logo" />
                            <p className="text-[10px]">
                                Muhammad al-Xorazmiy nomidagi Toshkent Axborot texnologiyalari universiteti AKT sohasida
                                kasb ta’limi fakulteti
                            </p>
                        </NavLink>
                    </div>

                    {/* Mobile Menu Icon */}
                    <button
                        className="text-gray-700 focus:outline-none"
                        onClick={toggleMobileMenu}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Mobile Menu Items */}
                {isMobileMenuOpen && (
                    <div className="mt-4 space-y-2">
                        {menuItems.map((menu, index) => (
                            <div key={index} className="text-gray-700">

                                <NavLink to={`/${menu.title.toLowerCase()}`} className="block text-[17px]">
                                    {menu.title}
                                </NavLink>
                            </div>
                        ))}
                        <NavLink to="/" className="text-[17px] text-[#555555]">
                            Home
                        </NavLink>
                        <NavLink to="/contact" className="block text-[17px] text-[#555555]">
                            Contact
                        </NavLink>
                    </div>
                )}
            </div>
        </div>
    );
}
