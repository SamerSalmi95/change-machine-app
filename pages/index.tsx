import Head from "next/head";
import { useState } from "react";
import { Grid } from "@mui/material";
import { TextField } from "@/components/TextField";
import { Card } from "@/components/Card";
import { getChangeAmounts } from "@/utils/utils";

const HomePage = () => {
  const [amount, updateAmount] = useState(0);
  const { piecesOfTen, piecesOfFive, piecesOfTwo, error } =
    getChangeAmounts(amount);
  return (
    <>
      <Head>
        <title>Change machine</title>
        <meta name="description" content="Change machine application" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/coin.ico" />
      </Head>
      <Grid container alignItems="center" direction="column" gap={2}>
        <Grid item>
          <TextField
            label="Amount"
            updateAmount={updateAmount}
            errorLabel={error}
          />
        </Grid>
        <Grid item container justifyContent="center">
          <Grid item data-testid="10EurosBillCard">
            <Card
              image="/ten-euros.jpeg"
              amount={piecesOfTen}
              title="10 euros bill"
            />
          </Grid>
          <Grid item data-testid="5EurosBillCard">
            <Card
              image="/five-euros.png"
              amount={piecesOfFive}
              title="5 euros bill"
            />
          </Grid>
          <Grid item data-testid="2EurosCoinCard">
            <Card
              image="/two-euros.jpeg"
              amount={piecesOfTwo}
              title="2 euros coin"
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default HomePage;
