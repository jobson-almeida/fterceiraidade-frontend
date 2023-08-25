import React, { useState, useCallback, useRef } from 'react';
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardActions,
  Divider,
  CardActionArea,
  Grid,
  TextField,
  makeStyles,
  MenuItem,
  CardMedia,
  Container
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
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

const CourseRegisterDetails = () => {
  const classes = useStyles();
  const hiddenFileInput = useRef(null);

  const [course, setCourse] = useState({
    description: '',
    media: '/static/images/blank.png',
    title: '',
    students: 0,
    shift: ''
  });

  const [src, setSrc] = useState(course.media);

  const handleChange = (event) => {
    setCourse({
      ...course,
      [event.target.name]: event.target.value
    });
  };

  const imageChange = (event) => {
    setSrc(URL.createObjectURL(event.target.files[0]));
  };

  const handleSubmit = useCallback(() => {
    console.log(course.title, course.description, course.students, course.shift);
  }, [course]);

  const handleButtonClick = () => {
    hiddenFileInput.current.click();
  };

  return (
    <Container maxWidth="sm">
      <Card>
        <CardHeader
          title="Registrar novo curso"
          subheader="Insira todas as informações necessárias"
        />
        <Divider />
        <CardActions>
          <Button
            color="primary"
            component="span"
            variant="contained"
            onClick={handleButtonClick}
          >
            Upload
          </Button>
          <input
            accept="image/*"
            id="button-file"
            onChange={imageChange}
            type="file"
            style={{ display: 'none' }}
            ref={hiddenFileInput}
          />
        </CardActions>
        <CardActionArea>
          <CardMedia
            component="img"
            image={src}
            title="title"
          />
        </CardActionArea>
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
                  id="title"
                  label="Título"
                  margin="dense"
                  name="title"
                  onChange={handleChange}
                  required
                  value={course.title}
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
                  value={course.description}
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
                  value={course.course}
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
                  value={course.students}
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
                  value={course.shift}
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

CourseRegisterDetails.propTypes = {
};

export default CourseRegisterDetails;
