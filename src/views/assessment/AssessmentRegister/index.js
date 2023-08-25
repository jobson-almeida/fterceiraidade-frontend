import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  FormControl,
  Grid,
  InputLabel,
  makeStyles,
  Select,
  Input
} from '@material-ui/core';
import Page from 'src/components/Page';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { Edit as QuestionIcon } from 'react-feather';
import Details from './Details';
import data from './data';
import Questions from './Questions';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
    flexGrow: 1,
  },
  card: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 1024,
  },

  gridFilter: {
    [theme.breakpoints.down('sm')]: {
      marginLeft: theme.spacing(7),
      marginTop: theme.spacing(0.5),
      marginBottom: theme.spacing(0.5)
    },
  },
  title: {
    flexGrow: 1,
  },

  parameterText: {
    color: 'white',
  },
  selectFilter: {
    width: 120,
    '&:not([multiple]) option': {
      backgroundColor: 'rgb(0 147 255 / 80%)',
    },
  },
  inputFilter: {
    color: 'white',
    width: 120,
    [theme.breakpoints.up('sm')]: {
      width: 200,
    },
  },

}));

const AssessmentRegister = () => {
  const classes = useStyles();
  const [questions] = useState(data);
  const [filteredQuestions, setFilteredQuestions] = useState(data);
  const [items] = useState(0);
  const [filters, setFilters] = useState({
    parameter: '',
    operator: '',
    value: ''
  });

  useEffect(() => {
    if (filters.parameter.length > 0 && filters.operator.length > 0) {
      switch (filters.operator) {
        case 'contem':
          setFilteredQuestions(questions.filter((question) => !filters.value.toLowerCase() || question[filters.parameter].toLowerCase().includes(filters.value.toLowerCase())));
          console.log(questions.filter((question) => !filters.value.toLowerCase() || question[filters.parameter].toLowerCase().includes(filters.value.toLowerCase())));
          break;
        case 'igual':
          setFilteredQuestions(questions.filter((question) => !filters.value.toLowerCase() || question[filters.parameter].toLowerCase() === filters.value.toLowerCase()));
          console.log(questions.filter((question) => !filters.value.toLowerCase() || question[filters.parameter].toLowerCase() === filters.value.toLowerCase()));
          break;
        case 'comeca':
          setFilteredQuestions(questions.filter((question) => !filters.value.toLowerCase() || question[filters.parameter].toLowerCase().startsWith(filters.value.toLowerCase())));
          console.log(questions.filter((question) => !filters.value.toLowerCase() || question[filters.parameter].toLowerCase().startsWith(filters.value.toLowerCase())));
          break;
        case 'termina':
          setFilteredQuestions(questions.filter((question) => !filters.value.toLowerCase() || question[filters.parameter].toLowerCase().endsWith(filters.value.toLowerCase())));
          console.log(questions.filter((question) => !filters.value.toLowerCase() || question[filters.parameter].toLowerCase().endsWith(filters.value.toLowerCase())));
          break;
        default:
          break;
      }
    } else {
      setFilteredQuestions(questions);
    }
  }, [filters]);

  const handleChangeFilter = ((event) => {
    setFilters({
      ...filters, [event.target.name]: event.target.value
    });
  });

  return (
    <Page
      className={classes.root}
      title="Nova avaliação"
    >
      <Container maxWidth={false}>
        <Box mt={3}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            className={classes.card}
          >
            <Grid
              item
              xs
              container
              direction="column"
              spacing={2}
            >
              <Grid
                item
                xs
              >
                <Details />
              </Grid>

              <AppBar position="sticky">
                <Toolbar>
                  <IconButton edge="start" color="inherit" aria-label="question-icon">
                    <QuestionIcon />
                  </IconButton>
                  <Typography variant="h4" className={classes.title}>
                    Questões
                  </Typography>

                  <Grid container spacing={2} className={classes.gridFilter}>
                    <Grid item xs={12}>
                      <Grid container justifyContent="center" spacing={5}>
                        <Grid item>

                          <FormControl className={clsx(classes.formControl)}>
                            <InputLabel className={classes.parameterText} htmlFor="parameter">Parâmetros</InputLabel>
                            <Select
                              native
                              className={clsx(classes.parameterText, classes.selectFilter)}
                              value={filters.parameter}
                              onChange={handleChangeFilter}
                              name="parameter"
                              inputProps={{
                                name: 'parameter',
                                id: 'parameter',
                              }}
                            >
                              <option aria-label="None" value="" />
                              <option value="course">curso</option>
                              <option value="type">tipo</option>
                              <option value="questioning">pergunta</option>
                            </Select>
                          </FormControl>
                        </Grid>

                        <Grid item>
                          <FormControl className={clsx(classes.formControl)}>
                            <InputLabel className={classes.parameterText} htmlFor="operator">Operadores</InputLabel>
                            <Select
                              native
                              className={clsx(classes.parameterText, classes.selectFilter)}
                              value={filters.operator}
                              onChange={handleChangeFilter}
                              inputProps={{
                                name: 'operator',
                                id: 'operator',
                              }}
                            >
                              <option aria-label="None" value="" />
                              <option value="contem">contém</option>
                              <option value="igual">é igual a</option>
                              <option value="comeca">começa com</option>
                              <option value="termina">termina com</option>
                            </Select>
                          </FormControl>
                        </Grid>

                        <Grid item>
                          <FormControl className={clsx(classes.formControl)}>
                            <InputLabel
                              className={clsx(classes.parameterText)}
                              htmlFor="value"
                            >
                              Filtrar valor

                            </InputLabel>
                            <Input
                              className={clsx(classes.parameterText, classes.inputFilter)}
                              name="value"
                              value={filters.value}
                              onChange={handleChangeFilter}
                            />
                          </FormControl>
                        </Grid>

                      </Grid>
                    </Grid>
                  </Grid>

                  <Box display="flex" m={1} p={1}>
                    <Box p={1}>
                      <Typography variant="h4" className={classes.title}>
                        { items > 0 ? items : '' }
                      </Typography>
                    </Box>
                    <Box p={1}>
                      <Typography variant="h4" className={classes.title}>
                        { items === 1 ? ' selecionada' : '' }
                        { items > 1 ? ' selecionadas' : '' }
                      </Typography>
                    </Box>
                  </Box>

                </Toolbar>
              </AppBar>
              { filteredQuestions.map((question) => (
                <Grid
                  item
                  key={question.id}
                  xs
                >
                  <Questions
                    className={classes.questionCard}
                    data={question}
                   // change={handleChange}
                  />
                </Grid>
              ))}

            </Grid>
          </Grid>
        </Box>
      </Container>
    </Page>
  );
};

export default AssessmentRegister;
