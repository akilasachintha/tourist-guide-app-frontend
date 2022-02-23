import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";

export default function ActionAreaCard(prop) {
  return (
    <Link to={`${prop.path}`} style={{ textDecoration: "none" }}>
      <Card sx={{ maxWidth: 345, my: 10 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={prop.src}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {prop.name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}
