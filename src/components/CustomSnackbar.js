import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import PropTypes from 'prop-types';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function CustomSnackbar({
  openStatus, handleClose, timeClose, message, severity
}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        open={openStatus}
        autoHideDuration={timeClose === null ? 0 : timeClose}
        onClose={handleClose}
      >
        <Alert severity={severity}>{message}</Alert>
      </Snackbar>
    </div>
  );
}

CustomSnackbar.propTypes = {
  openStatus: PropTypes.bool,
  handleClose: PropTypes.func,
  message: PropTypes.string,
  timeClose: PropTypes.number,
  severity: PropTypes.string
};
