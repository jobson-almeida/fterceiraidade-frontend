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
  Box,
  Container,
  Typography
} from '@material-ui/core';
import Page from 'src/components/Page';
import { v4 as uuid } from 'uuid';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  select: {
    marginTop: theme.spacing(1)
  },
}));

const CourseViewDetails = () => {
  const classes = useStyles();
  const hiddenFileInput = useRef(null);

  // dados do curso selecionado ------------------
  const [course, setCourse] = useState({
    id: uuid(),
    description: 'O Curso de Informática Básica e Avançada da Intensiva Cursos foi desenvolvido cuidadosamente para ensinar desde os conceitos básicos da informática, passando pelo Word (editor de textos) e Excel (editor de planilhas) e chegando até a introdução às redes de computador.',
    media: '/static/images/blank.png',
    title: 'Windows 10 e Office 365',
    students: 28,
    shift: 'noturno'
  });

  const [src] = useState(course.media);
  //--------------------

  const handleChange = (event) => {
    setCourse({
      ...course,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = useCallback(() => {
    console.log(course.title, course.description, course.students, course.shift);
  }, [course]);

  return (
    <Card>

      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          <CardActionArea>
            <CardMedia
              component="img"
              image={src}
              title="title"
            />
          </CardActionArea>
        </Grid>
        <Grid item xs>

          <Typography variant="h1" component="h2" gutterBottom>
            {course.title}
          </Typography>
          <br />
          <Typography variant="body1" gutterBottom>
            {course.description}
          </Typography>
          <br />
          <Typography variant="body2" gutterBottom>
            {course.description}
          </Typography>

          {course.students}
          {' '}
          vagas

          {course.shift}
          {/* <Typography variant="h2" gutterBottom>
            h2. Heading
          </Typography>
          <Typography variant="h3" gutterBottom>
            h3. Heading
          </Typography>
          <Typography variant="h4" gutterBottom>
            h4. Heading
          </Typography>
          <Typography variant="h5" gutterBottom>
            h5. Heading
          </Typography>
          <Typography variant="h6" gutterBottom>
            h6. Heading
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
          </Typography>

          <Typography variant="button" display="block" gutterBottom>
            button text
          </Typography>
          <Typography variant="caption" display="block" gutterBottom>
            caption text
          </Typography>
          <Typography variant="overline" display="block" gutterBottom>
            overline text
          </Typography> */}
          <Button
            color="primary"
            onClick={handleSubmit}
            variant="contained"
          >
            Salvar
          </Button>

        </Grid>
      </Grid>
    </Card>
  );
};

CourseViewDetails.propTypes = {
};

export default CourseViewDetails;
