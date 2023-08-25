import React from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Box,
  Button,
  Container,
  TextField,
  makeStyles,
  Grid,
  Card,
  CardHeader,
  Divider,
  CardContent
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
  }
}));

const TeacherRegisterDetails = () => {
  const classes = useStyles();
  // const navigate = useNavigate();

  return (
    <Page
      className={classes.root}
      title="Cadastrar docente"
    >
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="center"
      >
        <Container maxWidth="sm">
          <Card>
            <CardHeader
              subheader="Insira as informações do novo docente"
              title="Cadastro"
            />
            <Divider />
            <Formik
              initialValues={{
                firstName: '',
                lastName: '',
                cpf: '',
                email: '',
                phone: ''
              }}
              validationSchema={
              Yup.object().shape({
                firstName: Yup.string().max(255).required('Nome obrigatório'),
                lastName: Yup.string().max(255).required('Sobrenome obrigatório'),
                cpf: Yup.string().min(14, 'Esse campo deve ter 14 caracteres').max(14, 'Esse campo deve ter no máximo 14 caracteres').required('CPF obrigatório'),
                email: Yup.string().email('Deve ser um email válido').max(255).required('Email obrigatório'),
                phone: Yup.string().min(10, '99 99999-9999').max(15, 'Esse campo deve ter no máximo 15 caracteres')
              })
            }
              onSubmit={(values) => {
              // navigate('/app/teachers', { replace: false });
                console.log(JSON.stringify(values, null, 2));
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
                  <CardContent>
                    <TextField
                      error={Boolean(touched.firstName && errors.firstName)}
                      fullWidth
                      required
                      helperText={touched.firstName && errors.firstName}
                      label="Nome"
                      margin="normal"
                      name="firstName"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.firstName}
                      variant="outlined"
                    />
                    <TextField
                      error={Boolean(touched.lastName && errors.lastName)}
                      fullWidth
                      required
                      helperText={touched.lastName && errors.lastName}
                      label="Sobrenome"
                      margin="normal"
                      name="lastName"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.lastName}
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
                    <Grid container spacing={3}>
                      <Grid item xs>
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
                      </Grid>
                      <Grid item xs>
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
                      </Grid>
                    </Grid>
                  </CardContent>
                  <Divider />
                  <Box my={2}>
                    <Button
                      color="primary"
                      disabled={isSubmitting}
                      fullWidth
                      size="large"
                      type="submit"
                      variant="contained"
                    >
                      Salvar
                    </Button>
                  </Box>
                </form>
              )}
            </Formik>
          </Card>
        </Container>
      </Box>
    </Page>
  );
};

export default TeacherRegisterDetails;
