import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Card,
  Grid,
  CardContent,
  makeStyles,
  Typography
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
      <Card>
        <CardContent>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
          >
            <Grid item>
              <Typography variant="h3" component="h1">Cursos</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

Toolbar.propTypes = {
  className: PropTypes.string
};

export default Toolbar;
