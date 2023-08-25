import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Grid,
  Fab,
  Container,
  makeStyles,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import CustomTooltip from 'src/utils/CustomTooltip';
import Component from './Component';
import data from './data';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1038,
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(4),
  },
}));

const QuestionListView = () => {
  const classes = useStyles();
  const [questions] = useState(data);
  const navigate = useNavigate();

  const addQuestion = () => {
    navigate('/app/question-register', { replace: false });
  };

  return (
    <Container maxWidth={false}>
      <CustomTooltip title="adicionar nova questão">
        <Fab color="primary" aria-label="add" className={classes.fab}>
          <AddIcon onClick={() => addQuestion()} />
        </Fab>
      </CustomTooltip>

      <div>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs container direction="column" spacing={2} className={classes.root}>
            {questions.map((question) => (
              <Grid
                item
                key={question.id}
                xs
              >
                <Component
                  className={classes.questionCard}
                  question={question}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default QuestionListView;
