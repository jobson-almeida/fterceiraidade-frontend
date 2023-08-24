import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  }
}));

const StudentRegisterDetails = ({ className, ...rest }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (

    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardHeader
        subheader="Insira as informações do novo discente"
        title="Cadastro"
      />
      <Divider />

      <Formik
        initialValues={{
          name: '',
          lastname: '',
          phone: '',
          email: '',
          city: '',
          unit: ''
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string().max(255).required('Nome obrigatório'),
          lastname: Yup.string().max(255).required('Sobrenome obrigatório'),
          phone: Yup.string().max(13),
          email: Yup.string().email('Deve ser um email válido').max(255).required('Email obrigatório'),
          city: Yup.string().max(255).required('Cidade obrigatória'),
          unit: Yup.string().max(255).required('Unidade obrigatória')
        })}
        onSubmit={() => {
          navigate('/app/dashboard', { replace: true });
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
              <Grid
                container
                spacing={1}
              >
                <Grid
                  item
                  md={6}
                  xs={12}
                >
                  <TextField
                    error={Boolean(touched.name && errors.name)}
                    fullWidth
                    helperText={touched.name && errors.name}
                    label="Nome"
                    margin="normal"
                    name="name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="text"
                    value={values.name}
                    variant="outlined"
                  />
                </Grid>
                <Grid
                  item
                  md={6}
                  xs={12}
                >
                  <TextField
                    error={Boolean(touched.lastname && errors.lastname)}
                    fullWidth
                    helperText={touched.lastname && errors.lastname}
                    label="Sobrenome"
                    margin="normal"
                    name="lastname"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="text"
                    value={values.lastname}
                    variant="outlined"
                  />
                </Grid>
                <Grid
                  item
                  md={6}
                  xs={12}
                >
                  <TextField
                    error={Boolean(touched.email && errors.email)}
                    fullWidth
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
                </Grid>
                <Grid
                  item
                  md={6}
                  xs={12}
                >
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
                <Grid
                  item
                  md={6}
                  xs={12}
                >
                  <TextField
                    error={Boolean(touched.city && errors.city)}
                    fullWidth
                    helperText={touched.city && errors.city}
                    label="Cidade"
                    margin="normal"
                    name="city"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="text"
                    value={values.city}
                    variant="outlined"
                  />
                </Grid>
                <Grid
                  item
                  md={6}
                  xs={12}
                >
                  <TextField
                    error={Boolean(touched.unit && errors.unit)}
                    fullWidth
                    helperText={touched.unit && errors.unit}
                    label="Unidade"
                    margin="normal"
                    name="unit"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="text"
                    value={values.unit}
                    variant="outlined"
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
                disabled={isSubmitting}
                type="submit"
              >
                Salvar
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Card>

  );
};

StudentRegisterDetails.propTypes = {
  className: PropTypes.string
};

export default StudentRegisterDetails;
