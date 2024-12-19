"use client";

import { ThemeProvider } from "@/app/context/ThemeContext";
import { AuthProvider } from "@/app/context/AuthContext";
import Hero from "@/app/components/Sections/Hero/Hero";
import "./styles/globals.css";
import NavBar from "./components/Layout/NavBar";
import Features from "./components/Sections/Features/Features";
import KeySolutions from "./components/Sections/KeySolution/KeySolution";
import FooterComponent from "./components/Sections/Footer/Footer";
import ProccessComponent from "./components/Sections/ProcessEnhancer/Process";
import CommentsComponent from "./components/Sections/comments/CommentsComponent";
import PriceComponents from "./components/Sections/Price/PriceComponents";
import QuestionsComponent from "./components/Sections/Questions/QuestionsComponent";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <ThemeProvider>
        <NavBar />
        <Hero />
        <Features />
        <KeySolutions />
        {/*
                <ProccessComponent />
        <CommentsComponent/>
        */}

        <PriceComponents />
        <QuestionsComponent/>

        <FooterComponent />
      </ThemeProvider>
    </AuthProvider>
  );
}

export default MyApp;
