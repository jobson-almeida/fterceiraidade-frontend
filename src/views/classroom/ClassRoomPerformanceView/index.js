import React, { useState } from 'react';
import {
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
import PropTypes from 'prop-types';
import LearningPerformance from '../../dashboard/DashboardView/LearningPerformance';
import data1 from './data1';
import data2 from './data2';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    marginTop: theme.spacing(-1)
  },
  performance: {
    marginTop: theme.spacing(3)
  }
}));

const ClassRoomPerformanceView = ({ title }) => {
  const classes = useStyles();
  const [dataset1] = useState(data1);
  const [dataset2] = useState(data2);

  return (
    <div className={title ? classes.root : classes.performance}>
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
            <LearningPerformance title="DESEMPENHO - TURMAS DO CURSO" dataset={dataset2} filter={false} />
          </Grid>
          <Grid
            item
            lg={8}
            md={12}
            xl={12}
            xs={12}
          >
            <LearningPerformance title="DESEMPENHO - DISCENTES DA TURMA" dataset={dataset1} filter={false} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

ClassRoomPerformanceView.propTypes = {
  title: PropTypes.string
};

export default ClassRoomPerformanceView;
