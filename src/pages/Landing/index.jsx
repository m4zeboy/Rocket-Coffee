import React, { useState } from "react";
import logoDesktop from '../../assets/logo-desktop.svg'
import logoMobile from '../../assets/logo-mobile.svg'
import menuOpen from '../../assets/menu-burger-open.svg'
import menuClose from '../../assets/menu-burger-close.svg'
import { Container } from "../../components/Container";
import './style.scss'

const Modal = ({ modal, setModal }) => {
  return modal && (
    <div className="modal">
      <nav className="mobile-only">
        <ul>
          <li>Home</li>
          <li>Menu</li>
          <li>Recompensas</li>
          <li>Gift Cards</li>
          <li>Lojas</li>
        </ul>
      </nav>
    </div>
  )
}

const Sections = ({ modal, setModal }) => {
  return !modal && (
    <div id="sections">
      <Container>
      <section id="desciption">
        <h2 className="mobile-only" style={{ textAlign: "center", maxWidth: "19ch", fontSize:"30px" }}>
          O café que fará seu código decolar para
          o próximo nível.
        </h2>
      </section>
      <section id="button">
        <button className="outline mobile-only">PEGAR MEU CAFÉ</button>
      </section>
      <section id="title">
        <h1>Great Coffee</h1>
        <h1 className="title-outlined">&lt;Great Code/&gt;</h1>
      </section></Container></div>
  )
}

export function Landing() {
  const [modal, setModal] = useState(false)
  return (
    <>
      <div id="landing">
        <header>
          <Container>
            <picture>
              <source media="(max-width: 1024px)" srcSet={logoMobile} sizes="" />
              <img src={logoDesktop} alt="" />
            </picture>

            <nav className="desktop-only">
              <ul>
                <li>Home</li>
                <li>Menu</li>
                <li>Recompensas</li>
                <li>Gift Cards</li>
                <li>Lojas</li>
              </ul>
            </nav>
            <button className="outline desktop-only">PEGAR MEU CAFÉ</button>
            <button className="glass mobile-only" onClick={() => setModal(!modal)}><img src={modal ? menuClose : menuOpen} alt="" /></button>
          </Container>
        </header>
        <main>
            {modal ? <Modal modal={modal} setModal={setModal} /> : <Sections modal={modal} setModal={setModal} />}
        </main>
      </div>
    </>
  )
}