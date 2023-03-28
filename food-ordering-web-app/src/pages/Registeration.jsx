import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { Typography, Link } from "@mui/material";

const Registeration = () => {
  const navigate = useNavigate();
  const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

  const formSchema = Yup.object().shape({
    name: Yup.string()
      .required("Please enter the required field")
      .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
      .min(3, "length must be greate than 3"),
    email: Yup.string()
      .required("Please enter the required field")
      .email("Email is invalid"),
    password: Yup.string()
      .matches(passwordRules, { message: "Please create a stronger password" })
      .required("Please enter the required field"),
  });
  const formOptions = { resolver: yupResolver(formSchema) };

  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;
  function onSubmit(input) {
    console.log(JSON.stringify(input, null, 4));
    localStorage.setItem("user", JSON.stringify(input));
    navigate("/");
    return false;
  }
  return (
    <div className="container mt-5  col-md-4">
      <h2>Register</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          {/* Username */}
          <label>Username</label>
          <input
            name="name"
            type="text"
            {...register("name")}
            className={`form-control ${errors.name ? "is-invalid" : ""}`}
          />
          <div className="invalid-feedback">{errors.name?.message}</div>

          {/* Email */}
          <label>Email</label>
          <input
            name="email"
            type="text"
            {...register("email")}
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
          />
          <div className="invalid-feedback">{errors.email?.message}</div>
          {/* Password */}
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
            Submit
          </button>
        </div>
      </form>
      <Typography style={{ margin: "0px 40px", font: "bold" }}>
        Already Have An Account ?
        <Link href="/" style={{ fontSize: "18px" }}>
          Login
        </Link>
      </Typography>
    </div>
  );
};

export default Registeration;
