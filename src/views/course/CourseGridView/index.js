import React, { useState, useCallback } from 'react';
import {
  Box,
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import Page from 'src/components/Page';
import Toolbar from './Toolbar';
import Component from './Component';
import data from './data';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  card: {
    height: '100%'
  },
  pagination: {
    // position: 'absolute',
    bottom: '0px',
    zIndex: '0'
  },
}));

const CourseList = () => {
  const classes = useStyles();
  const [courses] = useState(data);
  const [limit] = useState(9);
  const [page, setPage] = useState(
    localStorage.getItem('pagination_course') ? parseFloat(localStorage.getItem('pagination_course')) : 1
  );

  const handlePageChange = useCallback((event, newPage) => {
    setPage(newPage);
    localStorage.setItem('pagination_course', newPage);
  }, []);

  return (
    <Page
      className={classes.root}
      title="Cursos"
    >
      <Container maxWidth={false}>
        <Toolbar />
        <Box mt={3}>
          <Grid
            container
            spacing={3}
          >
            {courses.slice((page - 1) * limit, (page - 1) * limit + limit).map((course) => (
              <Grid
                item
                key={course.id}
                lg={4}
                md={6}
                xs={12}
              >
                <Component
                  className={classes.card}
                  course={course}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box
          mt={3}
          display="flex"
          justifyContent="center"
        >
          <Pagination
            className={classes.pagination}
            color="primary"
            size="small"
            count={Math.ceil(courses.length / 9)}
            onChange={handlePageChange}
            page={page}
            siblingCount={0}
          />
        </Box>
      </Container>
    </Page>
  );
};

export default CourseList;
