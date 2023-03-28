import React from "react";
import { useForm } from "react-hook-form";
import Input from "./Input";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form
      style={{ maxWidth: "400px", paddingLeft: "200px" }}
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* first name field */}
      <h2 style={{ color: "white" }}>React Form Validation</h2>
      <label>First Name</label>
      <input
        {...register("firstName", {
          required: true,
          maxLength: 20,
          pattern: /^[A-Za-z]+$/i,
        })}
      />
      {errors?.firstName?.type === "required" && <p>This field is required</p>}
      {errors?.firstName?.type === "maxLength" && (
        <p>First name cannot exceed 20 characters</p>
      )}
      {errors?.firstName?.type === "pattern" && (
        <p>Alphabetical characters only</p>
      )}
      <br />
      {/* last Name Field */}
      <label>Laste Name</label>
      <input
        {...register("lastName", { required: true, pattern: /^[A-Za-z]+$/i })}
      />
      {errors?.lastName?.type === "required" && <p>This field is required</p>}
      {errors?.lastName?.type === "maxLength" && (
        <p>Last name cannot exceed 20 characters</p>
      )}
      {errors?.lastName?.type === "pattern" && (
        <p>Alphabetical characters only</p>
      )}{" "}
      <br />
      {/* Email */}
      <label>Email</label>
      <input
        {...register("email", {
          required: "Please enter your email",
          pattern: {
            value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
            message: "Please enter a valid email",
          },
        })}
      />
      {errors?.email && <p>Please enter a valid email address</p>} <br />
      {/* Age */}
      <label>Age</label>
      <input {...register("age", { required: true, min: 18, max: 99 })} />
      {errors.age && (
        <p>You Must be older then 18 and younger then 99 years old</p>
      )}{" "}
      <br />
      {/* Password */}
      <label>Password</label>
      <input
        {...register("password", {
          required: "Password is required.",
          minLength: {
            value: 6,
            message: "Password should be at-least 6 characters.",
          },
        })}
      />
      {/* console.log("first") */}
      {errors.password && (
        <p className="errorMsg">{errors.password.message}</p>
      )}{" "}
      <br />
      <input
        style={{ color: "white", background: "red", marginTop: "20px" }}
        type="submit"
      />
    </form>
  );
}
export default App;
