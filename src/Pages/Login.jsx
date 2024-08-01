import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const Peragraph = styled.p`
  font-size: 2em;
`;

const Input = styled.input`
  padding: 1em;
  border-radius: 10px;
  width: 280px;
`;

export default function Register() {
  const { register, reset, handleSubmit } = useForm();

  const [user, setUser] = useState([]);

  const mysubmit = async (data) => {
    try {
      const myuser = await axios.post(
        "http://localhost:5000/api/auth/register",
        data
      );
      console.log(myuser.data);
      setUser((predata) => [...predata, myuser.data]);
      reset();
    } catch (err) {
      console.log(err);
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
              padding: "50px",
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              width: "500px",
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
                    fontSize: "40px",
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
