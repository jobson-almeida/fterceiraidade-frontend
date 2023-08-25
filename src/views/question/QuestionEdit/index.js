import React from 'react';
import {
  Grid,
  Container,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import QuestionEditDetails from './QuestionEditDetails';

const useStyles = makeStyles(() => ({
  root: {
  }
}));

const QuestionEdit = () => {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Questão"
    >
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
          spacing={3}
        >
          <Grid
            item
            lg={8}
            md={6}
            xs={12}
          >
            <QuestionEditDetails />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default QuestionEdit;
