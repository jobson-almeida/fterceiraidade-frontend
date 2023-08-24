import React from 'react';
import {
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import StudentRegisterDetails from './StudentRegisterDetails';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const StudentRegister = () => {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Discente - Registrar"
    >
      {/* <Container maxWidth="lg"> */}
      <Container maxWidth="false">
        {/* <Grid
          container
          spacing={3}
        > */}
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="flex-start"
          spacing={3}
        >
          <Grid
            item
            lg={8}
            md={6}
            xs={12}
          >
            <StudentRegisterDetails />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default StudentRegister;
