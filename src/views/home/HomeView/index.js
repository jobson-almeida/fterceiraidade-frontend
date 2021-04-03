import React from 'react';
import {
  Box,
  Container,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
  }
}));

const HomeView = () => {
  const classes = useStyles();
  return (
    <Page
      className={classes.root}
      title="Home"
    >
      <Container maxWidth={false}>
        <Box mt={3}>
          <h1>Home</h1>
        </Box>
      </Container>
    </Page>
  );
};

export default HomeView;
