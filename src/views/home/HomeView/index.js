import React from 'react';
import {
  Container,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import ComponentCourse from './ComponentCourse';
import data from './data';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  card: {
    height: '100%'
  },
  pagination: {
    bottom: '0px',
    zIndex: '0'
  },
}));

const HomeView = () => {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Home"
    >
      <Container maxWidth={false}>
        <ComponentCourse courses={data} />
      </Container>
    </Page>
  );
};

export default HomeView;
