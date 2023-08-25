import React, { useState } from 'react';
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

const StudentListView = () => {
  const classes = useStyles();
  const [loading] = useState(false);
  const [students] = useState(data);

  return (
    <Page
      className={classes.root}
      title="Discentes"
    >
      <Container maxWidth={false}>
        <Box mt={3}>
          <Component students={students} loading={loading} />
        </Box>
      </Container>
    </Page>
  );
};

export default StudentListView;
