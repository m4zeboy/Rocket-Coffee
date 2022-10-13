import React, { useState } from "react";
import logoMobile from '../../assets/logo-mobile.svg';
import logoDesktop from '../../assets/logo-desktop.svg';
import menuBurgerOpen from '../../assets/menu-burger-open.svg';
import { Container } from "../Container";

import './style.scss';

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="app-header">
        <Container>
          <div className="flex-center">
            <picture>
              <source media="(max-width: 1024px)" srcSet={logoMobile} sizes="" />
              <img src={logoDesktop} alt="" />
            </picture>
            <nav className="desktop-only">
              <ul className="flex-center">
                <li><a href="#">Home</a></li>
                <li><a href="#">Menu</a></li>
                <li><a href="#">Recompensas</a></li>
                <li><a href="#">Gift Cards</a></li>
                <li><a href="#">Lojas</a></li>
              </ul>
            </nav>
            <button className="outline desktop-only">PEGAR MEU CAFÉ</button>
            <button className="glass mobile-only" onClick={() => setOpen(!open)}><img src={menuBurgerOpen} alt="Ícone para abrir o menu sandwiche" /></button>
          </div>
        </Container>
      </header>
      {open && (
        <div className="modal mobile-only">
          <nav>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Menu</a></li>
              <li><a href="#">Recompensas</a></li>
              <li><a href="#">Gift Cards</a></li>
              <li><a href="#">Lojas</a></li>
            </ul>
          </nav>
        </div>
      )}
    </>
  )
}