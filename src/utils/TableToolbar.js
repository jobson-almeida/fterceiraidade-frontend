import {
  Box,
  Divider,
  Toolbar, Typography
} from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  title: {
    flex: '1 1 100%',
  },
}));

const TableToolbar = ({ title }) => {
  const classes = useToolbarStyles();

  return (
    <Toolbar
      className={classes.root}
    >
      <Typography className={classes.title} variant="h4" id="tableTitle" component="div">
        {title}
      </Typography>
      <Box />
      <Divider />
    </Toolbar>
  );
};

TableToolbar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default TableToolbar;
