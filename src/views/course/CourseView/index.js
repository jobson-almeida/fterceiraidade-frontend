import React from 'react';
import {
  Container,
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
      title="Curso"
    >
      <Container maxWidth="lg">
        {/* <Container maxWidth="false"> */}
        <div>
          <CourseViewDetails />
        </div>
      </Container>
    </Page>
  );
};

export default CourseEdit;
