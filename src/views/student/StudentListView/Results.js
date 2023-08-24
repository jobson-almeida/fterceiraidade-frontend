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
  className, students, search, ...rest
}) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [selectedStudentIds, setSelectedStudentIds] = useState([]);
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
    let newSelectedStudentIds;

    if (event.target.checked) {
      newSelectedStudentIds = students.map((student) => student.id);
    } else {
      newSelectedStudentIds = [];
    }

    setSelectedStudentIds(newSelectedStudentIds);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedStudentIds.indexOf(id);
    let newSelectedStudentIds = [];

    if (selectedIndex === -1) {
      newSelectedStudentIds = newSelectedStudentIds.concat(selectedStudentIds, id);
    } else if (selectedIndex === 0) {
      newSelectedStudentIds = newSelectedStudentIds.concat(selectedStudentIds.slice(1));
    } else if (selectedIndex === selectedStudentIds.length - 1) {
      newSelectedStudentIds = newSelectedStudentIds.concat(selectedStudentIds.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedStudentIds = newSelectedStudentIds.concat(
        selectedStudentIds.slice(0, selectedIndex),
        selectedStudentIds.slice(selectedIndex + 1)
      );
    }

    setSelectedStudentIds(newSelectedStudentIds);
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
        navigate('/app/student-view', { replace: true });
        break;
      case 'edit':
        navigate('/app/student-edit', { replace: true });
        break;
      case 'delete':
        navigate('/app/student-delete', { replace: true });
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
          <TableToolbar className title="Docentes" numSelected={selectedStudentIds.length} />
          <Table>
            <TableHeader
              classes={classes}
              numSelected={selectedStudentIds.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAll}
              onRequestSort={handleRequestSort}
              rowCount={students.length}
              headCells={headCells}
            />
            <TableBody>
              {stableSort(students, getComparator())
                .slice(page * limit, page * limit + limit).filter((student) => !search
                  || student.name.includes(search)).map((student) => (
                    <TableRow
                      hover
                      key={student.id}
                      selected={selectedStudentIds.indexOf(student.id) !== -1}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={selectedStudentIds.indexOf(student.id) !== -1}
                          onChange={(event) => handleSelectOne(event, student.id)}
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
                            src={student.avatarUrl}
                          />
                          <Typography
                            color="textPrimary"
                            variant="body1"
                          >
                            {student.name}
                          </Typography>
                        </Box>
                      </TableCell>
                      <TableCell>
                        {student.email}
                      </TableCell>
                      <TableCell>
                        {`${student.address.street}, ${student.address.city}`}
                      </TableCell>
                      <TableCell>
                        {student.phone}
                      </TableCell>
                      <TableCell>
                        {moment(student.createdAt).format('DD/MM/YYYY')}
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
        count={students.length}
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
  students: PropTypes.array.isRequired,
  search: PropTypes.string
};

export default Results;
