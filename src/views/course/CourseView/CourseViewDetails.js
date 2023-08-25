import React, { useState, useCallback } from 'react';
import {
  Button,
  CardActionArea,
  Grid,
  Container,
  CardMedia,
  Typography
} from '@material-ui/core';
import { v4 as uuid } from 'uuid';

const CourseViewDetails = () => {
  // dados do curso selecionado ------------------
  const [course] = useState({
    id: uuid(),
    description: 'O Curso de Informática Básica e Avançada da Intensiva Cursos foi desenvolvido cuidadosamente para ensinar desde os conceitos básicos da informática, passando pelo Word (editor de textos) e Excel (editor de planilhas) e chegando até a introdução às redes de computador.',
    image: '/static/images/course.jpg',
    title: 'Windows 10 e Office 365',
    students: 28,
    shift: 'noturno'
  });

  const [image] = useState(course.image);
  //--------------------

  const handleSubmit = useCallback(() => {
    console.log(course.title, course.description, course.students, course.shift);
  }, [course]);

  return (
    <Container>
      <Grid container spacing={3}>

        <Grid item xs={8}>
          <CardActionArea>
            <CardMedia
              component="img"
              image={image}
              title="title"
            />
          </CardActionArea>
        </Grid>

        <Grid item xs={4}>
          <Typography variant="h1" component="h2">
            {course.title}
          </Typography>
          <br />
          <Typography variant="body1" component="p">
            {course.description}
          </Typography>
          <br />
          <Typography variant="body1" component="h1">
            {course.students}
            {' '}
            vagas
          </Typography>
          <br />
          <Typography variant="h2" component="h1">
            {course.shift}
          </Typography>
          <br />
          <Typography variant="body1" component="h1">
            ::: ALTERAR ESSA PÁGINA :::
          </Typography>
          <br />
          <Button
            color="primary"
            variant="outlined"
            onClick={handleSubmit}
          >
            INSCREVA-SE
          </Button>
        </Grid>

      </Grid>
    </Container>
  );
};

export default CourseViewDetails;
