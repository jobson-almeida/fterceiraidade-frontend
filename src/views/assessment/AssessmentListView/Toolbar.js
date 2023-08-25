import React from 'react';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

  const addAssessment = () => {
    navigate('/app/assessment-register', { replace: false });
  };

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
          onClick={addAssessment}
        >
          Adicionar avaliação
        </Button>
      </Box>
    </div>
  );
};

Toolbar.propTypes = {
  className: PropTypes.string,
  handleSearchChange: PropTypes.func
};

export default Toolbar;
