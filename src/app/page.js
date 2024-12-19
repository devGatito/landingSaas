"use client";

import { ThemeProvider } from "@/app/context/ThemeContext";
import { AuthProvider } from "@/app/context/AuthContext";
import NavBar from "./components/Layout/NavBar";
import Hero from "./components/Sections/Hero";
import Features from "./components/Sections/Features";
import KeySolutions from "./components/Sections/KeySolution";
import "./styles/globals.css";
import ProcessComponent from "./components/Sections/Process";
import CommentsComponent from "./components/Sections/CommentsComponent";
import PriceComponents from "./components/Sections/PriceComponents";
import QuestionsComponent from "./components/Sections/QuestionsComponent";
import FooterComponent from "./components/Sections/Footer";
function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <ThemeProvider>
        <NavBar />
        <Hero />
        <Features />
        <KeySolutions />
        <ProcessComponent />
        <CommentsComponent />
        <PriceComponents />
        <QuestionsComponent />
        <FooterComponent />
      </ThemeProvider>
    </AuthProvider>
  );
}

export default MyApp;
