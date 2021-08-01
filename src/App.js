import React from "react";
// import Typography from '@material-ui/core/Typography';
//  or
// import { Typography } from '@material-ui/core';
import {
  Typography,
  AppBar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
} from "@material-ui/core";
//typography is text
import { PhotoCamera } from "@material-ui/icons";
//icons
import useStyles from "./style";
const card = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const App = () => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera className={classes.icon} />
          <Typography variant="h6">Memories</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container}>
          <Container maxWidth="md">
            <Typography
              variant="h1"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Quick description
            </Typography>
            <Typography
              variant="h6"
              align="center"
              color="textSecondary"
              paragraph
            >
              Hello this is a practice work to understand the application of
              Material UI for a responsive and clean user interface using
              ReactJs. Various components are used and classes are used to
              enable styling which is mentioned in the style.js
            </Typography>
            <div className={classes.buttons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="Primary">
                    See Photos
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="Primary">
                    Secondary Action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {card.map((cards) => (
              <Grid item key={card} xs={12} sm={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="http://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5">
                      Heading
                    </Typography>
                    <Typography>
                      Media card to write about the content
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <footer className={classes.footer}>
        <Typography variant="h6">@2021 Material Ui practice</Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Happy memories
        </Typography>
      </footer>
    </>
  );
};
export default App;
