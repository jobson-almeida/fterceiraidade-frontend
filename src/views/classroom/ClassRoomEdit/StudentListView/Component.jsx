import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Box,
  Card,
  Grid,
} from '@material-ui/core';
import TableToolbar from 'src/utils/TableToolbar';
import { useNavigate } from 'react-router-dom';
import {
  DataGrid, GridToolbarContainer, GridFilterToolbarButton
} from '@material-ui/data-grid';
import { makeStyles } from '@material-ui/core/styles';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import BarChartIcon from '@material-ui/icons/BarChart';
import labels from '../../../../utils/labels';
import CustomTooltip from '../../../../utils/CustomTooltip';
import CustomSnackbar from '../../../../components/CustomSnackbar';

const useStyles = makeStyles((theme) => ({
  root: {},
  button: {
    cursor: 'pointer',
  },
  actions: {
    paddingTop: theme.spacing(2)
  },
  '@global': {
    'div.MuiDataGridColumnsPanel-container > :first-of-type': {
      visibility: 'hidden !important',
      position: 'absolute'
    }
  },
  datagrid: {
    '& .MuiDataGrid-columnsContainer': {
      backgroundColor: '#fafafa',
    },
    '& .MuiDataGrid-iconSeparator': {
      display: 'none',
    },
    '& .MuiDataGrid-colCell, .MuiDataGrid-cell': {
      borderRight: `1px solid ${'#f0f0f0'}`,
    },
  }
}));
 
const Component = ({
  className, students, loading, ...rest
}) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [translate] = useState(labels);
  const [page, setPage] = useState(
    localStorage.getItem('pagination_student') ? parseFloat(localStorage.getItem('pagination_student')) : 0
  );
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleOpenSnack = (text) => {
    setMessage(text);
    setOpen(true);
  };
  const handleCloseSnack = (event, reason) => {
    if (reason === 'clickaway') {
      setOpen(false);
      return;
    }
    setOpen(false);
  };

  const handlePageChange = (event) => {
    setPage(event.page);
    localStorage.setItem('pagination_student', event.page);
  };

  const clickActions = (action) => {
    switch (action) {
      case 'chart':
        navigate('/app/student-performance', { replace: false });
        break;
      case 'edit':
        navigate('/app/student-edit', { replace: false });
        break;
      case 'delete':
        // navigate('/app/student-delete', { replace: false });
        handleOpenSnack('registro excluído com sucesso');
        break;
      default:
        break;
    }
  };

  const columns = [
    {
      field: '_',
      headerName: 'Nome',
      width: 260,
      valueGetter: (params) => `${params.row.firstname || ''} ${params.row.lastname || ''}`,
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
      headerAlign: 'center',
      align: 'center'
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 200
    },
    // {
    //   field: 'birth',
    //   headerName: 'Aniversário',
    //   width: 150,
    //   headerAlign: 'center',
    //   align: 'center'
    // },
    {
      field: 'phone',
      headerName: 'Telefone',
      width: 140
    },
    {
      field: 'acoes',
      headerName: 'Ações',
      width: 150,
      sortable: false,
      filterable: false,
      disableColumnSelector: true,
      headerAlign: 'center',
      renderCell: () => (
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          className={classes.actions}
          spacing={1}
        >
          <Grid item>
            <CustomTooltip title="desempenho">
              <BarChartIcon className={classes.button} onClick={() => { clickActions('chart'); }} />
            </CustomTooltip>
          </Grid>
          <Grid item>
            <CustomTooltip title="editar">
              <EditIcon className={classes.button} onClick={() => { clickActions('edit'); }} />
            </CustomTooltip>
          </Grid>
          <Grid item>
            <CustomTooltip title="excluir">
              <DeleteIcon className={classes.button} onClick={() => { clickActions('delete'); }} />
            </CustomTooltip>
          </Grid>
        </Grid>
      ),
    },
  ];

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CustomSnackbar
        message={message}
        openStatus={open}
        handleClose={handleCloseSnack}
        timeClose={6000}
        severity="success"
      />
      {/*
         severity="error"
         severity="warning"
         severity="info"
         severity="success"
      */}
      <Box minWidth="md">
        <TableToolbar className title="Discentes matriculados" />
        <div style={{ display: 'flex', width: '100%' }}>
          <DataGrid
            className={classes.datagrid}
            rows={students}
            columns={columns.map((column) => ({
              ...column,
              disableClickEventBubbling: true,
            }))}
            pageSize={10}
            page={page}
            autoHeight
            checkboxSelection 
            pagination
            localeText={translate}
            loading={loading}
            onPageChange={handlePageChange}
          />

        </div>
      </Box>
    </Card>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  students: PropTypes.array.isRequired,
  loading: PropTypes.bool,
  avatarURL: PropTypes.string
};

export default Component;
