import React, { useContext } from "react";
import { AuthContext } from "../store/contexHook";

export default function Home() {
  const { mydata } = useContext(AuthContext);

  // console.log(mydata);

  return (
    <center>
      <h1 style={{ fontSize: "36px", fontFamily: "sans-serif" }}>
        Love Ankit 💕💕😍😎
      </h1>
      <h1
        style={{
          marginTop: "50px",
          fontSize: "24px",
          fontFamily: "sans-serif",
        }}
      >
        Welcome mere baache tra he intzaar tha muje😁😁
      </h1>
      <ul>
        <center>
          <li>{mydata.username}</li>
          <li>{mydata.email}</li>
          <li>{mydata.Phone_Number}</li>
        </center>
      </ul>
    </center>
  );
}
