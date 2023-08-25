import React, { useState } from 'react';
import {
  Grid,
  makeStyles
} from '@material-ui/core';
import ClassRoomEditDetails from './ClassRoomEditDetails';
import StudentList from './StudentListView/Component';
import data from './StudentListView/data';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
  }
}));

const Component = () => {
  const classes = useStyles();
  const [students] = useState(data);

  return (
    <Grid
      container
      direction="row"
      alignItems="flex-start"
      spacing={1}
      className={classes.root}
    >
      <Grid
        item
      >
        <ClassRoomEditDetails />
      </Grid>
      <Grid
        item
        xs
      >
        <StudentList students={students} />
      </Grid>
    </Grid>
  );
};

export default Component;
