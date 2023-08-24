import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import PerfectScrollbar from 'react-perfect-scrollbar';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';
import {
  Avatar,
  Box,
  Card,
  Table,
  TableBody,
  TableCell,
  TablePagination,
  TableRow,
  Typography,
  makeStyles,
  Checkbox
} from '@material-ui/core';
import TableToolbar from 'src/utils/TableToolbar';
import TableHeader from '../../../utils/TableHeader';

const useStyles = makeStyles((theme) => ({
  root: {},
  avatar: {
    marginRight: theme.spacing(2)
  },
  button: {
    cursor: 'pointer',
    marginLeft: '5px',
    marginRight: '5px'
  }
}));

const Results = ({
  className, teachers, search, ...rest
}) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [selectedTeacherIds, setSelectedTeacherIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('name');
  const [headCells] = useState([
    {
      id: 'name', numeric: false, disablePadding: true, label: 'Nome'
    },
    {
      id: 'email', numeric: false, disablePadding: false, label: 'Email'
    },
    {
      id: 'street', numeric: false, disablePadding: false, label: 'Endereço'
    },
    {
      id: 'phone', numeric: false, disablePadding: false, label: 'Telefone'
    },
    {
      id: 'createdAt', numeric: false, disablePadding: false, label: 'Data registro'
    },
    {
      id: '', numeric: false, disablePadding: false, label: 'Ações'
    },
  ]);

  const handleSelectAll = (event) => {
    let newSelectedTeacherIds;

    if (event.target.checked) {
      newSelectedTeacherIds = teachers.map((teacher) => teacher.id);
    } else {
      newSelectedTeacherIds = [];
    }

    setSelectedTeacherIds(newSelectedTeacherIds);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedTeacherIds.indexOf(id);
    let newSelectedTeacherIds = [];

    if (selectedIndex === -1) {
      newSelectedTeacherIds = newSelectedTeacherIds.concat(selectedTeacherIds, id);
    } else if (selectedIndex === 0) {
      newSelectedTeacherIds = newSelectedTeacherIds.concat(selectedTeacherIds.slice(1));
    } else if (selectedIndex === selectedTeacherIds.length - 1) {
      newSelectedTeacherIds = newSelectedTeacherIds.concat(selectedTeacherIds.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedTeacherIds = newSelectedTeacherIds.concat(
        selectedTeacherIds.slice(0, selectedIndex),
        selectedTeacherIds.slice(selectedIndex + 1)
      );
    }

    setSelectedTeacherIds(newSelectedTeacherIds);
  };

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  function descendingComparator(a, b) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }

  function getComparator() {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }

  const stableSort = (array, comparator) => {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const _order = comparator(a[0], b[0]);
      if (_order !== 0) return _order;
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  };

  // ..........

  const clickActions = (action) => {
    switch (action) {
      case 'view':
        navigate('/app/teacher-view', { replace: true });
        break;
      case 'edit':
        navigate('/app/teacher-edit', { replace: true });
        break;
      case 'delete':
        navigate('/app/teacher-delete', { replace: true });
        break;
      default:
        break;
    }
  };
  // .............

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <PerfectScrollbar>
        <Box minWidth={1050}>
          <TableToolbar className title="Docentes" numSelected={selectedTeacherIds.length} />
          <Table>
            <TableHeader
              classes={classes}
              numSelected={selectedTeacherIds.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAll}
              onRequestSort={handleRequestSort}
              rowCount={teachers.length}
              headCells={headCells}
            />
            <TableBody>
              {stableSort(teachers, getComparator())
                .slice(page * limit, page * limit + limit).filter((teacher) => !search
                  || teacher.name.includes(search)).map((teacher) => (
                    <TableRow
                      hover
                      key={teacher.id}
                      selected={selectedTeacherIds.indexOf(teacher.id) !== -1}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={selectedTeacherIds.indexOf(teacher.id) !== -1}
                          onChange={(event) => handleSelectOne(event, teacher.id)}
                          value="true"
                        />
                      </TableCell>
                      <TableCell>
                        <Box
                          alignItems="center"
                          display="flex"
                        >
                          <Avatar
                            className={classes.avatar}
                            src={teacher.avatarUrl}
                          />
                          <Typography
                            color="textPrimary"
                            variant="body1"
                          >
                            {teacher.name}
                          </Typography>
                        </Box>
                      </TableCell>
                      <TableCell>
                        {teacher.email}
                      </TableCell>
                      <TableCell>
                        {`${teacher.address.street}, ${teacher.address.city}`}
                      </TableCell>
                      <TableCell>
                        {teacher.phone}
                      </TableCell>
                      <TableCell>
                        {moment(teacher.createdAt).format('DD/MM/YYYY')}
                      </TableCell>
                      <TableCell>
                        <VisibilityIcon className={classes.button} onClick={() => clickActions('view')} />
                        <EditIcon className={classes.button} onClick={() => clickActions('edit')} />
                        <DeleteIcon className={classes.button} onClick={() => clickActions('delete')} />
                      </TableCell>
                    </TableRow>
                  ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={teachers.length}
        labelDisplayedRows={({ from, to, count }) => `${from}-${to} de ${count}`}
        labelRowsPerPage="Linhas por página"
        onChangePage={handlePageChange}
        onChangeRowsPerPage={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

Results.propTypes = {
  className: PropTypes.string,
  teachers: PropTypes.array.isRequired,
  search: PropTypes.string
};

export default Results;
