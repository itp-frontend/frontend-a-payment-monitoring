import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { useLongPress } from "use-long-press";

const generateRandomNumber = () => {
  return Math.floor(Math.random() * 9) + 1;
};

export default function Backdoor({ handleOpen }) {
  const [isError, setIsError] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);
  // eslint-disable-next-line
  const [num1, setNum1] = useState(generateRandomNumber());
  // eslint-disable-next-line
  const [num2, setNum2] = useState(generateRandomNumber());
  const bind = useLongPress(() => handleOpen(), {
    threshold: 5000,
  });
  const bind2 = useLongPress(() => setIsRevealed(true), {
    threshold: 3000,
  });

  return (
    <Grid container justifyContent="center">
      {isRevealed && (
        <Paper elevation={2} style={{ padding: "1em", margin: "1em" }}>
          <Grid container direction="column" alignItems="center" spacing={1}>
            <Grid item>
              <Typography variant="h4">
                {num1} <span {...bind}>+</span> {num2} =
              </Typography>
            </Grid>
            <Grid item>
              <TextField
                type="number"
                name="result"
                label="Result"
                variant="outlined"
                margin="dense"
                onChange={() => setIsError(false)}
                error={isError}
                helperText={isError && "Try again"}
              ></TextField>
            </Grid>
            <Grid item style={{ width: "100%" }}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={() => setIsError(true)}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Paper>
      )}
      {!isRevealed && <h1 {...bind2}>Error 404 - Page not found</h1>}
    </Grid>
  );
}