import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  // Card,
  // CardContent,
  // TextField,
  // InputAdornment,
  // SvgIcon,
  makeStyles
} from '@material-ui/core';
// import { Search as SearchIcon } from 'react-feather';

const useStyles = makeStyles(() => ({
  root: {},
}));

const Toolbar = ({ className, ...rest }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const addCourse = () => {
    navigate('/app/course-register', { replace: false });
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
          onClick={addCourse}
        >
          Adicionar curso
        </Button>
      </Box>
      {/* <Box mt={3}>
        <Card>
          <CardContent>
            <Box maxWidth={500}>
              <TextField
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SvgIcon
                        fontSize="small"
                        color="action"
                      >
                        <SearchIcon />
                      </SvgIcon>
                    </InputAdornment>
                  )
                }}
                placeholder="Procurar curso"
                variant="outlined"
              />
            </Box>
          </CardContent>
        </Card>
      </Box> */}
    </div>
  );
};

Toolbar.propTypes = {
  className: PropTypes.string
};

export default Toolbar;
