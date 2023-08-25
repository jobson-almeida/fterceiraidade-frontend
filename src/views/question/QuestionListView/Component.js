import React from 'react';
import { v4 as uuid } from 'uuid';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useNavigate } from 'react-router-dom';
import {
  Grid, CardMedia, Box
} from '@material-ui/core';
import CustomTooltip from '../../../utils/CustomTooltip';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  textarea: {
    marginTop: theme.spacing(2),
    maxWidth: '600px'
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  media: {
    maxWidth: 480,
    padding: theme.spacing(4)
  },
  enabledSpacing: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1)
  }
}));

const QuestionCard = ({ className, question, ...rest }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [expanded, setExpanded] = React.useState(false);

  // const [checked, setChecked] = useState(false);
  // const [items, setItems] = useState(0);

  // const handleChange = (event) => {
  //   if (event.target.checked === true) {
  //     setItems(Math.max(items + 1, 0));
  //   } else { setItems(Math.max(items - 1, 0)); }
  //   setChecked(event.target.checked);
  // };

  const clickActions = (action) => {
    switch (action) {
      case 'view':
        navigate('/app/question-view', { replace: false });
        break;
      case 'edit':
        navigate('/app/question-edit', { replace: false });
        break;
      case 'delete':
        navigate('/app/question-delete', { replace: false });
        break;
      default:
        break;
    }
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={classes.root} {...rest}>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Typography gutterBottom variant="subtitle1" component="p">
              {question.questioning}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <CustomTooltip title="editar">
              <IconButton aria-label="edit" onClick={() => clickActions('edit')}>
                <EditIcon />
              </IconButton>
            </CustomTooltip>
            <CustomTooltip title="excluir">
              <IconButton aria-label="delete">
                <DeleteIcon />
              </IconButton>
            </CustomTooltip>
            <CustomTooltip title="curso">
              <Typography aria-label="course">
                {question.course}
              </Typography>
            </CustomTooltip>
            <CustomTooltip title="tipo da questão">
              <Typography aria-label="type" className={classes.enabledSpacing}>
                |
                {' '}
                {question.type}
              </Typography>
            </CustomTooltip>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="expanded"
              disabled={question.type === 'subjetiva' && !question.image}
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>

            {question.image ? (
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <CardMedia
                  className={classes.media}
                  component="img"
                  alt="image"
                  image={question.image}
                  title="image"
                />
              </Box>
            ) : <div /> }

            <CardContent>
              { question.alternatives.length > 0
                ? (
                  <div>
                    {question.alternatives.map((item) => {
                      return (<Typography key={uuid()}>{ item }</Typography>);
                    })}
                  </div>
                )
                : (
                  <div />
                )}

            </CardContent>
          </Collapse>
        </Card>
      </Grid>
    </div>
  );
};

QuestionCard.propTypes = {
  className: PropTypes.string,
  question: PropTypes.object.isRequired
};

export default QuestionCard;
