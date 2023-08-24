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
  Box,
  Card,
  Table,
  TableBody,
  TableCell,
  TablePagination,
  TableRow,
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
  className, assessments, search, ...rest
}) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [selectedAssessmentIds, setSelectedAssessmentIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('name');
  const [headCells] = useState([
    {
      id: 'description', numeric: false, disablePadding: true, label: 'Descrição'
    },
    {
      id: 'initial_date', numeric: false, disablePadding: false, label: 'Data inicial'
    },
    {
      id: 'end_date', numeric: false, disablePadding: false, label: 'Data final'
    },
    {
      id: '', numeric: false, disablePadding: false, label: 'Ações'
    },
  ]);

  const handleSelectAll = (event) => {
    let newSelectedAssessmentIds;

    if (event.target.checked) {
      newSelectedAssessmentIds = assessments.map((assessment) => assessment.id);
    } else {
      newSelectedAssessmentIds = [];
    }

    setSelectedAssessmentIds(newSelectedAssessmentIds);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedAssessmentIds.indexOf(id);
    let newSelectedAssessmentIds = [];

    if (selectedIndex === -1) {
      newSelectedAssessmentIds = newSelectedAssessmentIds.concat(selectedAssessmentIds, id);
    } else if (selectedIndex === 0) {
      newSelectedAssessmentIds = newSelectedAssessmentIds.concat(selectedAssessmentIds.slice(1));
    } else if (selectedIndex === selectedAssessmentIds.length - 1) {
      newSelectedAssessmentIds = newSelectedAssessmentIds.concat(selectedAssessmentIds.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedAssessmentIds = newSelectedAssessmentIds.concat(
        selectedAssessmentIds.slice(0, selectedIndex),
        selectedAssessmentIds.slice(selectedIndex + 1)
      );
    }

    setSelectedAssessmentIds(newSelectedAssessmentIds);
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

  const clickActions = (action) => {
    switch (action) {
      case 'view':
        navigate('/app/assessment-view', { replace: true });
        break;
      case 'edit':
        navigate('/app/assessment-edit', { replace: true });
        break;
      case 'delete':
        navigate('/app/assessment-delete', { replace: true });
        break;
      default:
        break;
    }
  };

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <PerfectScrollbar>
        <Box minWidth={1050}>
          <TableToolbar className title="Avaliações" numSelected={selectedAssessmentIds.length} />
          <Table>
            <TableHeader
              classes={classes}
              numSelected={selectedAssessmentIds.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAll}
              onRequestSort={handleRequestSort}
              rowCount={assessments.length}
              headCells={headCells}
            />
            <TableBody>
              {stableSort(assessments, getComparator())
                .slice(page * limit, page * limit + limit).filter((assessment) => !search
                  || assessment.description.includes(search)).map((assessment) => (
                    <TableRow
                      hover
                      key={assessment.id}
                      selected={selectedAssessmentIds.indexOf(assessment.id) !== -1}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={selectedAssessmentIds.indexOf(assessment.id) !== -1}
                          onChange={(event) => handleSelectOne(event, assessment.id)}
                          value="true"
                        />
                      </TableCell>
                      <TableCell>
                        {assessment.description}
                      </TableCell>
                      <TableCell>
                        {moment(assessment.initial_date).format('DD/MM/YYYY')}
                      </TableCell>
                      <TableCell>
                        {moment(assessment.end_date).format('DD/MM/YYYY')}
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
        count={assessments.length}
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
  assessments: PropTypes.array.isRequired,
  search: PropTypes.string
};

export default Results;
