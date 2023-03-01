import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";
import { TripsContainer } from "./styleHomePage";
import useRequestData from "../hooks/useRequestData";

function HomePage() {
  const [dados] = useRequestData([], "/trips");
  const viagens = dados.trips;
  const mostraViagens =
    viagens &&
    viagens.map((trip) => {
      return <Card key={trip.id} trip={trip} />;
    });

  return <TripsContainer>{mostraViagens}</TripsContainer>;
}

export default HomePage;
