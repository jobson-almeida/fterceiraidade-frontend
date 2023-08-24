import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import Toolbar from './Toolbar';
import QuestionCard from './QuestionCard';
import data from './data';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },

}));

const QuestionList = () => {
  const classes = useStyles();
  const [questions] = useState(data);

  return (
    <Page
      className={classes.root}
      title="Questões"
    >
      <Container maxWidth={false}>
        <Toolbar />
        <Box mt={3}>
          <Grid container spacing={1}>

            {questions.map((question) => (
              <Grid
                item
                key={question.id}
                xs={8}
                spacing={3}
              >
                <QuestionCard
                  className={classes.questionCard}
                  question={question}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Page>
  );
};

export default QuestionList;
