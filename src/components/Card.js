import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { navigateToAdmin } from "../routes/coordinator";
import { CardContainer, DivText, DivTitle, Text } from "./styleCard";


function Card({ trip }) {
  const navigate = useNavigate();
  // console.log(trip)

  return (
    <CardContainer onClick={() => navigateToAdmin(navigate, trip.id)}>
      <DivTitle>
        <h3>{trip.name}</h3>
      </DivTitle>
      <DivText>
        <Text>{trip.date}</Text>
        <Text>Planeta: {trip.planet}</Text>
        <Text>{trip.description}</Text>
      </DivText>

    </CardContainer>
  );
}

export default Card;

