import React, { useState } from 'react';
import {
  Box,
  Container,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import Results from './Results';
import Toolbar from './Toolbar';
import data from './data';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const TeacherListView = () => {
  const classes = useStyles();
  const [search, setSearch] = useState('');
  const [teachers] = useState(data);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <Page
      className={classes.root}
      title="Docentes"
    >
      <Container maxWidth={false}>
        <Toolbar onChange={handleSearchChange} />
        <Box mt={3}>
          <Results search={search} teachers={teachers} />
        </Box>
      </Container>
    </Page>
  );
};

export default TeacherListView;
