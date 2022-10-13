import React from "react";
import { Header } from "../../components/Header";
import { Hero } from "../../components/Hero";

import './style.scss'

export function Landing() {
  return (
      <div id="landing">
       <Header/>
       <Hero/>
      </div>
  )
}