import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import BarChartIcon from '@material-ui/icons/BarChart';
import PeopleIcon from '@material-ui/icons/People';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  statsItem: {
    alignItems: 'center',
    display: 'flex'
  },
  statsIcon: {
    marginRight: theme.spacing(1)
  },
  handPointer: {
    cursor: 'pointer'
  }
}));

const CourseCard = ({ className, course, ...rest }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const clickActions = (action) => {
    switch (action) {
      case 'chart':
        navigate('/app/course-performance', { replace: false });
        break;
      case 'view':
        navigate('/app/course-view', { replace: false });
        break;
      case 'edit':
        navigate('/app/course-edit', { replace: false });
        break;
      case 'delete':
        navigate('/app/course-delete', { replace: false });
        break;
      default:
        break;
    }
  };

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardContent>
        <Box
          display="flex"
          justifyContent="center"
          mb={3}
        >
          <Avatar
            alt="Course"
            src={course.media}
            variant="square"
          />
        </Box>
        <Typography
          align="center"
          color="textPrimary"
          gutterBottom
          variant="h4"
        >
          {course.title}
        </Typography>
        <Typography
          align="center"
          color="textPrimary"
          variant="body1"
        >
          {course.description}
        </Typography>
      </CardContent>
      <Box flexGrow={1} />
      <Divider />
      <Box p={2}>
        <Grid
          container
          justify="space-between"
          spacing={2}
        >
          <Grid
            className={classes.statsItem}
            item
          >
            <AccessTimeIcon
              className={classes.statsIcon}
              color="action"
            />
            <Typography
              color="textSecondary"
              display="inline"
              variant="body2"
            >
              {course.shift}
            </Typography>
          </Grid>
          <Grid
            className={classes.statsItem}
            item
          >
            <BarChartIcon
              className={clsx(classes.statsIcon, classes.handPointer)}
              color="action"
              onClick={() => clickActions('chart')}
            />
            <Typography
              color="textSecondary"
              display="inline"
              variant="body2"
            />
          </Grid>
          <Grid
            className={classes.statsItem}
            item
          >
            <PeopleIcon
              className={classes.statsIcon}
              color="action"
            />
            <Typography
              color="textSecondary"
              display="inline"
              variant="body2"
            >
              {course.students}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
};

CourseCard.propTypes = {
  className: PropTypes.string,
  course: PropTypes.object.isRequired
};

export default CourseCard;
