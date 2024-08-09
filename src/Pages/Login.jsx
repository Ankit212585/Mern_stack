import axios from "axios";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../store/contexHook";

const Peragraph = styled.p`
  font-size: 1em;
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 10px;
  width: 280px;
  border: 1px solid black;
`;

export default function Register() {
  const { register, reset, handleSubmit } = useForm();

  // useContext

  const { storeToken } = useContext(AuthContext);
  const [user, setUser] = useState([]);

  const navigate = useNavigate();

  const mysubmit = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        data
      );
      setUser((predata) => [...predata, response.data]);
      storeToken(response.data.token);
      reset();
      alert("you Login successfully");
      navigate("/Home");
    } catch (err) {
      console.log(err);
      alert("An error occurred");
    }
  };

  return (
    <>
      <section>
        <main>
          <div
            style={{
              display: "block",
              margin: "0 auto",
              padding: "30px",
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              width: "400px",
              borderRadius: "50px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div>
                <h1
                  style={{
                    fontSize: "25px",
                    fontFamily: "sans-serif",
                    color: "purple",
                  }}
                >
                  Login Form
                </h1>
                <br />
                <form
                  style={{
                    display: "grid",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "10px",
                  }}
                  onSubmit={handleSubmit(mysubmit)}
                >
                  <Peragraph>Email</Peragraph>
                  <Input
                    {...register("email", { required: true })}
                    type="email"
                    placeholder="Enter your email"
                  />

                  <Peragraph>password</Peragraph>
                  <Input
                    {...register("password", { required: true })}
                    type="password"
                    placeholder="Enter your password"
                    required
                  />

                  <br />
                  <button
                    style={{
                      padding: "10px",
                      borderRadius: "5px",
                      border: "none",
                      background: "purple",
                      color: "white",
                    }}
                    type="submit"
                    className="btn btn-submit"
                  >
                    Login Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}
