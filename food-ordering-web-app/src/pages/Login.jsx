// // import React, { useRef } from "react";
// // import Helmet from "../components/Helmet/Helmet";
// // import CommonSection from "../components/UI/common-section/CommonSection";
// // import { Container, Row, Col } from "reactstrap";
// // import { Link } from "react-router-dom";
// // import { useNavigate } from "react-router-dom";
// // const Login = () => {
// //   const navigate = useNavigate();

// //   const email = useRef();
// //   const password = useRef();

// //   const submitHandler = () => {
// //     if (
// //       email.current.value == "abc@gmail.com" &&
// //       password.current.value == "abc@123"
// //     ) {
// //       localStorage.setItem("emailData", "abc@gmail.com");
// //       localStorage.setItem("passwordData", "abc@123");
// //     }
// //   };

// //   const navigateToHome = () => {
// //     localStorage.setItem("user", JSON.stringify({ role: "ADMIN" }));
// //     navigate("/home");
// //   };

// //   return (
// //     <Helmet title="Login">
// //       <CommonSection title="Login" />
// //       <section>
// //         <Container>
// //           <Row>
// //             <Col lg="6" md="6" sm="12" className="m-auto text-center">
// //               <form className="form mb-5" onSubmit={submitHandler}>
// //                 <div className="form__group">
// //                   <input
// //                     type="email"
// //                     placeholder="Email"
// //                     required
// //                     ref={email}
// //                   />
// //                 </div>
// //                 <div className="form__group">
// //                   <input
// //                     type="password"
// //                     placeholder="Password"
// //                     required
// //                     ref={password}
// //                   />
// //                 </div>
// //                 <button
// //                   type="submit"
// //                   className="addTOCart__btn"
// //                   onClick={navigateToHome}
// //                 >
// //                   Login
// //                 </button>
// //               </form>
// //               <Link to="/register">
// //                 Don't have an account? Create an account
// //               </Link>
// //             </Col>
// //           </Row>
// //         </Container>
// //       </section>
// //     </Helmet>
// //   );
// // };

// // export default Login;

// localStorage.setItem("user", JSON.stringify({ role: "ADMIN" }));
import React from "react";
import { Paper, Grid, Typography, Button, Link } from "@mui/material";
import Avatar from "@mui/material/Avatar";
// import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  console.log(input);
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: "400px",
    margin: "80px auto",
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // localStorage.setItem("user", JSON.stringify({ role: "ADMIN" }));
    const loggeduser = JSON.parse(localStorage.getItem("user"));
    if (
      input.email === loggeduser.email &&
      input.password === loggeduser.password
    ) {
      navigate("/home");
    } else {
      alert("writing email or password");
    }
  };

  return (
    <div>
      <Grid style={{ boxShadow: "20 10 25 0.5" }}>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <Avatar style={{ background: "green", margin: "15px" }}>
              {/* < LockOpenOutlinedIcon /> */}
            </Avatar>
            <Typography variant="h3" style={{ margin: "10px 0px" }}>
              Log In In
            </Typography>
          </Grid>
          <div>
            <form className="login_form" onSubmit={handleLogin}>
              <TextField
                value={input.email}
                style={{ margin: "10px 0px" }}
                label="email"
                placeholder="email"
                variant="standard"
                onChange={(e) =>
                  setInput({ ...input, [e.target.name]: e.target.value })
                }
                fullWidth
                required
                name="email"
              />

              <TextField
                value={input.password}
                style={{ margin: "10px 0px" }}
                onChange={(e) =>
                  setInput({ ...input, [e.target.name]: e.target.value })
                }
                label="Password"
                placeholder="Enter Password"
                variant="standard"
                type="password"
                name="password"
                fullWidth
                required
              />
              <Button
                // style={{ margin: "50px 0px 20px " }}
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Login
              </Button>
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
        </Paper>
      </Grid>
    </div>
  );
};

export default Login;
