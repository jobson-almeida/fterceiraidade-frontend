import React, { useState } from 'react';
import {
  Fab,
  Grid,
  Container,
  makeStyles
} from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';
import PropTypes from 'prop-types';
import CustomTooltip from 'src/utils/CustomTooltip';
import Component from './Component';
import data from './data';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    maxWidth: 1024
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(4),
  },
  assessment: {
    maxWidth: 1024,
    marginTop: theme.spacing(3)
  }
}));

const AssessmentListView = ({ title }) => {
  const classes = useStyles();
  const [loading] = useState(false);
  const [assessments] = useState(data);
  const navigate = useNavigate();

  const addQuestion = () => {
    navigate('/app/assessment-register', { replace: false });
  };

  return (
    <Container maxWidth={false}>
      <CustomTooltip title="adicionar nova avaliação">
        <Fab color="primary" aria-label="add" className={classes.fab}>
          <AddIcon onClick={() => addQuestion()} />
        </Fab>
      </CustomTooltip>
      <div>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12} sm container className={title ? classes.root : classes.assessment}>
            <Grid item xs container direction="column">
              <Component assessments={assessments} loading={loading} title={title || 'Avaliações'} />
            </Grid>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

AssessmentListView.propTypes = {
  title: PropTypes.string
};

export default AssessmentListView;
