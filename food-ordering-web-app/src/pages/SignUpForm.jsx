import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Paper, Grid, Typography, Button, Link } from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const navigate = useNavigate();
  const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

  const notify = () => {
    // Calling toast method by passing string
    toast("Log in succ...", {
      position: "top-center",
      autoClose: 1000,
      theme: "dark",
    });
  };

  const formSchema = Yup.object().shape({
    email: Yup.string()
      .required("Please enter the required field")
      .email("Email is invalid"),
    password: Yup.string()
      .matches(passwordRules, { message: "Provide Valid Password" })
      .required("Please enter the required field"),
  });
  const formOptions = { resolver: yupResolver(formSchema) };
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;

  function onSubmit(input) {
    const loggeduser = JSON.parse(localStorage.getItem("user"));
    if (
      input.email === loggeduser.email &&
      input.password === loggeduser.password
    ) {
      navigate("/home");
    } else if (
      input.email === loggeduser.email &&
      input.password === loggeduser.password
    ) {
      notify();
    } else {
      alert("Please Register your account ..!");
    }
    return false;
  }

  return (
    <div className="container mt-5 col-md-4">
      <h2>Log in</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          {/* Email */}
          <label>Email</label>
          <input
            name="email"
            type="text"
            {...register("email")}
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
          />
          <div className="invalid-feedback">{errors.email?.message}</div>

          <label>Password</label>
          <input
            name="password"
            type="password"
            {...register("password")}
            className={`form-control ${errors.password ? "is-invalid" : ""}`}
          />
          <div className="invalid-feedback">{errors.password?.message}</div>
        </div>

        <div className="mt-3">
          <button type="submit" className="btn btn-primary">
            Login
          </button>
          <ToastContainer />
        </div>
        <Typography
          style={{
            margin: "10px 90px 10px",
            fontSize: "18px",
          }}
        >
          <Link href="#">Forgot Password ?</Link>
        </Typography>
        <Typography style={{ margin: "0px 40px", font: "bold" }}>
          Do you Have An Account ?
          <Link href="/register" style={{ fontSize: "18px" }}>
            Register
          </Link>
        </Typography>
      </form>
    </div>
  );
};

export default SignUpForm;
