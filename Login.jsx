import {
  Modal,
  FormHelperText,
  Grid,
  Box,
  FormControl,
  InputLabel,
  Input,
  Typography,
  Button,
} from "@mui/material";
import React, { useState } from "react";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function Login({ open, setOpen, setIsLogin, setCurrentUser }) {
  const handleLogin = () => {
    const user = { email, password, name: "Jonson", balance: 45 };
    localStorage.setItem("user", JSON.stringify(user));
    setCurrentUser(user);
    setIsLogin(true);
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  return (
    <>
      <Modal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid container>
            <Grid xs={12} item>
              <Typography className="login-label" variant={"h4"}>
                Login
              </Typography>
            </Grid>
            <Grid xs={12} item>
              <FormControl>
                <InputLabel htmlFor="my-email">Email address</InputLabel>
                <Input
                  id="my-email"
                  type="email"
                  value={email}
                  onChange={handleEmail}
                  required
                />
              </FormControl>
            </Grid>
            <Grid xs={12} item>
              <FormControl>
                <InputLabel htmlFor="my-password">Password </InputLabel>
                <Input
                  id="my-password"
                  type="password"
                  value={password}
                  onChange={handlePassword}
                  required
                />
              </FormControl>
            </Grid>
            <Grid
              xs={12}
              item
              container
              style={{ marginTop: "20px" }}
              direction="row"
              justifyContent="space-evenly"
              alignItems="center"
            >
              <Grid item>
                <Button
                  onClick={handleLogin}
                  variant="contained"
                  color={"primary"}
                >
                  Login
                </Button>
              </Grid>
              <Grid item>
                <Button
                  onClick={() => {
                    setOpen(false);
                  }}
                  variant="contained"
                  color={"error"}
                >
                  Close
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </>
  );
}

export default Login;
