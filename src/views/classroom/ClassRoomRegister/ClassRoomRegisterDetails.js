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
  makeStyles,
  MenuItem,
  Container
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {},
  selectShift: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  selectCourse: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(0.5)
  },
}));

const ClassRoomRegisterDetails = () => {
  const classes = useStyles();

  const [classroom, setClassRoom] = useState({
    description: '',
    code: '',
    students: 0,
    shift: ''
  });

  const handleChange = (event) => {
    setClassRoom({
      ...classroom,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = useCallback(() => {
    console.log(classroom.title, classroom.description, classroom.students, classroom.shift);
  }, [classroom]);

  return (
    <Container maxWidth="sm">
      <Card>
        <CardHeader
          title="Registrar nova turma"
          subheader="Insira todas as informações necessárias"
        />
      </Card>
      <br />
      <Card>
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
                  fullWidth
                  id="description"
                  label="Descrição"
                  margin="dense"
                  multiline
                  name="description"
                  onChange={handleChange}
                  required
                  rows={4}
                  value={classroom.description}
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
                  id="course"
                  name="course"
                  onChange={handleChange}
                  select
                  size="small"
                  label="Curso"
                  value={classroom.course}
                  variant="outlined"
                >
                  <MenuItem value="" />
                  <MenuItem value="sistemas de informacao">Sistemas de Informação</MenuItem>
                  <MenuItem value="administracao">Administração</MenuItem>
                  <MenuItem value="engenharia">Engenharia Civil</MenuItem>
                </TextField>
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
            <Button
              color="primary"
              onClick={handleSubmit}
              variant="contained"
            >
              Salvar
            </Button>
          </CardActions>
        </form>
      </Card>
    </Container>
  );
};

export default ClassRoomRegisterDetails;
