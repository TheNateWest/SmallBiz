import React from "react";
import { useParams } from "react-router-dom";
import Map from "./Map";

export default function BizDetails(props) {
  const { id } = useParams();
  console.log(id);
  const foundBiz = props.businesses.find((business) => business.id == id);
  console.log(foundBiz);
  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
      <div>
        <h2>{foundBiz.name}</h2>
        <h4>{foundBiz.address}</h4>
        <p>{foundBiz.description}</p>
        <p>{foundBiz.hours}</p>
      </div>
      <Map
        address={foundBiz?.address}
        city={foundBiz?.city}
        state={foundBiz?.state}
        name={foundBiz?.name}
      />
    </div>
  );
}
