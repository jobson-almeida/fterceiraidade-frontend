import React, { useCallback, useState } from 'react';
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

const ClassRoomGrid = () => {
  const classes = useStyles();
  const [classrooms] = useState(data);
  const [limit] = useState(9);
  const [page, setPage] = useState(
    localStorage.getItem('pagination_classroom') ? parseFloat(localStorage.getItem('pagination_classroom')) : 1
  );

  const handlePageChange = useCallback((event, newPage) => {
    setPage(newPage);
    localStorage.setItem('pagination_classroom', newPage);
  }, []);

  return (
    <Page
      className={classes.root}
      title="Turmas"
    >
      <Container maxWidth={false}>
        <Toolbar />
        <Box mt={3}>
          <Grid
            container
            spacing={3}
          >
            {classrooms.slice((page - 1) * limit, (page - 1) * limit + limit).map((classroom) => (
              <Grid
                item
                key={classroom.id}
                lg={4}
                md={6}
                xs={12}
              >
                <Component
                  className={classes.card}
                  classroom={classroom}
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
            count={Math.ceil(classrooms.length / 9)}
            onChange={handlePageChange}
            defaultPage={1}
            page={page}
            siblingCount={0}
          />
        </Box>
      </Container>
    </Page>
  );
};

export default ClassRoomGrid;
