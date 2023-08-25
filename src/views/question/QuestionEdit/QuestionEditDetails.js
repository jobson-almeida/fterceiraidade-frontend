import React, { useState, useRef } from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import { v4 as uuid } from 'uuid';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Grid, Card, CardActions,
  CardActionArea,
  CardMedia,
  Divider,
  CardHeader
} from '@material-ui/core';
import CustomTooltip from 'src/utils/CustomTooltip';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
    backgroundColor: theme.palette.background.dark,
    height: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  button: {
    margin: theme.spacing(1),
  },
  hidden: {
    visibility: 'hidden'
  },
}));

const QuestionEditDetails = ({ className, ...rest }) => {
  const classes = useStyles();
  const hiddenFileInput = useRef(null);

  const [inputFields, setInputFields] = useState({
    questioning: 'hjfghjfh fgjf jfgj fgjrgsdfg sdf gsd?',
    image: '/static/images/blank.png',
    alternatives: [
      {
        alternative: 'hsdfhsdfgdfhdfh',
        answer: false,
        id: '4ea776b0-5b53-4c7f-b45e-a9abaf7bf560'
      }, {
        alternative: 'hsdfjsdfhdf',
        answer: true,
        id: 'e4e803ab-48e3-4b3f-97af-148fc84e4578'
      },
      {
        alternative: 'jdfgjdfgjfgj',
        answer: false,
        id: 'ab150e34-2738-4d1b-8503-211b86bcf329'
      }
    ]
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('InputFields', inputFields);
  };

  const addImage = (event) => {
    setInputFields({ ...inputFields, image: URL.createObjectURL(event.target.files[0]) });
    console.log(inputFields.image);
  };

  const removeImage = () => {
    setInputFields({ ...inputFields, image: '' });
  };

  const handleButtonClick = () => {
    hiddenFileInput.current.click();
  };

  const handleChangeQuestion = (event) => {
    setInputFields({ ...inputFields, [event.target.name]: event.target.value });
  };

  const handleChangeAlternatives = (id, event) => {
    const newAlternative = inputFields.alternatives.map((i) => {
      if (event.target.name === 'answer') {
        if (id === i.id) {
          i[event.target.name] = event.target.checked;
        } else {
          i[event.target.name] = !event.target.checked;
        }
      }
      if (event.target.name !== 'answer') {
        if (id === i.id) {
          i[event.target.name] = event.target.value;
        }
      }
      return i;
    });
    setInputFields({ ...inputFields, alternatives: newAlternative });
  };

  const handleAddFields = () => {
    const values = [...inputFields.alternatives, {
      id: uuid(), alternative: '', answer: false
    }];
    setInputFields({ ...inputFields, alternatives: values });
  };

  const handleRemoveFields = (id) => {
    const values = [...inputFields.alternatives];
    values.splice(values.findIndex((value) => value.id === id), 1);
    setInputFields({ ...inputFields, alternatives: values });
  };

  return (
    <Container
      maxWidth="lg"
      className={clsx(classes.root, className)}
      {...rest}
    >
      {/* <form className={classes.root} onSubmit={handleSubmit}> */}
      <Card>
        <CardHeader
          title="Editar questão"
          subheader="As informações podem ser editadas"
          titleTypographyProps={{ variant: 'h4' }}
        />
        <Divider />

        <form
          autoComplete="off"
          noValidate
        >
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
          >
            <Grid item xs>
              <TextField
                fullWidth
                multiline
                rows={3}
                name="questioning"
                label="questão"
                variant="outlined"
                value={inputFields.questioning}
                onChange={handleChangeQuestion}
              />
            </Grid>
            <Grid item>
              <CustomTooltip title="Adicionar alternativa">
                <IconButton
                  className={inputFields.alternatives.length > 0 ? classes.hidden : null}
                  onClick={handleAddFields}
                >
                  <AddIcon />
                </IconButton>
              </CustomTooltip>
            </Grid>

            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              <CardActions>
                <Button
                  color="primary"
                  component="span"
                  variant="contained"
                  onClick={handleButtonClick}
                >
                  adicionar imagem
                </Button>
                <input
                  accept="image/*"
                  id="button-file"
                  onChange={addImage}
                  type="file"
                  style={{ display: 'none' }}
                  ref={hiddenFileInput}
                />
                <Button
                  color="primary"
                  component="span"
                  variant="contained"
                  disabled={!inputFields.image}
                  onClick={removeImage}
                >
                  remover imagem
                </Button>
              </CardActions>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={inputFields.image}
                />
              </CardActionArea>

              <Divider />
            </Grid>
          </Grid>
          {
        inputFields.alternatives.map((inputField) => {
          return (
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              key={inputField.id}
            >
              <Grid item xs>
                <TextField
                  fullWidth
                  name="alternative"
                  label="alternativa"
                  variant="outlined"
                  value={inputField.alternative}
                  onChange={(event) => handleChangeAlternatives(inputField.id, event)}
                />
              </Grid>
              <Grid item>
                <CustomTooltip title="Marque se for a alternativa correta">
                  <Checkbox
                    name="answer"
                    checked={inputField.answer}
                    onChange={(event) => handleChangeAlternatives(inputField.id, event)}
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                  />
                </CustomTooltip>
              </Grid>
              <Grid item>
                <CustomTooltip title="Remover alternativa">
                  <IconButton onClick={() => handleRemoveFields(inputField.id)}>
                    <RemoveIcon />
                  </IconButton>
                </CustomTooltip>
                <CustomTooltip title="Adicionar alternativa">
                  <IconButton
                    onClick={handleAddFields}
                  >
                    <AddIcon />
                  </IconButton>
                </CustomTooltip>
              </Grid>
            </Grid>
          );
        })
        }
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            type="submit"
            onClick={handleSubmit}
          >
            salvar
          </Button>
        </form>
      </Card>
    </Container>
  );
};

QuestionEditDetails.propTypes = {
  className: PropTypes.string
};

export default QuestionEditDetails;
