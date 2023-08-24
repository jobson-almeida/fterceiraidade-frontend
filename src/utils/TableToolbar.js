import {
  Box,
  Divider,
  Toolbar, Typography
} from '@material-ui/core';
import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { lighten, makeStyles } from '@material-ui/core/styles';

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === 'light'
      ? {
        color: theme.palette.secondary.main,
        backgroundColor: lighten(theme.palette.secondary.light, 0.85),
      }
      : {
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.secondary.dark,
      },
  title: {
    flex: '1 1 100%',
  },
}));

const TableToolbar = (props) => {
  const classes = useToolbarStyles();
  const { numSelected, title } = props;

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      {
              (() => {
                switch (numSelected) {
                  case 0: return (
                    <Typography className={classes.title} variant="h4" id="tableTitle" component="div">
                      {title}
                    </Typography>
                  );
                  case 1: return (
                    <Typography className={classes.title} color="inherit" variant="subtitle1" component="div">
                      {numSelected}
                      {' '}
                      selecionado
                    </Typography>
                  );
                  default: return (
                    <Typography className={classes.title} color="inherit" variant="subtitle1" component="div">
                      {numSelected}
                      {' '}
                      selecionados
                    </Typography>
                  );
                }
              })()
      }
      <Box />
      <Divider />
    </Toolbar>
  );
};

TableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default TableToolbar;
