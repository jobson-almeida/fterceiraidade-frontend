import React, { useState } from 'react';
import {
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import LearningPerformance from './LearningPerformance';
import FillingVacancies from './FillingVacancies';
import TotalStudents from './TotalStudents';
import data1 from './data1';
import data2 from './data2';
import data3 from './data3';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const Dashboard = () => {
  const classes = useStyles();

  const [dataset1] = useState(data1);
  const [dataset2] = useState(data2);
  const [dataset3] = useState(data3);

  return (
    <Page
      className={classes.root}
      title="Dashboard"
    >
      <Container maxWidth={false}>
        <Grid
          container
          spacing={3}
        >

          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <TotalStudents />
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <FillingVacancies />
          </Grid>

          <Grid
            item
            lg={8}
            md={12}
            xl={12}
            xs={12}
          >
            <LearningPerformance title="DESEMPENHO DOS CURSOS" dataset={dataset1} />
          </Grid>
          <Grid
            item
            lg={8}
            md={12}
            xl={12}
            xs={12}
          >
            <LearningPerformance title="DESEMPENHO DAS TURMAS" dataset={dataset2} />
          </Grid>
          <Grid
            item
            lg={8}
            md={12}
            xl={12}
            xs={12}
          >
            <LearningPerformance title="DESEMPENHO DOS ALUNOS" dataset={dataset3} />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default Dashboard;
