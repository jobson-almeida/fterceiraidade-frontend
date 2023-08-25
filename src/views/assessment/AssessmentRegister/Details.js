import 'date-fns';
import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  makeStyles,
  Checkbox,
  FormControlLabel
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
    maxWidth: 1024,
  },
  initial_date: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
  final_date: {
    marginLeft: theme.spacing(2),
  },
  note: {
    maxWidth: 110,
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
  },
  nquestions: {
    maxWidth: 150,
  },
  quiz: {
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1),
  }
}));

const Details = ({ className, ...rest }) => {
  const classes = useStyles();

  const [values, setValues] = useState({
    description: '',
    initial_date: '',
    end_date: '',
    note: 0,
    course: 'Sistemas de Informação',
    auto_quiz: false,
    number_questions: 0
  });

  const handleChange = (event) => {
    if (event.target.name === 'auto_quiz') {
      setValues({
        ...values,
        [event.target.name]: event.target.checked
      });
    } else {
      setValues({
        ...values,
        [event.target.name]: event.target.value
      });
    }
  };

  return (
    <form
      autoComplete="off"
      noValidate
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Card>
        <CardHeader
          title="Avaliação"
          subheader="Favor preencha todos os dados do formulário"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              xs={12}
            >
              <TextField
                fullWidth
                required
                multiline
                rows={3}
                label="Descrição"
                name="description"
                value={values.description}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>

            <Grid
              item
            >
              <TextField
                required
                name="initial_date"
                label="Data inicial"
                type="date"
                variant="outlined"
                value={values.initial_date}
                onChange={handleChange}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                className={classes.final_date}
                required
                name="end_date"
                label="Data final"
                type="date"
                variant="outlined"
                value={values.end_date}
                onChange={handleChange}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <FormControlLabel
                className={classes.quiz}
                control={(
                  <Checkbox
                    name="auto_quiz"
                    checked={values.auto_quiz}
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                  />
            )}
                label="Questionário automático"
              />
              <TextField
                className={classes.note}
                label="Nota"
                name="note"
                type="number"
                onChange={handleChange}
                value={values.note}
                variant="outlined"
                disabled={values.auto_quiz}
                required={!values.auto_quiz}
              />
              <TextField
                className={classes.nquestions}
                label="Nº questões"
                name="number_questions"
                type="number"
                onChange={handleChange}
                value={values.number_questions}
                variant="outlined"
                disabled={!values.auto_quiz}
                required={values.auto_quiz}
              />
            </Grid>

          </Grid>
        </CardContent>
        <Divider />
        <Box
          display="flex"
          justifyContent="flex-end"
          p={2}
        >
          <Button
            color="primary"
            variant="contained"
          >
            Salvar
          </Button>
        </Box>
      </Card>
    </form>
  );
};

Details.propTypes = {
  className: PropTypes.string
};

export default Details;
