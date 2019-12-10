import React, { useState, useContext, useEffect } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { TextField } from "@material-ui/core";
import { login } from "../../services/login";
import { AuthContext } from "../../context/auth";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailClick, setEmailClick] = useState(false);
  const [data, setData] = useContext(AuthContext);
  const handleBack = () => {
    props.history.push('/login');
  };
  useEffect(() => {
    localStorage.removeItem("user");
    localStorage.removeItem("userToken");
  }, []);
  const handleBackLogin = () => {
    props.history.push("/login");
  };
  const handleSignUp = () => {
    props.history.push("/register");
  };
  const handleClick = () => {
    setEmailClick(true);
  };
  const handleChangeEmail = e => {
    setEmail(e.target.value);
    console.log(email);
  };
  const handleChangePassword = e => {
    setPassword(e.target.value);
    console.log(password);
  };
  const handleLogin = async () => {
    const data = {
      email: email,
      password: password
    };
    login(data)
      .then(res => {
        setData(res.user);
        localStorage.setItem("user", JSON.stringify(res.user));
        localStorage.setItem("userToken", "Bearer " + res.access_token);
        localStorage.setItem("login", true);
        props.history.push("/");
        console.log(res);
      })
      .catch(error => {

        if (error.response.statusText == "Unauthorized") {
          alert("email & password belum terdaftar");

        }
      });
  };

  const { classes } = props;
  return (
    <Container maxWidth="xs" className={classes.container}>

      <Grid className={classes.container}>
        <Typography className={classes.welcome}>Welcome Back !</Typography>
        <div align="center">
          <Grid item xs className={classes.email}>
            <TextField
              name="email"
              type="email"
              label="Email"
              value={email}
              onChange={handleChangeEmail}
              fullWidth={true}
              style={{ maxWidth: "90%" }}
            />
          </Grid>
          <Grid item xs className={classes.password}>
            <TextField
              name="password"
              type="password"
              label="Password"
              value={password}
              onChange={handleChangePassword}
              fullWidth={true}
              style={{ maxWidth: "90%" }}
            />
          </Grid>

          <Box className={classes.buttonBoxBottom}>
            <Button
              disableRipple={true}
              id="submit-button"
              className={classes.buttonBottom}
              style={{
                backgroundColor: "#F7A647"
              }}
              onClick={handleLogin}
            >
              <Grid container spacing={0}>
                <Grid item xs={12} className={classes.gridButton}>
                  <Typography className={classes.textButtonBottom}>
                    Lanjut
                  </Typography>
                </Grid>
              </Grid>
            </Button>
          </Box>
          <Box className={classes.buttonBoxBottom}>
            <Button
              disableRipple={true}
              id="submit-button"
              className={classes.buttonBottom}
              style={{
                backgroundColor: "#F7A647"
              }}
              onClick={handleBackLogin}
            >
              <Grid container spacing={0}>
                <Grid item xs={12} className={classes.gridButton}>
                  <Typography className={classes.textButtonBottom}>
                    Kembali
                  </Typography>
                </Grid>
              </Grid>
            </Button>
          </Box>
        </div>
        <Grid item align="center">
          <Typography style={{ marginTop: "1em" }}>
            Not Yet a member ?
          </Typography>
          <Typography style={{ fontWeight: "bold" }} onClick={handleSignUp}>
            Sign Up
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Login;