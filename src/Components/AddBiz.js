import React, { useState } from "react";
import Map from "./Map";
import { TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function AddBiz(props) {
  const navigate = useNavigate();
  const [biz, setBiz] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    hours: "",
    description: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setBiz({ ...biz, [name]: value });
  };
  const addBusiness = (e) => {
    e.preventDefault();
    props.addBusiness({ id: new Date().getTime(), ...biz });
    navigate("/");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: 600,
        alignItems: "center",
        margin: "auto",
      }}
    >
      <form
        onSubmit={(e) => addBusiness(e)}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
          marginTop: 40,
          alignSelf: "normal",
          marginBottom: 20
        }}
      >
        <TextField
          required
          onChange={handleChange}
          value={biz.name}
          name="name"
          label="Name"
          type="text"
        />
        <TextField
          required
          onChange={handleChange}
          value={biz.address}
          name="address"
          label="Address"
          type="text"
        />
        <TextField
          required
          onChange={handleChange}
          value={biz.city}
          name="city"
          label="City"
          type="text"
        />
        <TextField
          required
          onChange={handleChange}
          value={biz.state}
          name="state"
          label="State"
          type="text"
        />
        <TextField
          required
          onChange={handleChange}
          value={biz.hours}
          name="hours"
          label="Hours"
          type="text"
        />
        <TextField
          required
          onChange={handleChange}
          value={biz.description}
          name="description"
          label="Description"
          type="text"
        />
        <Button
          type="submit"
          className="login-button"
          variant="contained"
          color="primary"
        >
          Submit
        </Button>
      </form>
      <Map
        address={biz?.address}
        city={biz?.city}
        state={biz?.state}
        name={biz?.name}
      />
    </div>
  );
}
