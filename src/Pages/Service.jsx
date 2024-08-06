import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../store/contexHook";
import axios from "axios";
import styled from "styled-components";

const Div1 = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  font-size: 12px;
`;

const Peragraph = styled.p`
  font-weight: bold;
`;

export default function Service() {
  const { mydata } = useContext(AuthContext);
  const [ourData, setOurData] = useState([]);

  const serviceData = async (data) => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/service",
        data
      );
      console.log(response.data);
      setOurData(response.data);
    } catch (err) {
      console.log("Something Went wrong", err);
    }
  };

  useEffect(() => {
    serviceData();
  }, []);

  return (
    <>
      <div style={{ margin: "20px" }}>
        <h1 style={{ fontSize: "36px" }}>
          {`Hello ${mydata.username} sir Welcome to our services`}{" "}
        </h1>
        <p style={{ fontSize: "16px", marginTop: "20px" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Modi perferendis aliquid vitae eveniet, officia ab. Expedita
          vitae, excepturi odit reprehenderit nam accusamus suscipit
          cupiditate ducimus cum quas dolorum dicta numquam! Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          deserunt corporis dolore voluptate voluptatibus nostrum
          alias amet quos commodi beatae fuga hic harum eos,
          dignissimos ipsa earum eaque. Nihil, rem? Lorem, ipsum dolor
          sit amet consectetur adipisicing elit. Quas, quia omnis,
          quibusdam cum officia, sed ratione qui iure temporibus
          mollitia enim. Dicta et architecto magnam fugiat, obcaecati
          accusamus magni rerum!
        </p>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "50px",
          justifyContent: "center",
          alignItems: "center",
          margin: "20px",
        }}
      >
        {ourData.map((data) => (
          <div
            style={{
              width: "400px",
              height: "250px",
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
              borderRadius: "10px",
            }}
          >
            <div
              style={{
                flex: 1,
                height: "120px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h1 style={{ color: "crimson", fontSize: "24px" }}>
                {data.service}
              </h1>
            </div>
            <div style={{ border: "1px solid black" }}></div>
            <div
              style={{
                flex: 1,
                flexDirection: "column",
                padding: "20px",
              }}
            >
              <Div1>
                <Peragraph>Description :- </Peragraph>
                <span>{data.description}</span>
              </Div1>
              <Div1>
                <Peragraph>price :</Peragraph>
                <span>{data.price}</span>
              </Div1>
              <Div1>
                <Peragraph>provider :</Peragraph>
                <span>{data.provider}</span>
              </Div1>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
