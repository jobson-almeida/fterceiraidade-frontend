import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Badge from '@material-ui/core/Badge';
import {
  Box,
  Button,
  makeStyles
} from '@material-ui/core';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  root: {},
}));

const Toolbar = ({ className, items, ...rest }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const addQuestion = () => {
    // setItem(Math.max(item + 1, 0));
    navigate('/app/question-register', { replace: false });
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
        <Badge
          color="error"
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          badgeContent={items}
        >
          <Button
            color="primary"
            variant="contained"
            onClick={() => addQuestion()}
          >
            Adicionar questão
          </Button>
        </Badge>
        {/* <Badge color="primary" badgeContent={item}>
          <ShoppingCartIcon />
        </Badge> */}
      </Box>
    </div>
  );
};

Toolbar.propTypes = {
  className: PropTypes.string,
  items: PropTypes.number
};

export default Toolbar;
