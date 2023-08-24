import { colors } from '@material-ui/core';

export default
{

  datasets: [
    {
      backgroundColor: '#0093ff',
      data: [18, 5, 19, 27, 29, 19, 20, 18, 5, 19, 27, 29, 19, 20, 18, 5, 19,
        27, 29, 19, 20, 18, 5, 19, 27, 29, 19, 20],
      label: 'Total'
    },
    {
      backgroundColor: colors.grey[200],
      data: [11, 20, 12, 29, 30, 25, 13, 11, 20, 12, 29, 30, 25, 13, 11, 20,
        12, 29, 30, 25, 13, 11, 20, 12, 29, 30, 25, 13],
      label: 'Média'
    }
  ],
  labels: ['T1', 'T2', 'T3', 'T4', 'T5', 'T6',
    'T11', 'T12', 'T13', 'T14', 'T15', 'T16',
    'T1', 'T2', 'T3', 'T4', 'T5', 'T6',
    'T11', 'T12', 'T13', 'T14', 'T15', 'T16']
};
