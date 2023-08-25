import React, { useState } from 'react';
import {
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import data from './data';
import LearningPerformance from '../../dashboard/DashboardView/LearningPerformance';
import AverageStudents from '../../dashboard/DashboardView/AverageStudents';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const StudentPerformanceView = () => {
  const classes = useStyles();
  const [dataset] = useState(data);

  return (
    <Page
      className={classes.root}
      title="Desempenho"
    >
      <Container maxWidth={false}>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={8}
            md={12}
            xl={12}
            xs={12}
          >
            <LearningPerformance title="DESEMPENHO - DISCENTE(S)" dataset={dataset} />
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <AverageStudents />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default StudentPerformanceView;
