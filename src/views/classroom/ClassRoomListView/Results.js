import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  makeStyles,
  Checkbox
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {},
  avatar: {
    marginRight: theme.spacing(2)
  },
  toolbarSpacing: {
    paddingTop: theme.spacing(10)
  }
}));

const Results = ({ className, classrooms, ...rest }) => {
  const classes = useStyles();
  const [selectedClassRoomIds, setSelectedClassRoomIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const handleSelectAll = (event) => {
    let newSelectedClassRoomIds;

    if (event.target.checked) {
      newSelectedClassRoomIds = classrooms.map((teacher) => teacher.id);
    } else {
      newSelectedClassRoomIds = [];
    }

    setSelectedClassRoomIds(newSelectedClassRoomIds);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedClassRoomIds.indexOf(id);
    let newSelectedClassRoomIds = [];

    if (selectedIndex === -1) {
      newSelectedClassRoomIds = newSelectedClassRoomIds.concat(selectedClassRoomIds, id);
    } else if (selectedIndex === 0) {
      newSelectedClassRoomIds = newSelectedClassRoomIds.concat(selectedClassRoomIds.slice(1));
    } else if (selectedIndex === selectedClassRoomIds.length - 1) {
      newSelectedClassRoomIds = newSelectedClassRoomIds.concat(selectedClassRoomIds.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedClassRoomIds = newSelectedClassRoomIds.concat(
        selectedClassRoomIds.slice(0, selectedIndex),
        selectedClassRoomIds.slice(selectedIndex + 1)
      );
    }

    setSelectedClassRoomIds(newSelectedClassRoomIds);
  };

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <PerfectScrollbar>
        <Box minWidth={1050}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedClassRoomIds.length === classrooms.length}
                    color="primary"
                    indeterminate={
                      selectedClassRoomIds.length > 0
                      && selectedClassRoomIds.length < classrooms.length
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell>
                  Código
                </TableCell>
                <TableCell>
                  Descrição
                </TableCell>
                <TableCell>
                  Turno
                </TableCell>
                <TableCell>
                  Curso
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {classrooms.slice(0, limit).map((classroom) => (
                <TableRow
                  hover
                  key={classroom.id}
                  selected={selectedClassRoomIds.indexOf(classroom.id) !== -1}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedClassRoomIds.indexOf(classroom.id) !== -1}
                      onChange={(event) => handleSelectOne(event, classroom.id)}
                      value="true"
                    />
                  </TableCell>
                  <TableCell>
                    {classroom.code}
                  </TableCell>
                  <TableCell>
                    {classroom.description}
                  </TableCell>
                  <TableCell>
                    {classroom.shift}
                  </TableCell>
                  <TableCell>
                    {classroom.course}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={classrooms.length}
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
  classrooms: PropTypes.array.isRequired
};

export default Results;
