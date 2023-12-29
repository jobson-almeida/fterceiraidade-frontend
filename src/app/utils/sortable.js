import dateReverse from "./dateReverse";

function descendingComparator(a, b, orderBy) {
  if (typeof a[orderBy] === 'string' && new Date(dateReverse(b[orderBy])).getUTCFullYear()) {
    const dateA = new Date(dateReverse(a[orderBy])).getTime();
    const dateB = new Date(dateReverse(b[orderBy])).getTime();

    if (dateB < dateA) {
      return -1;
    }
    if (dateB > dateA) {
      return 1;
    }
  }
  else if (typeof a[orderBy] === 'object' && Object.values(b[orderBy]).length > 0) {
    const key = Object.keys(b[orderBy])[0];

    if (b[orderBy][key] < a[orderBy][key]) {
      return -1;
    }
    if (b[orderBy][key] > a[orderBy][key]) {
      return 1;
    }
  } else {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
  }
  return 0;
}

export function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

export function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}