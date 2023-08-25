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
import Avatar from '@material-ui/core/Avatar';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';
import labels from './labels';
import CustomTooltip from '../../../utils/CustomTooltip';

const useStyles = makeStyles((theme) => ({
  root: {},
  avatar: {
    marginRight: theme.spacing(2)
  },
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
 
const Results = ({
  className, teachers, loading, ...rest
}) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [translate] = useState(labels);
  const [page, setPage] = useState(
    localStorage.getItem('pagination_teacher') ? parseFloat(localStorage.getItem('pagination_teacher')) : 0
  );

  const handlePageChange = (event) => {
    setPage(event.page);
    localStorage.setItem('pagination_teacher', event.page);
  };

  const clickActions = (action) => {
    switch (action) {
      case 'view':
        navigate('/app/teacher-view', { replace: false });
        break;
      case 'edit':
        navigate('/app/teacher-edit', { replace: false });
        break;
      case 'delete':
        navigate('/app/teacher-delete', { replace: false });
        break;
      default:
        break;
    }
  };
  //------------

  const columns = [
    {
      field: 'avatarURL',
      headerName: 'Avatar',
      width: 100,
      description: 'Essa coluna não pode ser ordenada',
      sortable: false,
      filterable: false,
      renderCell: ({ avatarURL }) => (
        <Avatar alt="" src={(avatarURL)} />
      ),
    },
    {
      field: 'fullname',
      headerName: 'Nome',
      flex: 1,
      valueGetter: (params) => `${params.row.firstname || ''} ${params.row.lastname || ''}`,
    },
    {
      field: 'cpf',
      headerName: 'CPF',
      width: 150
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 300
    },
    {
      field: 'birth',
      headerName: 'Aniversário',
      width: 150,
      headerAlign: 'center',
      align: 'center'
    },
    {
      field: 'phone',
      headerName: 'Telefone',
      width: 150,
      align: 'center',
      headerAlign: 'center'
    },
    {
      field: 'acoes',
      headerName: 'Ações',
      width: 150,
      description: 'Essa coluna não pode ser ordenada',
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
            <CustomTooltip title="visualizar">
              <VisibilityIcon className={classes.button} onClick={() => { clickActions('view'); }} />
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
      <Box minWidth="md">
        <TableToolbar className title="Docentes" />
        <div style={{ display: 'flex', width: '100%' }}>
          <DataGrid
            className={classes.datagrid}
            rows={teachers}
            columns={columns.map((column) => ({
              ...column,
              disableClickEventBubbling: true,
            }))}
            pageSize={10}
            rowsPerPageOptions={[10]}
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

Results.propTypes = {
  className: PropTypes.string,
  teachers: PropTypes.array.isRequired,
  loading: PropTypes.bool,
  avatarURL: PropTypes.string
};

export default Results;
