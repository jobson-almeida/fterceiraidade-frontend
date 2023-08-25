import React, { useState } from 'react';
import {
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import data1 from './data1';
import data2 from './data2';
import LearningPerformance from '../../dashboard/DashboardView/LearningPerformance';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const CoursePerformanceView = () => {
  const classes = useStyles();
  const [dataset1] = useState(data1);
  const [dataset2] = useState(data2);

  return (
    <Page
      className={classes.root}
      title="Desempenho do curso"
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
            <LearningPerformance title="DESEMPENHO - TURMAS DO CURSO" dataset={dataset1} filter={false} />
          </Grid>
          <Grid
            item
            lg={8}
            md={12}
            xl={12}
            xs={12}
          >
            <LearningPerformance title="DESEMPENHO - DISCENTES DO CURSO" dataset={dataset2} filter />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default CoursePerformanceView;
