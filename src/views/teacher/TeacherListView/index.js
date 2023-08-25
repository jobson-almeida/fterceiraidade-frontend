import React from 'react';
import {
  Box,
  Container,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import Component from './Component';
import data from './data';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const TeacherListView = () => {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Docentes"
    >
      <Container maxWidth={false}>
        <Box mt={3}>
          <Component teachers={data} loading={false} />
        </Box>
      </Container>
    </Page>
  );
};

export default TeacherListView;
