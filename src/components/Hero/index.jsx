import React from 'react';
import rocketCoffee from '../../assets/rocket-coffee.png'
import arrow from '../../assets/arrow.svg'
import { Container } from '../Container';
import './style.scss';

export function Hero() {
  return (
    <main className='app-hero'>
      <Container>
        <section className='flex-center' id="description">
          
        <h2 className="mobile-only">O café que fará seu código decolar para
          o próximo nível.
        </h2>
        </section>
        <section className="mobile-only flex-center" id='take-my-coffee'>
          <button className="outline"><div className="content">PEGAR MEU CAFÉ <img src={arrow} alt="flecha" /></div></button>
        </section>
        <div>
          <h1>Great Coffee</h1>
          <h1 className='greate-code'>&lt;Greate Code/&gt;</h1>
        </div>
      </Container>
    </main>
  )
}