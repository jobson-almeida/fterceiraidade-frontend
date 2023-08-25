import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Card,
  CardContent,
  Typography,
  makeStyles,
  Box,
  Divider
} from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import CustomTooltip from 'src/utils/CustomTooltip';
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
  },
  details: {
    minHeight: 240
  },
  media: {
    padding: theme.spacing(1)
  },
  footer: {
    backgroundColor: 'primary'
  }
}));

const Component = ({ className, course, ...rest }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const clickActions = (action) => {
    switch (action) {
      case 'view':
        navigate('/app/course-view', { replace: false });
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

      <CardActionArea onClick={() => clickActions('view')}>
        <CustomTooltip title="Clique para mais informações" placement="bottom-end">
          <CardMedia
            component="img"
            alt=""
            height="360"
            image={course.media}
            title=""
            className={classes.media}
          />
        </CustomTooltip>
        <CustomTooltip title="Clique para mais informações" placement="top-end">
          <CardContent className={classes.details}>
            <Typography gutterBottom variant="h3" component="h2">
              {course.title}
            </Typography>
            <Typography variant="body1" color="textSecondary" component="p">
              {course.description}
            </Typography>
          </CardContent>
        </CustomTooltip>
      </CardActionArea>
      <Divider />
      <CardActions>
        <Box className={classes.footer}>
          <CustomTooltip title="Clique aqui e inscreva-se nesse curso">
            <Button
              color="primary"
              size="large"
              onClick={() => clickActions('view')}
            >
              inscreva-se
            </Button>
          </CustomTooltip>
        </Box>
      </CardActions>
    </Card>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  course: PropTypes.any.isRequired
};

export default Component;
