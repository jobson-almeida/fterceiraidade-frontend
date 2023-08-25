import React, { useState, useCallback } from 'react';
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardActions,
  Divider,
  Grid,
  TextField,
  Box,
  makeStyles,
  MenuItem,
  Container
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
  },
  selectShift: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  selectCourse: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(0.5)
  },
}));

const ClassRooomEditDetails = () => {
  const classes = useStyles();

  const [classroom, setClassRoom] = useState({
    code: 'dfgdgffgjfgj',
    course: 'sistemas de informacao',
    students: 10,
    shift: 'noturno'
  });

  const handleChange = (event) => {
    setClassRoom({
      ...classroom,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = useCallback(() => {
    console.log(classroom.code, classroom.course, classroom.students, classroom.shift);
  }, [classroom]);

  return (
    <Container maxWidth="sm">
      <Card>
        <CardHeader
          title="Editar turma"
          subheader="Todas as informações disponíveis podem ser editadas"
          titleTypographyProps={{ variant: 'h4' }}
        />
        <Divider />
        <form
          autoComplete="off"
          noValidate
        >
          <CardContent>
            <Grid
              container
              spacing={1}
            >
              <Grid
                item
                xs={12}
              >
                <TextField
                  fullWidth
                  id="code"
                  label="Código"
                  margin="dense"
                  name="code"
                  onChange={handleChange}
                  required
                  value={classroom.code}
                  variant="outlined"
                />
              </Grid>
              <Grid
                item
                xs={12}
              >
                <TextField
                  className={classes.selectCourse}
                  fullWidth
                  required
                  disabled
                  id="course"
                  name="course"
                  size="small"
                  label="Curso"
                  value={classroom.course}
                  variant="outlined"
                />
              </Grid>
              <Grid
                item
                xs
              >
                <TextField
                  fullWidth
                  id="students"
                  label="Total de vagas"
                  margin="dense"
                  name="students"
                  onChange={handleChange}
                  required
                  type="number"
                  value={classroom.students}
                  variant="outlined"
                />
              </Grid>
              <Grid
                item
                xs
              >
                <TextField
                  className={classes.selectShift}
                  fullWidth
                  required
                  id="shif"
                  name="shift"
                  onChange={handleChange}
                  select
                  size="small"
                  label="Turno"
                  value={classroom.shift}
                  variant="outlined"
                >
                  <MenuItem value="" />
                  <MenuItem value="matutino">Matutino</MenuItem>
                  <MenuItem value="vespertino">Vespertino</MenuItem>
                  <MenuItem value="noturno">Noturno</MenuItem>
                </TextField>
              </Grid>
            </Grid>
          </CardContent>
          <Divider />
          <CardActions>
            <Box flexGrow={1}>
              <Button
                color="primary"
                onClick={handleSubmit}
                variant="contained"
              >
                Salvar
              </Button>
            </Box>
            <Box>
              <Button
                color="secondary"
                onClick={handleSubmit}
                variant="contained"
              >
                Excluir turma
              </Button>
            </Box>
          </CardActions>
        </form>
      </Card>
    </Container>
  );
};

ClassRooomEditDetails.propTypes = {
};

export default ClassRooomEditDetails;
