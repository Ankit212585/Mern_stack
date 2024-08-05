import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import axios from "axios";

// Here is my css
const Peragraph = styled.p`
  font-size: 2em;
`;

const Input = styled.input`
  padding: 1em;
  border-radius: 10px;
  width: 280px;
`;

export default function Contactpage() {
  const { register, reset, handleSubmit } = useForm();

  // useContext
  const [user, setUser] = useState([]);

  const mysubmit = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/form/Contactpage",
        data
      );
      console.log(response.data);
      setUser(response.data);
      reset();
      alert("message send successfully");
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
                  Contact form
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
                  <Peragraph>Username</Peragraph>
                  <Input
                    {...register("username", { required: true })}
                    type="text"
                    placeholder="Enter your username"
                  />

                  <Peragraph>Email</Peragraph>
                  <Input
                    {...register("Email", { required: true })}
                    type="email"
                    placeholder="Enter your Email"
                    required
                  />

                  <Peragraph>Message</Peragraph>
                  <textarea
                    style={{
                      height: "100px",
                      borderRadius: "20px",
                      padding: "10px",
                      border: "1px solid black",
                    }}
                    {...register("messageBox", { required: true })}
                    type="text"
                    placeholder="Enter your message"
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
                    Submit
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
