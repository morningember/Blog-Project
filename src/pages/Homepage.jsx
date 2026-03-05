import React from "react";
import MainLayout from "../components/MainLayout";
import Hero from "./Hero";
import Articles from "../components/Articles";
import CTA from "./CTA";

const Homepage = () => {
  return (
    <MainLayout>
      <Hero />
      <Articles />
      <CTA />
    </MainLayout>
  );
};

export default Homepage;
