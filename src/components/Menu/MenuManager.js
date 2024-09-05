import { Download, MenuIcon } from "lucide-react";
import "./Menu.css";
import React from 'react';





function MenuManager() {
    return (
        <header className="menu-global">
            <div className="menu-btn">
                <div  className="icon-menu">
                    <MenuIcon size={"100%"}></MenuIcon>
                </div>
                <a download href="/static/Curriculo-Ryan.pdf">

                <button className="btn-yellow-full">
                    Baixar CV <Download size={"1.1rem"}></Download>
                </button></a>
            </div>

            <img className="logo" src={`${process.env.PUBLIC_URL}/assets/RV.svg`} alt="Logo" />

        </header>
    )
}

export default MenuManager;