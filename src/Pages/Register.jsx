import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const Peragraph = styled.p`
  font-size: 20px;
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
    } catch (err) {
      console.log(err);
      reset();
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
                  Regristration Form
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
                  <Peragraph>username</Peragraph>
                  <Input
                    {...register("username", { required: true })}
                    type="text"
                    placeholder="Enter your username"
                  />

                  <Peragraph>email</Peragraph>
                  <Input
                    {...register("email", { required: true })}
                    type="email"
                    placeholder="Enter your email"
                  />

                  <Peragraph>Phone_Number</Peragraph>
                  <Input
                    {...register("Phone_Number", {
                      required: true,
                    })}
                    type="number"
                    placeholder="Enter your Phone_Number"
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
                    Register Now
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
