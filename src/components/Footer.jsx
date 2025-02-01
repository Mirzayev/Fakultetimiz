import tatu from '../assets/images/Tatu2.jpg'
import {NavLink} from "react-router-dom";
import logo from "../assets/images/Tatu1.png";
import React from "react";


export default function Footer() {


    return (
        <div className={"bg-slate-100 pt-16"}>
            <div className={"max-w-[1440px] mx-auto "}>
                <div className="flex justify-between py-10">

                    <div className="max-w-[300px] ">
                        <NavLink className="text-center items-center space-x-4" to="/">
                            <div className={"flex justify-center"}><img className="max-w-[100px]" src={logo}
                                                                        alt="TATU Logo"/></div>
                            <p className="text-[14px]">
                                Muhammad al-Xorazmiy nomidagi Toshkent Axborot texnologiyalari universiteti AKT sohasida
                                kasb ta’limi
                                fakulteti
                            </p>
                        </NavLink>
                        <div className="flex justify-center items-center space-x-4 py-4 text-2xl">
                            <i className="fa-brands fa-telegram cursor-pointer hover:text-blue-600  transition-all"></i>
                            <i className="fa-brands fa-instagram cursor-pointer hover:text-orange-500  transition-all"></i>
                            <i className="fa-brands fa-youtube cursor-pointer hover:text-red-700  transition-all"></i>
                        </div>
                    </div>

                    <div>
                        <h4 className={"text-[21px] font-semibold my-3"}>Bog'lanish</h4>
                        <ul>
                            <li>Manzil: Toshkent 100084, Amir Temur shox ko‘chasi 108 uy</li>
                            <li>
                                Jamoat transportlari: <br/>
                                10, 17, 19, 24, 38, 51, 60, 67, 72, 93, 115, 140
                            </li>
                            <li>Virtual qabulxona</li>
                            <li>Telefon: +998 71 238 64 89</li>
                            <li>E-mail: info@tuit.uz</li>
                            <li>Ish grafigi: Dushanba - Juma 8:30 - 18:00</li>
                            <li>Shanba Yakshanba dam olish kuni</li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    )
}