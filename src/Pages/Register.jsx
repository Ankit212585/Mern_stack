import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

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
          <div className="section-regristration">
            <div className="container grid grid-two-cols">
              <div className="registration-image">
                <img src="" alt="image" width="500" height="500" />
              </div>
              <div className="registration-form">
                <h1 className="mian-heading mb-3">
                  Regristration Form
                </h1>
                <br />
                <form onSubmit={handleSubmit(mysubmit)}>
                  <div>
                    <label htmlFor="username">username</label>
                    <input
                      {...register("username", { required: true })}
                      type="text"
                      placeholder="Enter your username"
                    />
                  </div>
                  <div>
                    <label htmlFor="email">email</label>
                    <input
                      {...register("email", { required: true })}
                      type="email"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label htmlFor="Phone_Number">Phone_Number</label>
                    <input
                      {...register("Phone_Number", {
                        required: true,
                      })}
                      type="number"
                      placeholder="Enter your Phone_Number"
                    />
                  </div>
                  <div>
                    <label htmlFor="password">password</label>
                    <input
                      {...register("password", { required: true })}
                      type="password"
                      placeholder="Enter your password"
                      required
                    />
                  </div>
                  <br />
                  <button type="submit" className="btn btn-submit">
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
