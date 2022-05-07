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
const spinItems = {
  heart: {
    html: <span className="heart">&#10084;</span>,
    label: "Heart",
    value: "heart",
  },
  club: {
    html: <span className="club">&#9827;</span>,
    label: "Club",
    value: "club",
  },
  diamond: {
    html: <span className="diamond">&#9830;</span>,
    label: "Diamond",
    value: "diamond",
  },
  spade: {
    html: <span className="spade">&#9824;</span>,
    label: "Spade",
    value: "spade",
  },
};
function randomItem() {
  const indexes = [0, 1, 2, 3];
  const item = ["heart", "club", "diamond", "spade"];
  return item[indexes[Math.floor(Math.random() * indexes.length)]];
}
function Game({ open, setOpen, balance, setBalance, result, setResult }) {
  const [spinResult, setSpinResult] = useState([]);
  const [status, setStatus] = useState("");
  const compute = (test) => {
    setBalance(balance - 2);
    var tempResult = test
      ? ["spade", "spade", "spade"]
      : [randomItem(), randomItem(), randomItem()];
    var score = new Set(tempResult);
    var prize = 0;
    if (score.size == 3) {
      setStatus("YOu Lose !");
    } else if (score.size == 2) {
      prize = 0.5;
      setStatus("Nice Try ! You Win $0.5");
    } else {
      if (tempResult[0] == "spade") {
        prize = 5;
        setStatus("Jackpot ! You Win $5.0");
      } else {
        setStatus("You Win ! You Win $2.0");
      }
    }
    setBalance(balance + prize);
    setSpinResult([
      spinItems[tempResult[0]],
      spinItems[tempResult[1]],
      spinItems[tempResult[2]],
    ]);
    let current = +new Date();
    var today = new Date();
    var date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    var time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    setResult([
      ...result,
      { id: "game" + current, slot: prize, time: date + " " + time },
    ]);
  };

  const handleSpin = () => {
    compute(false);
  };
  const testData = () => {
    compute(true);
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
            <Grid item xs={12}>
              <Grid
                container
                justifyContent="space-between"
                alignItems={"center"}
                className="game-section"
              >
                <Grid className="text-center" xs={12}>
                  <Typography variant="h3">Spin And Win</Typography>
                </Grid>
                <Grid item xs={12} lg={8} className="mx-auto">
                  <Grid container justifyContent={"space-between"}>
                    {spinResult.map((value, index) => {
                      return (
                        <Grid key={index} item>
                          {value.html}
                        </Grid>
                      );
                    })}
                  </Grid>
                </Grid>
                {spinResult.length != 0 && (
                  <>
                    <Grid item xs={12} className="text-center p-b-3">
                      <Typography className="text-center">{status}</Typography>
                    </Grid>
                  </>
                )}
                {spinResult.length == 0 && (
                  <Grid item className="  mx-auto">
                    <Typography variant="h4" className="initial-spin-msg">
                      Press Spin Button
                    </Typography>
                  </Grid>
                )}
              </Grid>
            </Grid>
            <Grid item xs={12} container justifyContent="space-around">
              <Button variant="outlined" color={"success"} onClick={handleSpin}>
                Spin
              </Button>
              <Button variant="outlined" onClick={testData}>
                Test
              </Button>
              <Button
                variant="outlined"
                color={"error"}
                onClick={() => {
                  setOpen(false);
                }}
              >
                Close
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </>
  );
}

export default Game;
