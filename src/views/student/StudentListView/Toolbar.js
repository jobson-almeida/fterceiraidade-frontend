import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Button,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {},
}));

const Toolbar = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Box
        display="flex"
        justifyContent="flex-end"
      >
        <Button
          color="primary"
          variant="contained"
          // onClick={}
        >
          Desempenho
        </Button>
      </Box>
    </div>
  );
};

Toolbar.propTypes = {
  className: PropTypes.string
};

export default Toolbar;
