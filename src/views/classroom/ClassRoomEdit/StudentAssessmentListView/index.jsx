import React, { useState } from 'react';
import {
  Grid,
  makeStyles
} from '@material-ui/core';
import Component from './Component';
import data from './data';

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 1024
  }
}));

const StudentAssessmentListView = () => {
  const classes = useStyles();
  const [assessments] = useState(data);

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs container direction="column" className={classes.root}>
        <Component assessments={assessments} />
      </Grid>
    </Grid>
  );
};

export default StudentAssessmentListView;
