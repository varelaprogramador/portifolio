
import React, { useState } from 'react';
import { Download, MenuIcon, X } from "lucide-react";
import './Menu.css';
import { Link } from 'react-router-dom';

function MenuManager() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    

    return (
        <header className="menu-global">
            <div className="menu-btn">
                <div onClick={() => setIsMenuOpen(!isMenuOpen)} className="icon-menu">
                    {isMenuOpen ? <X size={"100%"}/> : <MenuIcon size={"100%"}/>}
                </div>
                <a download href="/curriculo.pdf">
                    <button className="btn-yellow-full">
                        Baixar CV <Download size={"1.1rem"} />
                    </button>
                </a>
            </div>

            <img className="logo" src={`${process.env.PUBLIC_URL}/assets/RV.svg`} alt="Logo" />

           

            {/* Barra vertical com animação */}
            <div className={`vertical-bar ${isMenuOpen ? 'show' : ''}`}>
                <nav>
                    <a  href='/'>
                        Inicio
                    </a>
                    <a href='/sobre-mim'>
                        Sobre Mim
                    </a>
                    <a href='/#contact'>
                        Contatos
                    </a>
                </nav>
            </div>
        </header>
    );
}

export default MenuManager;
