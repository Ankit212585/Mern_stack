import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function Contact() {
  const { register, reset, handleSubmit } = useForm();

  const [user, setUser] = useState([]);

  const mysubmit = (data) => {
    setUser((predata) => [...predata, data]);
    reset();
    console.log("user data", data);
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
                <h1 className="mian-heading mb-3">Login Form</h1>
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
                    <label htmlFor="textBox">message</label>
                    <textarea
                      {...register("textBox", { required: true })}
                      type="text"
                      placeholder="Enter your email"
                    />
                  </div>

                  <br />
                  <button type="submit" className="btn btn-submit">
                    Send
                  </button>
                </form>
              </div>
            </div>
            <iframe
              style={{
                width: "100%",
                height: "600px",
                paddingBottom: "50px",
              }}
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d27811.482719125615!2d76.95278305!3d29.386818299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1722427693998!5m2!1sen!2sin"
              // width="100vw"
              // // height="600px"
              // style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </main>
      </section>
    </>
  );
}
