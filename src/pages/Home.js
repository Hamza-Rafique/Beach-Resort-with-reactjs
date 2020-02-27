import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import FeacturedRoom from "../components/FeacturedRoom";

export default function Home() {
  return (
    <>
      <Hero>
        <Banner
          title="Luxurious rooms"
          subtitle="deluxe rooms starting at PKR:20k"
        >
          <Link to="/room" className="btn-primary">
            our rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeacturedRoom />
    </>
  );
}
