import * as React from "react";
import MuiCard from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

interface CardProps {
  image: string;
  title: string;
  amount: number;
}

export const Card = ({ image, title, amount }: CardProps) => {
  return (
    <MuiCard sx={{ minWidth: 345, margin: 2 }}>
      <CardMedia sx={{ height: 200 }} image={image} />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          sx={{ textAlign: "center", color: "GrayText", fontFamily: "Poppins" }}
        >
          {title}
        </Typography>
        <Typography gutterBottom variant="h6" sx={{ fontFamily: "Poppins" }}>
          Quantity: {amount}
        </Typography>
      </CardContent>
    </MuiCard>
  );
};
