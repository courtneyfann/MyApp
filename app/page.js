'use client'
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
export default function HomePage() {
      return (
        <>
        <Navbar/>
        <Home/>
        <About/>
        <Portfolio/>
        </>
      );
    }