import React, { useState } from 'react';
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
import {
  Checkbox, Grid, TextField,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
  },
  note: {
    maxWidth: 130,
    marginLeft: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  note_align: {
    alignItems: 'center',
    justifyContent: 'center',
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
}));

const QuestionCard = ({
  className, data, change, ...rest
}) => {
  const classes = useStyles();

  const [expanded, setExpanded] = useState(false);
  const [questions] = useState(data);

  // const checkSelected = (event) => {
  //   setChecked(event.target.checked);
  //   console.log(event.target.checked, event.target.name);
  // };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Grid
      item
      xs={12}
      className={classes.root}
      {...rest}
    >
      <Card>
        <CardContent>
          <Typography gutterBottom variant="subtitle1" component="p">
            {questions.questioning}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Checkbox
            name="selected"
            checked={data.selected}
           // onChange={change}
            inputProps={{ 'aria-label': 'primary checkbox' }}
          />
          <IconButton aria-label="edit">
            <EditIcon />
          </IconButton>
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
          <Typography aria-label="type">
            {questions.type}
          </Typography>
          <TextField
            className={classes.note}
            label="valor da questão"
            name="note"
            type="number"
          //  onChange={change}
            value={data.note}
            inputProps={{
              classes: { root: classes.note_align }
            }}
          />
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="expanded"
            disabled={questions.type === 'subjetiva'}
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            { questions.alternatives.length > 0
              ? (
                <div>
                  {questions.alternatives.map((item) => {
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

  );
};

QuestionCard.propTypes = {
  className: PropTypes.string,
  data: PropTypes.object.isRequired,
  change: PropTypes.any,
};

export default QuestionCard;
