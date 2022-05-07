import { Avatar, Button, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Game from "./Game";
import Login from "./Login";

export const Header = ({ result, setResult }) => {
  const [currentUser, setCurrentUser] = useState({});
  const [isLogin, setIsLogin] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [openGame, setOpenGame] = useState(false);
  const [balance, setBalance] = useState(434);
  const handleLogout = () => {
    localStorage.removeItem("user");
    setCurrentUser({});
    setIsLogin(false);
  };
  const handleLogin = () => {
    setOpenLogin(true);
  };
  const handleGame = () => {
    setOpenGame(true);
  };
  useEffect(() => {
    if (localStorage.getItem("user")) {
      setCurrentUser(JSON.parse(localStorage.getItem("user")));
      setIsLogin(true);
    }
  }, []);
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        className="border"
      >
        <Grid item>
          <Typography>Aatib Manusri</Typography>
        </Grid>
        <Grid item>
          <Grid container item>
            {!isLogin ? (
              <Grid item>
                <Button variant="link" onClick={handleLogin}>
                  Login
                </Button>
              </Grid>
            ) : (
              <Grid item>
                <Button variant="link" onClick={handleLogout}>
                  Logout
                </Button>
              </Grid>
            )}
            <Grid item>
              <Button variant="link" onClick={handleGame}>
                Play
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container alignItems="center" spacing={4}>
            <Grid item>
              <Typography>${balance}</Typography>
            </Grid>
            <Grid item>
              <Avatar>H</Avatar>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Login
        setIsLogin={setIsLogin}
        setCurrentUser={setCurrentUser}
        open={openLogin}
        setOpen={setOpenLogin}
      />
      <Game
        balance={balance}
        setBalance={setBalance}
        open={openGame}
        setOpen={setOpenGame}
        result={result}
        setResult={setResult}
      />
    </>
  );
};
