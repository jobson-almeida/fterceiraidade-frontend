import React from 'react';
import {
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import CourseViewDetails from './CourseViewDetails';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const CourseEdit = () => {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Curso - Visualizar"
    >
      <Container maxWidth="lg">
        {/* <Container maxWidth="false"> */}
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
            <CourseViewDetails />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default CourseEdit;
