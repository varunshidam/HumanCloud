// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { Container } from "reactstrap";
// import Header from "../components/Header/Header";

// const Register = () => {
//   const navigate = useNavigate();
//   const [input, setInput] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   //value store to localStorage
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     localStorage.setItem("user", JSON.stringify(input));
//     navigate("/");
//   };
//   return (
//     <Container>
//       <Header />
//       <div className="register">
//         <form className="register_form" onSubmit={handleSubmit}>
//           <h1>Register</h1>
//           <label htmlFor="username">Username: </label>
//           <input
//             name="name"
//             type="text"
//             value={input.name}
//             id="userName"
//             placeholder="enter name"
//             onChange={(e) =>
//               setInput({ ...input, [e.target.name]: e.target.value })
//             }
//           />
//           <br />
//           <label htmlFor="email">Email: </label>
//           <input
//             name="email"
//             type="text"
//             value={input.email}
//             id="Email"
//             placeholder="enter email"
//             onChange={(e) =>
//               setInput({ ...input, [e.target.name]: e.target.value })
//             }
//           />
//           <br />
//           <label htmlFor="password">Password: </label>
//           <input
//             type="password"
//             name="password"
//             placeholder="enter password"
//             value={input.password}
//             onChange={(e) =>
//               setInput({ ...input, [e.target.name]: e.target.value })
//             }
//           />{" "}
//           <br />
//           <button type="submit" className="register_btn">
//             Register
//           </button>
//           <div className="mt-3 text-center">
//             Allready have an account <NavLink to="/">Login</NavLink>
//           </div>
//         </form>
//       </div>
//     </Container>
//   );
// };
// export default Register;

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

import React, { useState } from "react";
import { Paper, Grid, Typography, Button, Link } from "@mui/material";
import { NavLink } from "react-router-dom";
// import Avatar from "@mui/material";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: "400px",
    margin: "80px auto",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(input));
    navigate("/");
  };
  return (
    <>
      <Grid style={{ boxShadow: "20 10 25 0.5" }}>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <Typography variant="h3" style={{ margin: "10px 0px" }}>
              Register
            </Typography>
          </Grid>
          <form className="register_form" onSubmit={handleSubmit}>
            <TextField
              value={input.name}
              style={{ margin: "10px 0px" }}
              label="Username"
              placeholder="Enter Username"
              variant="standard"
              onChange={(e) =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
              fullWidth
              required
              name="name"
            />

            <TextField
              value={input.email}
              style={{ margin: "10px 0px" }}
              label="EmailId"
              placeholder="Enter Email"
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
              label="Password"
              placeholder="Enter Password"
              variant="standard"
              onChange={(e) =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
              fullWidth
              required
              name="password"
              type="password"
            />
            <Button
              style={{ margin: "50px 0px 20px " }}
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
            >
              <Link href="/" style={{ color: "white", textDecoration: "none" }}>
                register
              </Link>
            </Button>

            <Typography style={{ margin: "0px 40px", font: "bold" }}>
              Already Have An Account ?
              <Link href="/" style={{ fontSize: "18px" }}>
                Login
              </Link>
            </Typography>
          </form>
        </Paper>
      </Grid>
    </>
  );
};

export default Register;
