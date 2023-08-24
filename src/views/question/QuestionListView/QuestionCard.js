import React, { useState, Fragment } from 'react';
// import { v4 as uuid } from 'uuid';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Card,
  CardContent,
  Grid,
  Typography,
  makeStyles,
  Checkbox,
} from '@material-ui/core';
// import Radio from '@material-ui/core/Radio';
// import RadioGroup from '@material-ui/core/RadioGroup';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormControl from '@material-ui/core/FormControl';
import CardActions from '@material-ui/core/CardActions';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

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
}));

const QuestionCard = ({ className, question, ...rest }) => {
  const classes = useStyles();

  const [checked, setChecked] = useState(false);
  const [items, setItems] = useState(0);
  // const [value, setValue] = useState('');
  const [expanded, setExpanded] = useState(false);

  // const handleAlternativeChange = (event) => {
  //   setValue(event.target.value);
  // };

  const handleChange = (event) => {
    if (event.target.checked === true) {
      setItems(Math.max(items + 1, 0));
    } else { setItems(Math.max(items - 1, 0)); }
    setChecked(event.target.checked);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Fragment className={classes.root} {...rest}>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {question.questioning}
            </Typography>
          </CardContent>
          {/* <CardContent>
            { question.alternatives.length > 0
              ? (
                <FormControl component="fieldset">
                  <RadioGroup aria-label="alternatives" name="alternatives" value={value} onChange={handleAlternativeChange}>
                    {question.alternatives.map((item) => {
                      return (<FormControlLabel key={uuid()} value={item} control={<Radio />} label={item} />);
                    })}
                  </RadioGroup>
                </FormControl>
              )
              : (
                <TextField className={classes.textarea} id={uuid()} label="Resposta" variant="outlined" fullWidth />)}

          </CardContent> */}

          <CardActions disableSpacing>
            <Checkbox
              checked={checked}
              onChange={handleChange}
              inputProps={{ 'aria-label': 'primary checkbox' }}
            />
            <IconButton aria-label="favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="edit">
              <EditIcon />
            </IconButton>
            <IconButton aria-label="delete">
              <DeleteIcon />
            </IconButton>
            <Typography aria-label="type">
              {question.type}
            </Typography>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="expanded"
              disabled={question.type === 'subjetiva'}
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>
                { question.alternatives.length > 0
                  ? (
                    <Typography paragraph>
                      {question.alternatives.map((item) => {
                        return (<p>{ item }</p>);
                      })}

                    </Typography>
                // <FormControl component="fieldset">
                //   <RadioGroup aria-label="alternatives" name="alternatives" value={value} onChange={handleAlternativeChange}>
                //     {question.alternatives.map((item) => {
                //       return (<FormControlLabel key={uuid()} value={item} control={<Radio />} label={item} />);
                //     })}
                //   </RadioGroup>
                // </FormControl>
                  )
                  : (
                    <div />
                  )}
              </Typography>
            </CardContent>
          </Collapse>

        </Card>
      </Grid>
    </Fragment>
  );
};

QuestionCard.propTypes = {
  className: PropTypes.string,
  question: PropTypes.object.isRequired
};

export default QuestionCard;
