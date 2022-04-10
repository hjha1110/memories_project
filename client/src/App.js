import React, { useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";
import memories from "./images/memories.jpg";
import Posts from "./components/posts/Posts";
import Form from "./components/form/Form";
import { styles } from "./styles";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <Container maxWidth="lg">
      <AppBar position="static" color="inherit" sx={styles.appBar}>
        <Typography variant="h2" align="center" sx={styles.heading}>
          Memories
        </Typography>
        <img src={memories} alt="memories" height="60" sx={styles.image} />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
