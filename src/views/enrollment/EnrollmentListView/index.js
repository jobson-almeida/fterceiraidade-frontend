import React, { useState } from 'react';
import {
  Box,
  Grid,
  Container,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import Component from './Component';
import data from './data';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    maxWidth: 1024
  },
}));

const EnrollmentListView = () => {
  const classes = useStyles();
  const [loading] = useState(false);
  const [enrollments] = useState(data);

  return (
    <Page
      title="Matrícula"
    >
      <Container maxWidth={false}>
        <Box mt={3}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs container direction="column" className={classes.root}>
              <Component enrollments={enrollments} loading={loading} />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Page>
  );
};

export default EnrollmentListView;
