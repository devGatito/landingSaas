"use client"; 

import { ThemeProvider } from "@/app/context/ThemeContext";
import { AuthProvider } from "@/app/context/AuthContext";
import Hero from "@/app/components/Sections/Hero/Hero";
import './styles/globals.css'
import NavBar from "./components/Layout/NavBar";
import Features from "./components/Sections/Features/Features";
import KeySolutions from "./components/Sections/KeySolution/KeySolution";
import FooterComponent from "./components/Sections/Footer/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <ThemeProvider>
        <NavBar/>
        <Hero/>
        <Features/>
        <KeySolutions/>
        <FooterComponent/>
      
        
       
      </ThemeProvider>
    </AuthProvider>
  );
}

export default MyApp;
