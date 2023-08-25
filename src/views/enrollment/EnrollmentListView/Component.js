import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Box,
  Card,
  Typography
} from '@material-ui/core';
import TableToolbar from 'src/utils/TableToolbar';
import {
  DataGrid, GridToolbarContainer, GridFilterToolbarButton
} from '@material-ui/data-grid';
import { makeStyles } from '@material-ui/core/styles';
import labels from '../../../utils/labels';

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
    '& .MuiDataGrid-colCellTitleContainer': {
      alignItems: 'center'
    }
  }
}));
 
const Component = ({
  className, enrollments, loading, ...rest
}) => {
  const classes = useStyles();
  const [translate] = useState(labels);
  const [page, setPage] = useState(
    localStorage.getItem('pagination_enrollment') ? parseFloat(localStorage.getItem('pagination_enrollment')) : 0
  );

  const handlePageChange = (event) => {
    setPage(event.page);
    localStorage.setItem('pagination_enrollment', event.page);
  };

  const columns = [
    {
      field: 'course',
      headerName: 'Curso',
      flex: 0.25,
      renderCell: (params) => {
        const { value } = params;
        return (
          <Typography variant="body1" component="p">
            {value}
          </Typography>
        );
      },
      renderHeader: () => {
        return (
          <Typography variant="h4" component="body1">
            Curso
          </Typography>
        );
      },
    },
    {
      field: 'classroom',
      headerName: 'Turma',
      flex: 0.25,
      renderCell: (params) => {
        const { value } = params;
        return (
          <Typography variant="body1" component="p">
            {value}
          </Typography>
        );
      },
      renderHeader: () => {
        return (
          <Typography variant="h4" component="body1">
            Turma
          </Typography>
        );
      },
    },
    {
      field: 'status',
      headerName: 'Status',
      flex: 0.25,
      headerAlign: 'center',
      align: 'center',
      renderCell: (params) => {
        const { value } = params;
        return (
          <Typography variant="body1" component="p">
            {value}
          </Typography>
        );
      },
      renderHeader: () => {
        return (
          <Typography variant="h4" component="body1">
            Status
          </Typography>
        );
      },
    },
    {
      field: 'admission',
      headerName: 'Ingresso',
      flex: 0.25,
      headerAlign: 'center',
      align: 'center',
      renderCell: (params) => {
        const { value } = params;
        return (
          <Typography variant="body1" component="p">
            {value}
          </Typography>
        );
      },
      renderHeader: () => {
        return (
          <Typography variant="h4" component="body1">
            Ingresso
          </Typography>
        );
      },
    },
  ];

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Box minWidth="md">
        <TableToolbar className title="Matrículas" />
        <div style={{ display: 'flex', width: '100%' }}>
          <DataGrid
            className={classes.datagrid}
            columns={columns.map((column) => ({
              ...column,
              disableClickEventBubbling: true,
            }))}
            rows={enrollments}
            pageSize={10}
            rowsPerPageOptions={[10]}
            page={page}
            autoHeight 
            pagination
            localeText={translate}
            loading={loading}
            density="comfortable"
            onPageChange={handlePageChange}
          />

        </div>
      </Box>
    </Card>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  enrollments: PropTypes.array.isRequired,
  loading: PropTypes.bool,
  avatarURL: PropTypes.string
};

export default Component;
