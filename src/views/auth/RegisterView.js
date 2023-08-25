import React from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Box,
  Button,
  Container,
  Link,
  TextField,
  Typography,
  makeStyles,
  FormControl,
  MenuItem,
  Radio,
  FormControlLabel,
  RadioGroup
} from '@material-ui/core';
import Page from 'src/components/Page';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  texto: {
    height: 44
  },
  selectCourse: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
}));

const RegisterView = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <Page
      className={classes.root}
      title="Register"
    >
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="center"
      >
        <Container maxWidth="sm">
          <Formik
            initialValues={{
              firstname: '',
              lastname: '',
              cpf: '',
              email: '',
              birth: '',
              phone: '',
              password: '',
              course: '',
              type: 'student'
            }}
            validationSchema={
              Yup.object().shape({
                firstname: Yup.string().max(255).required('Nome obrigatório'),
                lastname: Yup.string().max(255).required('Sobrenome obrigatório'),
                cpf: Yup.string().min(14, 'Esse campo deve ter 14 caracteres').max(14, 'Esse campo deve ter no máximo 14 caracteres').required('CPF obrigatório'),
                birth: Yup.string().max(10).required('Data do aniversário obrigatória'),
                email: Yup.string().email('Deve ser um email válido').max(255).required('Email obrigatório'),
                phone: Yup.string().min(10, '99 99999-9999').max(15, 'Esse campo deve ter no máximo 15 caracteres'),
                password: Yup.string().max(255).required('Senha obrigatória'),
                course: Yup.string(),
                type: Yup.string(),
              })
            }
            onSubmit={(data) => {
              // navigate('/', { replace: false });
              console.log(data);
            }}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              touched,
              values
            }) => (
              <form onSubmit={handleSubmit}>
                <Box mb={3}>
                  <Typography
                    color="textPrimary"
                    variant="h1"
                  >
                    Criar nova conta
                  </Typography>
                  <Typography
                    color="textSecondary"
                    gutterBottom
                    variant="body1"
                  >
                    Use email e CPF válidos para criar a nova conta
                  </Typography>
                </Box>
                <FormControl component="fieldset">
                  <RadioGroup row aria-label="type" name="type" onChange={handleChange} defaultValue="student">
                    <FormControlLabel value="student" control={<Radio />} label="Quero ser um estudante" />
                    <FormControlLabel value="teacher" control={<Radio />} label="Quero ser um professor" />
                  </RadioGroup>
                </FormControl>
                <TextField
                  className={classes.selectCourse}
                  disabled={values.type === 'student'}
                  error={Boolean(touched.course && errors.course)}
                  fullWidth
                  helperText={touched.course && errors.course}
                  id="course"
                  name="course"
                  onChange={handleChange}
                  select
                  label="Área de conhecimento"
                  value={values.type === 'teacher' ? values.course : ''}
                  variant="outlined"
                >
                  <MenuItem value="" />
                  <MenuItem value="sistemas de informacao">Sistemas de Informação</MenuItem>
                  <MenuItem value="administracao">Administração</MenuItem>
                  <MenuItem value="engenharia">Engenharia Civil</MenuItem>
                </TextField>
                <TextField
                  error={Boolean(touched.firstname && errors.firstname)}
                  fullWidth
                  required
                  helperText={touched.firstname && errors.firstname}
                  label="Nome"
                  margin="normal"
                  name="firstname"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.firstname}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.lastname && errors.lastname)}
                  fullWidth
                  required
                  helperText={touched.lastname && errors.lastname}
                  label="Sobrenome"
                  margin="normal"
                  name="lastname"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.lastname}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.cpf && errors.cpf)}
                  fullWidth
                  required
                  helperText={touched.cpf && errors.cpf}
                  label="CPF"
                  margin="normal"
                  name="cpf"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.cpf}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.birth && errors.birth)}
                  fullWidth
                  required
                  helperText={touched.birth && errors.birth}
                  label="Aniversário"
                  margin="normal"
                  name="birth"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.birth}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.email && errors.email)}
                  fullWidth
                  required
                  helperText={touched.email && errors.email}
                  label="Email"
                  margin="normal"
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="email"
                  value={values.email}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.phone && errors.phone)}
                  fullWidth
                  helperText={touched.phone && errors.phone}
                  label="Telefone"
                  margin="normal"
                  name="phone"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="phone"
                  value={values.phone}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.password && errors.password)}
                  fullWidth
                  required
                  helperText={touched.password && errors.password}
                  label="Senha"
                  margin="normal"
                  name="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="password"
                  value={values.password}
                  variant="outlined"
                />
                <Box my={2}>
                  <Button
                    color="primary"
                   // disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    Inscreva-se agora
                  </Button>
                </Box>
                <Typography
                  color="textSecondary"
                  variant="body1"
                >
                  Tem uma conta?
                  {' '}
                  <Link
                    component={RouterLink}
                    to="/login"
                    variant="body1"
                  >
                    Entrar
                  </Link>
                </Typography>
              </form>
            )}
          </Formik>
        </Container>
      </Box>
    </Page>
  );
};

export default RegisterView;
