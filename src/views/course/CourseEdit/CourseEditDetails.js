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
import { v4 as uuid } from 'uuid';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
  },
  selectStatus: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  selectCourse: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(0.5)
  },
  image: {
    height: 300,
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
}));

const CourseEditDetails = () => {
  const classes = useStyles();
  const hiddenFileInput = useRef(null);

  const [course, setCourse] = useState({
    id: uuid(),
    description: 'Descrição do curso 1',
    media: '/static/images/blank.png',
    title: 'Nome do curso 1',
    course: 'sistemas de informacao',
    status: 'ativo'
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
    console.log(course.title, course.description, course.course);
  }, [course]);

  const handleButtonClick = () => {
    hiddenFileInput.current.click();
  };

  return (
    <Container maxWidth="sm">
      <Card>
        <CardHeader
          title="Editar curso"
          subheader="Todas as informações podem ser editadas"
          titleTypographyProps={{ variant: 'h4' }}
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
            className={classes.image}
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
                  rows={8}
                  value={course.description}
                  variant="outlined"
                />
              </Grid>
              <Grid
                item
                xs={6}
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
                xs={6}
              >
                <TextField
                  className={classes.selectStatus}
                  fullWidth
                  required
                  id="status"
                  name="status"
                  onChange={handleChange}
                  select
                  size="small"
                  label="Status"
                  value={course.status}
                  variant="outlined"
                >
                  <MenuItem value="ativo" />
                  <MenuItem value="ativo">Ativo</MenuItem>
                  <MenuItem value="inativo">Inativo</MenuItem>
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

CourseEditDetails.propTypes = {
};

export default CourseEditDetails;
